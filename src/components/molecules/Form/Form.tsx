import React, { useState } from 'react';
import Button from '../../atoms/Button';
import Input from '../../atoms/Input';

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

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setClientInfo((prevInfo) => ({ ...prevInfo, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

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
                // Form submitted successfully
                onSubmit(updatedClientInfo);
                setClientInfo({
                    name: '',
                    surname: '',
                    age: '',
                    email: '',
                });
            } else {
                // Handle error case
                console.error('Form submission failed');
            }
        } catch (error) {
            console.error('An error occurred during form submission:', error);
        }
        window.location.reload();
    };


    return (
        <form onSubmit={handleSubmit}>
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
                type='text'
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

            <Button type='submit' onClick={() => {}}>Pridėti naują</Button>
        </form>
    );
};

export default Form;

