import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './components/templates/Layout/Layout';
import Pagrindinis from './pages/Pagrindinis/Pagrindinis';
import ClientUpdatePage from './pages/Vartotojo_redagavimas/Vartotojo_redagavimas';
import ClientPageDelete from './pages/Vartotojo_ištrinimas/Vartotojo_ištrinimas';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route
            path='/'
            element={
              <Pagrindinis
                handleUpdate={function (): void {
                  throw new Error('Function not implemented.');
                }}
                handleDelete={function (): void {
                  throw new Error('Function not implemented.');
                }}
              />
            }
          />
          <Route path='/user-edit/:id' element={<ClientUpdatePage />} />
          <Route path='/user-delete/:id' element={<ClientPageDelete />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
