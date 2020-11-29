import React from 'react';

import logo from '../../../assets/images/logo.png';

import './styles.css';

const AuthLayout = ({ children }) => {
  return (
    <div id="auth-wrapper">
      <aside>
        <div className="logo-container">
          <img src={logo} alt="Logo" className="logo" />
        </div>
      </aside>
      <main>{children}</main>
      <footer>
        <p>Desenvolvido por Jovens - Todos os direitos reservados - 2020</p>
      </footer>
    </div>
  );
};

export { AuthLayout };
