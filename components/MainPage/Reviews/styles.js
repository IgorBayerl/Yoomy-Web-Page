import styled from 'styled-components';

export const BoxContent = styled.div`
  padding: 6rem 0;

  .box-review {
    border: 1px solid #D8D8D8;
    border-radius: 10px;
    padding: 4rem 2rem;

    img {
      max-width: 120px;
    }

    .name {
      color: #959494;
      font-size: 25px;
    }

    .review {
      color: #ABABAB;
    }
  }

  .slick-dots {
    bottom: -40px;

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

  @media(max-width: 768px) {
    padding: 3rem 0 4rem 0;

    .box-review {
      padding: 2rem 1rem;
    }
  }
`;