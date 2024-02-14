import React from "react";
import { Title, SubTitle } from "../Components/ReusableComponents";
import {
  Select,
  Input,
  Option,
  Textarea,
  Button,
  Typography,
} from "@material-tailwind/react";
import { useForm, Controller } from "react-hook-form";
import { useState } from "react";
import axios from "axios";

const CreatePage = () => {
  return (
    <div className="mx-5 px-5 py-20 md:px-20">
      <div className="pb-5">
        <Title>Create Reservation for Prayers</Title>
        <SubTitle>
          You can create prayers for you or for your loveones by filling up this
          form.
        </SubTitle>
      </div>
      <FormContent />
    </div>
  );
};

const FormContent = () => {
  const typeOfEvent = ["Birthday", "Death", "Gratitude", "Safety and Health"];
  const timeOfMass = [
    "9:00 am",
    "10:00 am",
    "11:00 am",
    "1:00 pm",
    "2:00 pm",
    "3:00 pm",
  ];
  const [paymentSuccessfull, setPaymentSuccessful] = useState(false);

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      fullname: "",
      email: "",
      date: "",
      typeOfPrayer: "",
      prayersFor: "",
      timeOfMass: "",
      donation: "",
    },
  });

  const handlePayment = () => {
    alert(`Thank you for donating`);
    setPaymentSuccessful(true);
  };

  return (
    <div className="flex justify-center pt-10 ">
      <form
        className="w-full rounded-md border border-light p-5 shadow-2xl shadow-light drop-shadow-xl md:w-[40rem] md:p-10"
        onSubmit={handleSubmit(async (data) => {
          if (paymentSuccessfull) {
            await axios
              .post("http://localhost:3000/add-reservation/", { data: data })
              .then((res) => {
                alert("Submitted");
                console.log(res.data);
                reset();
              })
              .catch((err) => console.log(err));
          } else {
            alert("Please donate first");
          }
        })}
      >
        <Typography variant="h4" className="pb-3 font-ls600 text-light">
          Schedule Form
        </Typography>
        <div className="pb-8">
          <Controller
            name="fullname"
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
              <Input
                label="Your fullname"
                color="blue"
                variant="standard"
                className="text-light"
                error={errors.fullname ? true : false}
                {...field}
              />
            )}
          />
        </div>
        <div className="pb-8">
          <Controller
            name="email"
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
              <Input
                label="Your Email Address"
                color="blue"
                variant="standard"
                className="text-light"
                error={errors.email ? true : false}
                {...field}
              />
            )}
          />
        </div>
        <div className="pb-8">
          <Controller
            name="date"
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
              <Input
                label="Reservation Date"
                color="blue"
                type="date"
                variant="standard"
                className="text-light"
                error={errors.date ? true : false}
                {...field}
              />
            )}
          />
        </div>
        <div className="pb-8">
          <Controller
            name="typeOfPrayer"
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
              <Select
                label="Type of event"
                variant="standard"
                color="blue"
                className="text-light"
                error={errors.typeOfPrayer ? true : false}
                {...field}
              >
                {typeOfEvent.map((opt, index) => (
                  <Option key={index} value={opt}>
                    {opt}
                  </Option>
                ))}
              </Select>
            )}
          />
        </div>
        <div className="pb-8">
          <Controller
            name="timeOfMass"
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
              <Select
                label="Time of Mass"
                variant="standard"
                color="blue"
                className="text-light"
                error={errors.timeOfMass ? true : false}
                {...field}
              >
                {timeOfMass.map((opt, index) => (
                  <Option key={index} value={opt}>
                    {opt}
                  </Option>
                ))}
              </Select>
            )}
          />
        </div>
        <div className="pb-8">
          <Controller
            name="prayersFor"
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
              <Input
                type="text"
                label="For who? (e.g. Juan Dela Cruz & Family)"
                color="blue"
                variant="standard"
                className="text-light"
                {...field}
                error={errors.prayersFor ? true : false}
              />
            )}
          />
        </div>
        <div className="relative flex w-full pb-8">
          <Controller
            name="donation"
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
              <>
                <Input
                  type="text"
                  variant="standard"
                  color="blue"
                  label="Donation (e.g. ₱100.00)"
                  className="pr-20 text-light"
                  containerProps={{
                    className: "min-w-0",
                  }}
                  {...field}
                  error={errors.donation ? true : false}
                />
                <Button
                  size="sm"
                  variant="outlined"
                  className="font-lb600 !absolute right-1 top-1 rounded border border-orange normal-case tracking-wide text-light"
                  onClick={handlePayment}
                >
                  Donate
                </Button>
              </>
            )}
          />
        </div>
        <div className="text-end">
          <Button
            type="submit"
            className="rounded-full bg-orange font-ls700 normal-case tracking-wider text-light"
            size="lg"
          >
            Submit
          </Button>
        </div>
      </form>
    </div>
  );
};

export default CreatePage;
