import styled from 'styled-components';

export const BoxContent = styled.div`
  padding: 6rem 0;

  .box-icon {
    background-color: var(--color-primary);
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100px;
    width: 100px;
    padding: 20px;
  }

  .title-box-highlight {
    color: #545454;
  }

  .text-box-highlight {
    color: #9E9E9E;
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
  
  @media(max-width: 576px) {
    padding: 3rem 0 4rem 0;
  }
`;