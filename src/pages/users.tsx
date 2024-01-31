import React from "react";
import Table from "../components/Table";
import NavigationMenu from "@/components/NavigationMenu";
import Header from "@/components/Header";

const Users = () => {
  const columns = [
    {
      accessorKey: "userDetails", // accessor is the "key" in the data
      header: "User Details",
    },
    {
      accessorKey: "customerName",
      header: "Customer Name",
    },
    {
      accessorKey: "registerDate",
      header: "Register Date",
    },
    {
      accessorKey: "segment",
      header: "Segment",
    },
  ];

  const data = [
    {
      userDetails: "John Doe, ID: 123",
      customerName: "Acme Corporation",
      registerDate: "2021-08-01",
      segment: "Retail",
    },
    {
      userDetails: "Jane Smith, ID: 456",
      customerName: "Globex Corporation",
      registerDate: "2021-07-15",
      segment: "Wholesale",
    },
    {
      userDetails: "Jim Brown, ID: 789",
      customerName: "Initech",
      registerDate: "2021-09-20",
      segment: "Retail",
    },
    {
      userDetails: "Clara Oswald, ID: 234",
      customerName: "Vandelay Industries",
      registerDate: "2021-10-11",
      segment: "Manufacturing",
    },
    {
      userDetails: "Bruce Wayne, ID: 567",
      customerName: "Wayne Enterprises",
      registerDate: "2021-05-16",
      segment: "Retail",
    },
    {
      userDetails: "Diana Prince, ID: 890",
      customerName: "Prince Corporation",
      registerDate: "2021-06-25",
      segment: "Wholesale",
    },
    {
      userDetails: "Peter Parker, ID: 321",
      customerName: "Parker Industries",
      registerDate: "2021-07-28",
      segment: "Retail",
    },
    {
      userDetails: "Tony Stark, ID: 654",
      customerName: "Stark Industries",
      registerDate: "2021-08-30",
      segment: "Manufacturing",
    },
    {
      userDetails: "Natasha Romanoff, ID: 987",
      customerName: "Romanoff Ltd.",
      registerDate: "2021-09-12",
      segment: "Wholesale",
    },
    {
      userDetails: "Steve Rogers, ID: 345",
      customerName: "Rogers Corp",
      registerDate: "2021-10-22",
      segment: "Retail",
    },
    {
      userDetails: "Bruce Banner, ID: 678",
      customerName: "BannerTech",
      registerDate: "2021-04-18",
      segment: "Manufacturing",
    },
    {
      userDetails: "Thor Odinson, ID: 901",
      customerName: "Asgard LLC",
      registerDate: "2021-03-30",
      segment: "Wholesale",
    },
    {
      userDetails: "Loki Laufeyson, ID: 123",
      customerName: "Laufeyson Enterprises",
      registerDate: "2021-11-05",
      segment: "Retail",
    },
    {
      userDetails: "Wanda Maximoff, ID: 234",
      customerName: "Maximoff Magic",
      registerDate: "2021-12-15",
      segment: "Manufacturing",
    },
    {
      userDetails: "Stephen Strange, ID: 567",
      customerName: "Strange Solutions",
      registerDate: "2022-01-20",
      segment: "Wholesale",
    },
    {
      userDetails: "Sam Wilson, ID: 789",
      customerName: "Wilson Wings",
      registerDate: "2022-02-28",
      segment: "Retail",
    },
    {
      userDetails: "Bucky Barnes, ID: 345",
      customerName: "Barnes & Noble",
      registerDate: "2022-03-18",
      segment: "Manufacturing",
    },
    {
      userDetails: "Scott Lang, ID: 678",
      customerName: "Lang Industries",
      registerDate: "2022-04-10",
      segment: "Wholesale",
    },
    {
      userDetails: "Hope van Dyne, ID: 901",
      customerName: "Pym Technologies",
      registerDate: "2022-05-09",
      segment: "Retail",
    },
    {
      userDetails: "Carol Danvers, ID: 112",
      customerName: "Danvers Air",
      registerDate: "2022-06-19",
      segment: "Manufacturing",
    },
  ];

  return (
    <div className="flex h-screen w-screen">
      <NavigationMenu />

      <div className="flex h-full w-full flex-col gap-y-8 bg-[#F7F8FC] px-8 py-9">
        <Header />

        <Table columns={columns} data={data} />
      </div>
    </div>
  );
};

export default Users;
