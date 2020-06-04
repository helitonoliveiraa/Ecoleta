import React from 'react';
import { FiLogIn } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import logo from '../../assets/logo.svg';
import { PageHome, Content } from './styles';

const Home: React.FC = () => {
  return (
    <PageHome>
      <Content>
        <header>
          <img src={logo} alt="Ecoleta" />
        </header>

        <main>
          <h1>Seu marketplace de colete de resíduos.</h1>

          <p>
            Ajudamos pessoas a encontrarem pontos de coletas de forma eficiente.
          </p>

          <Link to="/create-point">
            <span>
              <FiLogIn size={17} />
            </span>
            <strong>Cadastre um ponto de coleta</strong>
          </Link>
        </main>
      </Content>
    </PageHome>
  );
};

export default Home;
