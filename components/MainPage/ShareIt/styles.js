import styled from 'styled-components';

export const BoxContent = styled.div`
  padding: 0 0;

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

export const BigContainerLeft = styled.div`
  /* background-color: red; */
  height: 20rem;
  img{
    margin-left: -18rem;
    object-fit: contain;
  }
`;

export const SmallContainerLeft = styled.div`
  /* background-color: blue; */

  height: 25rem;

  @media(max-width:990px) {
    height: auto;
    span {
      text-align: center;
    }
  } 
  
`;

export const BigContainerRight = styled.div`
  /* background-color: red; */
  height: 40rem;
  min-width: 560px;
  max-width: 800px;
  @media(max-width:990px) {
    
    min-width: auto;
    max-width: 100%;
  } 
  div{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
  }
  
  img{
    max-width: 100%;
    background-color: var(--color-primary);
    border-radius: 10px;
    height: 16em;
    width: 16em;
  }
`;

export const SmallContainerRight = styled.div`
  /* background-color: blue; */
  height: 10rem;
  
  
`;