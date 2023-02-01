import Head from 'next/head'
import Image from 'next/image'
import { Card } from '@/components/Card'
import { Section } from '@/components/Section'
import { SimpleLayout } from '@/components/SimpleLayout'
import portraitImage from '@/images/portrait.jpg'

function SpeakingSection({ children, ...props }) {
  return (
    <Section {...props}>
      <div className="space-y-16">{children}</div>
    </Section>
  )
}

function Appearance({ title, description, event, cta, href }) {
  return (
    <Card as="article">
      <Card.Title as="h3" href={href}>
        {title}
      </Card.Title>
      <Card.Eyebrow decorate>{event}</Card.Eyebrow>
      <Card.Description>{description}</Card.Description>
      <Card.Cta>{cta}</Card.Cta>
    </Card>
  )
}

export default function Speaking() {
  return (
    <>
      <Head>
        <title>DevRel - Sarah Benson</title>
        <meta
          name="description"
          content="I’ve been a developer advocate, created dozens of developer education videos, and
          interviewed industry leaders at crypto events around the world."
        />
      </Head>
      <div className='flex'>
      <SimpleLayout
        title="I’ve been a developer advocate, created dozens of developer education videos, and
        interviewed industry leaders at crypto events around the world."
        intro="One of my favorite ways to share my ideas about software is through content creation.
        I've had the opportunity to work as a developer advocate for Gelato Network, curating written and video
        documentation of their smart contract automation platform. In addition to creating videos for blockchain developers
        on my own educational YouTube channel, I've been able to partner 
        with big industry names like Thirdweb, The DeSo Foundation and others to make video tutorials for their social outlets.
        Check out some highlights here."
      >

        
        <div className="space-y-20">
          <SpeakingSection title="Videos">
            <Appearance
              href="https://www.youtube.com/watch?v=Axv9xxCSmdQ"
              title="Interviewing Web3 Founders at DevConnect"
              description=""
              event="DevConnect Amsterdam 2022"
              cta="Watch video"
            />
            <Appearance
              href="https://www.youtube.com/watch?v=XAQupxAOrK8"
              title="DeSo x Metamask: Crypto Key Pairs + Signing Cross-Chain Tx's"
              description=""
              event="The DeSo Foundation"
              cta="Watch video"
            />
            <Appearance
              href="https://www.youtube.com/watch?v=sUnMDRzVbqs"
              title="How to Render NFT Metadata In a React App (NFT Metadata Tutorial)"
              description=""
              event="Thirdweb"
              cta="Watch video"
            />
            <Appearance
              href="https://www.youtube.com/watch?v=P5jetKCsupo"
              title="Build Bored Ape Yacht Club with Next.js, Tailwind & Thirdweb (NFT Drop Tutorial)"
              description=""
              event="Clever Programmer"
              cta="Watch video"
            />
          </SpeakingSection>
          {/* <SpeakingSection title="Podcasts">
            <Appearance
              href="#"
              title="Using design as a competitive advantage"
              description="How we used world-class visual design to attract a great team, win over customers, and get more press for Planetaria."
              event="Encoding Design, July 2022"
              cta="Listen to podcast"
            />
            <Appearance
              href="#"
              title="Bootstrapping an aerospace company to $17M ARR"
              description="The story of how we built one of the most promising space startups in the world without taking any capital from investors."
              event="The Escape Velocity Show, March 2022"
              cta="Listen to podcast"
            />
            <Appearance
              href="#"
              title="Programming your company operating system"
              description="On the importance of creating systems and processes for running your business so that everyone on the team knows how to make the right decision no matter the situation."
              event="How They Work Radio, September 2021"
              cta="Listen to podcast"
            />
          </SpeakingSection> */}
        </div>
      </SimpleLayout>




      <div className="lg:pl-20">
            <div className="max-w-xs px-2.5 lg:max-w-none">
              <Image
                src={portraitImage}
                alt=""
                sizes="(min-width: 1024px) 32rem, 20rem"
                className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
              />
            </div>
          </div>

      </div>
    </>
  )
}
