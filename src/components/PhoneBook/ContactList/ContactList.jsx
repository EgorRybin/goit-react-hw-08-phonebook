import { useSelector, useDispatch } from 'react-redux';


import { getContacts, getFilter } from 'components/redux/selectors';
import { deleteContact } from 'components/redux/contactsSlice';
import s from './ContactList.module.css';

const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filterWord = useSelector(getFilter);
  const dispatch = useDispatch();

  const deleteCont = id => {
    dispatch(deleteContact(id));
  };

  const filteredContacts = filterWord
    ? contacts.filter(el =>
        el.name.toLowerCase().includes(filterWord.toLowerCase())
      )
    : contacts;

  return (
    <ul className={s.list}>
      {filteredContacts.map(({ id, name, number }) => (
        <li className={s.item} key={id}>
          {name} {number}
          <button
            className={s.button}
            type="button"
            onClick={() => deleteCont(id)}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};
export default ContactList;
