import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { StyledButton } from '../../components/atoms/Button/styles';
import {
  StyledButtonWrapper,
  StyledDisplayWrapper,
  StyledSpan,
  StyledTableCell,
  StyledTableHeader,
  StyledTableRow,
  StyledTableWrapper,
} from '../../components/molecules/Display/styles';
import { StyledEditableDiv } from './styles';

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

  const handleInputChange = (e: React.ChangeEvent<HTMLDivElement>) => {
    const { dataset, textContent } = e.currentTarget;
    const fieldName = dataset.name || ''; // Provide a default value in case dataset.name is undefined
    setEditedClient({
      ...editedClient!,
      [fieldName]: textContent,
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
          <StyledEditableDiv
            className='input'
            contentEditable
            onBlur={handleInputChange}
            data-name='name'
            suppressContentEditableWarning={true}
          >
            {editedClient!.name}
          </StyledEditableDiv>
          <StyledSpan>Pavardė:</StyledSpan>
          <StyledEditableDiv
            className='input'
            contentEditable
            onBlur={handleInputChange}
            data-name='surname'
            suppressContentEditableWarning={true}
          >
            {editedClient!.surname}
          </StyledEditableDiv>
          <StyledSpan>El. paštas:</StyledSpan>
          <StyledEditableDiv
            className='input'
            contentEditable
            onBlur={handleInputChange}
            data-name='email'
            suppressContentEditableWarning={true}
          >
            {editedClient!.email}
          </StyledEditableDiv>
          <StyledSpan>Amžius:</StyledSpan>
          <StyledEditableDiv
            className='input'
            contentEditable
            onBlur={handleInputChange}
            data-name='age'
            suppressContentEditableWarning={true}
          >
            {editedClient!.age}
          </StyledEditableDiv>
          <StyledButtonWrapper>
            <StyledButton
              style={{
                background: 'rgb(230,247,239)',
                color: 'rgb(59, 92, 77)',
              }}
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
