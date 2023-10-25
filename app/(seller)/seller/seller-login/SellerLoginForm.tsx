"use client";
import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, SubmitHandler } from "react-hook-form";
import { Input } from "@nextui-org/input";
import { Button } from "@nextui-org/button";
import Image from "next/image";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { useSellerLoginMutation } from "@/graphql/generated/schema";
import { SellerLoginSchema, sellerLoginSchema } from "@/validation/seller";
import { useDispatch } from "react-redux";
// import { setAuth } from "@/app/store/store";
// import { setAuth } from "@/redux/slices/authSlice";
// import { useAuthStore } from "@/store/auth";

const SellerLoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SellerLoginSchema>({
    resolver: zodResolver(sellerLoginSchema),
  });
  const [sellerLogin, { error, reset }] = useSellerLoginMutation();

  const router = useRouter();
  // const dispatch = useDispatch();
  // const setUser = useAuthStore.getState().setUser;
  const onSubmit: SubmitHandler<SellerLoginSchema> = async (values) => {
    try {
      const { data: response } = await sellerLogin({
        variables: {
          email: values?.email,
          password: values?.password,
        },
      });
      if (response?.sellerLogin?.seller) {
        // dispatch(setAuth({
        //   user:response?.sellerLogin?.seller
        // }));
        // dispatch(
        //   setAuth({
        //     user: response?.sellerLogin?.seller,
        //   })
        // );

        toast.success("Logged In Success");
        router.replace("/seller/dashboard");
        reset();
      }
    } catch (error) {
      console.error("Failed to register:", error);
      reset();
    }
  };

  if (error) {
    toast.error(error?.message, {
      icon: "☹️",
    });
  }

  return (
    <>
      <h1 className="font-bold text-center text-black">Seller Login</h1>
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

export default SellerLoginForm;
