import React from 'react';

import { AuthLayout } from '../_layouts/auth';

import './styles.css';

const Register = () => {
  return (
    <AuthLayout>
      <div id="register">
        <aside />
        <main>
          <form onSubmit={(e) => console.log(e)}>
            <input type="text" />
            <button type="submit">Enviar</button>
          </form>
        </main>
      </div>
    </AuthLayout>
  );
};

export { Register };
