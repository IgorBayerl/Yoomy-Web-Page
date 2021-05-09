import styled from 'styled-components';

export const BoxContent = styled.div`
  padding: 3rem 0;
  background-color: var(--color-primary);
  position: relative;

  .box-form {
    background-color: #fff;
    border-radius: 10px;
    padding: 2rem;

    p {
      color: #7B7B7B;
    }

    .link-termo {
      cursor: pointer;
    }
    .link-termo:hover {
      text-decoration: underline;
    }

    button {
      background-color: var(--color-primary);
      border: none;
      border-radius: 3px;
      color: #fff;
      padding: 10px 25px;
      font-size: var(--text-size-md);
      font-weight: 600;
      transition: 0.3s ease;
    }
    button:hover {
      background-color: var(--color-secondary);
    }
    button.disabled {
      opacity: 0.5;
    }
    button.disabled:hover {
      background-color: var(--color-primary);
    }
  }

  @media(min-width: 992px) {
    .h-lg-100 {
      height: 100%;
    }
    
    img {
      margin-bottom: -3rem;
    }
  }

  
`;