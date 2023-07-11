import { useState } from 'react';
import Button from '../../atoms/Button';
import Form, {ClientInfo} from "../../molecules/Form/Form";

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
    <div>
      <Button onClick={handleButtonClick}>Pridėti naują</Button>
      {showForm && <Form onSubmit={handleFormSubmit} />}
    </div>
  );
};

export default Header;
