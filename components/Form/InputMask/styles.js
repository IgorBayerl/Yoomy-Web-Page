import styled from 'styled-components';

export const TextInputCustom = styled.div`
  text-align: left;

  input {
    height: 4rem;
    background-color: #fff;
    color: #999999;
    width: 100%;
    outline-style: none;
    padding: 1.5rem 1.5rem;
    border: 1px solid #D8D8D8;
    border-radius: 5px;
  }

  label {
    width: 100%;
    text-align: left;
    color: #999999;
  }

  input::placeholder {
    color: #999999;
    opacity: 1;
  }

  @media(max-width: 992px) {
    input {
      height: 3rem;
    }
  }

  input.border-tel {
    border-top-right-radius: 5px !important;
    border-bottom-right-radius: 5px !important;
    border-top-left-radius: 0px !important;
    border-bottom-left-radius: 0px !important;
    border: 1px solid #D8D8D8 !important;
  }
`;
