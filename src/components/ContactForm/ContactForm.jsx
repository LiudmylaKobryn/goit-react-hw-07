import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contactsSlice";
import s from "./ContactForm.module.css";

const ContactForm = () => {
  const dispatch = useDispatch();

  const initialValues = {
    name: "",
    number: "",
  };

  const handleSubmit = (data, actions) => {
    dispatch(addContact(data));
    actions.resetForm();
  };

  const userSchema = Yup.object({
    name: Yup.string("This is required field")
      .required()
      .min(3, "Minimum 3 symbols")
      .max(50, "Maximum 50 symbols"),
    number: Yup.string("This is required field")
      .required()
      .min(3, "Minimum 3 symbols")
      .max(50, "Maximum 50 symbols"),
  });

  return (
    <div>
      <Formik
        validationSchema={userSchema}
        initialValues={initialValues}
        onSubmit={handleSubmit}
      >
        <Form className={s.form}>
          <label className={s.label}>
            <span>Name</span>
            <Field className={s.input} name="name" />
            <ErrorMessage className={s.error} name="name" component="span" />
          </label>
          <label className={s.label}>
            <span>Number</span>
            <Field className={s.input} name="number" />
            <ErrorMessage name="number" component="span" className={s.error} />
          </label>
          <button type="submit">Add contact</button>
        </Form>
      </Formik>
    </div>
  );
};

export default ContactForm;
