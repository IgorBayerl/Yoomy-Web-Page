import styled from 'styled-components';

export const BoxContent = styled.div`
  padding: 6rem 0;

  .text-info-customers {
    color: #646464;
  }

  .slick-dots {
    li {
      width: 30px;
      height:5px;
    }
    li button::before {
      width: 30px;
      height:5px;
      background-color: #D6D6D6;
      content: '';
      border-radius: 1px;
      opacity: 1;
    }
    li.slick-active button::before {
      background-color: var(--color-primary);
    }
  }

  @media(max-width:576px) {
    padding: 2rem 0 3rem 0;
  } 
`;