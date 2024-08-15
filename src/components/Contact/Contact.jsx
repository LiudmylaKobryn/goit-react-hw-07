import { FaUser, FaPhoneAlt } from "react-icons/fa";
import s from "./Contact.module.css";

const Contact = ({ name, number, deleteContact }) => {
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
      <button className={s.button} onClick={deleteContact} type="button">
        Delete
      </button>
    </div>
  );
};

export default Contact;
