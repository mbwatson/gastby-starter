import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

const Navbar = styled.nav`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
`

const MenuItem = styled(Link)``

export const Menu = ({ items }) => {
    return (
        <Navbar>
            { items.map(item => <MenuItem to={ item.path }>{ item.text }</MenuItem>) }
        </Navbar>
    )
}