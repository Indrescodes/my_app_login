import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { StyledButton } from '../../components/atoms/Button/styles';
import { StyledInput } from '../../components/atoms/Input/styles';
import {
  StyledButtonWrapper,
  StyledDisplayWrapper,
  StyledSpan,
  StyledTableCell,
  StyledTableHeader,
  StyledTableRow,
  StyledTableWrapper,
} from '../../components/molecules/Display/styles';

interface Client {
  name: string;
  surname: string;
  email: string;
  age: number;
}

const VartotojoRedagavimas = () => {
  const { id } = useParams();
  const [client, setClient] = useState<Client | null>(null);
  const [loading, setLoading] = useState(true);
  const [editedClient, setEditedClient] = useState<Client | null>(null);

  useEffect(() => {
    const fetchClient = async () => {
      try {
        const response = await fetch(`http://localhost:5001/clients/${id}`);
        const data = await response.json();
        setClient(data);
        setEditedClient(data); // Initialize the editedClient state with the fetched data
        setLoading(false);
      } catch (error) {
        console.error('Failed to fetch client:', error);
        setLoading(false);
      }
    };

    fetchClient();
  }, [id]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEditedClient({
      ...editedClient!,
      [e.target.name]: e.target.value,
    });
  };

  const handleUpdate = async () => {
    try {
      const response = await fetch(`http://localhost:5001/clients/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(editedClient),
      });
      if (response.ok) {
        // Client successfully updated
        // Redirect or perform additional actions as needed
        window.location.href = '/';
      } else {
        console.error('Failed to update client');
      }
    } catch (error) {
      console.error('Failed to update client:', error);
    }
  };

  if (loading) {
    return <p>Loading client data...</p>;
  }

  if (!client) {
    return <p>Client not found.</p>;
  }

  return (
    <StyledDisplayWrapper>
      <StyledTableWrapper>
        <StyledTableHeader>
          <StyledTableCell>Vardas </StyledTableCell>
          <StyledTableCell>Pavardė</StyledTableCell>
          <StyledTableCell>El. paštas</StyledTableCell>
          <StyledTableCell>Amžius</StyledTableCell>
        </StyledTableHeader>
        <StyledTableRow>
          <StyledSpan>Vardas:</StyledSpan>
          <StyledInput
            className='input'
            type='text'
            name='name'
            value={editedClient!.name}
            onChange={handleInputChange}
          />
          <StyledSpan>Pavardė:</StyledSpan>
          {''}
          <StyledInput
            className='input'
            type='text'
            name='surname'
            value={editedClient!.surname}
            onChange={handleInputChange}
          />
          <StyledSpan>El. paštas:</StyledSpan>
          <StyledInput
            className='input'
            type='email'
            name='email'
            value={editedClient!.email}
            onChange={handleInputChange}
          />
          <StyledSpan>Amžius:</StyledSpan>
          <StyledInput
            className='input'
            type='number'
            name='age'
            value={editedClient!.age}
            onChange={handleInputChange}
          />
          <StyledButtonWrapper>
            <StyledButton
              style={{ background: 'rgb(230,247,239)', color:'rgb(59, 92, 77)' }}
              onClick={handleUpdate}
            >
              Išsaugoti
            </StyledButton>
            <Link to='/'>
              <StyledButton className='delete__button'>Atšaukti</StyledButton>
            </Link>
          </StyledButtonWrapper>
        </StyledTableRow>
      </StyledTableWrapper>
    </StyledDisplayWrapper>
  );
};

export default VartotojoRedagavimas;
