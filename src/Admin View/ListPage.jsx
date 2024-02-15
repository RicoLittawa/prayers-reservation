import React from "react";
import AdminProvider from "./Provider/AdminProvider";
import Breadcrumb from "./Components/Breadcrumb";
import {
  Select,
  Option,
  Button,
  Typography,
  Input,
} from "@material-tailwind/react";
import { ArrowPathIcon } from "@heroicons/react/24/solid";
import { useState, useEffect, useRef } from "react";
import axios from "axios";
import { useReactToPrint } from "react-to-print";
import { PrinterIcon } from "@heroicons/react/24/outline";

const ScriptPage = () => {
  const [currentDate, setCurrentDate] = useState(getFormattedDate());
  const [data, setData] = useState([]);
  const componentRef = useRef();
  const handleReset = () => {
    window.location.reload();
  };
  const timeOfMass = [
    "9:00 am",
    "10:00 am",
    "11:00 am",
    "1:00 pm",
    "2:00 pm",
    "3:00 pm",
  ];
  const [time, setTime] = useState(timeOfMass[0]);

  function getFormattedDate() {
    const date = new Date();
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const day = date.getDate().toString().padStart(2, "0");
    return `${year}-${month}-${day}`;
  }
  const handleDateChange = (e) => {
    setCurrentDate(e.target.value);
  };
  const handleTimeOfMass = (e) => {
    setTime(e);
  };
  useEffect(() => {
    const getData = () => {
      axios
        .get(`http://localhost:3000/admin/list/${currentDate}/${time}`)
        .then((res) => {
          setData(res.data);
        })
        .catch((error) => console.log(error));
    };
    getData();
  }, [currentDate, time]);
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });
  return (
    <AdminProvider>
      <Breadcrumb title="List" path="/list" />
      <section className="mx-10 mt-4 h-auto rounded-xl bg-light px-5 shadow-lg shadow-[#a8a29e]">
        <div className="px-5 py-10">
          <div className="flex w-full justify-between">
            <div className="flex gap-x-4">
              <Select
                label="Time of Mass"
                value={time}
                onChange={handleTimeOfMass}
              >
                {timeOfMass.map((opt, index) => (
                  <Option value={opt} key={index}>
                    {opt}
                  </Option>
                ))}
              </Select>
              <div>
                <ArrowPathIcon
                  className="h-8 w-8 cursor-pointer text-dark"
                  onClick={handleReset}
                />
              </div>
              <Button className="bg-orange" onClick={handlePrint}>
                <PrinterIcon className="h-5 w-5" />
              </Button>
            </div>
            <div>
              <Input
                type="date"
                variant="outlined"
                label="Date Now"
                value={currentDate}
                onChange={handleDateChange}
              />
            </div>
          </div>
          <div className="page-break pt-10" ref={componentRef}>
            <ScriptContent data={data} currentDate={currentDate} time={time} />
          </div>
        </div>
      </section>
    </AdminProvider>
  );
};

const ScriptContent = ({ data, currentDate, time }) => {
  const FilterData = ({ prayerType }) => {
    return (
      <>
        {data
          .filter((item) => item.typeOfPrayer === prayerType) // Filter data where typeOfPrayer is "Gratitude"
          .map(
            (
              { id, prayersFor }, // Mapping over the filtered data
            ) => (
              <ul className="list-disc px-5 text-dark" key={id}>
                <li>
                  <Typography variant="h6" className="font-lb400 capitalize">
                    {prayersFor}
                  </Typography>
                </li>
              </ul>
            ),
          )}
      </>
    );
  };
  return (
    <div>
      <div className="pb-5">
        <Typography variant="h3" className="text-center font-lb700 text-dark">
          {currentDate} / {time} Pamisa
        </Typography>
      </div>
      <div className="py-3">
        <Typography variant="h5" className="font-lb700 text-orange">
          Alay Pasasalamat nina/ng mga:
        </Typography>
        <FilterData prayerType="Gratitude" />
      </div>
      <div className="py-3">
        <Typography variant="h5" className="font-lb700 text-orange">
          Pasasalamat para sa kaarawan ni/nina:
        </Typography>
        <FilterData prayerType="Birthday" />
      </div>
      <div className="py-3">
        <Typography variant="h5" className="font-lb700 text-orange">
          Pasasalamat para kaligtasan at magandang kalusugan ni/nina:
        </Typography>
        <FilterData prayerType="Safety and Health" />
      </div>
      <div className="py-3">
        <Typography variant="h5" className="font-lb700 text-orange">
          Para sa ikaluluwalhati ng mga kaluluwa nina:
        </Typography>
        <FilterData prayerType="Death" />
      </div>
      <div className="py-3">
        <Typography variant="h6" className="font-lb700 text-orange">
          (Optional message)
        </Typography>
      </div>
    </div>
  );
};
export default ScriptPage;
