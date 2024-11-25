import React, { useState, useEffect } from 'react';

const imagens = [
    'https://s.zst.com.br/cms-assets/2021/07/placas-de-v-deo-8-gb.jpg',
    'https://s.zst.com.br/cms-assets/2022/11/shutterstock_2082475195.webp', 
    'https://blog.lri.com.br/wp-content/uploads/2023/12/img-DCN1cSxH5FfzMZlpg8eEXmio.png',
];

const Galeria = () => {
    const [indiceAtual, setIndiceAtual] = useState(0);

    useEffect(() => {
        const intervalo = setInterval(() => {
            setIndiceAtual((indiceAtual + 1) % imagens.length);
        }, 3000);

        return () => clearInterval(intervalo);
    }, [indiceAtual]);

    const proximaImagem = () => {
        setIndiceAtual((indiceAtual + 1) % imagens.length);
    };

    const imagemAnterior = () => {
        setIndiceAtual((indiceAtual - 1 + imagens.length) % imagens.length);
    };

    return (
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <button onClick={imagemAnterior}>&lt;</button>
            <img src={imagens[indiceAtual]} alt={`Imagem ${indiceAtual + 1}`} style={{ width: '800px', height: 'auto', borderRadius: '10px', margin: '0 10px' }} />
            <button onClick={proximaImagem}>&gt;</button>
        </div>
    );
};

export default Galeria;