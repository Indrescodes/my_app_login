import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { StyledButton } from '../../components/atoms/Button/styles';
import { StyledSuccessMessage } from '../../components/molecules/Form/styles';
import {
  StyledButtonWrapper,
  StyledDisplayWrapper,
  StyledSpan,
  StyledTableCell,
  StyledTableHeader,
  StyledTableRow,
  StyledTableWrapper,
} from '../../components/molecules/Display/styles';
import { StyledQuestion } from './styles';

interface Client {
  name: string;
  surname: string;
  email: string;
  age: number;
}

const VartotojoIštrinimas = () => {
  const { id } = useParams();
  const [client, setClient] = useState<Client | null>(null);
  const [loading, setLoading] = useState(true);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false); // Added state for success message

  useEffect(() => {
    const fetchClient = async () => {
      try {
        const response = await fetch(`http://localhost:5001/clients/${id}`);
        const data = await response.json();
        setClient(data);
        setLoading(false);
      } catch (error) {
        console.error('Failed to fetch client:', error);
        setLoading(false);
      }
    };

    fetchClient();
  }, [id]);

  const handleDelete = async () => {
    try {
      const response = await fetch(`http://localhost:5001/clients/${id}`, {
        method: 'DELETE',
      });
      if (response.ok) {
        // Client successfully deleted
        setShowSuccessMessage(true); // Show success message
        setTimeout(() => {
          setShowSuccessMessage(false); // Hide success message after 3 seconds
          window.location.href = '/'; // Redirect to homepage
        }, 1000);
      } else {
        console.error('Failed to delete client');
      }
    } catch (error) {
      console.error('Failed to delete client:', error);
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
        {showSuccessMessage && (
          <StyledSuccessMessage>
            Vartotojas sėkmingai ištrintas.
          </StyledSuccessMessage>
        )}{' '}
        {/* Show success message */}
        <StyledTableHeader>
          <StyledTableCell>Vardas</StyledTableCell>
          <StyledTableCell>Pavardė</StyledTableCell>
          <StyledTableCell>El. paštas</StyledTableCell>
          <StyledTableCell>Amžius</StyledTableCell>
        </StyledTableHeader>
        <StyledTableRow>
          <StyledTableCell>
            {' '}
            <StyledSpan>Vardas:</StyledSpan>
            {client.name}
          </StyledTableCell>
          <StyledTableCell>
            {' '}
            <StyledSpan>Pavardė:</StyledSpan>
            {client.surname}
          </StyledTableCell>
          <StyledTableCell>
            {' '}
            <StyledSpan>El. paštas:</StyledSpan>
            {client.email}
          </StyledTableCell>
          <StyledTableCell>
            {' '}
            <StyledSpan>Amžius:</StyledSpan>
            {client.age}
          </StyledTableCell>{' '}
        </StyledTableRow>
        <StyledQuestion>
          {' '}
          <StyledButtonWrapper>
            <p>Ar tikrai norite ištrinti?</p>

            <StyledButton
              style={{
                background: 'rgb(230,247,239)',
                color: 'rgb(59, 92, 77)',
              }}
              onClick={handleDelete}
            >
              Taip
            </StyledButton>
            <Link to='/'>
              <StyledButton className='delete__button'>Atšaukti</StyledButton>
            </Link>
          </StyledButtonWrapper>
        </StyledQuestion>
      </StyledTableWrapper>
    </StyledDisplayWrapper>
  );
};

export default VartotojoIštrinimas;
