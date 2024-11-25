import styles from './Home.module.css';
import Galeria from '../Galeria/Galeria';

const Home = () => {
    return (
        <div className={styles.container}>
            <h1>Bem-vindo à Nossa Página Inicial</h1>
            <Galeria />
        </div>
    );
};

export default Home;