import React from 'react';
import styles from './Carrinho.module.css';

const Carrinho = ({ produtos, setPaginaAtual }) => {
    const precoTotal = produtos.reduce((total, produto) => {
        const precoNumerico = parseFloat(produto.preco.replace('R$', '').replace(',', '.'));
        return total + precoNumerico;
    }, 0);

    const BotaoCompra = () => {
        alert('Compra finalizada!');
    };

    return (
        <div className={styles.container}>
            {produtos.length === 0 ? (
                <div className={styles.vazio}>
                    <h1><b>Seu carrinho está vazio.</b></h1>
                    <p>Procure por produtos e adicione ao carrinho.</p>
                    <button onClick={() => setPaginaAtual('produtos')}><b>VOLTAR PARA PRODUTOS</b></button>
                </div>
            ) : (
                <div className={styles.produtosContainer}>
                    {produtos.map(produto => (
                        <div key={produto.id} className={styles.produtoCard}>
                            <img src={produto.imagem} alt={produto.nome} className={styles.imagem} />
                            <div className={styles.produtoInfo}>
                                <h3>{produto.nome}</h3>
                                <p className={styles.descricao}>{produto.descricao}</p>
                                <p className={styles.preco}>{produto.preco}</p>
                            </div>
                        </div>
                    ))}
                    <div className={styles.totalContainer}>
                        <p>Total: R$ {precoTotal.toFixed(2).replace('.', ',')}</p>
                    </div>
                    <div className={styles.botoesContainer}>
                        <button className={styles.botaoComprar} onClick={BotaoCompra}><b>COMPRAR</b></button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Carrinho;