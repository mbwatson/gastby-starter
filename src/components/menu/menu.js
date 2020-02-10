import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

const Navbar = styled.nav`
    height: 100%;
    flex: 1;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
`

const MenuItem = styled(Link)`
    // flex: 1;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    height: 100%;
    text-decoration: none;
    text-transform: uppercase;
    color: var(--color-white);
    padding: 1rem 2rem;
    transition: background-color 250ms, border-bottom-color 250ms;
    background-color: transparent;
    border-top-width: 0.5rem;
    border-top-style: solid;
    border-top-color: transparent;
    border-bottom-width: 0.5rem;
    border-bottom-style: solid;
    border-bottom-color: transparent;
    &.active {
        border-bottom-color: var(--color-primary);
    }
    &:hover {
        background-color: var(--color-primary);
    }
`

export const Menu = ({ items }) => {
    return (
        <Navbar>
            { items.map(item => <MenuItem key={ item.text } to={ item.path } activeClassName="active">{ item.text }</MenuItem>) }
        </Navbar>
    )
}