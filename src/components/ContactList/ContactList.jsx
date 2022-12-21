import css from './ContactList.module.css';
import PropTypes from 'prop-types';

const ContactList = ({ deleteContact, contactToRender }) => {
  return (
    <>
      {contactToRender.length ? (
        <div className={css.contactList}>
          <ul className={css.ul}>
            {contactToRender.map(({ name, id, number }) => (
              <li key={id}>
                {name}:{number}
                <button onClick={() => deleteContact(id)}>Delete</button>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <p>No results...</p>
      )}
    </>
  );
};
export default ContactList;

ContactList.propTypes = {
  contactToRender: PropTypes.arrayOf(PropTypes.object),
  deleteContact: PropTypes.func,
};
