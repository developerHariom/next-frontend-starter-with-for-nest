"use client";
import React from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, SubmitHandler } from "react-hook-form";
import { Input } from "@nextui-org/input";
import { Button } from "@nextui-org/button";
import Image from "next/image";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { useLoginMutation } from "@/graphql/generated/schema";
// import { useAuthStore } from "@/store/auth";
// import { useProductStore } from "@/store/products";

const loginSchema = z.object({
  emailorMobile: z.string().min(1, { message: "Email is required" }).email({
    message: "Must be a valid email",
  }),

  password: z
    .string()
    .min(6, { message: "Password must be at least 6 characters" }),
});

type LoginSchema = z.infer<typeof loginSchema>;
const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginSchema>({
    resolver: zodResolver(loginSchema),
  });
  const [loginUser, { data, error, loading, reset }] = useLoginMutation();
  // const setUser = useAuthStore.getState().setUser;
  // const products = useProductStore.getState().products;
  // console.log(products)
  const router = useRouter();
  const onSubmit: SubmitHandler<LoginSchema> = async (values) => {
    try {
      const { data: response } = await loginUser({
        variables: {
          emailOrMobile: values?.emailorMobile,
          password: values?.password,
        },
      });
      if (response) {
        if (response?.login?.user) {
          // setUser(response?.login?.user);
          reset();
          toast.success("Login Success");
          router.push("/");
        }
      }
    } catch (err) {
      toast.error(error?.message, {
        icon: "☹️",
      });
      reset();
    }
  };

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
              type="email"
              size="sm"
              label={
                errors.emailorMobile ? (
                  <span className="text-red-700">
                    {errors.emailorMobile?.message}
                  </span>
                ) : (
                  "Email"
                )
              }
              placeholder="Enter your email"
              {...register("emailorMobile")}
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

            <Button type="submit" size="sm" color="primary">
              Sign Up
            </Button>
          </form>
        </div>
      </div>
    </>
  );
};

export default LoginForm;
