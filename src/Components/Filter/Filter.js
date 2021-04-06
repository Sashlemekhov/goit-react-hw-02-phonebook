import React from 'react';
import PropTypes from 'prop-types';
import style from './Filter.module.css';

const Filter = ({ inputFilterHandler }) => {
  return (
    <div className={style.container}>
      <label className={style.label}>Find contacts by name
        <input className={style.input} onChange={inputFilterHandler}></input>
      </label>
    </div>
  )
};

Filter.propTypes = {
  inputFilterHandler: PropTypes.func.isRequired,
};

export default Filter;