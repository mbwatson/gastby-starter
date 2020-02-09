import React from 'react'
import { PageContent } from '../components/layout'
import { Title, Paragraph } from '../components/typography'
import { SEO } from '../components/seo'

const IndexPage = () => (
    <PageContent>
        <SEO 
            title="Home"
            description=""
            keywords=""
        />
        <Title>Home</Title>

        <Paragraph>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni libero quisquam eos consectetur excepturi possimus qui, aliquam minus ratione molestias vero deserunt magnam sed obcaecati ullam nobis, aperiam sapiente molestiae laboriosam maxime id laborum doloribus corporis. Excepturi aliquid, nisi minus quidem, commodi inventore maxime? Temporibus.
        </Paragraph>

        <Paragraph>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi, suscipit? Nesciunt ipsa excepturi nisi quo. Quibusdam quasi fugit iste quos expedita provident maiores.
        </Paragraph>
    </PageContent>
)

export default IndexPage
