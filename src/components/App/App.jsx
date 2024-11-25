import { useState } from 'react';
import Menu from '../Menu/Menu';
import Home from '../Home/Home';
import Produtos from '../Produtos/Produtos';
import Cadastro from '../Cadastro/Cadastro';
import Login from '../Login/Login';
import Carrinho from '../Carrinho/Carrinho';
import './App.module.css';

function App() {
  const [paginaAtual, setPaginaAtual] = useState('home');
  const [carrinho, setCarrinho] = useState([]);
  // Função para adicionar produtos ao carrinho
  const adicionarAoCarrinho = (produto) => {
    setCarrinho((prevCarrinho) => [...prevCarrinho, produto]);
  };

  const renderizarPagina = () => {
    switch (paginaAtual) {
      case 'home':
        return <Home />;
      case 'produtos':
        return <Produtos adicionarAoCarrinho={adicionarAoCarrinho} />; 
      case 'cadastro':
        return <Cadastro />;
      case 'login':
        return <Login />;
      case 'carrinho':
        return <Carrinho produtos={carrinho} setPaginaAtual={setPaginaAtual} />; 
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