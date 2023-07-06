import { useState } from 'react';
import { PropTypes } from 'prop-types';

export function AddCategory({
  // setCategories
  onNewCategory,
}) {
  const [inputValue, setinputValue] = useState('');
  const onInputChange = ({ target }) => {
    setinputValue(target.value);
  };
  const onSubmit = (event) => {
    event.preventDefault();
    if (inputValue.trim().length <= 1) return;
    // setCategories((categories) => [...categories, inputValue]);
    onNewCategory(inputValue.trim());
    setinputValue('');
    // console.log(inputValue);
  };
  return (
    <form onSubmit={onSubmit} aria-label='form'>
      <input
        type='text'
        placeholder='Buscar gifs'
        value={inputValue}
        onChange={(event) => onInputChange(event)}
      />
    </form>
  );
}

AddCategory.propTypes = {
  onNewCategory: PropTypes.func.isRequired,
};
