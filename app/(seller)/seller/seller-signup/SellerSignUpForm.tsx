"use client";
import { useSellerRegistrationMutation } from "@/graphql/generated/schema";
import {
  SellerRegisterSchema,
  sellerRegisterSchema,
} from "@/validation/seller";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@nextui-org/button";
import { Input } from "@nextui-org/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { toast } from "sonner";
const SellerSignupForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SellerRegisterSchema>({
    resolver: zodResolver(sellerRegisterSchema),
  });
  const [sellerRegister, { error, reset }] = useSellerRegistrationMutation();
  const router = useRouter();
  const onSubmit: SubmitHandler<SellerRegisterSchema> = async (values) => {
    try {
      const { data: response } = await sellerRegister({
        variables: {
          firstName: values?.firstName,
          lastName: values.lastName,
          address: values.address,
          contact: values.contact,
          country: values.country,
          shopAddress: values.shopAddress,
          shopName: values.shopName,
          email: values?.email,
          password: values?.password,
          confirmPassword: values?.confirmPassword,
        },
      });
      if (response) {
        toast.success("Logged in");
        router.replace("/");
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
    <div className="w-full h-full md:w-[60%] m-auto flex flex-col items-center justify-center ">
      <section className="w-full h-full p-10 bg-white">
        <h1 className="p-3 text-3xl text-center">Seller Application</h1>
        {/* SELLER INFORMATION */}

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-col w-full gap-5 ">
            <h1 className="text-xl font-semibold">Seller Information</h1>
            <p>
              Fill the form below or write us .We will help you as soon as
              possible.
            </p>

            <div className="flex flex-col gap-5 md:flex-row">
              <Input
                type="text"
                variant="bordered"
                label={
                  errors.firstName ? (
                    <span className="text-red-700">
                      {errors.firstName?.message}
                    </span>
                  ) : (
                    "Name"
                  )
                }
                {...register("firstName")}
                size="sm"
              />

              <Input
                type="text"
                variant="bordered"
                label={
                  errors.lastName ? (
                    <span className="text-red-700">
                      {errors.lastName?.message}
                    </span>
                  ) : (
                    "Last Name"
                  )
                }
                {...register("lastName")}
                size="sm"
              />
            </div>

            <div className="flex flex-col gap-5 md:flex-row">
              <Input
                type="email"
                variant="bordered"
                label={
                  errors.firstName ? (
                    <span className="text-red-700">
                      {errors.email?.message}
                    </span>
                  ) : (
                    "Email Address"
                  )
                }
                {...register("email")}
                size="sm"
              />

              <Input
                type="number"
                variant="bordered"
                label={
                  errors.firstName ? (
                    <span className="text-red-700">
                      {errors.contact?.message}
                    </span>
                  ) : (
                    "Contact "
                  )
                }
                {...register("contact")}
                size="sm"
              />
            </div>
            <div className="flex flex-col gap-5 md:flex-row">
              <Input
                type="text"
                variant="bordered"
                label={
                  errors.firstName ? (
                    <span className="text-red-700">
                      {errors.country?.message}
                    </span>
                  ) : (
                    "Country"
                  )
                }
                {...register("country")}
                size="sm"
              />

              <Input
                type="text"
                variant="bordered"
                label={
                  errors.firstName ? (
                    <span className="text-red-700">
                      {errors.address?.message}
                    </span>
                  ) : (
                    "Address "
                  )
                }
                {...register("address")}
                size="sm"
              />
            </div>
          </div>

          <div className="flex flex-col w-full gap-5 mt-10">
            <h1 className="text-xl font-semibold">Seller Information</h1>
            <p>
              Fill the form below or write us .We will help you as soon as
              possible.
            </p>
            <div className="flex flex-col gap-5 md:flex-row">
              <Input
                type="text"
                variant="bordered"
                label={
                  errors.firstName ? (
                    <span className="text-red-700">
                      {errors.shopName?.message}
                    </span>
                  ) : (
                    "Shop Name "
                  )
                }
                {...register("shopName")}
                size="sm"
              />
            </div>

            <div className="flex flex-col gap-5 md:flex-row">
              <Input
                type="text"
                variant="bordered"
                label={
                  errors.firstName ? (
                    <span className="text-red-700">
                      {errors.shopAddress?.message}
                    </span>
                  ) : (
                    "Shop Address"
                  )
                }
                {...register("shopAddress")}
                size="sm"
              />
            </div>
            <div className="flex flex-col gap-5 md:flex-row">
              <Input
                type="password"
                variant="bordered"
                label={
                  errors.firstName ? (
                    <span className="text-red-700">
                      {errors.password?.message}
                    </span>
                  ) : (
                    "Password"
                  )
                }
                {...register("password")}
                size="sm"
              />

              <Input
                type="password"
                variant="bordered"
                label={
                  errors.firstName ? (
                    <span className="text-red-700">
                      {errors.confirmPassword?.message}
                    </span>
                  ) : (
                    "Confirm Password"
                  )
                }
                {...register("confirmPassword")}
                size="sm"
              />
            </div>
          </div>

          <div className="mt-5">
            <Button
              className="text-white bg-black"
              radius="none"
              size="lg"
              type="submit"
            >
              Create Seller Account
            </Button>
          </div>
        </form>
        <Link
          className="flex gap-2 mt-5 text-gray-500"
          href={"/seller/seller-login"}
        >
          Already have an Account ?<p className="text-black">Log In</p>
        </Link>
      </section>
    </div>
  );
};

export default SellerSignupForm;
