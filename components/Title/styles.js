import styled from 'styled-components';

export const BoxContent = styled.div`
  position: relative;
  padding: 1rem 2rem;
  background-color: var(--color-secondary);
  font-size: var(--text-size-lg);
  font-weight: 800;
  color: #fff;
  border-radius: 4px;
  text-align: center;

  .border {
    position: absolute;
    border-radius: 4px;
    height: 100%;
    width: 100%;
    background-color: transparent;
    top: 15px;
    left: 15px;
  }

  @media(max-width: 576px) {
    font-size: 25px;
  }
`;