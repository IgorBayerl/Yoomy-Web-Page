import styled from 'styled-components';

export const BoxContent = styled.div`
  padding: 6rem 0;

  .card {
    border: none;
    
    .card-header {
      padding: 0;
      border: none;
      margin-bottom: 0 !important;
      background-color: transparent;

      .accordion-title {
        background-color: #F6F6F4;
        font-size: var(--text-size-sm);
        width: 100%;
        padding: 15px;
        text-align: center;
        letter-spacing: 2px;
        font-weight: 500;
        border: none;
        border-radius: 0;
        margin: 0.5rem 15px;

        & * {
          color: #808080;
        }

        svg {
          font-size: 25px;
          fill: #808080;
        }
      }
    }

    .card-body {
      color: #808080;
      font-weight: 600;
      padding: 5px 40px 40px 40px;
    }
  }

  @media(max-width: 768px) {
    padding: 3rem 0;
  }
`;