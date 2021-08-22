import React from 'react';
import PropTypes from 'prop-types';
import s from './Contacts.module.css';
import { connect } from 'react-redux';
import handelDelete from '../../redux/contacts/contacts-action';

const Contacts = ({ contacts, deleteFunction }) => {
  console.log(contacts);
  return (
    <div>
      <ul>
        {contacts.map(contact => {
          console.log(contact);
          return (
            <li className={s.List} key={contact.id}>
              {contact.name}: {contact.number}
              <button
                className={s.Button}
                type="button"
                onClick={() => {
                  deleteFunction(contact.id);
                }}
              >
                Delete
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

const mapSateToProps = state => {
  return {
    contacts: state.contacts,
  };
};

const mapDispatchToProps = dispatch => {
  return { deleteFunction: id => dispatch(handelDelete.handelDelete(id)) };
};

export default connect(mapSateToProps, mapDispatchToProps)(Contacts);

Contacts.propTypes = {
  contacts: PropTypes.array.isRequired,
  deleteFunction: PropTypes.func.isRequired,
};