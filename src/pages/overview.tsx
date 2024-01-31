import Card from "@/components/Card";
import Graph from "@/components/Graph";
import Header from "@/components/Header";
import NavigationMenu from "@/components/NavigationMenu";

const Overview = () => {
  return (
    <div className="flex h-screen w-screen">
      {NavigationMenu()}

      <div className="flex h-full w-full flex-col gap-y-8 bg-[#F7F8FC] px-8 py-9">
        <Header />

        <div className="flex w-full items-center justify-between">
          <Card title="Active Users" info="14.592" />
          <Card title="Sessions" info="16.921" />
          <Card title="Returned Users" info="4.562" />
          <Card title="Registered Users" info="649" />
        </div>

        <Graph />
      </div>
    </div>
  );
};

export default Overview;
