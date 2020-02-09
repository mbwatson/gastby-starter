import styled from 'styled-components'

const DEFAULT_WIDTH = "calc(100vw - 4rem)"
const DEFAULT_MAXWIDTH = "800px"
const TOP_MARGIN = '2rem'
const BOTTOM_MARGIN = '2rem'

export const Container = styled.div`
    & * { border: 1px solid #f99; }
    width: ${ props => props.width || DEFAULT_WIDTH };
    max-width: ${ props => props.maxWidth || DEFAULT_MAXWIDTH };
    ${ props => props.minWidth ? `max-width: ${ props.minWidth };` : undefined }
    ${ props => props.center ? 'margin: auto;' : undefined }
`

export const PageContent = styled(Container)`
    margin: auto;
    margin-top: ${ TOP_MARGIN };
    margin-bottom: ${ BOTTOM_MARGIN };
`
