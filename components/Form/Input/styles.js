import styled from 'styled-components';

export const TextInputCustom = styled.div`
  text-align: left;

  input {
    height: 4rem;
    background-color: #fff;
    color: #999999;
    width: 100%;
    border: none;
    outline-style: none;
    padding: 1.5rem 1.5rem;
    border: 1px solid #D8D8D8;
    border-radius: 5px;
  }

  .text-error {
    color: red;
  }

  label {
    width: 100%;
    text-align: left;
    color: #999999;
    letter-spacing: 3px;
  }

  textarea {
    min-height: 16rem !important;
  }

  input::placeholder,
  textarea::placeholder {
    color: #999999;
    opacity: 1;
  }

  @media(max-width: 992px) {
    input {
      height: 3rem;
    }
  }
`;
