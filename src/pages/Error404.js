import React from 'react';
import styled from 'styled-components';

const Error404 = () => {
    return (
        <Wrapper>
            <h1>Error 404</h1>
            <h3>Sorry, page not found!</h3>
            <a data-testid='back-home' href='/' className='btn'>
                Back to Home
            </a>
        </Wrapper>
    );
};

const Wrapper = styled.section`
    min-height: 100vh;
    display: grid;
    place-items: center;
    background: var(--clr-grey-9);
    text-align: center;
    h1 {
        font-size: 6rem;
    }
    h3 {
        color: var(--clr-grey-3);
        margin-bottom: 1.5rem;
    }
`;

export default Error404;