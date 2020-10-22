import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import CardPequeno from './components/CardPequeno/CardPequeno';
import ImagemButton from './components/ImagemButton/ImagemButton';
import imagemPerfil from './img/ImagemPerfil.jpeg';
import logoUfjf from './img/LogoUfjf.png';
import imagemEmail from './img/email.png';
import imagemEndereco from './img/address.png';

function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem={imagemPerfil} 
          nome="David Biolchini" 
          descricao="Olá, eu sou o David Biolchini. Estudante de desenvolvimento web front-end com react na Labenu! Também estudo produção de conteúdo para rádio, tv e internet na UFJF onde despertei minha paixão por programação e tive contado com temas que se aliam e complementam o desenvolvimento web."
        />
        
        <ImagemButton 
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png" 
          texto="Ver mais"
        />
      </div>
      <div className="page-section-container">
        <CardPequeno
          imagem={imagemEmail}
          titulo="E-mail:"
          texto="david@email.com"
        />

        <CardPequeno 
         imagem={imagemEndereco}
         titulo="Endereço:"
         texto="Rua Labenu, n°312499"
         />
      </div>
      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem="data:image/png;base64,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" 
          nome="Labenu" 
          descricao="Desenvolvimento Web Front-End" 
        />
        
        <CardGrande 
          imagem={logoUfjf} 
          nome="UFJF" 
          descricao="Rádio, Tv e Internet" 
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </div>
    </div>
  );
}

export default App;
