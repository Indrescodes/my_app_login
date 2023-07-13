import React, { useEffect, useState } from 'react';
import { ClientInfo } from '../Form/Form';
import { Link } from 'react-router-dom';
import { StyledButton } from '../../atoms/Button/styles';
import {
  StyledButtonWrapper,
  StyledDisplayWrapper,
  StyledPaginationWrapper,
  StyledSpan,
  StyledTableCell,
  StyledTableHeader,
  StyledTableRow,
  StyledTableWrapper,
} from './styles';
import { StyledInput } from '../../atoms/Input/styles';

export interface IDisplayProps {
  clientInfo: ClientInfo[];
  onDelete?: () => void;
  onUpdate?: () => void;
}

const Display: React.FC<IDisplayProps> = ({ clientInfo }) => {
  const [clients, setClients] = useState<ClientInfo[]>([]);
  const [filteredClients, setFilteredClients] = useState<ClientInfo[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');
  const recordsPerPage = 10;

  useEffect(() => {
    fetchClients();
  }, []);

  useEffect(() => {
    filterClients();
  }, [clients, searchQuery]);

  const fetchClients = async () => {
    try {
      const response = await fetch('http://localhost:5001/clients');
      const data = await response.json();
      setClients(data);
      setFilteredClients(data);
    } catch (error) {
      console.error('Failed to fetch client data:', error);
    }
  };

  const filterClients = () => {
    const filteredData = clients.filter(
      (client) =>
        client.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        client.surname.toLowerCase().includes(searchQuery.toLowerCase()) ||
        client.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
        client.age.toString().includes(searchQuery)
    );
    setFilteredClients(filteredData);
  };

  const indexOfLastRecord = currentPage * recordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
  const currentRecords = filteredClients.slice(
    indexOfFirstRecord,
    indexOfLastRecord
  );

  const paginate = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  const handleSearchInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setSearchQuery(event.target.value);
    setCurrentPage(1);
  };

  return (
    <StyledDisplayWrapper>
      <StyledInput
        className='search__input'
        type='text'
        value={searchQuery}
        onChange={handleSearchInputChange}
        placeholder='Ieškoti'
      />

      {currentRecords.length > 0 ? (
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
              <StyledTableCell><StyledSpan>Vardas: </StyledSpan>{client.name}</StyledTableCell>
              <StyledTableCell><StyledSpan>Pavardė: </StyledSpan>{client.surname}</StyledTableCell>
              <StyledTableCell><StyledSpan>El. paštas: </StyledSpan>{client.email}</StyledTableCell>
              <StyledTableCell><StyledSpan>Amžius: </StyledSpan>{client.age}</StyledTableCell>
              <StyledTableCell>
                <StyledButtonWrapper>
                  <Link to={`/user-edit/${client._id}`}>
                    <StyledButton className='update__button'>
                      Redaguoti
                    </StyledButton>
                  </Link>
                  <Link to={`/user-delete/${client._id}`}>
                    <StyledButton className='delete__button'>
                      Ištrinti
                    </StyledButton>
                  </Link>
                </StyledButtonWrapper>
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </StyledTableWrapper>
      ) : (
        <div>Duomenų nerasta</div>
      )}

      {filteredClients.length > recordsPerPage && (
        <StyledPaginationWrapper>
          {Array(Math.ceil(filteredClients.length / recordsPerPage))
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
