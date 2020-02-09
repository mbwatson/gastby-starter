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
    transition: background-color 250ms;
    background-color: transparent;
    &:hover {
        background-color: var(--color-primary);
    }
    padding: 2rem;
`

export const Menu = ({ items }) => {
    return (
        <Navbar>
            { items.map(item => <MenuItem key={ item.text } to={ item.path }>{ item.text }</MenuItem>) }
        </Navbar>
    )
}