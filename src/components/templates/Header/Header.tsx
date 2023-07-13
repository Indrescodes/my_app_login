import { useState } from 'react';
import Button from '../../atoms/Button';
import Form, { ClientInfo } from '../../molecules/Form/Form';
import { StyledHeaderWrapper } from './styles';

interface IHeaderProps {
  onButtonClick: () => void;
}

const Header: React.FC<IHeaderProps> = () => {
  const [showForm, setShowForm] = useState(false);

  const [clientInfo, setClientInfo] = useState<ClientInfo | null>(null);

  const handleFormSubmit = (submittedClientInfo: ClientInfo) => {
    setClientInfo(submittedClientInfo);
  };

  const handleButtonClick = () => {
    setShowForm(true);
  };

  return (
    <StyledHeaderWrapper>
      <Button className='headers__button' onClick={handleButtonClick}>
        Pridėti naują
      </Button>
      {showForm && <Form onSubmit={handleFormSubmit} />}
    </StyledHeaderWrapper>
  );
};

export default Header;
