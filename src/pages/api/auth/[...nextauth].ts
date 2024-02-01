import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const users: Record<
  string,
  { id: number; name: string; email: string; password: string }
> = {
  User1: {
    id: 1,
    name: "User1",
    email: "user1@example.com",
    password: "password123",
  },
};

export default NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        if (!credentials) return null;

        const user = users[credentials.username];

        if (user && user.password === credentials.password) {
          return { id: user.id.toString(), name: user.name, email: user.email };
        } else {
          return null;
        }
      },
    }),
  ],
  pages: {
    signIn: "/",
  },
});
