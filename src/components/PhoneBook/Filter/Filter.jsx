import { useSelector, useDispatch } from 'react-redux';

import s from './Filter.module.css';
import { getFilter } from 'redux/selectors';
import { setFilter } from 'redux/contactsSlice';

const Filter = () => {
  const filterWord = useSelector(getFilter);
  const dispatch = useDispatch();

  const handleChange = e => {
    const { value } = e.target;
    dispatch(setFilter(value));

    setFilter(value);
  };

  return (
    <label>
      <span className={s.name}>Filter</span>
      <input
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        value={filterWord}
        onChange={handleChange}
      />
    </label>
  );
};

export default Filter;
