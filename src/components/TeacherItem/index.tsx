import React from 'react';

import whatSappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

function TeacherItem() {
  return (
    <article className="teacher-item">
      <header>
        <img src="https://avatars1.githubusercontent.com/u/62824588?s=460&u=e6d4becc343ef62adae1c666f92dd7733fd0f799&v=4" alt="Kaique Oliveira" />
        <div>
          <strong>Kaique Oliveira</strong>
          <span>Biologia</span>
        </div>
      </header>

      <p>
        Apaixonado por ensinar biologia, desde dos assuntos mais básicos como a teoria do surgimento da vida até o aprofundamento
        em microrganismos eucariontes e procariontes - unicelulares e pluricelulares respectivamente.
        <br /><br />
        o legal é que a biologia pode proporcionar algo que a programação não pode, que é o estudo dos seres vivos e saber que na verdade quem fica grávida(o),
        é o cavalo-marinho macho e não a fêmea.
      </p>

      <footer>
        <p>
          preço/hora
          <strong>R$ 0,01</strong>
        </p>
        <button type="button">
          <img src={whatSappIcon} alt="Whatsapp" />
          Entrar em contato
        </button>
      </footer>
    </article>
  );
}

export default TeacherItem;