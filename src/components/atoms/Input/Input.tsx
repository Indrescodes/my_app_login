import { useRef, useEffect, ChangeEvent } from 'react';
import { StyledInput } from './styles';

interface IInputProps {
  type: 'text' | 'number' | 'email';
  value: string | number;
  name: string;
  setValue?: (value: string | number) => void;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  onSearch?: () => void;
}

const Input = ({
  type,
  value,
  name,
  setValue,
  onChange,
  placeholder,
  onSearch,
}: IInputProps) => {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const handleOutsideInputClick = (e: MouseEvent) => {
      if (inputRef.current && !inputRef.current.contains(e.target as Node)) {
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

  const handleSearch = () => {
    if (onSearch) {
      onSearch();
    }
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
