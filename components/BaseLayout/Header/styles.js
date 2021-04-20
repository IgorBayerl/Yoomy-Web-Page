import styled from 'styled-components';

export const BoxContent = styled.div`
  padding: 2rem 0;

  svg {
    font-size: 35px;
    fill: #000000;
  }

  .link-header {
    transition: 0.3s ease;
  }
  .link-header:hover {
    filter: brightness(80%)!important;
  }

  button {
    background-color: var(--color-primary);
    border: none;
    border-radius: 3px;
    color: #fff;
    padding: 5px 15px;
    font-size: 16px;
    font-weight: 600;
    transition: 0.3s ease;
  }

  button:hover {
    background-color: var(--color-secondary);
  }

  @media (min-width: 576px) {
    .logo {
      max-width: 200px;
    }
  }
  @media (min-width: 768px) {
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
  }
`;