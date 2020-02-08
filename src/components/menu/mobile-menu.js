import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

const Navbar = styled.nav`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
`

const MenuItem = styled(Link)``

export const MobileMenu = ({ items }) => {
    return (
        <Navbar>
            { items.map(item => <MenuItem to={ item.path }>{ item.text }</MenuItem>) }
        </Navbar>
    )
}