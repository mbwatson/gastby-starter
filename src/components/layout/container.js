import styled from 'styled-components'

export const Container = styled.div`
    & * { border: 1px solid #f99; }
    width: ${ props => props.width || DEFAULT_WIDTH };
    max-width: ${ props => props.maxWidth || DEFAULT_MAXWIDTH };
    ${ props => props.minWidth ? `max-width: ${ props.minWidth };` : undefined }
    ${ props => props.center ? 'margin: auto;' : undefined }
`

const DEFAULT_WIDTH = "calc(100% - 4rem)"
const DEFAULT_MAXWIDTH = "800px"
const TOP_GUTTER = '2rem'
const BOTTOM_GUTTER = '2rem'

export const PageContent = styled(Container)`
    margin: auto;
    margin-top: ${ props => props.gutters ? TOP_GUTTER : 0 };
    margin-bottom: ${ props => props.gutters ? BOTTOM_GUTTER : 0 };
`
