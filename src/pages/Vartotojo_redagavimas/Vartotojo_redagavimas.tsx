import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { StyledButton } from '../../components/atoms/Button/styles';
import { StyledInput } from '../../components/atoms/Input/styles';

interface Client {
  name: string;
  surname: string;
  email: string;
  age: number;
}

const ClientUpdatePage = () => {
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
    <div>
      <div>
        <p>Name </p>
        <p>Surname</p>
        <p>Email</p>
        <p>Age</p>
      </div>
      <div>
        <StyledInput
          type='text'
          name='name'
          value={editedClient!.name}
          onChange={handleInputChange}
        />
        <StyledInput
          type='text'
          name='surname'
          value={editedClient!.surname}
          onChange={handleInputChange}
        />
        <StyledInput
          type='email'
          name='email'
          value={editedClient!.email}
          onChange={handleInputChange}
        />
        <StyledInput
          type='number'
          name='age'
          value={editedClient!.age}
          onChange={handleInputChange}
        />
        <StyledButton onClick={handleUpdate}>Išsaugoti</StyledButton>
        <Link to='/'>
          <StyledButton>Atšaukti</StyledButton>
        </Link>
      </div>
    </div>
  );
};

export default ClientUpdatePage;
