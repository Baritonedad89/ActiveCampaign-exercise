import React from 'react'
import styled from 'styled-components'


const Div = styled.div`
    background-color: #b3e5fc;
    height: 300px;
`

const Logo = styled.img`
width: 300px;
height: 50px;
display: flex;
margin: 0 auto;

`


const Jumbotron = (props) => {
    return (
        <Div>
            <Logo src={props.logo}></Logo>
        </Div>




        
    )
}

export default Jumbotron