import React, { useEffect, useState } from 'react';
import { ClientInfo } from '../Form/Form';
import { Link } from 'react-router-dom';
import { StyledButton } from '../../atoms/Button/styles';
import { StyledClients } from '../../../pages/Pagrindinis/styles';

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

  // Get the current records to display based on the current page and records per page
  const indexOfLastRecord = currentPage * recordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
  const currentRecords = clients.slice(indexOfFirstRecord, indexOfLastRecord);

  // Change the page
  const paginate = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div>
      {currentRecords.map((client) => (
        <div key={client._id}>
          <StyledClients>
            <p>{client.name}</p>
            <p>{client.surname}</p>
            <p>{client.email}</p>
            <p>{client.age}</p>
            <Link to={`/user-edit/${client._id}`}>
              <StyledButton>Redaguoti</StyledButton>
            </Link>
            <Link to={`/user-delete/${client._id}`}>
              <StyledButton>Ištrinti</StyledButton>
            </Link>
          </StyledClients>
        </div>
      ))}

      {/* Pagination */}
      {clients.length > recordsPerPage && (
        <div>
          {Array(Math.ceil(clients.length / recordsPerPage))
            .fill(null)
            .map((_, index) => (
              <StyledButton key={index} onClick={() => paginate(index + 1)}>
                {index + 1}
              </StyledButton>
            ))}
        </div>
      )}
    </div>
  );
};

export default Display;
