import { useDispatch } from "react-redux";
import { FaUser, FaPhoneAlt } from "react-icons/fa";
import { deleteContact } from "../../redux/contactsSlice";
import s from "./Contact.module.css";

const Contact = ({ id, name, number }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteContact(id));
  };

  return (
    <div className={s.wrapper}>
      <div className={s.info}>
        <span>
          <FaUser className={s.icon} />
          {name}
        </span>
        <span>
          <FaPhoneAlt className={s.icon} />
          {number}
        </span>
      </div>
      <button className={s.button} onClick={handleDelete} type="button">
        Delete
      </button>
    </div>
  );
};

export default Contact;
