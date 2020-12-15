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
    .min(3, `*O nome deve ter pelo menos 3 caracteres.`)
    .required('*O nome é obrigatório.'),
  lastName: Yup.string()
    .min(2, '*O sobrenome deve ter pelo menos 2 caracteres.')
    .required('*O sobrenome é obrigatório.'),
  email: Yup.string()
    .email('*Formato de e-mail inválido.')
    .required('*O e-mail é obrigatório.'),
  password: Yup.string().required('*A senha é obrigatório.'),
  date: Yup.string().required('*A data de nascimento é obrigatório.'),
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
                  * <Field type="text" name="firstName" placeholder="Nome" />
                  <div className="error-msg">
                    {touched.firstName && errors.firstName && (
                      <span>{errors.firstName}</span>
                    )}
                  </div>
                </div>

                <div className="input-block">
                  *<Field type="text" name="lastName" placeholder="Sobrenome" />
                  <div className="error-msg">
                    {touched.lastName && errors.lastName && (
                      <span>{errors.lastName}</span>
                    )}
                  </div>
                </div>
                <div className="input-block">
                  * <Field type="email" name="email" placeholder="E-mail" />
                  <div className="error-msg">
                    {touched.email && errors.email && (
                      <span>{errors.email}</span>
                    )}
                  </div>
                </div>
                <div className="input-block">
                  *<Field type="password" name="password" placeholder="Senha" />
                  <div className="error-msg">
                    {touched.password && errors.password && (
                      <span>{errors.password}</span>
                    )}
                  </div>
                </div>

                <h3>Data de Nascimento:</h3>
                <div className="input-block">
                  *<Field type="date" name="date" />
                  <div className="input-block">
                    <span>{errors.date}</span>
                  </div>
                </div>

                <h3>Gênero:</h3>

                <div className="input-block-radio">
                  <div role="group" aria-labelledby="my-radio-group">
                    <Field type="radio" name="sexo" value="masculino" />
                    <span id="txtsexo">Masculino</span>
                    <Field type="radio" name="sexo" value="feminino" />
                    <span id="txtsexo">Feminino</span>
                  </div>
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
