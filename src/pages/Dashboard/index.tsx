import React from 'react';
import { FiChevronRight } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';

import { Title, Form, Repositories } from './styles';

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logoImg} alt="Github Explorer" />
      <Title>Explore repositórios no Github.</Title>

      <Form>
        <input placeholder="Digite o nome do repositório" />
        <button type="submit">Pesquisar</button>
      </Form>

      <Repositories>
        <a href="https://github.com/gabriel-santana/05-primeiro-projeto-react">
          <img
            src="https://avatars3.githubusercontent.com/u/42440819?s=460&u=19890350d8e74ac079e6d0543dd8b5c14cf00c3b&v=4"
            alt="Gabriel Santana"
          />
          <div>
            <strong>gabriel-santana/05-primeiro-projeto-react</strong>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
          </div>
          <FiChevronRight size={20} />
        </a>
        <a href="https://github.com/gabriel-santana/05-primeiro-projeto-react">
          <img
            src="https://avatars3.githubusercontent.com/u/42440819?s=460&u=19890350d8e74ac079e6d0543dd8b5c14cf00c3b&v=4"
            alt="Gabriel Santana"
          />
          <div>
            <strong>gabriel-santana/05-primeiro-projeto-react</strong>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
          </div>
          <FiChevronRight size={20} />
        </a>
        <a href="https://github.com/gabriel-santana/05-primeiro-projeto-react">
          <img
            src="https://avatars3.githubusercontent.com/u/42440819?s=460&u=19890350d8e74ac079e6d0543dd8b5c14cf00c3b&v=4"
            alt="Gabriel Santana"
          />
          <div>
            <strong>gabriel-santana/05-primeiro-projeto-react</strong>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
          </div>
          <FiChevronRight size={20} />
        </a>
      </Repositories>
    </>
  );
};

export default Dashboard;
