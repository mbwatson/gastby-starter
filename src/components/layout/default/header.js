import styled from 'styled-components'

export const Header = styled.header(({ theme }) => `
    // border: 1px solid #99f; & * { border: 1px solid #99f; }
    background-color: ${ theme.color.primary.dark };
    color: ${ theme.color.white };
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: stretch;
    height: 4.5rem;
    filter: drop-shadow(0 0 0.25rem rgba(0, 0, 0, 0.5));
`)
