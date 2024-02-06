import {
  Button,
  Field,
  Form,
  FormRow,
  ErrorMessage,
  FormSuccessMessage,
} from "../../utils/styles/generalStyles";
import { Formik } from "formik";
import * as Yup from "yup";
import Section from "./../../components/Section/Section";
import { useState } from "react";

const Register = () => {
  const [successMessage, setSuccessMessage] = useState(null);

  function fakeRegisterUser() {
    // simulacija uspjesne reg
    return { status: "success" };
  }

  return (
    <Section title="Register">
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
          password: "",
          passwordRepeat: "",
          isAdmin: false,
        }}
        validationSchema={Yup.object({
          firstName: Yup.string().required("First name is required"),
          lastName: Yup.string().required("Last name is required"),
          email: Yup.string()
            .email("Email is invalid")
            .required("Email is required"),
          password: Yup.string()
            .min(8, "Password must be at least 8 characters long!")
            .required("Password is required"),
          passwordRepeat: Yup.string().test(
            "passwords-match",
            "Passwords must match",
            function (value) {
              return this.parent.password === value;
            }
          ),
        })}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          console.log(values);
          const data = {
            first_name: values.firstName,
            last_name: values.lastName,
            email: values.email,
            password: values.password,
            is_admin: false,
          };
          const registrationResult = fakeRegisterUser(data);

          if (registrationResult.status === "success") {
            resetForm();
            setSuccessMessage({
              error: false,
              message: "User is registered successfully",
            });
            setTimeout(() => {
              setSuccessMessage(null);
            }, 2500);
          } else {
            console.log("There was an error");
            setSuccessMessage({
              error: true,
              message: "There was an error",
            });
          }
          setSubmitting(false);
        }}
      >
        {(formik) => (
          <Form>
            {successMessage && (
              <FormRow>
                <FormSuccessMessage isError={successMessage.error}>
                  {successMessage.message}
                </FormSuccessMessage>
              </FormRow>
            )}
            <FormRow>
              <Field
                type="text"
                name="firstName"
                placeholder="First name..."
                disabled={formik.isSubmitting}
              />

              <ErrorMessage component={"div"} name="firstName" />
            </FormRow>
            <FormRow>
              <Field
                type="text"
                name="lastName"
                placeholder="Last name..."
                disabled={formik.isSubmitting}
              />
              <ErrorMessage component={"div"} name="lastName" />
            </FormRow>
            <FormRow>
              <Field
                type="email"
                name="email"
                placeholder="johnsmith@gmail.com"
                disabled={formik.isSubmitting}
              />
              <ErrorMessage component={"div"} name="email" />
            </FormRow>
            <FormRow>
              <Field
                type="password"
                name="password"
                placeholder="Password..."
                disabled={formik.isSubmitting}
              />
              <ErrorMessage component={"div"} name="password" />
            </FormRow>
            <FormRow>
              <Field
                type="password"
                name="passwordRepeat"
                placeholder="Repeat password..."
                disabled={formik.isSubmitting}
              />
              <ErrorMessage component={"div"} name="passwordRepeat" />
            </FormRow>
            <FormRow>
              <Button
                issecondary="true"
                type="submit"
                disabled={formik.isSubmitting}
              >
                {formik.isSubmitting ? "Processing..." : "Register"}
              </Button>
            </FormRow>
          </Form>
        )}
      </Formik>
    </Section>
  );
};

export default Register;
