import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';

import { fetchContacts, deleteContact } from 'redux/operations';
import { getContacts, getFilter } from 'redux/selectors';
import s from './ContactList.module.css';

const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filterWord = useSelector(getFilter);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
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
      {filteredContacts.map(({ id, name, phone }) => (
        <li className={s.item} key={id}>
          {name} {phone}
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
