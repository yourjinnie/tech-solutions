"use client";

import React, { useState } from "react";
import { Typography, Card, CardBody, Avatar } from "@material-tailwind/react";
import { UserIcon } from "@heroicons/react/24/solid";
import TestimonialCard from "../components/testimonial-card";

const TESTIMONIALS = [
  {
    feedback:
      "Yourjinnie Tech Solutions has been instrumental in transforming Tajmahal Private Holidays. With their expertise in Google Ads and A marketing campaigns, we've seen a significant increase in bookings. Their team's creativity is unmatched. Thanks to Yourjinnie Tech Solutions, we're thriving in the digital space.",
    client: "Santosh Chaubey",
    title: "Owner @ Tajmahal Private Holidays",
    img: "/image/avatar.png",
  },
  {
    feedback:
      "Yourjinnie Tech Solutions transformed our operations with an efficient ERP system. From managing employees to stocks and payments, their solution has streamlined our entire process. Highly recommend for any business seeking effective enterprise- level management",
    client: "Vinod Sharma",
    title: "Owner @ Mangal Murti Pvt Limited",
    img: "/image/avatar.png",
  },
  {
    feedback:
      "They not only met but exceeded our expectations. Their innovative approach and technical proficiency have been instrumental in our success.",
    client: "Marcell Glock",
    title: "CFO @ dfgfdgfdfdg..",
    img: "/image/avatar.png",
  },
];

export function Testimonials() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [Notify, setNotify] = useState("");
  const [Loading, setLoading] = useState(false);

  async function sendMsg() {
    try {
      setLoading(true);
      // e.preventDefault();
      const fetch_api = await fetch("/api/save", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: name,
          email: email,
          message: message,
        }),
      });

      const data = await fetch_api.json();
      if (data.success) {
        setEmail("");
        setNotify(data.msg);
        setName("");
        setMessage("");
      } else {
        setNotify(data.msg);
        console.log("s");
      }
    } catch (error) {
      console.log("s");
    }
  }

  return (
    <>
      <section className="px-10 !py-20">
        <div className="container mx-auto">
          <div className="mb-20 flex w-full flex-col items-center">
            <div className="mb-10 flex h-12 w-12 items-center justify-center rounded-lg bg-gray-900 text-white ">
              <UserIcon className="h-6 w-6" />
            </div>
            <Typography variant="h2" color="blue-gray" className="mb-2">
              What Clients Say
            </Typography>
            <Typography
              variant="lead"
              className="mb-10 max-w-3xl text-center !text-gray-600"
            >
              Explore the testimonials from our esteemed clients sharing their
              experiences with our services. We take pride in consistently
              delivering outstanding results and building enduring partnerships.
            </Typography>
          </div>
          <div className="grid grid-cols-1 gap-x-8 gap-y-12 md:grid-cols-3 lg:px-20">
            {TESTIMONIALS.map((props, key) => (
              <TestimonialCard key={key} {...props} />
            ))}
          </div>
        </div>
      </section>

      <div
        id="contact"
        className="bg-white shadow p-2 py-8"
        x-data="{ images: [] }"
      >
        <Typography variant="h2" color="blue-gray" className="mb-2 text-center">
          Contact Us !
        </Typography>

        <div className="editor mx-auto w-10/12 flex flex-col text-gray-800 border border-gray-300 p-4 shadow-lg max-w-2xl rounded-lg">
        {Notify ? (
          <div
            className="flex items-center bg-blue-500 text-white text-sm font-bold px-4 py-3 rounded-lg"
            role="alert"
          >
            <svg
              className="fill-current w-4 h-4 mr-2"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M12.432 0c1.34 0 2.01.912 2.01 1.957 0 1.305-1.164 2.512-2.679 2.512-1.269 0-2.009-.75-1.974-1.99C9.789 1.436 10.67 0 12.432 0zM8.309 20c-1.058 0-1.833-.652-1.093-3.524l1.214-5.092c.211-.814.246-1.141 0-1.141-.317 0-1.689.562-2.502 1.117l-.528-.88c2.572-2.186 5.531-3.467 6.801-3.467 1.057 0 1.233 1.273.705 3.23l-1.391 5.352c-.246.945-.141 1.271.106 1.271.317 0 1.357-.392 2.379-1.207l.6.814C12.098 19.02 9.365 20 8.309 20z" />
            </svg>
            <p>{Notify}</p>
          </div>
        ) : (
          ""
        )}
          <label htmlFor="name" className="mb-2 text-sm font-semibold mt-3">
            Your Name:
          </label>
          <input
            id="name"
            className="title bg-gray-100 border border-gray-300 p-2 mb-4 outline-none rounded-lg"
            spellCheck="false"
            placeholder="Your Name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <label htmlFor="email" className="mb-2 text-sm font-semibold">
            Your Email:
          </label>
          <input
            id="email"
            className="title bg-gray-100 border border-gray-300 p-2 mb-4 outline-none rounded-lg"
            spellCheck="false"
            placeholder="Your Email"
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <label htmlFor="message" className="mb-2 text-sm font-semibold">
            Your Message:
          </label>
          <textarea
            id="message"
            className="description bg-gray-100 sec p-3 h-32 border border-gray-300 outline-none rounded-lg"
            spellCheck="false"
            placeholder="Your Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>

          <div className="buttons flex justify-start">
            <button
              onClick={sendMsg}
              className="btn border border-indigo-500 p-1 px-4 font-semibold cursor-pointer text-gray-200 ml-2 bg-indigo-500 mt-4 rounded-lg"
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
export default Testimonials;
