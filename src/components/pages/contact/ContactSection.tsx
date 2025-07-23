"use clint";

import React from "react";
import scss from "./ContactSection.module.scss";
import { SubmitHandler, useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";

interface ISendMessage {
  full_name: string;
  email: string;
  message: string;
}
const TOKEN = process.env.NEXT_PUBLIC_TELEGRAM_TOKEN;
const CHAT_ID = process.env.NEXT_PUBLIC_TELEGRAM_CHAT_ID;

export default function ContactSection() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { isSubmitting },
  } = useForm<ISendMessage>({
    mode: "onChange",
  });

  const messageModel = (data: ISendMessage) => {
    let messageTG = `Full name: <b>${data.full_name}</b>\n`;
    messageTG += `Email: <b>${data.email}</b>\n`;
    messageTG += `Message: <b>${data.message}</b>`;
    return messageTG;
  };

  const onSubmit: SubmitHandler<ISendMessage> = async (data) => {
    await axios.post(`https://api.telegram.org/bot${TOKEN}/sendMessage`, {
      chat_id: CHAT_ID,
      parse_mode: "html",
      text: messageModel(data),
    });

    toast.success("Your message has been sent successfully!");
    reset();
  };

  return (
    <section id="contacts" className={scss.ContactSection}>
      <ToastContainer />
      <div className="container">
        <div className={scss.content}>
          <div className={scss.whats_next}>
            <span>04.</span>
            <h4>What’s Next?</h4>
          </div>
          <h1>Get In Touch</h1>
          <p>
            Although I’m not currently looking for any new opportunities, my
            inbox is always open. Whether you have a question or just want to
            say hi, I’ll try my best to get back to you!
          </p>
          <form onSubmit={handleSubmit(onSubmit)}>
            <span>Full name</span>
            <input
              type="text"
              placeholder="Enter your full name..."
              {...register("full_name", {
                required: true,
              })}
            />

            <span>Email address</span>
            <input
              type="email"
              placeholder="Enter your email address..."
              {...register("email", {
                required: true,
              })}
            />

            <span>Message</span>
            <textarea
              cols={20}
              rows={6}
              placeholder="Message to Sh.N..."
              {...register("message", {
                required: true,
              })}
            ></textarea>
            {isSubmitting ? (
              <button disabled type="button">
                Send...
              </button>
            ) : (
              <button type="submit">Submit</button>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
