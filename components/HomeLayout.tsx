import Link from 'next/link'
import styled from 'styled-components'
import Introduction from './Home_Introduction'

const LayoutContainer = styled.div`
    padding-top: 90px;
    background-color: #FBBC05;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: -100;
`



export default function HomeLayout(){
    return(
        <LayoutContainer>
            <Introduction/>
        </LayoutContainer>
    );
}