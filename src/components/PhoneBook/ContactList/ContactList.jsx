import PropTypes from "prop-types";

import s from './ContactList.module.css';

const ContactList = ({ contactsData, deleteContact }) => {
  return (
    <ul className={s.list}>
      {contactsData.map(({ id, name, number }) => (
        <li className={s.item} key={id}>
          {name} {number}
          <button className={s.button} type="button"  onClick={()=>deleteContact(id)}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};
export default ContactList;

ContactList.propTypes = {
  contactsData: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
      })
    ),
    deleteContact: PropTypes.func.isRequired
}