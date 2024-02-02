"use client";

import { useState } from "react";
import toast from 'react-hot-toast';

export default function Contact() {
  const obj = {
    email: "",
  };
  const [data, setData] = useState({...obj});
 

  const handleChange = (key, value) => {
    setData({
      ...data,
      [key]: value,
    });
  };





  const handleSubmit = async (e) => {
     e.preventDefault();
  
     if(data.email.length >= 5) {
      toast.success("Thanks for subscribing");
      const options = {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(data),
      };
  
      let response = await fetch("/api/subscribers", options);
      let resData = await response.json();
        setData({...obj});

    }
    else {
      toast.error('input field required!');
     }
     }
 

     



    


  return (
    <section className="w-full py-20">
      <main className="w-full md:w-[80%] mx-auto px-5 md:px-0">
        <h5 className="uppercase text-center text-[#20B15A] pb-5 text-xl font-semibold">
          Subscribe
        </h5>
        <h1 className="capitalize text-2xl mb-3 text-center">
          subscribe to get the latest news about us
        </h1>
        <p className="capitalize pb-10 text-gray-500 text-center">
          please drop your email below to get daily update what we do
        </p>
        <form onSubmit={handleSubmit} className=" text-center  mx-auto">
          <input
            type="email"
            value={data.email}
            onChange={(e) => {
              handleChange("email", e.target.value);
            }}
            className="p-4 w-full md:w-1/3 border-2 border-gray-500 focus:outline-none rounded-xl"
            placeholder="Enter Your Email"
            required
          />
          <button
            type="submit"
            className="bg-[#F55F1D] -ml-28 text-center px-3 py-3 z-10 rounded-xl  text-white"
          >
            Subscribe
          </button>
        </form>
      </main>
    </section>
  );
}
