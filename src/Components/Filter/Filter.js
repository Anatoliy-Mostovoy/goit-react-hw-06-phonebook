import React from 'react';
import PropTypes from 'prop-types';
import s from './Filter.module.css';
import { connect } from 'react-redux';
import contactsAction from '../../redux/contacts/contacts-action';

const Filter = ({ value, onChange }) => {
  return (
    <label className={s.Label}>
      Фильтр по имени:
      <input
        className={s.Input}
        type="text"
        value={value}
        onChange={onChange}
      />
    </label>
  );
};

const mapSateToProps = state => {
  return {
    value: state.filter,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onChange: event =>
      dispatch(contactsAction.changeFilterValue(event.target.value)),
  };
};

export default connect(mapSateToProps, mapDispatchToProps)(Filter);

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
