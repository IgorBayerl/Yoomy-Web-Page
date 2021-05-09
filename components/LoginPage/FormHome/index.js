import React, {useRef, useState} from 'react';
import {Col, Row, Modal} from 'react-bootstrap';
import * as Yup from 'yup';
import { Form } from '@unform/web';

// Components
import Title from '../Title';
import Subtitle from '../../Subtitle';
import TextInput from '../../Form/Input';
import InputMask from '../../Form/InputMask';
import Select from '../../Form/CustomSelect';
import CheckBox from '../../Form/CustomCheckbox';

// Style
import {BoxContent} from './styles';

// Icons
import { MdClose } from 'react-icons/md';

export default function FormHome() {
  const formRef = useRef(null);
  const [termos, setTermos] = useState(false);
  const [showTermos, setShowTermos] = useState(false);

  async function handleSubmit(data, { reset }) {
    try {
      formRef.current.setErrors({});

      const schema = Yup.object().shape({
        nome: Yup.string().required('O nome do responsável é obrigatório'),
        telefone: Yup.string().required('O celular é obrigatório'),
        email: Yup.string()
          .email('E-mail inválido')
          .required('E-mail é obrigatório'),
        restaurante: Yup.string().required('O restaurante é obrigatório'),
      });

      await schema.validate(data, {
        abortEarly: false,
      });

      reset();

    } catch (err) {
      console.log(err);
      const validationErrors = {};

      if (err instanceof Yup.ValidationError) {
        err.inner.forEach((error) => {
          validationErrors[error.path] = error.message;
        });
        formRef.current.setErrors(validationErrors);
      }
    }
  }
  
  return (
    <BoxContent>
      <div className="limit">
        <Col xs={12}>
          <Row className="justify-content-center">
            <Col xs={12} lg={11}>
              <Row className="align-items-start h-lg-100">
                <Col className="h-lg-100 " lg={6}>
                  <Row className="align-content-between h-lg-100">
                    <Col xs={12}>
                      <Row>
                        <Col xs="auto">
                          <Title>
                            Faça seu cliente feliz  
                          </Title>
                        </Col>
                      </Row>
                    </Col>
                    
                    <Col xs={12}>
                      <img src="/images/Grupo-10533.png" alt="Aumente suas vendas" className="img-fluid " />
                    </Col>
                  </Row>
                </Col>
                <Col lg={6}>
                  <div className="box-form ">
                    <Subtitle textAlign="left">
                      <span className="color-secondary">Login</span>
                    </Subtitle>
                    <p className="semi-bold text-size-md">Benefícios para entregar a melhor experiência</p>
                    <hr/>
                    <Form
                      ref={formRef}
                      onSubmit={handleSubmit}
                      autoComplete="on"
                      className="w-100"
                    >
                      <Col xs={12}>
                        <Row>
                          
                          <Col xs={12} className="py-2 px-0">
                            <p className="semi-bold mb-0">Email</p>
                            <TextInput
                              className="semi-bold"
                              name="email"
                              type="email"
                              placeholder="Digite seu email"
                            />
                          </Col>
                          <Col xs={12} className="py-2 px-0">
                            <p className="semi-bold mb-0">Senha</p>
                            <TextInput
                              className="semi-bold"
                              name="password"
                              type="password"
                              placeholder="Digite sua Senha"
                            />
                          </Col>
                          <span className="color-primary link-termo" onClick={() => alert(`Anota num papelzinho da proxima`)}>Esqueci minha senha!</span>
                        </Row>

                        <Row className="justify-content-end align-items-center pt-4">
                          <Col xs="auto" className="px-0">
                            <button
                              type="submit"
                              className={`${!termos ? 'disabled' : ''}`}
                              disabled={!termos}
                            >
                              Prosseguir
                            </button>
                          </Col>
                        </Row>
                      </Col>
                    </Form>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>
      </div>
    </BoxContent>
  )
}
