"use client";
import { useCreateProductMutation } from "@/graphql/generated/schema";
import { ImageData, CreateProductType } from "@/types/product";
import handleImageUploadFunction from "@/utils/handleImageUploadCloudinary";
import { createProductSchema } from "@/validation/product";
import { Button } from "@nextui-org/button";
import { Input } from "@nextui-org/react";
import { useFormik } from "formik";
import Image from "next/image";
import React, { useState } from "react";
import { toast } from "sonner";

const initialValues = {
  name: "",
  description: "",
  category: "",
  originalPrice: "",
  discountPrice: "",
  stock: "",
  images: [],
};
const ProductCreateForm = () => {
  const [images, setImages] = useState<ImageData[]>([]);
  const [createProduct, { loading }] = useCreateProductMutation();
  const handleImageUpload = async (imageFile: any) => {
    const response = await handleImageUploadFunction(imageFile);
    if (response) {
      const { public_id, secure_url } = response;
      const newImages = [
        ...formik.values.images,
        { public_id: public_id, imgSrc: secure_url },
      ];
      formik.setFieldValue("images", newImages), setImages(newImages);
    }
  };
  const formik = useFormik<CreateProductType>({
    initialValues,
    validationSchema: createProductSchema,
    onSubmit: async (values, { resetForm }) => {
      const imagesData = values?.images.map((item) => ({
        public_id: item.public_id,
        imgSrc: item.imgSrc,
      }));
      console.log(values);
      await createProduct({
        variables: {
          data: {
            name: values.name,
            category: values.category,
            description: values.description,
            discountPrice: Number(values.discountPrice),
            images: imagesData,
            originalPrice: Number(values.originalPrice),
            stock: Number(values.stock),
          },
        },
        onCompleted: () => {
          toast.success("Product Created Successfully");
          resetForm();
        },
        onError: (error) => {
          toast.error(`Failed to create product ${error?.message} `);
        },
      });
    },
  });

  return (
    <>
      <form onSubmit={formik.handleSubmit} className="flex flex-col gap-5">
        <h1 className="text-3xl font-bold text-center">Create Product</h1>
        <Input
          size="sm"
          type="text"
          fullWidth
          name="name"
          label="name"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.name}
          isInvalid={formik.errors.name ? true : false}
          errorMessage={formik.errors.name}
          radius="none"
        />

        <Input
          size="sm"
          type="text"
          label="description"
          fullWidth
          name="description"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.description}
          isInvalid={formik.errors.description ? true : false}
          errorMessage={formik.errors.description}
          radius="none"
        />

        <Input
          size="sm"
          type="text"
          fullWidth
          name="category"
          label="category"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.category}
          radius="none"
          isInvalid={formik.errors.category ? true : false}
          errorMessage={formik.errors.category}
        />

        <Input
          size="sm"
          type="number"
          fullWidth
          label="originalPrice"
          name="originalPrice"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.originalPrice}
          radius="none"
          isInvalid={formik.errors.originalPrice ? true : false}
          errorMessage={formik.errors.originalPrice}
        />

        <Input
          size="sm"
          type="number"
          fullWidth
          name="discountPrice"
          label="discountPrice"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.discountPrice}
          radius="none"
          isInvalid={formik.errors.discountPrice ? true : false}
          errorMessage={formik.errors.discountPrice}
        />

        <Input
          size="sm"
          type="number"
          fullWidth
          name="stock"
          label="stock"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.stock}
          radius="none"
          isInvalid={formik.errors.stock ? true : false}
          errorMessage={formik.errors.stock}
        />

        <label className="flex justify-center px-3 py-6 text-sm transition bg-white border border-gray-300 border-dashed rounded-md appearance-none cursor-pointer hover:border-gray-400 focus:border-solid focus:border-blue-600 focus:outline-none focus:ring-1 focus:ring-blue-600 disabled:cursor-not-allowed disabled:bg-gray-200 disabled:opacity-75">
          <span className="flex items-center space-x-2">
            <svg className="w-6 h-6 stroke-gray-400" viewBox="0 0 256 256">
              <path
                d="M96,208H72A56,56,0,0,1,72,96a57.5,57.5,0,0,1,13.9,1.7"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="24"
              ></path>
              <path
                d="M80,128a80,80,0,1,1,144,48"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="24"
              ></path>
              <polyline
                points="118.1 161.9 152 128 185.9 161.9"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="24"
              ></polyline>
              <line
                x1="152"
                y1="208"
                x2="152"
                y2="128"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="24"
              ></line>
            </svg>
            <span className="text-xs font-medium text-gray-600">
              Drop files to Attach, or
              <span className="text-blue-600 underline">browse</span>
            </span>
          </span>
          <input
            id="photo-dropbox"
            type="file"
            multiple
            className="sr-only"
            onChange={(e) => {
              handleImageUpload(e.target.files && e.target.files[0]);
            }}
          />
        </label>
        <Button type="submit" disabled={loading} color="danger" radius="none">
          Submit
        </Button>
      </form>

      {images?.map((item, i) => {
        return (
          <div className="flex flex-row w-full gap-2 mt-10" key={i}>
            <div>
              <Image src={item?.imgSrc} width={100} height={100} alt="img" />
            </div>
          </div>
        );
      })}
    </>
  );
};

export default ProductCreateForm;
