import React from "react";
import AdminProvider from "./Provider/AdminProvider";
import Breadcrumb from "./Components/Breadcrumb";
import { Card, CardBody, Typography } from "@material-tailwind/react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from "recharts";
import { useState, useEffect } from "react";
import axios from "axios";
const AdminDashboard = () => {
  return (
    <AdminProvider>
      <Breadcrumb title="Dashboard" path="/Dashboard" />
      <section className="mx-10 mt-4 h-screen rounded-xl bg-light px-5 shadow-lg shadow-[#a8a29e]">
        <div className="px-5 py-10">
          <InformationsLists />
        </div>
      </section>
    </AdminProvider>
  );
};
const InformationsLists = () => {
  const [countDonations, setCountDonations] = useState(0);
  const [countReservations, setcountReservations] = useState(0);

  const cardTitles = [
    {
      Reservations: countReservations.totalReservations,
    },
    {
      Donations: `₱${countDonations.countOfDonations}`,
    },
  ];
  const data = [
    {
      name: "Birthday",
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: "Safety&Health",
      uv: 200,
      pv: 9800,
      amt: 2290,
    },
    {
      name: "Gratitude",
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: "Death",
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
  ];

  useEffect(() => {
    const getCountDonations = () => {
      axios
        .get("https://prayers-reservation-server-production.up.railway.app/admin/")
        .then((res) => {
          setCountDonations(res.data[0]);
          console.log(res.data[0]);
        })
        .catch((error) => console.log(error));
    };
    const getCountReservations = () => {
      axios
        .get("https://prayers-reservation-server-production.up.railway.app/admin/")
        .then((res) => {
          setcountReservations(res.data[0]);
          console.log(res.data[0]);
        })
        .catch((error) => console.log(error));
    };
    getCountDonations();
    getCountReservations();
  }, []);
  return (
    <div className="grid grid-cols-1 md:grid-flow-col md:grid-rows-3 gap-5">
      <Card className="md:row-span-3 w-full bg-dark">
        <CardBody>
          <BarChart
            width={650}
            height={400}
            data={data}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name"/>
            <YAxis />
            <Tooltip />
            <Bar dataKey="pv" fill="#FAF8F9" />
            <Bar dataKey="uv" fill="#CC5B0B" />
          </BarChart>
        </CardBody>
      </Card>
      {cardTitles.map((item, index) => {
        const [title, value] = Object.entries(item)[0];
        return (
          <Card className="w-full bg-dark" key={index}>
            <CardBody>
              <Typography variant="h5" className="mb-2 font-ls700 text-light">
                {title}
              </Typography>
              <Typography
                variant="h2"
                className="text-center font-ls900 text-orange"
              >
                {value}
              </Typography>
            </CardBody>
          </Card>
        );
      })}
    </div>
  );
};
export default AdminDashboard;
