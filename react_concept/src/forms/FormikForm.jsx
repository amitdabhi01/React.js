import React from 'react';
import * as Yup from "yup";
import { Field, Form, Formik } from "formik";
import FormError from './FormError';

const FormikForm = () => {
    const validationSchema = Yup.object({
      name: Yup.string().min(2, "name must be at least 2 character").max(30, "name must be less than 30 character"),
      email: Yup.string().email("invalid email").required("email is required"),
      password: Yup.string().min(6, "password must contain at least 6 character").max(10, "password can't exceed more than 10 character").required("password must be required"),
    })

  return (
    <>
      <Formik
        initialValues={{
          name:"",
          email:"",
          password:"",
        }}
        validationSchema={validationSchema}
        onSubmit={(values, { resetForm}) => {
          console.log("Form Data", values);
          resetForm();
        }}
      >
        <Form>
          <label htmlFor="name">Name</label>
          <br />
          <Field name="name" type="text"/>
          <FormError name="name"/>
          <br />
          <br />

          <label htmlFor="email">Email</label>
          <br />
          <Field name="email" type="email"/>
          <FormError name="email"/>
          <br />
          <br />

          <label htmlFor="password">Password</label>
          <br />
          <Field name="password" type="password"/>
          <FormError name="password"/>
          <br />
          <br />

          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </>
  )
}

export default FormikForm;
