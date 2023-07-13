import Display from '../../components/molecules/Display/Display';

interface ClientInfo {
  name: string;
  surname: string;
  age: string;
  email: string;
}

interface IPagrindinisProps {
  clientInfo?: ClientInfo;
  handleUpdate?: () => void;
  handleDelete?: () => void;
}

function Pagrindinis({
  clientInfo,
  handleUpdate,
  handleDelete,
}: IPagrindinisProps): JSX.Element {
  return (
    <>
      <div>
        <div>
          <Display
            clientInfo={
              clientInfo || { name: '', surname: '', age: '', email: '' }
            }
            onUpdate={handleUpdate}
            onDelete={handleDelete}
          />
        </div>
      </div>
    </>
  );
}

export default Pagrindinis;
