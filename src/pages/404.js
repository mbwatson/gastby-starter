import React from 'react'
import { PageContent } from '../components/layout'
import { Title } from '../components/typography'
import { SEO } from '../components/seo'

const NotFoundPage = () => (
    <PageContent>
        <SEO title="404: Not found" />

        <Title>404 - NOT FOUND</Title>

        <p>Our sincerest apologies; we've led you astray.</p>
    </PageContent>
)

export default NotFoundPage
