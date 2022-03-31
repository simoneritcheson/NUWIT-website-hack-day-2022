import React from 'react';
import styled from 'styled-components';
import NUWIT from '../images/NUWIT_logo.png';

const HomeStyle = styled.div`
.container {
    margin: 3rem
}
.img-1 {
    height: 50%;
    width: 50%;
}
.row {
    display: flex;
    flex-direction: row;
}
.group-text {
    margin: 3rem;
    padding: 1rem;
    background-color: aliceblue;
}
`
export default function Home() {
  return (
    <HomeStyle>
        <div class="container">
            <div class="row">
                <img class="img-1" src={NUWIT} alt='NUWIT logo' />
                <div class="group-text">
                    <h1> Welcome to Website Hack Day with NUWIT! </h1>
                    <p> Fun times with react :) Some stuff you can learn is listed below: </p>
                    <ul>
                        <li> HTML </li>
                        <li> CSS </li>
                        <li> Bootstrap </li>
                        <li> and more!  </li>
                    </ul>
                </div>
            </div>

            <div>
                
            </div>
        </div>
    </HomeStyle>
  )
}
