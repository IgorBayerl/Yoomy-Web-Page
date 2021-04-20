import styled from 'styled-components';
import Select from 'rc-select';

const DefaultSelect = styled(Select).attrs((props) => ({
  notFoundContent: props.notFoundContent
    ? props.notFoundContent
    : 'Não encontrado',
}))`
  background-color: #fff;
  color: #999999;
  width: 100%;

  outline-style: none;
  font-size: var(--text-size-sm);

  &.dark {
    background-color: #e0e1e2 !important;
  }

  & .rc-select-selector {
    height: 4rem;
    padding: 0 !important;
    border: 1px solid #D8D8D8;
    border-radius: 5px;
  }

  &.border-tel .rc-select-selector {
    border-top-left-radius: 5px !important;
    border-bottom-left-radius: 5px !important;
    border-top-right-radius: 0px !important;
    border-bottom-right-radius: 0px !important;
    border: 0px solid #D8D8D8 !important;
    border-width: 1px 0 1px 1px !important;
  }

  & .rc-select-selection-search-input {
    width: 100% !important;
    box-sizing: border-box !important;
    color: #999999 !important;
    height: 4rem;
    font-size: 1.6rem !important;
    padding: 10px;
  }

  & .rc-select-selection-item {
    padding: 1.2rem 20px;
    color: #999999 !important;
  }

  & .rc-select-arrow {
    right: 15px !important;
    color: var(--color-secondary) !important;
    top: 50%;
    transform: translateY(-50%);
  }
  & .rc-select-arrow-icon ::after {
    border-top-color: var(--color-secondary) !important;
  }

  & .rc-select-selection-placeholder {
    color: #999999;
    top: 1px !important;
    left: 15px !important;
    padding: 1.2rem 10px !important;
  }

  & .rc-select-selection-search-input {
    cursor: pointer !important;
  }

  @media(max-width: 992px) {
    & .rc-select-selector {
      height: 3.12rem;
    }
    & .rc-select-selection-search-input {
      height: 3.12rem;
    }
    & .rc-select-selection-item {
      padding: 0.65rem 20px;
    }
    & .rc-select-selection-placeholder {
      padding: 0.65rem 10px !important;
    }
  }
`;

export default DefaultSelect;
