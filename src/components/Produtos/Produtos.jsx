import React from 'react';
import styles from './Produtos.module.css';

const produtos = [
    {
        id: 1,
        nome: 'Placa de Video RTX 4070',
        descricao: '12GB, GDDR6X, DLSS, Ray Tracing, GV-N407SGAMING OC-12GD',
        preco: 'R$ 4.799,90',
        imagem: 'https://img.terabyteshop.com.br/produto/g/placa-de-video-gigabyte-geforce-rtx-4070-super-gaming-oc-12gb-gddr6x-dlss-ray-tracing-gv-n407sgaming-oc-12gd_186086.png',
    },
    {
        id: 2,
        nome: 'Processador AMD Ryzen 3 3200G',
        descricao: '3.6GHz (4GHz Max Turbo), Cache 4MB, Quad Core, 4 Threads',
        preco: 'R$ 398,99',
        imagem: 'https://images8.kabum.com.br/produtos/fotos/102248/processador-amd-ryzen-3-3200g-cache-4mb-3-6ghz-4ghz-max-turbo-am4-yd3200c5fhbox_1607691191_g.jpg',
    },
    {
        id: 3,
        nome: 'Placa Mãe Biostar B550MH',
        descricao: 'Chipset B550, AMD AM4, mATX, DDR4',
        preco: 'R$ 429,90',
        imagem: 'https://img.terabyteshop.com.br/produto/g/placa-mae-biostar-b550mh-chipset-b550-amd-am4-matx-ddr4-ab55am4s-r02-bs212x_175525.png',
    },
    {
        id: 4,
        nome: 'HD 2TB',
        descricao: 'HD Interno Seagate BarraCuda, SATA, 3.5 - ST2000DM008',
        preco: 'R$ 449,99',
        imagem: 'https://images6.kabum.com.br/produtos/fotos/100916/100916_1552934430_index_g.jpg',
    },
    {
        id: 5,
        nome: 'SSD Kingston A400, 480 GB',
        descricao: 'SATA III, 2.5", Leitura: 500 MB/s, Gravação: 450 MB/s, Preto - SA400S37/480G',
        preco: 'R$ 249,99',
        imagem: 'https://images8.kabum.com.br/produtos/fotos/85198/85198_1484306114_g.jpg',
    },
    {
        id: 6,
        nome: 'Fonte MSI MAG A650BN',
        descricao: '650W, 80 Plus Bronze, PFC Ativo, Com Cabo, Preto - 306-7ZP2B22-CE0',
        preco: 'R$ 269,99',
        imagem: 'https://images8.kabum.com.br/produtos/fotos/369658/fonte-msi-mag-a650bn-atx-650w-80-plus-bronze-pfc-ativo-entrada-bivolt-preto-306-7zp2b22-ce0_1665770996_g.jpg',
    },
    
];

const Produtos = ({ adicionarAoCarrinho }) => {
    return (
        <div className={styles.container}>
            <div className={styles.produtosContainer}>
                {produtos.map(produto => (
                    <div key={produto.id} className={styles.produtoCard}>
                        <img src={produto.imagem} alt={produto.nome} className={styles.imagem} />
                        <h3>{produto.nome}</h3>
                        <p>{produto.descricao}</p>
                        <p className={styles.preco}>{produto.preco}</p>
                        <button onClick={() => adicionarAoCarrinho(produto)}>Adicionar ao Carrinho</button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Produtos;