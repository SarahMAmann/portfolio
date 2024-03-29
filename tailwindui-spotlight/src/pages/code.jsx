import Image from 'next/image'
import Head from 'next/head'

import { Card } from '@/components/Card'
import { SimpleLayout } from '@/components/SimpleLayout'

import logoGMBinder from '@/images/logos/gm-binder-logo.png'
import logoPoppins from '@/images/logos/poppins-payroll-logo.png'
import logoCarbonFootprint from '@/images/logos/pork-logo.png'
import logoImpact from '@/images/logos/impact-logo.png'
import logoAmberdata from '@/images/logos/amberdata-logo.png'


const projects = [
  {
    name: 'AD Derivatives',
    description:
      'Crypto options analytics for institutional and individual traders.',
    link: { href: 'https://pro.amberdata.io/', label: 'pro.amberdata.io' },
    logo: logoAmberdata,
  },
  {
    name: 'IMPACT Community Action Partnership',
    description:
      'Safer online alternative to food pantry shopping.',
    link: { href: 'https://wewritecode.com/work/platform-buildout-for-online-food-pantry/', label: 'impactcap.org' },
    logo: logoImpact,
  },
  {
    name: 'Carbon Footprint Calculator',
    description:
      'National Pork Board software for tracking carbon emissions of producer farms.',
    link: { href: 'https://cfc.pork.org/account/login', label: 'cfc.pork.org' },
    logo: logoCarbonFootprint,
  },
  {
    name: 'Poppins Payroll',
    description:
      'Payroll and tax management and reports for in-home staff.',
    link: { href: 'https://www.poppinspayroll.com/', label: 'poppinspayroll.com' },
    logo: logoPoppins,
  },
  {
    name: 'GM Binder',
    description:
      'A platform for rpg document creation and storage.',
    link: { href: 'https://www.gmbinder.com/', label: 'gmbinder.com' },
    logo: logoGMBinder,
  },
]

function LinkIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        d="M15.712 11.823a.75.75 0 1 0 1.06 1.06l-1.06-1.06Zm-4.95 1.768a.75.75 0 0 0 1.06-1.06l-1.06 1.06Zm-2.475-1.414a.75.75 0 1 0-1.06-1.06l1.06 1.06Zm4.95-1.768a.75.75 0 1 0-1.06 1.06l1.06-1.06Zm3.359.53-.884.884 1.06 1.06.885-.883-1.061-1.06Zm-4.95-2.12 1.414-1.415L12 6.344l-1.415 1.413 1.061 1.061Zm0 3.535a2.5 2.5 0 0 1 0-3.536l-1.06-1.06a4 4 0 0 0 0 5.656l1.06-1.06Zm4.95-4.95a2.5 2.5 0 0 1 0 3.535L17.656 12a4 4 0 0 0 0-5.657l-1.06 1.06Zm1.06-1.06a4 4 0 0 0-5.656 0l1.06 1.06a2.5 2.5 0 0 1 3.536 0l1.06-1.06Zm-7.07 7.07.176.177 1.06-1.06-.176-.177-1.06 1.06Zm-3.183-.353.884-.884-1.06-1.06-.884.883 1.06 1.06Zm4.95 2.121-1.414 1.414 1.06 1.06 1.415-1.413-1.06-1.061Zm0-3.536a2.5 2.5 0 0 1 0 3.536l1.06 1.06a4 4 0 0 0 0-5.656l-1.06 1.06Zm-4.95 4.95a2.5 2.5 0 0 1 0-3.535L6.344 12a4 4 0 0 0 0 5.656l1.06-1.06Zm-1.06 1.06a4 4 0 0 0 5.657 0l-1.061-1.06a2.5 2.5 0 0 1-3.535 0l-1.061 1.06Zm7.07-7.07-.176-.177-1.06 1.06.176.178 1.06-1.061Z"
        fill="currentColor"
      />
    </svg>
  )
}

export default function Projects() {
  return (
    <>
      <Head>
        <title>Projects - Sarah Benson</title>
        <meta
          name="description"
          content="Software I've written."
        />
      </Head>
      <SimpleLayout
        title="Software I've written."
        intro="I’ve worked on many projects over the years, but these are a few I've made significant contributions to that are currently in use by both major corporations and individual users."
      >
        <ul
          role="list"
          className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3"
        >
          {projects.map((project) => (
            <Card as="li" key={project.name}>
              <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
                <Image
                  src={project.logo}
                  alt=""
                  className="h-8 w-8"
                  unoptimized
                />
              </div>
              <h2 className="mt-6 text-base font-semibold text-zinc-800 dark:text-zinc-100">
                <Card.Link href={project.link.href}>{project.name}</Card.Link>
              </h2>
              <Card.Description>{project.description}</Card.Description>
              <p className="relative z-10 mt-6 flex text-sm font-medium text-zinc-400 transition group-hover:text-teal-500 dark:text-zinc-200">
                <LinkIcon className="h-6 w-6 flex-none" />
                <span className="ml-2">{project.link.label}</span>
              </p>
            </Card>
          ))}
        </ul>
      </SimpleLayout>
    </>
  )
}
