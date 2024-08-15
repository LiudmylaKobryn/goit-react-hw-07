import { useSelector, useDispatch } from "react-redux";
import { selectFilteredContacts } from "../../redux/selectors";
import { deleteContact } from "../../redux/contactsOps";
import Contact from "../Contact/Contact";
import s from "./ContactList.module.css";

const ContactList = () => {
  const contacts = useSelector(selectFilteredContacts);
  const dispatch = useDispatch();

  return (
    <div className={s.wrapper}>
      {contacts.map((contact) => (
        <Contact
          key={contact.id}
          name={contact.name}
          number={contact.number}
          deleteContact={() => dispatch(deleteContact(contact.id))}
        />
      ))}
    </div>
  );
};

export default ContactList;
