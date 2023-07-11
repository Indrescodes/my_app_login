import { useRef, useEffect, ChangeEvent } from 'react';

interface IInputProps {
  type: 'text' | 'number';
  value: string | number;
  name: string;
  setValue?: (value: string | number) => void;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
}

const Input = ({ type, value, name, setValue, onChange, placeholder }: IInputProps) => {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const handleOutsideInputClick = (e: MouseEvent) => {
      if (inputRef.current && !inputRef.current.contains(e.target as Node)) {
        // Handle outside click
      }
    };

    document.addEventListener('click', handleOutsideInputClick);

    return () => {
      document.removeEventListener('click', handleOutsideInputClick);
    };
  }, []);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    if (setValue) {
      setValue(inputValue);
    }
    onChange(e);
  };

  return (
      <div>
        <input
            ref={inputRef}
            type={type}
            value={value}
            name={name}
            onChange={handleChange}
            placeholder={placeholder}
        />
      </div>
  );
};

export default Input;
