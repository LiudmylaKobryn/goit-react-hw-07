import { useDispatch } from "react-redux";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { addContact } from "../../redux/contactsOps";
import s from "./ContactForm.module.css";

const ContactForm = () => {
  const dispatch = useDispatch();

  const initialValues = {
    name: "",
    number: "",
  };

  const validationSchema = Yup.object({
    name: Yup.string()
      .required("Required")
      .min(3, "Minimum 3 characters")
      .max(50, "Maximum 50 characters"),
    number: Yup.string()
      .required("Required")
      .min(3, "Minimum 3 characters")
      .max(50, "Maximum 50 characters"),
  });

  const handleSubmit = (values, { resetForm }) => {
    dispatch(addContact(values));
    resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Form className={s.form}>
        <label className={s.label}>
          Name
          <Field className={s.input} name="name" />
          <ErrorMessage name="name" component="span" className={s.error} />
        </label>
        <label className={s.label}>
          Number
          <Field className={s.input} name="number" />
          <ErrorMessage name="number" component="span" className={s.error} />
        </label>
        <button type="submit">Add contact</button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
