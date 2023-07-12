import { useRef, useEffect, ChangeEvent } from 'react';
import { StyledInput } from './styles';

interface IInputProps {
  type: 'text' | 'number' | 'email';
  value: string | number;
  name: string;
  setValue?: (value: string | number) => void;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
}

const Input = ({
  type,
  value,
  name,
  setValue,
  onChange,
  placeholder,
}: IInputProps) => {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const handleOutsideInputClick = (e: MouseEvent) => {
      if (inputRef.current && !inputRef.current.contains(e.target as Node)) {
        // Handle outside click, if needed
      }
    };

    document.addEventListener('mousedown', handleOutsideInputClick);

    return () => {
      document.removeEventListener('mousedown', handleOutsideInputClick);
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
      <StyledInput
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
