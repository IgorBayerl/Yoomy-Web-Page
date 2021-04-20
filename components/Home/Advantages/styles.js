import styled from 'styled-components';

export const BoxContent = styled.div`
  padding: 6rem 0;
  background-color: var(--color-primary);

  .subtitle-white {
    font-size: var(--text-size-lg);
  }

  .box-info {
    background-color: #fff;
    padding: 2rem 1.5rem;
    border-radius: 10px;
  }

  .icon {
    background-color: var(--color-primary);
    display: flex;
    align-items: center;
    justify-content: center;
    height: 70px;
    width: 70px;
    border-radius: 50%;
    padding: 15px;
  }

  .slick-dots {
    li {
      width: 30px;
      height:5px;
    }
    li button::before {
      width: 30px;
      height:5px;
      background-color: #fff;
      content: '';
      border-radius: 1px;
      opacity: 0.4;
    }
    li.slick-active button::before {
      background-color: #fff;
      opacity: 1;
    }
  }
  

  @media(max-width: 1350px) {
    .icon {
      height: 55px;
      width: 55px;
    }
  }

  @media(max-width: 1285px) {
    .box-info {
      padding: 2rem 1rem;
    }

    .icon {
      height: 50px;
      width: 50px;
    }
  }

  @media(max-width: 576px) {
    padding: 2rem 0 3rem 0;

    .subtitle-white {
      font-size: 25px;
    }
  }
`;