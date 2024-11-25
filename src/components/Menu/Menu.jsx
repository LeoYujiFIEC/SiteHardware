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
          <a href="#cadastro" onClick={() => setPaginaAtual('cadastro')} className={`${paginaAtual === 'cadastro' ? styles.active : ''} ${styles.button}`}>
            Cadastro
          </a>
        </li>
        <li>
          <a href="#login" onClick={() => setPaginaAtual('login')} className={`${paginaAtual === 'login' ? styles.active : ''} ${styles.button}`}>
            Login
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