import styled from 'styled-components';

export const BoxContent = styled.div`
  font-size: var(--text-size-lg );
  font-weight: 800;
  color:  var(--color-secondary);
  text-align: ${props => props?.textAlign ? props?.textAlign : 'left'};

  .hr-subtitle {
    height: 5px;
    width: 35px;
    background-color: var(--color-primary);
    border-radius: 15px;
  }

  @media(max-width: 576px) {
    font-size: 20px;
  }
`;