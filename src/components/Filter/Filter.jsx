import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';
import css from './Filter.module.css';

const Filter = ({ value, onChange }) => {
  return (
    <div className={css.inputContainer}>
      <label className={css.label}>
        Search:
        <input
          type="text"
          name="filter"
          id={nanoid()}
          value={value}
          onChange={onChange}
          className={css.input}
          placeholder=" "
        />
      </label>
    </div>
  );
};
export default Filter;

Filter.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
};
