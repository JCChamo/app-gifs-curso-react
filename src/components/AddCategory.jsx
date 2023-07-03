import { useState} from 'react';

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
    <form onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="Buscar gifs"
        value={inputValue}
        onChange={(event) => onInputChange(event)}
      />
    </form>
  );
}
