import styles from './Menu.module.css';

const Menu = ({ paginaAtual, setPaginaAtual }) => {
  const menuClass = styles.menu;

  return (
    <div className={menuClass}>
      <ul className={styles.menuList}>
        <li>
          <a href="#home" onClick={() => setPaginaAtual('home')} className={`${paginaAtual === 'home' ? styles.active : ''} ${styles.button}`}>
            Home
          </a>
        </li>
        <li>
          <a href="#produtos" onClick={() => setPaginaAtual('produtos')} className={`${paginaAtual === 'produtos' ? styles.active : ''} ${styles.button}`}>
            Produtos
          </a>
        </li>
        <li>
          <a href="#cliente" onClick={() => setPaginaAtual('cliente')} className={`${paginaAtual === 'cliente' ? styles.active : ''} ${styles.button}`}>
            Cliente
          </a>
        </li>
        <li>
          <a href="#fornecedor" onClick={() => setPaginaAtual('fornecedor')} className={`${paginaAtual === 'fornecedor' ? styles.active : ''} ${styles.button}`}>
            Fornecedor
          </a>
        </li>
        <li>
          <a href="#sobre" onClick={() => setPaginaAtual('sobre')} className={`${paginaAtual === 'sobre' ? styles.active : ''} ${styles.button}`}>
            Sobre
          </a>
        </li>
      </ul>
      <li>
          <a 
              href="#carrinho" 
              onClick={() => setPaginaAtual('carrinho')} 
              className={`${paginaAtual === 'carrinho' ? styles.active : ''} ${styles.carrinhoButton}`}>
              🛒 CARRINHO
          </a>
      </li>
    </div>
  );
};

export default Menu;