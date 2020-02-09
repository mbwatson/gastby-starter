import React from 'react'
import { Title, Paragraph } from '../components/typography'
import { PageContent } from '../components/layout'
import { SEO } from '../components/seo'

const ContactPage = () => (
    <PageContent>
        <SEO 
            title="Contact"
            description=""
            keywords=""
        />
        <Title>Contact</Title>

        <Paragraph>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius nobis cupiditate laudantium.
        </Paragraph>

        <Paragraph>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis dicta facilis ab culpa nostrum commodi, iure impedit temporibus quas fugit minima ex, dolorum in, magnam consectetur voluptatibus tempora vitae possimus sit veritatis illum labore earum fugiat. Aliquam rem cum expedita harum, dolore quos assumenda placeat laboriosam ex, odio eaque neque eligendi impedit! Ex impedit commodi cumque! Sapiente consequatur rem consequuntur mollitia molestiae quae, quia deleniti harum, eaque dolore nemo, maiores obcaecati explicabo et itaque dolorem!
        </Paragraph>
    </PageContent>
)

export default ContactPage
