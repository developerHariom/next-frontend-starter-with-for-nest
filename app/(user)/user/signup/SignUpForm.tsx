"use client";
import React from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, SubmitHandler } from "react-hook-form";
import { Input } from "@nextui-org/input";
import { Button } from "@nextui-org/button";
import Image from "next/image";
import { toast } from "sonner";
import { useMutation } from "@apollo/client";
import { useRegisterMutation } from "@/graphql/generated/schema";

const registerSchema = z.object({
  name: z.string().min(1, { message: "Name is required" }),
  email: z.string().min(1, { message: "Email is required" }).email({
    message: "Must be a valid email",
  }),
  mobile: z.string().min(10, { message: "Length should be 10 " }),
  password: z
    .string()
    .min(6, { message: "Password must be at least 6 characters" }),
  confirmPassword: z
    .string()
    .min(6, { message: "Password must be at least 6 characters" }),
});
type RegisterSchema = z.infer<typeof registerSchema>;
const SignUpForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterSchema>({
    resolver: zodResolver(registerSchema),
  });
  const [registerAuthor, { data, error, loading, reset }] =
    useRegisterMutation();

  const onSubmit: SubmitHandler<RegisterSchema> = async (values) => {
    try {
      const { data: response } = await registerAuthor({
        variables: {
          name: values?.name,
          mobile: values?.mobile,
          email: values?.email,
          password: values?.password,
          confirmPassword: values?.confirmPassword,
        },
      });
      if (response) {
        toast.success("Logged in");
      }
    } catch (error) {
      console.error("Failed to register:", error);
    }
  };

  if (error) {
    toast.error(error?.message, {
      icon: "☹️",
    });
  }

  return (
    <>
      <div className="flex flex-col items-center justify-center w-full h-screen gap-1 m-auto border-2 border-red-500 ">
        <div className="flex flex-col items-center justify-center w-full gap-1 m-auto">
          <Image
            src={"/img/logo-3.svg"}
            alt="shoplogo"
            height={100}
            width={100}
          />
          <h1 className="pb-5 text-xl text-center ">Register</h1>
          <form
            className="w-[40%] m-auto flex flex-col gap-4"
            onSubmit={handleSubmit(onSubmit)}
          >
            <Input
              type="text"
              size="sm"
              label={
                errors.name ? (
                  <span className="text-red-700">{errors.name?.message}</span>
                ) : (
                  "Name"
                )
              }
              placeholder="Enter your name"
              {...register("name")}
            />

            <Input
              type="email"
              size="sm"
              label={
                errors.email ? (
                  <span className="text-red-700">{errors.email?.message}</span>
                ) : (
                  "Email"
                )
              }
              placeholder="Enter your email"
              {...register("email")}
            />
            <Input
              type="text"
              size="sm"
              label={
                errors.mobile ? (
                  <span className="text-red-700">{errors.mobile?.message}</span>
                ) : (
                  "Mobile"
                )
              }
              placeholder="Enter your mobile"
              {...register("mobile")}
            />
            <Input
              type="password"
              size="sm"
              label={
                errors.password ? (
                  <span className="text-red-700">
                    {errors.password?.message}
                  </span>
                ) : (
                  "Password"
                )
              }
              placeholder="Enter your password"
              {...register("password")}
            />
            <Input
              type="password"
              size="sm"
              label={
                errors.confirmPassword ? (
                  <span className="text-red-700">
                    {errors.confirmPassword?.message}
                  </span>
                ) : (
                  "Confirm Password"
                )
              }
              placeholder="Confirm Password"
              {...register("confirmPassword")}
            />
            <Button type="submit" size="sm" color="primary">
              Sign Up
            </Button>
          </form>
        </div>
      </div>
    </>
  );
};

export default SignUpForm;
