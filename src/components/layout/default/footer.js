import styled from 'styled-components'

export const Footer = styled.footer(({ theme }) => `
  background-color: ${ theme.color.black };
  color: #ccc;
  padding: 2rem;
  filter: drop-shadow(0 0 0.25rem rgba(0, 0, 0, 0.5));
`)
