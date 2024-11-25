import { useState } from 'react';
import Menu from '../Menu/Menu';
import Home from '../Home/Home';
import Produtos from '../Produtos/Produtos';
import Cadastro from '../Cadastro/Cadastro';
import Login from '../Login/Login';
import './App.module.css';

function App() {
  const [paginaAtual, setPaginaAtual] = useState('home');

  const renderizarPagina = () => {
    switch (paginaAtual) {
      case 'home':
        return <Home />;
      case 'produtos':
        return <Produtos />;
      case 'cadastro':
        return <Cadastro />;
      case 'login':
        return <Login />;
      default:
        return <Home />;
    }
  };

  return (
    <>
      <Menu paginaAtual={paginaAtual} setPaginaAtual={setPaginaAtual} />
      <div className="page-content">
        {renderizarPagina()}
      </div>
    </>
  );
}

export default App;
