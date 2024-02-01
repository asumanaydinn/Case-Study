import React, { useCallback, useEffect, useState } from "react";
import Table from "../components/Table";
import NavigationMenu from "@/components/NavigationMenu";
import Header from "@/components/Header";
import { generateData } from "@/lib/generateData";
import { CellContext, ColumnDef } from "@tanstack/react-table";
import { toTitleCase } from "@/helper/helper";
import { format } from "date-fns";

type User = {
  user_image: string;
  userDetails: {
    email: string;
    username: string;
  };
  customerName: string;
  registerDate: string;
  segment: string;
};

const Users = () => {
  const renderImage = useCallback(
    ({ row: tableRow }: CellContext<User, string>) => {
      return (
        <div className="h-11 flex items-center gap-x-2">
          <img
            className="w-11 bg-stone-300 rounded-full overflow-hidden"
            src={tableRow.original.user_image}
          ></img>
          <div className="text-gray-800 text-sm font-semibold font-['Mulish'] leading-tight tracking-tight">
            {toTitleCase(tableRow.original.userDetails.username)}
          </div>
        </div>
      );
    },
    []
  );
  const renderSegment = useCallback(
    ({ row: tableRow }: CellContext<User, string>) => {
      return (
        <div className="w-20 h-6 bg-emerald-400 rounded-full flex items-center justify-center text-white">
          {toTitleCase(tableRow.original.segment)}
        </div>
      );
    },
    []
  );

  const renderDateCell = useCallback(
    ({ getValue }: CellContext<User, unknown>) => {
      if (!getValue()) {
        return <div>-</div>;
      }

      const date = new Date(getValue() as string);

      return (
        <div className="leading-none">
          <p>{format(date, "MMM dd, yyyy")}</p>
        </div>
      );
    },
    []
  );

  const columns: ColumnDef<User, any>[] = [
    {
      accessorKey: "userDetails", // accessor is the "key" in the data
      header: "User Details",
      cell: renderImage,
    },
    {
      accessorKey: "customerName",
      header: "Customer Name",
    },
    {
      accessorKey: "registerDate",
      header: "Register Date",
      cell: renderDateCell,
    },
    {
      accessorKey: "segment",
      header: "Segment",
      cell: renderSegment,
    },
  ];

  const [data, setData] = useState<User[]>([]);

  useEffect(() => {
    const generatedData = generateData();
    setData(generatedData);
  }, []);

  return (
    <div className="flex h-screen w-screen">
      <NavigationMenu />

      <div className="flex h-full w-full flex-col gap-y-8 bg-[#F7F8FC] px-8 py-9">
        <Header />

        <div className="flex w-full border rounded-lg border-zinc-200 bg-white overflow-hidden flex-col gap-y-3">
          <Table title="All Users" columns={columns} data={data} />
        </div>
      </div>
    </div>
  );
};

export default Users;
