import styled from 'styled-components'

export const Main = styled.main`
    max-width: 500px;
    margin: auto;
`;

export const Header = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 16px;
    height: 64px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.32);
    box-sizing: border-box;
    h1 {
        display: inline-block;
        font-size: 18px;
        width: auto;
        color: #fff;
    }
`;

export const Container = styled.section`
    width: 100%;
    padding: 16px;
`;