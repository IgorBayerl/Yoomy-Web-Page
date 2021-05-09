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

export const ImgContainer = styled.div`
  /* background-color: var(--color-primary);
  margin-left: 9rem;
  margin-right: 14rem;

  padding-top: 2rem;
  border-radius: 10px;
  margin-bottom: 5rem; */
  
  img{
    max-height: 40rem;
    object-fit: contain;
    margin-right: -7rem;
    @media(max-width: 1286px) {
      padding-top: 2rem;
      max-width: 100%;
      max-height: 100%;
      /* justify-content: center !important; */
    }
  }

 
`;