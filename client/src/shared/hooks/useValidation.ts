import * as Yup from "yup";

import { loginUser } from "../servieces/loginUser";
import { useAppDispatch } from "../../store/hooks";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";

const useFormikValidation = () => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const formik = useFormik({
        initialValues: {
          email: "hayk.saruxanyan@mail.ru",
          password: "Norakert.1998",
          submit: null,
        },
        validationSchema: Yup.object({
          email: Yup.string()
            .email("Must be a valid email")
            .max(255)
            .required("Email is required"),
          password: Yup.string().max(255).required("Password is required"),
        }),
        onSubmit: async (values, helpers) => {
          try {
            await dispatch(
              loginUser({
                email: values.email,
                password: values.password,
              })
            );
            navigate("/");
          } catch (err: any) {
            helpers.setStatus({ success: false });
            helpers.setErrors({ submit: err.message });
            helpers.setSubmitting(false);
          }
        },
      });
      return formik
}

export default useFormikValidation;