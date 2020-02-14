import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { Header } from './header'
import { Main } from './main'
import { Footer } from './footer'
import { Brand } from '../../brand'
import { Menu, MobileMenu } from '../../menu'
import { useLayoutContext } from '../../../contexts'
import { useMenu } from '../../../hooks'

import '../../../styles/normalize.css'
import '../../../styles/customize.css'

const LayoutWrapper = styled.div`
    min-height: 100vh;
    display: flex;
    flex-direction: column;
`

export const DefaultLayout = ({ children }) => {
    const menuItems = useMenu()
    const { isCompact } = useLayoutContext()

    return (
        <LayoutWrapper>
            <Header compact={ isCompact }>
                <Brand>
                    Site Title
                </Brand>
                { isCompact ? <MobileMenu items={ menuItems} /> : <Menu items={ menuItems} /> }
            </Header>
            <Main>
                { children }
            </Main>
            <Footer>
                &copy; { new Date().getFullYear() }
            </Footer>
        </LayoutWrapper>
    )
}

DefaultLayout.propTypes = {
    children: PropTypes.node.isRequired,
}
