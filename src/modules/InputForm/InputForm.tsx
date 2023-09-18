import './InputForm.css';

import { Button, Input } from 'components';
import { useAppDispatch } from 'hooks';
import { ChangeEvent, FC, FormEvent, useState } from 'react';
import { searchCountry, setMixedValue, setNumericValue } from 'store/words';

export const InputForm: FC = () => {
  const [value, setValue] = useState('');
  const dispatch = useAppDispatch();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    const letterValuePattern = /^[\p{L}\p{P}\s]+$/u;
    const numericValuePattern = /^[0-9\s]+$/;

    if (value.trim()) {
      if (letterValuePattern.test(value)) {
        dispatch(searchCountry(value));
      } else if (numericValuePattern.test(value)) {
        dispatch(setNumericValue(value));
      } else {
        dispatch(setMixedValue(value));
      }
    }

    setValue('');
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return (
    <form className="input-form" onSubmit={handleSubmit}>
      <Input
        name="input"
        placeholder="Введите слово"
        value={value}
        onChange={handleInputChange}
      />
      <Button>Ok</Button>
    </form>
  );
};
