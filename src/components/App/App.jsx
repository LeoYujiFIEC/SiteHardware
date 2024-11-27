import { useState } from 'react';
import Menu from '../Menu/Menu';
import Home from '../Home/Home';
import Produtos from '../Produtos/Produtos';
import Sobre from '../Sobre/Sobre';
import Cliente from '../Cliente/FormsC';
import Fornecedor from '../Fornecedor/FormsF';
import Carrinho from '../Carrinho/Carrinho';
import './App.module.css';
import 'font-awesome/css/font-awesome.min.css';

function App() {
  const [paginaAtual, setPaginaAtual] = useState('home');
  const [carrinho, setCarrinho] = useState([]);
  const adicionarAoCarrinho = (produto) => {
    setCarrinho((prevCarrinho) => [...prevCarrinho, produto]);
  };
  const renderizarPagina = () => {
    switch (paginaAtual) {
      case 'home':
        return <Home />;
      case 'produtos':
        return <Produtos adicionarAoCarrinho={adicionarAoCarrinho} />;
      case 'sobre':
        return <Sobre />;
      case 'cliente':
        return <Cliente />;
      case 'fornecedor':
        return <Fornecedor />;
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
