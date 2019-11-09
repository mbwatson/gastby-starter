import React, { Fragment } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { Header } from './header'
import { Main } from './main'
import { Footer } from './footer'

import '../../../styles/normalize.css'
import '../../../styles/customize.css'

const LayoutWrapper = styled.div`
    min-height: 100vh;
    display: flex;
    flex-direction: column;
`

export const DefaultLayout = ({ children }) => {
    return (
        <LayoutWrapper>
            <Header>
                Site Title
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
