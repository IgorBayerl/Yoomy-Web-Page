import styled from 'styled-components';

export const BoxContent = styled.div`
  padding-bottom: 6rem;

  .text-informations {
    color: #646464;
  }

  .image {
    max-height: 650px;
  }

  .img-padronagem {
    max-height: 150px;
  }

  .padronagem-absolute {
    position: absolute;
    top: -250px;
    right: 0;
  }

  .box-img-guia {
    border-radius: 10px;
    background-color: var(--color-primary);
  }

  @media(max-width: 576px) {
    padding-bottom: 3rem;
  }

  @media(max-width: 1300px) {
    .padronagem-absolute {
      top: -185px;
      
      .img-padronagem {
        max-height: 100px;
      }
    }
  }  
`;