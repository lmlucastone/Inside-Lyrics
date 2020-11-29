import React from 'react';
import { Form, Formik, Field } from 'formik';
import * as Yup from 'yup';

import { AuthLayout } from '../_layouts/auth';

import './styles.css';

const initialValues = {
  firstName: '',
  lastName: '',
  email: '',
};

const SignupSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(3, 'O nome deve ter pelo menos 3 caracteres.')
    .required('O nome é obrigatório.'),
  lastName: Yup.string()
    .min(2, 'O sobrenome deve ter pelo menos 3 caracteres.')
    .required('O sobrenome é obrigatório.'),
  email: Yup.string()
    .email('Formato de e-mail inválido.')
    .required('O e-mail é obrigatório.'),
});

const Register = () => {
  const handleOnSubmit = (values) => {
    console.log(values);
  };

  return (
    <AuthLayout>
      <div id="register">
        <main>
          <header>
            <h3 className="title">Criar uma nova conta</h3>
            <h3 className="subtitle">é rápido e fácil.</h3>
          </header>
          <Formik
            onSubmit={handleOnSubmit}
            initialValues={initialValues}
            validateOnChange
            validationSchema={SignupSchema}
          >
            {({ errors, touched }) => (
              <Form>
                <div className="input-block">
                  <Field type="text" name="firstName" placeholder="Nome" />
                  {touched.firstName && errors.firstName && (
                    <span>{errors.firstName}</span>
                  )}
                </div>
                <div className="input-block">
                  <Field type="text" name="lastName" placeholder="Sobrenome" />
                  {touched.lastName && errors.lastName && (
                    <span>{errors.lastName}</span>
                  )}
                </div>
                <div className="input-block">
                  <Field type="email" name="email" placeholder="E-mail" />
                  {touched.email && errors.email && <span>{errors.email}</span>}
                </div>
                <button type="submit">Cadastrar</button>
              </Form>
            )}
          </Formik>
        </main>
      </div>
    </AuthLayout>
  );
};

export { Register };
