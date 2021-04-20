import styled from 'styled-components';

export const ContainerCheckbox = styled.div`
  label.container-checkbox {
    display: block;
    position: relative;
    padding-left: 25px;
    margin-bottom: 12px;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    cursor: pointer;
  }
  .container-checkbox input {
    position: relative;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
  }
  .checkmark {
    position: absolute;
    top: 5px;
    left: 0;
    height: 25px;
    width: 25px;
    background-color: #fff;
    border: 1px solid #999999;
    border-radius: 50%;
  }
  .container-checkbox input:checked ~ .checkmark {
    /* background-color: var(--color-secondary); */
  }
  .checkmark:after {
    content: '';
    position: absolute;
    display: none;
  }
  .container-checkbox input:checked ~ .checkmark:after {
    display: block;
  }
  .container-checkbox .checkmark:after {
    left: 5px;
    top: 5px;
    width: 13px;
    height: 13px;
    border-radius: 50%;
    background-color: var(--color-primary);
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
  }
`;
