import React from 'react'
import { Title, Paragraph } from '../components/typography'
import { PageContent } from '../components/layout'
import { SEO } from '../components/seo'

const AboutPage = () => (
    <PageContent>
        <SEO 
            title="About"
            description=""
            keywords=""
        />
        <Title>About</Title>

        <Paragraph>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est veniam cum, harum perspiciatis explicabo repellat quam saepe sit consequuntur fuga. Obcaecati quae ullam voluptas nisi eum excepturi quaerat dolorum optio, praesentium modi. Perferendis, in.
        </Paragraph>
    </PageContent>
)

export default AboutPage
