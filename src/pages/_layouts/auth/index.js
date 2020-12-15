import React from 'react';

// import logo from '../../../assets/images/backInsideL.png';

import './styles.css';

const AuthLayout = ({ children }) => {
  return (
    <div id="auth-wrapper">
      <aside>
        <div className="logo-container" />
      </aside>
      <main>{children}</main>
      <footer>
        <p>Desenvolvido por Jovens - Todos os direitos reservados - 2020</p>
      </footer>
    </div>
  );
};

export { AuthLayout };
