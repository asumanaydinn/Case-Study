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
          <Card />
          <Card />
          <Card />
          <Card />
        </div>

        <Graph />
      </div>
    </div>
  );
};

export default Overview;
