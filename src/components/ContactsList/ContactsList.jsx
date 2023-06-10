import React from 'react';
import PropTypes from 'prop-types';
import css from './ContactsList.module.css';

const ContactsList = ({ contacts, onDeleteContact }) => (
  <ul className={css.list}>
    {contacts.map((contact) => (
      <li key={contact.id} className={css.item}>
        <p className={css.name}>{contact.name}</p>
        <p className={css.number}>{contact.number}</p>
        <button className={css.deleteButton} onClick={() => onDeleteContact(contact.id)}>
          Delete
        </button>
      </li>
    ))}
  </ul>
);

ContactsList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};

export default ContactsList;
// import React from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { deleteContact } from 'redux/contactsSlice';

// import css from './ContactsList.module.css';

// const ContactsList = () => {
//   const contacts = useSelector((state) => state.contacts.items);
//   const dispatch = useDispatch();

//   const handleDeleteContact = (id) => {
//     dispatch(deleteContact(id));
//   };

//   return (
//     <ul className={css.list}>
//     {contacts.map((contact) => (
//       <li key={contact.id} className={css.item}>
//         <p className={css.name}>{contact.name}</p>
//         <p className={css.number}>{contact.number}</p>
//         <button className={css.deleteButton} onClick={() => handleDeleteContact(contact.id)}>
//             Delete
//         </button>
//       </li>
//     ))}
//   </ul>
//   );
// };

// export default ContactsList;
