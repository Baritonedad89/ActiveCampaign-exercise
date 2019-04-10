import React from 'react'
import styled from 'styled-components'


const Div = styled.div`
    background-color: #b3e5fc;
    height: 300px;
`

const Logo = styled.img`
height: 200px;
width: 400px;
position: relative;
margin: auto;
top: 50%;
transform: translateY(-50%);


`


const Jumbotron = (props) => {
    return (
        <Div>
            <Logo src={props.logo}></Logo>
        </Div>




        
    )
}

export default Jumbotron