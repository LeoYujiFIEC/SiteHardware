import Styles from './Sobre.module.css';
import React from 'react';

const Sobre = () => {
  return (
    <div className={Styles.container}>
      <div id='desc'>
        <h1>Sobre nós</h1>
        <p>Somos uma Loja comercial online com uma base em Indaiatuba-SP que possui tudo o que você precisa para melhorar o seu computador. Com uma grande variedade de produtos, nossa missão é oferecer</p>
        <p>aos nossos clientes as melhores opções em hardware para potencializar seu desempenho, seja para jogos, trabalho ou criação de conteúdo.</p>
        <p>Nosso objetivo é proporcionar a melhor experiência de compra, com suporte especializado e atendimento personalizado, para que você sempre faça a escolha certa ao melhorar ou montar seu computador.</p>
        <p>Se você tiver dúvidas ou precisar de ajuda, nossa equipe está à disposição para atendê-lo!</p>
        <div id="contact-info">
          <h2>Informações de Contato</h2>
          <p>
            <span className="fa fa-phone"></span> (19) 3748-1682
          </p>
          <p>
            <span className="fa fa-address-book"></span> Av. Eng. Fábio Roberto Barnabé, 3405 - Jardim Regina, Indaiatuba - SP
          </p>
          <p>
            <span className="fa fa-envelope"></span> IndaiaHardwares@gmail.com
          </p>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3669.948647521346!2d-47.22837497001261!3d-23.098975620203994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94c8b34b7fce5ac3%3A0x34bb4bcb22fc5f49!2sFIEC%20-%20Funda%C3%A7%C3%A3o%20Indaiatubana%20de%20Educa%C3%A7%C3%A3o%20e%20Cultura!5e0!3m2!1spt-BR!2sbr!4v1732727231367!5m2!1spt-BR!2sbr" allowFullScreen referrerPolicy="no-referrer" aria-hidden="false"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Sobre;