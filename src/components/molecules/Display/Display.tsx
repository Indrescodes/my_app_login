import React, { useEffect, useState } from 'react';
import { ClientInfo } from '../Form/Form';
import { Link } from 'react-router-dom';
import { StyledButton } from '../../atoms/Button/styles'
import { StyledButtonWrapper, StyledDisplayWrapper, StyledPaginationWrapper, StyledTableCell, StyledTableHeader, StyledTableRow, StyledTableWrapper } from './styles';



export interface IDisplayProps {
  clientInfo: ClientInfo;
  onDelete: () => void;
  onUpdate: () => void;
}

const Display: React.FC<IDisplayProps> = ({ clientInfo }) => {
  const [clients, setClients] = useState<ClientInfo[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const recordsPerPage = 5;

  useEffect(() => {
    fetchClients();
  }, []);

  const fetchClients = async () => {
    try {
      const response = await fetch('http://localhost:5001/clients');
      const data = await response.json();
      setClients(data);
    } catch (error) {
      console.error('Failed to fetch client data:', error);
    }
  };

  const indexOfLastRecord = currentPage * recordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
  const currentRecords = clients.slice(indexOfFirstRecord, indexOfLastRecord);

  const paginate = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  return (
    <StyledDisplayWrapper>
      <StyledTableWrapper>
        <StyledTableHeader>
          <StyledTableCell>Vardas</StyledTableCell>
          <StyledTableCell>Pavardė</StyledTableCell>
          <StyledTableCell>El. paštas</StyledTableCell>
          <StyledTableCell>Amžius</StyledTableCell>
          <StyledTableCell>Veiksmai</StyledTableCell>
        </StyledTableHeader>
        {currentRecords.map((client) => (
          <StyledTableRow key={client._id}>
            <StyledTableCell>{client.name}</StyledTableCell>
            <StyledTableCell>{client.surname}</StyledTableCell>
            <StyledTableCell>{client.email}</StyledTableCell>
            <StyledTableCell>{client.age}</StyledTableCell>
            <StyledTableCell>
              <StyledButtonWrapper>
                <Link to={`/user-edit/${client._id}`}>
                  <StyledButton className='update__button'>Redaguoti</StyledButton>
                </Link>
                <Link to={`/user-delete/${client._id}`}>
                  <StyledButton className='delete__button'>Ištrinti</StyledButton>
                </Link>
              </StyledButtonWrapper>
            </StyledTableCell>
          </StyledTableRow>
        ))}
      </StyledTableWrapper>

      {clients.length > recordsPerPage && (
        <StyledPaginationWrapper>
          {Array(Math.ceil(clients.length / recordsPerPage))
            .fill(null)
            .map((_, index) => (
              <StyledButton key={index} onClick={() => paginate(index + 1)}>
                {index + 1}
              </StyledButton>
            ))}
        </StyledPaginationWrapper>
      )}
    </StyledDisplayWrapper>
  );
};

export default Display;
