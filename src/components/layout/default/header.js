import { Link } from "gatsby"
import styled from 'styled-components'
import PropTypes from "prop-types"
import React from "react"

export const Header = styled.header`
    // border: 1px solid #99f; & * { border: 1px solid #99f; }
    background-color: var(--color-primary-dark);
    color: var(--color-white);
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: stretch;
    height: 5rem;
    filter: drop-shadow(0 0 0.25rem rgba(0, 0, 0, 0.5));
`
