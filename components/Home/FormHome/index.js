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

  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

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
        endereco: Yup.string().required('Endereço é obrigatório'),
      });

      const validationResult = await schema.validate(data, {
        abortEarly: false,
      });

      if(typeof validationResult == 'object'){
        console.log('aeeeee!! deu boa')

        /////////////////////////
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/x-www-form-urlencoded");
        
        var urlencoded = new URLSearchParams();
        urlencoded.append("email", data.email);
        urlencoded.append("fullName", data.nome);
        urlencoded.append("phoneNumber", data.telefone);
        urlencoded.append("restaurantName", data.restaurante);
        urlencoded.append("restaurantCity", data.endereco);
        

        var requestOptions = {
          method: 'POST',
          headers: myHeaders,
          body: urlencoded,
          redirect: 'follow'
        };

        const response = await fetch("https://appbackend.yoomy.com.br/yoomy-site-backend/webservice/new_register/user.php?action=register_user", requestOptions)
          .then(response => response.text())
          // .then(result => console.log(result))
          // .then(result => setFormStatus(result))
          .catch(error => console.log('error', error));

        // console.log(JSON.stringify(response))
        const stringResponse = response.toString()
        // const responsedata = JSON.parse(response.data)
        console.log(JSON.parse(stringResponse))
        if(JSON.parse(stringResponse).success == true){
          setShowSuccessMessage(true)
        }
        //////////////////
      }
      // console.log(validationResult)

      // reset();

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
                                  value: '55',
                                  label: '+55'
                                },
                                // {
                                //   value: '11',
                                //   label: '+11'
                                // },
                                
                                // {
                                //   value: '...',
                                //   label: '...'
                                // },
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
                              placeholder="Cidade"
                            />
                          </Col>
                          {/* <Col xs={12} lg={6} className="py-2 px-0 pr-lg-2">
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
                          </Col> */}
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
              <h3 className=" px-4 px-sm-0 mb-2 color-primary">
                Declaração de Privacidade
              </h3>
              <p className="text-modal color-dark text-justify mt-1">
              Data da última atualização: 12/05/2021
              </p>
              <p className="text-modal color-dark text-justify mt-0">
              Declaração em vigor: 12/05/2021 
              </p>
              <p className="text-modal color-dark text-justify mt-4">
              Ao fazer uso dos serviços fornecidos pela Yoomy, quaisquer sejam eles, 
              o utente confia a empresa um conjunto de informações pessoais. 
              Essa declaração de privacidade descreve como e quais informações armazenamos, 
              assim como a sua utilização e compartilhamento. 
              </p>
              <p className="text-modal color-dark text-justify mt-4">
              Nosso aplicativo e site serão referidos coletivamente como uma ou mais plataformas. 
              Quando nos referimos aos termos "Yoomy", "nós" ou "nosso", queremos dizer Yoomy; da mesma forma, 
              quando os termos "você", "seu", "sua" forem mencionados, estaremos nos referimos a você

              </p>
              <hr />
              <h4 className=" px-4 px-sm-0 mb-2 color-primary">
                1 - Quem controla o tratamento dos dados pessoais? 
              </h4>
              <p className="text-modal color-dark text-justify mt-4">
                É denominado controlador a pessoa física ou jurídica que toma as decisões relacionadas ao tratamento de dados pessoais.
              </p>
              <p className="text-modal color-dark text-justify mt-4">
                Quando você acessa ou realiza o cadastro em nossa plataforma, a Yoomy exerce o papel de controlador do tratamento de seus dados pessoais, atuando conforme a legislação aplicável e conforme descrito na presente declaração.
              </p>
              <hr />
              <h4 className=" px-4 px-sm-0 mb-2 color-primary">
                2 - Quais dados são coletados 
              </h4>
              <p className="text-modal color-dark text-justify mt-4">
                Ao realizar ou atualizar seu cadastro em nossa plataforma, você autoriza a coleta e armazenamento de dados como: 
              </p>
              <h5 className=" px-4 px-sm-0 mb-2 color-dark">
                2.1 - Dados do seu perfil
              </h5>
              
              <p className="text-modal color-dark text-justify mt-0">
              
              Esses dados podem incluir seu nome, senha, foto de perfil e-mail e número de telefone.
              Para criar um registro no site ou aplicativo Yoomy, você também pode usar sua conta nas redes sociais. 
              Por exemplo, ao se registrar em nosso serviço usando a Google, 
              você permite que Yoomy acesse informações pessoais em sua conta da Google, 
              como seu nome e e-mail (se você as registrou na Google). Nesse caso, 
              as informações que obteremos são as mesmas e dependem das configurações de privacidade de seu uso junto ao serviço de rede social.

              </p>
              <h5 className=" px-4 px-sm-0 mb-2 color-dark">
                2.2 - Dados de pagamento 
              </h5>
              
              <p className="text-modal color-dark text-justify mt-0">
              
              Ao optar pela utilização de nossa plataforma para realização de pagamentos, você poderá nos fornecer seus dados de pagamento, como aqueles de cartão de crédito e de meios de pagamento parceiros.  Seus dados completos de cartão não ficam armazenados em nossas bases, mas sim em seu telefone celular ou dispositivo utilizado na compra.  
              </p>
              <h5 className=" px-4 px-sm-0 mb-2 color-dark">
                2.3 - Dados de localização 
              </h5>
              
              <p className="text-modal color-dark text-justify mt-0">
              
              Para realizar a reserva de uma mesa, recomendação de restaurantes baseada em proximidade e cadastro de estabelecimento parceiro, nós precisamos que você informe a sua localização uma ou mais vezes. 
              </p>
              <p className="text-modal color-dark text-justify mt-0">
              
              A localização pode ser fornecida pelo endereço que você insere manualmente no aplicativo, ou pode ser fornecida através do dispositivo via GPS e redes móveis (torre de celular, Wi-Fi e outras localizações) e confirmada por você.
              </p>
              <p className="text-modal color-dark text-justify mt-0">
              
              Para fins da lei n° 12.965 de 2014 (Marco Civil da Internet), ou qualquer lei que venha substituí-la, a localização fornecida será considerada como dado cadastral.
              </p>
              <h5 className=" px-4 px-sm-0 mb-2 color-dark">
                2.4 - Dados de seus dispositivos  
              </h5>
              <p className="text-modal color-dark text-justify mt-0">
                Nós podemos coletar informações automaticamente sobre os dispositivos a partir dos quais você acessa a Yoomy como: endereços IP, tipo de navegador e idioma, provedor de Serviços de Internet (ISP), páginas de consulta e saída, sistema operacional, informações sobre data e horário, dados sobre a sequência de cliques, fabricante do dispositivo, operadora, modelo, versão do aparelho, versão do aplicativo, versão do sistema operacional, identificador de publicidade do aparelho (IDFA), informações de acessibilidade do aparelho e redes Wi-Fi. 
              </p>
              <h5 className=" px-4 px-sm-0 mb-2 color-dark">
              2.5 - Dados transacionais e dados sobre sua utilização  
              </h5>
              <p className="text-modal color-dark text-justify mt-0">
              Coletamos dados sobre suas interações em nossa plataforma, incluindo data e horário de acessos, buscas e visualizações na Plataforma. Também podemos coletar dados transacionais relacionados aos uso dos nossos serviços como detalhes de pedidos, valor cobrado e método de pagamento.
 
              </p>
              
              <hr />
              <h4 className=" px-4 px-sm-0 mb-2 color-primary">
                3 - Como utilizamos esses dados? 
              </h4>
              
              <h5 className=" px-4 px-sm-0 mb-2 color-dark">
                3.1 - Prover nossos serviços 
              </h5>
              <p className="text-modal color-dark text-justify mt-4">
              Podemos utilizar os dados coletados para prover, manter, melhorar e personalizar nossos produtos e serviços destinados a você, existentes ou a serem criados.
              </p>
              <p className="text-modal color-dark text-justify mt-4">
              Esse tratamento inclui a utilização dos dados para: Criar e atualizar sua conta; permitir a visualização e a entrega dos pedidos realizados através de nosso cardápio digital; personalizar sua conta; e prover operações internas necessárias.
              </p>
              <p className="text-modal color-dark text-justify mt-4">
              Também poderemos usar seus dados pessoais para fins internos, como auditorias, análise de dados e pesquisas para aprimorar os produtos, serviços e comunicações com os clientes, bem como geração de análises estatísticas com respeito ao uso dos nossos serviços, incluindo tendências de consumo.

              </p>
              <h5 className=" px-4 px-sm-0 mb-2 color-dark">
                3.2 - Comunicação não comercial 
              </h5>
              <p className="text-modal color-dark text-justify mt-4">
              Periodicamente poderemos usar seus dados pessoais para enviar avisos e notificações importantes, como comunicados sobre compras, alterações em prazos, condições e políticas.

              </p>
              <h5 className=" px-4 px-sm-0 mb-2 color-dark">
              3.3 - Avaliação de restaurantes  
              </h5>
              <p className="text-modal color-dark text-justify mt-4">
              Ao enviar comentários e feedback com relação à Plataforma e a qualidade dos serviços fornecidos por nossos parceiros, você nos autoriza a publicar e utilizar tais comentários e feedbacks na Plataforma, bem como a analisar, processar e tratar esse feedback de forma isolada ou agregada. Para tanto, apenas identificamos você através de seu nome de cadastro.
              </p>
              <h5 className=" px-4 px-sm-0 mb-2 color-dark">
              3.4 - Marketing   
              </h5>
              <p className="text-modal color-dark text-justify mt-4">
              Podemos usar seus dados pessoais para enviar anúncios e outros materiais promocionais projetados para promover nossos serviços e notícias para você, incluindo marketing direcionado para redes sociais e notificações push. Nesse caso, você pode optar por não receber mais notificações de marketing a qualquer momento, alterando suas preferências para o aplicativo na guia "Notificações" em "Perfil". Além disso, só podemos compartilhar informações estritamente necessárias para esse fim com parceiros Yoomy, a fim de realizar atividades de marketing mais relevantes para pessoas interessadas nos produtos Yoomy, como seu ID de usuário, número de telefone ou e-mail. A Yoomy só compartilhará dados com parceiros que tenham uma política de privacidade que forneça um nível de proteção compatível com o nível de proteção fornecido por esta declaração.

              </p>
              <h5 className=" px-4 px-sm-0 mb-2 color-dark">
              3.5 - Promoções    
              </h5>
              <p className="text-modal color-dark text-justify mt-4">
              Se você participar de um concurso, competição ou qualquer outra modalidade de promoção, poderemos usar as informações que você fornecer para administrar esses programas.
              </p>
              <h5 className=" px-4 px-sm-0 mb-2 color-dark">
              3.6 - Requisições legais e regulatórias     
              </h5>
              <p className="text-modal color-dark text-justify mt-4">
              Seus dados poderão ser utilizados para endereçarmos reivindicações jurídicas e regulatórias relacionadas à utilização dos nossos serviços.
              </p>

              <hr />
              <h4 className=" px-4 px-sm-0 mb-2 color-primary">
              4 - Como os dados são armazenados?  
              </h4>
              
              <h5 className=" px-4 px-sm-0 mb-2 color-dark">
              4.1 Onde são armazenados  
              </h5>
              <p className="text-modal color-dark text-justify mt-4">
              Os dados que coletamos de você são armazenados em serviços de nuvem confiáveis ​​de parceiros que podem estar localizados no Brasil ou em outros países que fornecem serviços de armazenamento em nuvem confiáveis ​​e comumente utilizados por empresas de tecnologia (como os Estados Unidos (EUA) e América Latina) e países europeus. Ao contratar esses serviços, a Yoomy busca sempre empresas que adotem um alto nível de segurança no armazenamento de suas informações e estabeleçam contratos que não violem a definição de privacidade prevista nesta declaração.
              </p>

              <h5 className=" px-4 px-sm-0 mb-2 color-dark">
              4.2 Por quanto tempo os dados são armazenados?
  
              </h5>
              <p className="text-modal color-dark text-justify mt-4">
              A Yoomy retém suas informações pelo tempo necessário para dar continuidade aos propósitos citados anteriormente. Isso significa que retemos diferentes categorias de informações por diferentes períodos de tempo. Fazemos isso, respeitando o período de retenção de dados determinado pela legislação aplicável.

              </p>
              <p className="text-modal color-dark text-justify mt-4">
              Caso você solicite a exclusão de sua conta, as suas informações pessoais fornecidas a Yoomy durante a sua utilização dos nossos serviços serão excluídas, salvo para as finalidades permitidas pela legislação de proteção de dados.

              </p>
              <p className="text-modal color-dark text-justify mt-4">
              Em alguns casos, poderemos reter suas informações mesmo que você exclua sua conta, tais como nas hipóteses de guarda obrigatória de registros previstas em leis aplicáveis, se houver uma questão não resolvida relacionada à sua conta (como, por exemplo, uma reclamação ou disputa não resolvida), bem como para o exercício regular de nossos direitos, ou ainda caso seja necessário para nossos interesses legítimos, como prevenção de fraudes e aprimoramento da segurança dos nossos usuários.
              </p>

              <h5 className=" px-4 px-sm-0 mb-2 color-dark">
              4.3 A Yoomy transfere os dados para outros países? 
  
              </h5>
              <p className="text-modal color-dark text-justify mt-4">
              A Yoomy poderá realizar transferências internacionais de dados para outros países, tais como Estados Unidos da América e para países da União Europeia e da América Latina, a fim de realizar algumas das atividades envolvidas nos serviços prestados a você.
              </p>

              <p className="text-modal color-dark text-justify mt-4">
              Em qualquer caso de compartilhamento com parceiros ou prestadores de serviços localizados em outros países, estabelecemos contratualmente que o parceiro possua padrão de proteção de dados e segurança da informação compatível com esta Declaração e com a legislação aplicável.
              </p>


              <hr />
              <h4 className=" px-4 px-sm-0 mb-2 color-primary">
              5 - Como os dados são compartilhados?  
              </h4>
              <h5 className=" px-4 px-sm-0 mb-2 color-dark">
              5.1 Provedores de serviços 
  
              </h5>
              <p className="text-modal color-dark text-justify mt-4">
              Por razões de processamento de dados em nome da Yoomy, poderemos compartilhar dados para terceiros prestadores de serviços. Nesse caso, os dados serão tratados de forma a proteger a sua privacidade, tendo essas empresas o dever contratual de proteção compatível com a legislação aplicável e com os termos deste Declaração de Privacidade da Yoomy.
              </p>
              <p className="text-modal color-dark text-justify mt-4">
              Nós podemos utilizar os serviços dessas empresas para facilitar nosso serviço, prover o serviço da Yoomy em nosso nome e executar atividades relacionadas ao serviço, incluindo: manutenção dos serviços; gerenciamento de banco de dados, sistemas de computadores e provedores de armazenamento em nuvem; central de atendimento ao cliente; agências de publicidade.

              </p>
              <p className="text-modal color-dark text-justify mt-4">
              Em relação ao pagamento de suas compras em nossa Plataforma, caso opte por pagar diretamente online, nós poderemos compartilhar seus dados de pagamento com empresas processadores de pagamento com os quais trabalhamos. Esse compartilhamento é feito com o fim exclusivo de viabilizar a compra efetivada por você.
              </p>

              <p className="text-modal color-dark text-justify mt-4">
              Essas empresas ou indivíduos têm acesso à sua informação pessoal, restrito ao necessário, apenas para executar atividades solicitadas pela Yoomy e são obrigados a não usar ou divulgar tais informações para nenhuma outra finalidade.
              </p>

              <h5 className=" px-4 px-sm-0 mb-2 color-dark">
              5.2 Estabelecimentos parceiros da Yoomy 
  
              </h5>
              <p className="text-modal color-dark text-justify mt-4">
              Ao utilizar os serviços Yoomy em um estabelecimento parceiro, nós podemos compartilhar algumas informações suas com esse estabelecimento, bem como fornecer dados a respeito do pedido em específico.
              </p>

              <h5 className=" px-4 px-sm-0 mb-2 color-dark">
              5.3 Em alteração de controle societário da Yoomy 
              </h5>
              <p className="text-modal color-dark text-justify mt-4">
              No caso de operações societárias, como reestruturação, fusão ou venda de ativos da Yoomy, do grupo econômico ou de parte dele, seus dados poderão ser transferidos, desde que respeitados os termos da presente Declaração.
              </p>

              <h5 className=" px-4 px-sm-0 mb-2 color-dark">
              5.4 Autoridades públicas 
              </h5>
              <p className="text-modal color-dark text-justify mt-4">
              A Yoomy também poderá compartilhar suas informações com autoridades policiais ou judiciais, autoridades públicas competentes ou outros terceiros, dentro e fora do país em que você reside, caso seja requerido pela legislação aplicável, por decisão judicial e por requisição de autoridades, ou se necessário para responder a processos judiciais ou para participar em eventuais litígios ou disputas de qualquer natureza.
              </p>

              <p className="text-modal color-dark text-justify mt-4">
              Nestas situações, a Yoomy cooperará com as autoridades competentes na medida do estipulado por lei.
              </p>

              <hr />
              <h4 className=" px-4 px-sm-0 mb-2 color-primary">
              6 Como protegemos seus dados? 
              </h4>
              <p className="text-modal color-dark text-justify mt-4">
              A Yoomy adota medidas de segurança, técnicas e administrativas aptas a proteger os dados pessoais de acessos não autorizados e de situações acidentais ou ilícitas de destruição, perda, alteração, comunicação ou qualquer forma de tratamento inadequado ou ilícito.
              </p>
              <p className="text-modal color-dark text-justify mt-4">
              Utilizamos os princípios estipulados por lei, respeitando a sua privacidade e protegendo seus dados em nossos processos internos como um todo.
              </p>
              <p className="text-modal color-dark text-justify mt-4">
              Só tratamos os seus dados mediante alto grau de segurança, implementando as melhores práticas em uso na indústria para a proteção de dados, tais como técnicas de criptografia, monitoramento e testes de segurança periódicos.
              </p>

              <hr />
              <h4 className=" px-4 px-sm-0 mb-2 color-primary">
              7 Como iremos notificá-lo em caso de mudanças à essa declaração?  
              </h4>
              <p className="text-modal color-dark text-justify mt-4">
              A Yoomy poderá atualizar essa Declaração de Privacidade periodicamente, sendo que a versão em vigor será sempre a mais recente.

              </p>
              <p className="text-modal color-dark text-justify mt-4">
              Se fizermos alguma alteração na Declaração em termos materiais, colocaremos um aviso no nosso Website, aplicativo ou lhe enviaremos um e-mail, juntamente com a Declaração de Privacidade atualizada.

              </p>
              <p className="text-modal color-dark text-justify mt-4">
              Para verificar a data da versão em vigor, verifique a “Declaração em vigor” no início desse documento.

              </p>
              
            </div>
          </Modal.Body>
        </Modal>


        <Modal show={showSuccessMessage} onHide={setShowSuccessMessage} size="xl" centered>
          <Col className="close-modal position-relative">
            <MdClose onClick={() => setShowSuccessMessage(false)} size={25} />
          </Col>
          <Modal.Body>
            <div className="pt-4 p-sm-3 p-md-5">
              <h2 className="text-center px-4 px-sm-0 mb-4 color-dark">
                Sucesso
              </h2>
              <hr />
              <h3 className=" px-4 px-sm-0 mb-2 color-primary text-center ">
                Em breve a Yoomy entrará em contato com você.
              </h3>
            </div>
          </Modal.Body>
        </Modal>
      </div>
    </BoxContent>
  )
}
