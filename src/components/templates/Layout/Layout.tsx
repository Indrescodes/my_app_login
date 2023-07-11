import Header from '../Header';
import Footer from '../Footer';
import {Outlet} from 'react-router-dom';
interface ILayoutProps {
    children?: React.ReactNode;
}

const Layout: React.FC<ILayoutProps> = ()=> {

  return (
    <>
      <Header onButtonClick={function (): void {
        throw new Error('Function not implemented.');
      } }/>
        <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
