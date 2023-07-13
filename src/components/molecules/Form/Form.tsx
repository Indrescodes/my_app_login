import React, { useState, useEffect } from 'react';
import Button from '../../atoms/Button';
import Input from '../../atoms/Input';
import {
  StyledForm,
  StyledFormContainer,
  StyledSuccessMessage,
} from './styles';

interface IFormProps {
  onSubmit: (clientInfo: ClientInfo) => void;
}

export interface ClientInfo {
  _id?: string;
  name: string;
  surname: string;
  email: string;
  age: number | string;
}

const Form: React.FC<IFormProps> = ({ onSubmit }) => {
  const [clientInfo, setClientInfo] = useState<ClientInfo>({
    name: '',
    surname: '',
    email: '',
    age: '',
  });
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [formError, setFormError] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setClientInfo((prevInfo) => ({ ...prevInfo, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (
      clientInfo.name.trim() === '' ||
      clientInfo.surname.trim() === '' ||
      clientInfo.email.trim() === '' ||
      clientInfo.age.toString().trim() === ''
    ) {
      setFormError(true);
      return;
    }

    const updatedClientInfo = {
      name: clientInfo.name,
      surname: clientInfo.surname,
      email: clientInfo.email,
      age: clientInfo.age,
    };

    try {
      const response = await fetch('http://localhost:5001/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedClientInfo),
      });

      if (response.ok) {
        onSubmit(updatedClientInfo);
        setClientInfo({
          name: '',
          surname: '',
          age: '',
          email: '',
        });

        setShowSuccessMessage(true);
        setFormError(false);

        setTimeout(() => {
          setShowSuccessMessage(false);
          window.location.href = '/';
        }, 2000);
      } else {
        console.error('Form submission failed');
      }
    } catch (error) {
      console.error('An error occurred during form submission:', error);
    }
  };

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    if (formError) {
      timeout = setTimeout(() => {
        setFormError(false);
      }, 2000);
    }

    return () => {
      if (timeout) {
        clearTimeout(timeout);
      }
    };
  }, [formError]);

  const handleCloseForm = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      setClientInfo({
        name: '',
        surname: '',
        age: '',
        email: '',
      });
      setShowSuccessMessage(false);
      setFormError(false);
    }
  };

  return (
    <>
      <div>
        <StyledFormContainer onClick={handleCloseForm}>
          {showSuccessMessage && (
            <StyledSuccessMessage>
              Vartotojas pridėtas sėkmingai.
            </StyledSuccessMessage>
          )}

          {formError && (
            <StyledSuccessMessage>
              Visi laukai turi būti užpildyti.
            </StyledSuccessMessage>
          )}

          <StyledForm onSubmit={handleSubmit}>
            <label htmlFor='name'>Vardas:</label>
            <Input
              type='text'
              name='name'
              value={clientInfo.name}
              onChange={handleChange}
            />

            <label htmlFor='surname'>Pavardė:</label>
            <Input
              type='text'
              name='surname'
              value={clientInfo.surname}
              onChange={handleChange}
            />

            <label htmlFor='email'>El. paštas:</label>
            <Input
              type='email'
              name='email'
              value={clientInfo.email}
              onChange={handleChange}
            />

            <label htmlFor='age'>Amžius:</label>
            <Input
              type='number'
              name='age'
              value={clientInfo.age}
              onChange={handleChange}
            />

            <Button
              className='headers__button'
              type='submit'
              onClick={() => {}}
            >
              Pridėti naują
            </Button>
          </StyledForm>
        </StyledFormContainer>
      </div>
    </>
  );
};

export default Form;
