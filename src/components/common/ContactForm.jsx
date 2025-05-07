import React from "react";
import { useForm } from "react-hook-form";
import Input from "./Input";
import Button from "./Button";

const ContactForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="mt-8 space-y-6">
      <Input label="Full Name" {...register("fullName", { required: true })} />
      {errors.fullName && <span className="text-red-500">Full Name is required</span>}

      <Input label="Email Address" type="email" {...register("email", { required: true })} />
      {errors.email && <span className="text-red-500">Email is required</span>}

      <Input label="Message" type="textarea" {...register("message", { required: true })} />
      {errors.message && <span className="text-red-500">Message is required</span>}

      <Button type="submit">Send Message</Button>
    </form>
  );
};

export default ContactForm;
