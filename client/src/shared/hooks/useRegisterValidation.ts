import * as Yup from "yup";

import { registrationUser } from "../servieces/registration.thunk";
import { useAppDispatch } from "../../store/hooks";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";

const useRegisterValidation = () => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const formik = useFormik({
        initialValues: {
          email: "",
          password: "",
          name: '',
          submit: null,
        },
        validationSchema: Yup.object({
          email: Yup.string()
            .email("Must be a valid email")
            .max(255)
            .required("Email is required"),
          password: Yup.string().max(255).required("Password is required"),
          name:Yup.string().matches(/^[a-zA-Z]*$/, 'Only letters are allowed').required('Name is required'),
        }),
        onSubmit: async (values, helpers) => {
          try {
            await dispatch(
              registrationUser({
                email: values.email,
                password: values.password,
                name:values.name,
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

export default useRegisterValidation;