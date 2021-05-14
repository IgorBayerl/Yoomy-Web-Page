import styled from 'styled-components';

export const BoxContent = styled.div`
  padding: 2rem 0;

  svg {
    font-size: 35px;
    fill: #000000;
  }

  .link-header {
    transition: 0.3s ease;
  }
  .link-header:hover {
    filter: brightness(80%)!important;
  }

  button {
    background-color: var(--color-primary);
    border: none;
    border-radius: 3px;
    color: #fff;
    padding: 5px 15px;
    font-size: 16px;
    font-weight: 600;
    transition: 0.3s ease;
  }

  button:hover {
    background-color: var(--color-secondary);
  }

  @media (min-width: 576px) {
    .logo {
      max-width: 200px;
    }
  }
  @media (min-width: 768px) {
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
  }
`;

export const Hamburger = styled.div`
    display: none;
    flex-direction: column;
    cursor: pointer;
    span {
        height: 2px;
        width: 25px;
        background: #1C8676;
        margin-bottom: 4px;
        border-radius: 5px;
    }
    @media (max-width: 992px) {
        display: flex;
    }
`;


export const MenuContainerDiv = styled.div`
    display:flex;
    flex-direction: column;
    @media (min-width: 993px) {
        flex-direction: row;
        padding-right: 2rem;
    }
`;

export const MenuLink = styled.a`
    background-color: #FFF;
    padding: 1rem 0rem;
    width:140px;
    /* height:50px; */
    font-weight:bolder;
    font-size: 1rem;
    margin: 0.5rem 1rem;
    border-radius: 5px;
    cursor: pointer;
    text-align: center;
    text-decoration: none;
    color: #FBBC05;
    transition: all 0.2s ease-in;
    &:hover {
        background-color: #FFF;
        color: #000;
    }
`;

export const MenuEntrarButton = styled.button`
  @media (max-width: 992px) {
    margin-top: 1rem;
  }
    
`;



export const Nav = styled.div`
    padding: 0 2rem;
    display: flex;
    z-index: 100;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    /* background: red; */
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    @media (max-width: 992px) {
        padding: 0 0;
        background: white;
        width:100%;
        /* box-shadow: 0px 5px 5px #ececec; */
    }
`;

export const NavContent = styled.div`
    max-width: 1200px;
    flex:1;
    /* background: blue; */
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    top: 0;
    left: 0;
    right: 0;
    @media (max-width: 992px) {
        padding: 0 2rem;
    }
`

export const LogoLink = styled.a`
    align-items:center;
    cursor: pointer;
    width: 205px;
    @media (max-width: 943px) {
        width: 130px;
    }
`;

export const Menu = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    transition: max-height 0.3s ease-in-out;
    @media (max-width: 992px) {
        overflow: hidden;
        flex-direction: column;
        max-height: ${({ isOpen }) => (isOpen ? "300px" : "0")};
        transition: max-height 0.3s ease-in-out;
        width: 100%;
    }
`;



