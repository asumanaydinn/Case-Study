import Trend from "./Trend";

const Graph = () => {
  const renderAdditionalInfo = (title: string, info: string) => {
    return (
      <div className="flex h-full w-full flex-col items-center justify-center gap-y-2">
        <div className="text-base font-semibold leading-snug tracking-tight text-gray-400">
          {title}
        </div>
        <div className="text-2xl font-bold tracking-tight text-gray-800">
          {info}
        </div>
      </div>
    );
  };

  return (
    <div className="flex h-[546px] w-full justify-between rounded-lg border border-zinc-200 bg-white">
      <div className="flex w-full flex-col justify-between gap-y-14 border-r border-r-zinc-200 p-8">
        <div className="flex w-full items-end justify-between">
          <div className="flex flex-col">
            <div className="text-lg font-bold tracking-wide text-gray-800">
              Today’s trends
            </div>
            <div className="h-4 text-xs font-normal leading-none tracking-tight text-gray-400">
              as of 25 May 2019, 09:41 PM
            </div>
          </div>

          <div className="flex items-center justify-center gap-x-8">
            <div className="flex items-center justify-center gap-x-2">
              <svg
                width="18"
                height="2"
                viewBox="0 0 18 2"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 1H17"
                  stroke="#3751FF"
                  stroke-width="2"
                  stroke-linecap="round"
                />
              </svg>
              <div className="text-xs font-semibold tracking-tight text-gray-400">
                Today
              </div>
            </div>
            <div className="flex items-center justify-center gap-x-2">
              <svg
                width="18"
                height="2"
                viewBox="0 0 18 2"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 1H17"
                  stroke="#DFE0EB"
                  stroke-width="2"
                  stroke-linecap="round"
                />
              </svg>
              <div className="text-xs font-semibold tracking-tight text-gray-400">
                Yesterday
              </div>
            </div>
          </div>
        </div>
        <Trend />
      </div>

      <div className="flex h-full w-80 flex-col items-stretch justify-between divide-y">
        {renderAdditionalInfo("Active Sessions", "449")}
        {renderAdditionalInfo("Received", "426")}
        {renderAdditionalInfo("Average Session Time", "33m")}
        {renderAdditionalInfo("Bounce Rate", "47%")}
        {renderAdditionalInfo("Events per User", "36.22")}
      </div>
    </div>
  );
};

export default Graph;
