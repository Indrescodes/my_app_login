import Display from '../../components/molecules/Display/Display';
import { StyledClients, StyledTitle, StyledWrapper } from './styles';

interface ClientInfo {
  name: string;
  surname: string;
  age: string;
  email: string;
}

interface IPagrindinisProps {
  clientInfo?: ClientInfo;
  handleUpdate: () => void;
  handleDelete: () => void;
}

function Pagrindinis({
  clientInfo,
  handleUpdate,
  handleDelete,
}: IPagrindinisProps): JSX.Element {
  return (
    <>
      <StyledWrapper>
        <StyledTitle>
          <p>Vardas</p>
          <p>Pavardė</p>
          <p>El. paštas</p>
          <p>Amžius</p>
        </StyledTitle>
        <StyledClients>
          <Display
            clientInfo={
              clientInfo || { name: '', surname: '', age: '', email: '' }
            }
            onUpdate={handleUpdate}
            onDelete={handleDelete}
          />
        </StyledClients>
      </StyledWrapper>
    </>
  );
}

export default Pagrindinis;
