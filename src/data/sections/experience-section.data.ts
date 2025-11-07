import type { ExperienceSection } from '@/components/sections/Experience/ExperienceSection.types'
import type { ReadonlyDeep } from 'type-fest'
import * as links from '../../helpers/linksIconSet'
import * as skills from '../../helpers/skillsIconSet'

const experienceSectionData = {
	config: {
		title: 'Work experience',
		slug: 'experience',
		icon: 'fa6-solid:suitcase',
		visible: true
	},
	jobs: [
		{
			company: 'Mindera',
			image: import('@/assets/logos/mindera-logo.png'),

			links: [
				links.linkedin({ url: 'https://www.linkedin.com/company/mindera-world' }),
				links.website({ url: 'https://mindera.com/' })
			],
			roles: [
				{
					title: 'Senior Software Engineer',
					dates: [[new Date('2022-11'), null]],
					description: `
						**Project description:** Signup Portal; 2K portal for account creation and permission management for the company's games.
						**Project area:** Games, Signup Website

						- Maintained the account signup portal, ensuring smooth user registration and functionality.
						- Integrated the portal with third-party services, including Facebook, Meta, and Twitch.
						- Integrated with Contentful for efficient content management and delivery.
					`,
					tagsList: {
						title: 'Technologies',
						tags: [
							skills.react(),
							skills.nextJs(),
							skills.typescript(),
							skills.pnpm(),
							skills.contentful(),
							skills.tailwindCss(),
							skills.koa(),
							skills.rollup()
						]
					}
				},
				{
					title: 'Mid Software Engineer',
					dates: [[new Date('2022-11'), new Date('2023-03')]],
					description: `
						**Project description:** 2K Developers portal news; Promotional platform for the service offered by 2K, along with documentation and updates.
						**Project area:** Games, Portal news Website

						- Maintained a portal website for posting company news for 2K about their platform.
						- Revamped the promo landing page, enhancing design and functionality.
						- Installed and customized the DecapCMS open-source solution, enabling UI-based editing of Markdown pages within the portal.
						- Developed an extension for DecapCMS to automate GitHub repository updates using a GitHub App and a bot.
						- Created an extension for DecapCMS to enable direct image uploads to an Amazon S3 bucket.
					`,
					tagsList: {
						title: 'Technologies',
						tags: [
							skills.react(),
							skills.typescript(),
							skills.amazonS3(),
							skills.decapCMS(),
							skills.docusaurus()
						]
					}
				}
			]
		},
		{
			company: 'Gateware',
			image: import('@/assets/logos/gateware-logo.jpeg'),
			links: [
				links.linkedin({ url: 'https://www.linkedin.com/company/gatewaretech' }),
				links.website({ url: 'https://gateware.com.br/en/who-we-are/' })
			],
			roles: [
				{
					title: 'Mid Software Engineer',
					dates: [[new Date('2022-02'), new Date('2022-09')]],
					description: `
						**About the project:** LivID (Version 3.0). Platform for conducting life verification and updating registration information for affiliated associations
						**Project area:** Financial, Pension;

						- Led the development of a new version of the LivID product from the ground up. This version heavily integrates Firebase services, including Firestore, Functions, Analytics, Performance, and Crashlytics, among others. The backend was built in TypeScript, following Domain-Driven Design (DDD) and Clean Architecture principles.
						- Developed the mobile app using Flutter, implementing the Provider pattern/framework to separate business logic from UI components.
						- Built the backoffice using React, hosted on Firebase Hosting for seamless deployment.
						- Ensured quality assurance by setting up a CI agent to run unit tests, improving reliability and maintainability.
						- Created a CLI tool to automate key processes, such as scaffolding client environments, generating default users, and seeding default values.
					`,
					tagsList: {
						title: 'Technologies',
						tags: [
							skills.typescript(),
							skills.firebase(),
							skills.flutter(),
							skills.expressJs(),
							skills.jest()
						]
					}
				},
				{
					title: 'Mid Software Engineer',
					dates: [[new Date('2021-05'), new Date('2021-10')]],
					description: `
						**About the project:** AppBroker. System for selling insurance at point-of-sale, running directly on credit card terminals.
						**Project area:** Retail, Insurance;

						- Developed a microservice and a Backend-for-Frontend (BFF) to serve as a proxy for multiple microservices in a major Brazilian retail company. Built with Node.js and TypeScript, it leveraged a Redis-based queuing system to generate PDFs from DOCX templates and automate email delivery to customers.
						- Designed and implemented a front-end application for payment terminals, enabling the sale of insurance products directly through the device.
					`,
					tagsList: {
						title: 'Technologies',
						tags: [
							skills.nodeJs(),
							skills.typescript(),
							skills.docker(),
							skills.azure(),
							skills.flutter(),
							skills.kubernetes(),
							{ name: 'Cielo LIO Payment Terminal', icon: 'ic:round-payment' }
						]
					}
				},
				{
					title: 'Junior Software Engineer',
					dates: [
						[new Date('2020-04'), new Date('2021-04')],
						[new Date('2021-10'), new Date('2022-09')]
					],
					description: `
						**About the project:** LivID (Legacy Version). Platform for conducting life verification and updating registration information for affiliated associations.
						**Project area:** Financial, Pension;

						- Maintained and enhanced the mobile app, web backoffice, and backend, ensuring stability and performance.
						- Engineered a new module for processing payload files, scaling the system from 2,000 to 10,000 users while improving the validation process.
						- Designed and deployed new features in the client’s environment to enhance functionality and user experience.
						- Engaged directly with clients to gather requirements, design requested features, andimplement bug fixes, ensuring alignment with business needs.
						`,
					tagsList: {
						title: 'Technologies',
						tags: [skills.javascript(), skills.flutter(), skills.firebase()]
					}
				},
				{
					title: 'Junior Software Engineer',
					dates: [[new Date('2019-12'), new Date('2020-03')]],
					description: `
						**About the project:** STARC (Robot to process back data). Bot for automation and processing of banking data.
						**Project area:** Retail, Insurance;

						- Monitored and maintained application logs to detect errors in data processing, performing manual fixes in the client’s environment when necessary.
						- Developed new features based on client requests and implemented bug fixes to enhance system reliability and performance.
					`,
					tagsList: {
						title: 'Technologies',
						tags: [skills.dotnet(), skills.sqlServer()]
					}
				}
			]
		},
		{
			company: 'BNE - EMPLOYER',
			image: import('@/assets/logos/bne-logo.png'),
			links: [
				links.website({ url: 'https://www.bne.com.br/' }),
				links.linkedin({ url: 'https://www.linkedin.com/company/bneempregos' })
			],
			roles: [
				{
					title: 'Junior Software Engineer',
					dates: [[new Date('2018-11'), new Date('2019-09')]],
					description: `
						**Project description:** TrabalhaBrasil. Portal for offering job opportunities to candidates in the Brazilian job market.
						**Project area:** Employment Portal;

						- Provided system support, ensuring stability and resolving technical issues.
						- Implemented a boleto (bank slip) payment option and integrated the existing website with a payment middleware platform to enhance transaction capabilities.
					`,
					tagsList: {
						title: 'Technologies',
						tags: [
							skills.dotnet({ name: 'ASP.MVC' }),
							skills.dotnet({ name: '.NET Core' }),
							skills.sqlServer(),
							{ name: 'Solr' }
						]
					}
				},
				{
					title: 'Junior Software Engineer',
					dates: [[new Date('2018-11'), new Date('2019-10')]],
					description: `
						**Project description:** Banco Nacional de Empregos; Portal for offering job opportunities to candidates in the Brazilian job market.
						**Project area:** Employment Portal;

						- Maintained and optimized the system to ensure its stability and performance.
						- Migrated parts of the system’s API from WebForms to ASP.NET MVC and .NET Core, improving scalability and modernization.
						- Developed a new module for querying and displaying job opportunities, replacing the existing microservice with a more efficient and scalable solution.
					`,
					tagsList: {
						title: 'Technologies',
						tags: [
							skills.dotnet({ name: 'ASP.MVC' }),
							skills.dotnet({ name: '.NET Core' }),
							skills.sqlServer(),
							{ name: 'WebForms' },
							{ name: 'Solr' }
						]
					}
				}
			]
		},
		{
			company: 'C3SL - CENTER FOR SCIENTIFIC COMPUTING AND FREE SOFTWARE',
			image: import('@/assets/logos/c3sl-logo.png'),
			links: [links.website({ url: 'https://www.c3sl.ufpr.br/' })],
			roles: [
				{
					title: 'Scholarship',
					dates: [[new Date('2015-10'), new Date('2016-12')]],
					description: `
						**Project description:** PortalMEC. Portal for sharing study materials such as articles, slide presentations, videos, games, and more, between schools and universities across Brazil.
						**Project area:** Education

						- Ensured the system's upkeep, maintaining stability and performance.
						- Created and maintained API documentation for improved clarity and developer accessibility.
						- Designed and developed a ranking application to enhance search results by balancing content relevance based on specific criteria.
					`,
					tagsList: {
						title: 'Technologies',
						tags: [skills.rubyOnRails(), skills.postgreSql()]
					}
				}
			]
		}
	]
} as const satisfies ReadonlyDeep<ExperienceSection>

export default experienceSectionData
