import { Formik } from "formik";
import { useContext, useState } from "react";
import * as Yup from "yup";
import Section from "../../components/Section/Section";
import {
  Button,
  ErrorMessage,
  Field,
  Form,
  FormRow,
  FormSuccessMessage,
} from "../../utils/styles/generalStyles";
import { AuthContext } from "./../../context/AuthContext";

const SignIn = () => {
  const [successMessage, setSuccessMessage] = useState(null);
  const { setIsLoggedIn, setIsAdmin } = useContext(AuthContext);

  return (
    <Section title="Sign in">
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        validationSchema={Yup.object({
          email: Yup.string()
            .email("Email is invalid")
            .required("Email is required"),
          password: Yup.string()
            .min(8, "Password must be at least 8 characters long!")
            .required("Password is required"),
        })}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          try {
            const adminUser = {
              email: "admin@gmail.com",
              password: "admin1234",
            };
            const normalUser = {
              email: "user@gmail.com",
              password: "user1234",
            };
            if (
              values.email === adminUser.email &&
              values.password === adminUser.password
            ) {
              setIsAdmin(true);
              setIsLoggedIn(true);
              setSuccessMessage({
                error: false,
                message: "Admin is logged in successfully",
              });
            } else if (
              values.email === normalUser.email &&
              values.password === normalUser.password
            ) {
              setIsAdmin(false);
              setIsLoggedIn(true);
              setSuccessMessage({
                error: false,
                message: "User is logged in successfully",
              });
            } else {
              setSuccessMessage({
                error: true,
                message: "Invalid email or password",
              });
            }

            resetForm();

            setTimeout(() => {
              setSuccessMessage(null);
            }, 2000);
          } catch (err) {
            setSuccessMessage({
              error: true,
              message: "User is not logged in successfully ",
            });
          } finally {
            // Set submitting to false
            setSubmitting(false);
          }
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
                type="email"
                name="email"
                placeholder="Your email..."
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
              <Button
                issecondary="true"
                type="submit"
                disabled={formik.isSubmitting}
              >
                {formik.isSubmitting ? "Processing..." : "Sign in"}
              </Button>
            </FormRow>
          </Form>
        )}
      </Formik>
    </Section>
  );
};

export default SignIn;
