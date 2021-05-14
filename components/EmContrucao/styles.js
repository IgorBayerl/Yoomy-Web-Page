import styled from 'styled-components';

export const BoxContent = styled.div`
  /* padding: 6rem 0; */

  .card {
    border: none;
    
    .card-header {
      padding: 0;
      border: none;
      margin-bottom: 0 !important;
      background-color: transparent;

      .accordion-title {
        background-color: #F6F6F4;
        font-size: var(--text-size-sm);
        width: 100%;
        padding: 15px;
        text-align: center;
        letter-spacing: 2px;
        font-weight: 500;
        border: none;
        border-radius: 0;
        margin: 0.5rem 15px;

        & * {
          color: #808080;
        }

        svg {
          font-size: 25px;
          fill: #808080;
        }
      }
    }

    .card-body {
      color: #808080;
      font-weight: 600;
      padding: 5px 40px 40px 40px;
    }
  }
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

  /* @media(max-width: 768px) {
    padding: 3rem 0;
  } */
`;


export const ImageBG = styled.div`
  width: 100%;
  height: 80vh;
  /* opacity : 0.5; */
  background-repeat: no-repeat;
  background-size: cover;
  /* background-color: #de2424; */
  background-image: url('https://static.shuffle.dev/uploads/files/62/6219f545638ad9a85b59987caf96fc1a3a2649d7/woman-chef-cooking-vegetables-pan-1.jpg')
  
`;

export const CardGlass = styled.div`
  width: 80%;
  background: rgba( 255, 255, 255, 0.50 );
  box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
  backdrop-filter: blur( 6.5px );
  -webkit-backdrop-filter: blur( 6.5px );
  border-radius: 10px;
  border: 1px solid rgba( 255, 255, 255, 0.18 );
  /* background-color: #de2424; */
  
`;

export const AButton = styled.div`
  max-width: 20rem;
  
`;