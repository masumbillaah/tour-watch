import axios from "axios";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router";
import useAuth from "../../hooks/useAuth";
import "./Myorder.css";
const MyOrder = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const { user } = useAuth();
  const { id } = useParams();
  const [bookORderService, setBookOrderService] = useState();
  useEffect(() => {
    fetch(`https://damp-reaches-13129.herokuapp.com/services/${id}`)
      .then((res) => res.json())
      .then((data) => setBookOrderService(data));
  }, []);
  const onSubmit = (data) => {
    // console.log(data);
    data.image = bookORderService.img;
    data.name = bookORderService.name;
    data.status = "pending";
    fetch(`https://damp-reaches-13129.herokuapp.com/orders`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data = console.log(data)));
  };

  return (
    <div>
      <form className="shipping-form" onSubmit={handleSubmit(onSubmit)}>
        <input defaultValue={user.displayName} {...register("name")} />

        <input
          defaultValue={user.email}
          {...register("email", { required: true })}
        />
        {errors.email && <span className="error">This field is required</span>}
        <input
          type="date"
          placeholder="Address"
          defaultValue=""
          {...register("address")}
        />

        <input type="submit" />
      </form>
    </div>
  );
};

export default MyOrder;
