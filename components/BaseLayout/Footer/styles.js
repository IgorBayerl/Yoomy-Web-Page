import styled from 'styled-components';

export const BoxContent = styled.div`
  padding: 4rem 0;
  background-color: #fbf8f8;

  .img-footer {
    max-width: 200px;
  }

  .title-footer {
    color: #545454;
  }

  .subtitle-footer {
    color: #ACACAC;
    transition: 0.3s ease;
  }

  .subtitle-footer.link-footer:hover {
    color: #545454;
  }

  .social-icon {
    max-width: 40px;
  }

  .hr-footer {
    background-color: #E2E2E2;
    height: 1px;
    width: 100%;
    margin: 3rem 0;
  }

  @media(max-width:576px) {
    padding: 2rem 0;

    .hr-footer {
      margin: 2rem 0;
    }
  }
`;