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
                <Col className="h-lg-100" lg={6}>
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
                      <Row>
                        <Col lg={10} xl={6}>
                          <p className="semi-bold color-light pt-4" style={{ fontSize: '21px' }}>Aumente suas vendas e traga uma experiência única para cada cliente.</p>
                        </Col>
                      </Row>
                    </Col>
                    <Col xs={12}>
                      <img src="/images/img-form.png" alt="Aumente suas vendas" className="img-fluid" />
                    </Col>
                  </Row>
                </Col>
                <Col lg={6}>
                  <div className="box-form">
                    <Subtitle textAlign="left">
                      <span className="color-secondary">Cadastre-se</span>
                    </Subtitle>
                    <p className="semi-bold text-size-md">É totalmente grátis, sem mensalidades</p>
                    <Form
                      ref={formRef}
                      onSubmit={handleSubmit}
                      autoComplete="off"
                      className="w-100"
                    >
                      <Col xs={12}>
                        <Row>
                          <Col xs={12} className="py-2 px-0">
                            <TextInput
                              className="semi-bold"
                              name="nome"
                              type="text"
                              placeholder="Nome completo"
                            />
                          </Col>
                          <Col xs="auto" className="py-2 px-0">
                            <Select
                              className="semi-bold border-tel"
                              style={{maxWidth: '90px'}}
                              name="ddi"
                              placeholder="DDI"
                              options={[
                                {
                                  value: '11',
                                  label: '+11'
                                },
                                {
                                  value: '55',
                                  label: '+55'
                                },
                                {
                                  value: '...',
                                  label: '...'
                                },
                              ]}
                            >
                            </Select>
                          </Col>
                          <Col className="py-2 px-0">
                            <InputMask
                              className="semi-bold border-tel"
                              name="telefone"
                              type="tel"
                              placeholder="Celular "
                            />
                          </Col>
                          <Col xs={12} className="py-2 px-0">
                            <TextInput
                              className="semi-bold"
                              name="email"
                              type="email"
                              placeholder="Email do responsável"
                            />
                          </Col>
                          <Col xs={12} className="py-2 px-0">
                            <TextInput
                              className="semi-bold"
                              name="restaurante"
                              type="text"
                              placeholder="Nome do restaurante"
                            />
                          </Col>
                          <Col xs={12} className="py-2 px-0">
                            <TextInput
                              className="semi-bold"
                              name="endereco"
                              type="text"
                              placeholder="Endereço do restaurante"
                            />
                          </Col>
                          <Col xs={12} lg={6} className="py-2 px-0 pr-lg-2">
                            <Select
                              className="semi-bold"
                              borderTel
                              name="pontosVenda"
                              placeholder="Pontos de venda"
                              options={[
                                {
                                  value: '1',
                                  label: 'Valor 1'
                                },
                                {
                                  value: '2',
                                  label: 'Valor 2'
                                },
                                {
                                  value: '3',
                                  label: 'Valor 3'
                                },
                              ]}
                            >
                            </Select>
                          </Col>
                          <Col xs={12} lg={6} className="py-2 px-0 pl-lg-2">
                            <Select
                              className="semi-bold"
                              borderTel
                              name="categoria"
                              placeholder="Escolha a categoria"
                              options={[
                                {
                                  value: '1',
                                  label: 'Valor 1'
                                },
                                {
                                  value: '2',
                                  label: 'Valor 2'
                                },
                                {
                                  value: '3',
                                  label: 'Valor 3'
                                },
                              ]}
                            >
                            </Select>
                          </Col>
                          <Col xs={12} className="py-2 px-0">
                            <CheckBox name="termos" 
                              onClick={(evt) => setTermos(evt.target.checked)}
                            >
                              <p className="mb-0 semi-bold">
                                Se marcar este item, você está aceitando o{' '}
                                <span className="color-primary link-termo" onClick={() => setShowTermos(true)}>Termo de privacidade</span>
                                <p className="mb-0 semi-bold">Ao prosseguir a Yoomy entrará em contato com você pelo WhatsApp.</p>
                              </p>
                            </CheckBox>
                          </Col>
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
        <Modal show={showTermos} onHide={setShowTermos} size="xl" centered>
          <Col className="close-modal position-relative">
            <MdClose onClick={() => setShowTermos(false)} size={25} />
          </Col>
          <Modal.Body>
            <div className="pt-4 p-sm-3 p-md-5">
              <h2 className="text-center px-4 px-sm-0 mb-4 color-dark">
                TERMO DE PRIVACIDADE
              </h2>
              <hr />
              <p className="text-modal color-dark text-justify mt-4">
                The standard Lorem Ipsum passage, used since the 1500s "Lorem
                ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                aliquip ex ea commodo consequat. Duis aute irure dolor in
                reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum."
                Section 1.10.32 of "de Finibus Bonorum et Malorum", written by
                Cicero in 45 BC "Sed ut perspiciatis unde omnis iste natus error
                sit voluptatem accusantium doloremque laudantium, totam rem
                aperiam, eaque ipsa quae ab illo inventore veritatis et quasi
                architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam
                voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed
                quia consequuntur magni dolores eos qui ratione voluptatem sequi
                nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor
                sit amet, consectetur, adipisci velit, sed quia non numquam eius
                modi tempora incidunt ut labore et dolore magnam aliquam quaerat
                voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem
                ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi
                consequatur? Quis autem vel eum iure reprehenderit qui in ea
                voluptate velit esse quam nihil molestiae consequatur, vel illum
                qui dolorem eum fugiat quo voluptas nulla pariatur?" 1914
                translation by H. Rackham "But I must explain to you how all this
                mistaken idea of denouncing pleasure and praising pain was born
                and I will give you a complete account of the system, and expound
                the actual teachings of the great explorer of the truth, the
                master-builder of human happiness. No one rejects, dislikes, or
                avoids pleasure itself, because it is pleasure, but because those
                who do not know how to pursue pleasure rationally encounter
                consequences that are extremely painful. Nor again is there anyone
                who loves or pursues or desires to obtain pain of itself, because
                it is pain, but because occasionally circumstances occur in which
                toil and pain can procure him some great pleasure. To take a
                trivial example, which of us ever undertakes laborious physical
                exercise, except to obtain some advantage from it? But who has any
                right to find fault with a man who chooses to enjoy a pleasure
                that has no annoying consequences, or one who avoids a pain that
                produces no resultant pleasure?" Section 1.10.33 of "de Finibus
                Bonorum et Malorum", written by Cicero in 45 BC "At vero eos et
                accusamus et iusto odio dignissimos ducimus qui blanditiis
                praesentium voluptatum deleniti atque corrupti quos dolores et
                quas molestias excepturi sint occaecati cupiditate non provident,
                similique sunt in culpa qui officia deserunt mollitia animi, id
                est laborum et dolorum fuga. Et harum quidem rerum facilis est et
                expedita distinctio. Nam libero tempore, cum soluta nobis est
                eligendi optio cumque nihil impedit quo minus id quod maxime
                placeat facere possimus, omnis voluptas assumenda est, omnis dolor
                repellendus. Temporibus autem quibusdam et aut officiis debitis
                aut rerum necessitatibus saepe eveniet ut et voluptates
                repudiandae sint et molestiae non recusandae. Itaque earum rerum
                hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus
                maiores alias consequatur aut perferendis doloribus asperiores
                repellat." 1914 translation by H. Rackham "On the other hand, we
                denounce with righteous indignation and dislike men who are so
                beguiled and demoralized by the charms of pleasure of the moment,
                so blinded by desire, that they cannot foresee the pain and
                trouble that are bound to ensue; and equal blame belongs to those
                who fail in their duty through weakness of will, which is the same
                as saying through shrinking from toil and pain. These cases are
                perfectly simple and easy to distinguish. In a free hour, when our
                power of choice is untrammelled and when nothing prevents our
                being able to do what we like best, every pleasure is to be
                welcomed and every pain avoided. But in certain circumstances and
                owing to the claims of duty or the obligations of business it will
                frequently occur that pleasures have to be repudiated and
                annoyances accepted. The wise man therefore always holds in these
                matters to this principle of selection: he rejects pleasures to
                secure other greater pleasures, or else he endures pains to avoid
                worse pains."
              </p>
            </div>
          </Modal.Body>
        </Modal>
      </div>
    </BoxContent>
  )
}
