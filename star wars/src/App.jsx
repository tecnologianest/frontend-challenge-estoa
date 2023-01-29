import './styles/index.css';
import RoutesMain from './routes/routes';
import AuthProvider from './context/ContextAll';

const App = () => {
  return (
    <>
      <AuthProvider>
        <RoutesMain />
      </AuthProvider>
    </>
  );
}

export default App;
