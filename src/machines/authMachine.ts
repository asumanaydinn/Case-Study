import { actions, createMachine } from "xstate";

type Context = {
  currentPath: string;
  interceptorId: null | number;
};

type Events =
  | { type: "NAVIGATE"; currentPath: string }
  | { type: "LOGGED_IN"; access_token: string }
  | { type: "LOGOUT" }
  | { type: "UNAUTHENTICATED" }
  | { type: "ACCESS_TOKEN_OBTAINED"; access_token: string }
  | { type: "INVALID_REFRESH_TOKEN" };

export const authMachine = createMachine({
  id: "auth",
  initial: "fetchingAccessToken",
  predictableActionArguments: true,
  schema: {
    context: {} as Context,
    events: {} as Events,
  },
  context: {
    currentPath: "",
    interceptorId: null as null | number,
  },
  on: {
    NAVIGATE: { actions: ["setCurrentPath"] },
  },
  states: {
    unauthenticated: {
      entry: [
        actions.choose([
          {
            cond: "inAuthenticationRequiredRoute",
            actions: ["redirectToLogin"],
          },
        ]),
      ],
      always: {
        target: "fetchingAccessToken",
        cond: "inAuthenticationRequiredRoute",
      },
      on: {
        LOGGED_IN: {
          target: "authenticated",
          actions: ["setAccessTokenFromLogin"],
        },
      },
    },
    fetchingAccessToken: {
      invoke: {
        id: "fetchAccessToken",
        src: "fetchAccessToken",
        onDone: {
          target: "authenticated",
          actions: ["setAccessTokenFromRefresh"],
        },
        onError: [
          {
            target: "unauthenticated",
            cond: "isInvalidRefreshTokenError",
          },
          {
            target: "error",
            actions: [(_, event) => console.log(event)],
          },
        ],
      },
      on: {
        ACCESS_TOKEN_OBTAINED: "authenticated",
        INVALID_REFRESH_TOKEN: "unauthenticated",
      },
    },
    authenticated: {
      entry: [
        "addInterceptor",
        actions.choose([
          {
            cond: "notInAuthenticationRequiredRoute",
            actions: ["redirectToHome"],
          },
        ]),
      ],
      on: {
        LOGOUT: "unauthenticated",
        UNAUTHENTICATED: "fetchingAccessToken",
      },
      exit: ["removeInterceptor"],
    },
    error: {},
  },
});
