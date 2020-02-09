import React, { useEffect, useState } from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import { CloseIcon, HamburgerIcon } from '../icons'
import { Brand } from '../../components/brand'

const Overlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: 100vh;
    bottom: 0;
    z-index: 1;
    background-color: #000000;
    transition: filter 250ms;
    filter: opacity(${ props => props.shaded ? '0.75' : '0' });
    pointer-events: ${ props => props.shaded ? 'auto' : 'none' };
`

const Wrapper = styled.div`
    // & * { border: 2px solid #f99; }
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    height: 100%;
    // background-color: rebeccapurple;
`

const Toggler = styled.button`
    cursor: pointer;
    background-color: transparent;
    border: 0;
    z-index: 3;
    position: absolute;
    top: 1rem;
    right: 1rem;
`

const Drawer = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    width: calc(100vw - 6rem);
    height: 100vh;
    background-color: var(--color-primary);
    transition: transform 500ms;
    transform: ${ props => props.active ? 'translateX(0)' : 'translateX(-100vw)'};
    padding: 2rem 0 0 0;
    z-index: 2;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`

const Nav = styled.nav`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 2rem 0;
    flex: 1;
`

const MenuItem = styled(Link)`
    padding: 1rem 2rem;
    width: 100%;
    color: #eef;
    letter-spacing: 2px;
    font-size: 125%;
    font-weight: bold;
    text-decoration: none;
    transform: translateX(0);
    transition: color 250ms, background-color 250ms;
    text-transform: uppercase;
    &.active {
        background-color: #ffffff33;
        color: #eee;
    }
    &:hover {
        color: #eee;
        background-color: #ffffff22;
    }
`

export const MobileMenu = ({ items }) => {
    const [visible, setVisible] = useState(false)
    
    const handleToggleMenu = () => setVisible(!visible)
    const handleCloseMenu = () => setVisible(false)

    useEffect(() => {
        const escapeHatch = e => {
            if (e.keyCode === 27) {
                handleCloseMenu()
            }
        }
        if (visible) {
            document.addEventListener('keydown', escapeHatch)
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = 'auto'
        }
        return () => document.removeEventListener('keydown', escapeHatch)
    }, [visible])

    return (
        <Wrapper>
            <Toggler onClick={ handleToggleMenu }>
                { visible ? <CloseIcon size="36" fill="var(--color-white)" /> : <HamburgerIcon size="36" fill="var(--color-white)"  /> }
            </Toggler>
            <Drawer active={ visible } onKeyDown={ e => console.log(e) }>
                <Nav>
                    { items.map(item => <MenuItem key={ item.text } to={ item.path } activeClassName="active" onClick={ handleCloseMenu }>{ item.text }</MenuItem>) }
                </Nav>
            </Drawer>
            <Overlay shaded={ visible } onClick={ handleCloseMenu } />
        </Wrapper>
    )
}
