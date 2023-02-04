import React, { useRef } from "react";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};
const items = {
  hidden: { y: 50, opacity: 0 },
  show: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.7,
    },
  },
};

export default function App() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const form = useRef();
  // console.log(form);

  // log;

  const onSubmit = () => {
    emailjs
      .sendForm(
        "service_y8k0wr5",
        "template_ifb7dr2",
        form.current,
        "user_dwPtSVFpAx0MAXp0JP1Ov"
      )
      .then(
        (result) => {
          console.log(result.text);
          reset({
            fullName: "",
            Message: "",
            Email: "",
            Title: "",
          });
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  // console.log(">>>>", errors);

  return (
    <div className="App__contact flex flex-col items-center justify-center my-16">
      <h1>Get In Touch</h1>
      <div className="form__container">
        <motion.form
          ref={form}
          variants={container}
          initial="hidden"
          whileInView="show"
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col">
          <motion.div variants={items}>
            <h2>Full Name</h2>
            <input
              type="text"
              placeholder="Full Name"
              {...register("fullName", { required: true, maxLength: 80 })}
            />
            {errors.fullName && <p>This field is required.</p>}
          </motion.div>
          <motion.div variants={items}>
            <h2>Email</h2>

            <input
              type="text"
              placeholder="Email"
              {...register("Email", { required: true, pattern: /^\S+@\S+$/i })}
            />
            {errors.Email && <p>This field is required.</p>}
          </motion.div>
          <motion.div variants={items}>
            <h2>Title</h2>

            <input
              type="text"
              placeholder="Title"
              {...register("Title", { required: true })}
            />
            {errors.Title && <p>This field is required.</p>}
          </motion.div>
          <motion.div variants={items}>
            <h2>Message</h2>

            <textarea
              rows="8"
              {...register("Message", { required: true })}
              placeholder="Type You Message!!"
            />
            {errors.Message && <p>This field is required.</p>}
          </motion.div>

          <motion.input variants={items} type="submit" className="submitBtn" />
        </motion.form>
      </div>
    </div>
  );
}
