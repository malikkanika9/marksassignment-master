import * as Yup from "yup";

export const Part2Modal = Yup.object({
  category: Yup.object().required("Please select Category"),
  grade: Yup.object().required("Please Select Grade"),
});
