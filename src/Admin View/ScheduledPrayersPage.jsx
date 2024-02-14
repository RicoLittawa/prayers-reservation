import React from "react";
import {
  Card,
  Typography,
  Button,
  Select,
  Option,
} from "@material-tailwind/react";
import AdminProvider from "./Provider/AdminProvider";
import Breadcrumb from "./Components/Breadcrumb";
import axios from "axios";
import { useState, useEffect, useRef } from "react";
import Pagination from "./Components/Pagination";
import { useReactToPrint } from "react-to-print";
import { PrinterIcon } from "@heroicons/react/24/solid";
const ScheduledPrayersPage = () => {
  return (
    <AdminProvider>
      <Breadcrumb title="Scheduled Prayers" path="/scheduled-prayers" />
      <section className="mx-10 mt-4 h-auto rounded-xl bg-light px-5 shadow-lg shadow-[#a8a29e]">
        <TableContent />
      </section>
    </AdminProvider>
  );
};
const TableContent = () => {
  const [data, setData] = useState([]);
  const pages = ["All", "5", "10", "20"];
  const [pageSize, setPageSize] = useState(pages[1]);
  const componentRef = useRef();
  useEffect(() => {
    const getListData = () => {
      axios
        .get("http://localhost:3000/reservation-list/")
        .then((res) => {
          setData(res.data);
        })
        .catch((error) => console.log(error));
    };
    getListData();
  }, []);

  /**Pagination */
  const handlePageSizeChange = (e) => {
    setPageSize(e);
  };
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(
    pageSize !== "All" && data.length / parseInt(pageSize),
  );
  const startIndex =
    pageSize !== "All" && (currentPage - 1) * parseInt(pageSize);
  const endIndex = pageSize !== "All" && startIndex + parseInt(pageSize);
  const currentPageData = data.slice(startIndex, endIndex);
  /**Pagination */

  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });
  return (
    <div className="px-5 py-10">
      <div className="flex justify-between">
        <Typography variant="h4" className="font-ls700 text-dark">
          Reservations
        </Typography>
        <div className="flex gap-x-4 pb-5 text-end">
          <Select
            label="Select an option"
            onChange={handlePageSizeChange}
            value={pageSize}
          >
            {pages.map((page, index) => (
              <Option key={index} value={page}>
                {page}
              </Option>
            ))}
          </Select>
          <Button className="bg-orange" onClick={handlePrint}>
            <PrinterIcon className="h-5 w-5" />
          </Button>
        </div>
      </div>

      <Card className="h-full w-full overflow-scroll">
        <TableContentValues
          tableValue={pageSize !== "All" ? currentPageData : data}
          componentRef={componentRef}
        />
        <Pagination
          totalPages={totalPages}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      </Card>
    </div>
  );
};

const TableContentValues = ({ tableValue, componentRef }) => {
  const TABLE_HEAD = [
    "Fullname",
    "Email",
    "Type of Prayer",
    "Reservation Date",
    "Donation",
    "Action",
  ];
  const formatDate = (date) => {
    const originalDate = new Date(date);

    const formattedDate = new Intl.DateTimeFormat("en-US", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    }).format(originalDate);

    return formattedDate;
  };
  const handleDelete = async (id) => {
    await axios
      .delete(`http://localhost:3000/delete-row/${id}/`)
      .then((res) => {
        console.log(res.data);
        window.location.reload();
      })
      .catch((error) => console.log(error));
  };
  return (
    <>
      <table
        className="w-full min-w-max table-auto text-left"
        ref={componentRef}
      >
        <thead>
          <tr>
            {TABLE_HEAD.map((head) => (
              <th
                key={head}
                className="border-b border-blue-gray-100 bg-dark p-4"
              >
                <Typography
                  variant="small"
                  className="font-ls600 leading-none text-light"
                >
                  {head}
                </Typography>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {tableValue.map(
            (
              { id, fullname, email, typeOfPrayer, reservationDate, donation },
              index,
            ) => {
              const isLast = index === tableValue.length - 1;
              const classes = isLast
                ? "p-4"
                : "p-4 border-b border-blue-gray-50";

              return (
                <tr key={id}>
                  <td className={classes}>
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {fullname}
                    </Typography>
                  </td>
                  <td className={classes}>
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {email}
                    </Typography>
                  </td>
                  <td className={classes}>
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {typeOfPrayer}
                    </Typography>
                  </td>
                  <td className={classes}>
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {formatDate(reservationDate)}
                    </Typography>
                  </td>
                  <td className={classes}>
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      ₱{donation}
                    </Typography>
                  </td>
                  <td className={`flex gap-x-4 ${classes}`}>
                    <Typography
                      as="a"
                      href="#"
                      variant="small"
                      onClick={() => handleDelete(id)}
                      className="font-medium text-orange"
                    >
                      Delete
                    </Typography>
                  </td>
                </tr>
              );
            },
          )}
        </tbody>
      </table>
    </>
  );
};
export default ScheduledPrayersPage;
