
import * as Yup from "yup";

export const createProductSchema =  Yup.object({
  name: Yup.string().required("Required"),
  description: Yup.string().required("Required"),
  category: Yup.string().required("Category"),
  originalPrice: Yup.number().required("Category"),
  discountPrice: Yup.number().required("Category"),
  stock: Yup.number().required("Category"),
  images: Yup.array().of(
    Yup.object().shape({
      public_id: Yup.string(),
      imgSrc: Yup.string(),
    })
  ),
})