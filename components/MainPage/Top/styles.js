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

export const ImgContainerLeft = styled.div`
  /* background-color:  red; */
  height: 20em;
  /* margin-top: 5em; */
  margin-bottom: -11rem;
  margin-left: -20rem;
  
  img{
    max-width: 100%;
    max-height: 100%;
  }

  
`;
export const BeforeImageContainer = styled.div`
  /* background-color:  red; */
  height: 30em;
  
  @media(max-width:1200px) {
    padding: 2rem 0 3rem 0;
    height: fit-content;
    
  } 


  
  
`;
export const StoreLinkButtonsContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  /* background-color:  red; */
  img{
    /* width: 100%; */
    max-height: 100px;
    /* min-height: 100px */
    object-fit: contain;
  }
  
  
`;
