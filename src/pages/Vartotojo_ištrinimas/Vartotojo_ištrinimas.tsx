import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { StyledButton } from '../../components/atoms/Button/styles';


interface Client {
  name: string;
  surname: string;
  email: string;
  age: number;
}

const ClientPageDelete = () => {
  const { id } = useParams();
  const [client, setClient] = useState<Client | null>(null);
  const [loading, setLoading] = useState(true);

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
        // Redirect or perform additional actions as needed
        window.location.href = '/';
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
    <div>
      <div>
        <p>Vardas</p>
        <p>Pavardė</p>
        <p>El. paštas</p>
        <p>Amžius</p>
      </div>
      <div>
        <p>{client.name}</p>
        <p>{client.surname}</p>
        <p>{client.email}</p>
        <p>{client.age}</p>{' '}
      </div>

      <p>Ar tikrai norite ištrinti?</p>
      <StyledButton onClick={handleDelete}>Taip</StyledButton>
      <Link to='/'>
        <StyledButton>Atšaukti</StyledButton>
      </Link>
    </div>
  );
};

export default ClientPageDelete;
