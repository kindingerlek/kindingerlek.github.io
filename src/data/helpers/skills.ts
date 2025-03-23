import createSkillFactory from '@/data/_internals/create-skill-factory'
import type { AllIcons } from 'iconify-icon-names'

/*

Place where you can define all your skills.
This way, you can ensure one skill has the same name, icon, and URL among all resume sections.

Where skills are used:
- experience-section.data.ts
- portfolio-section.data.ts
- skills-section.data.ts

Usage examples:
skill() — returns skill object without any customizations.
skill({ level: 3 }) — returns a levelled-skill. It can be used only in skills-section.data.ts.
skill({ name: '...' }) — returns skill object with a custom name.
skill({ description: '...' }) — returns skill with a description displayed when user hovers over it.

*/

export const apolloGraphql = createSkillFactory({
	name: 'Apollo GraphQL',
	icon: 'simple-icons:apollographql',
	iconColor: '#311C87',
	url: 'https://www.apollographql.com/'
})

export const astro = createSkillFactory({
	name: 'Astro',
	icon: 'simple-icons:astro',
	iconColor: '#FF5D01',
	url: 'https://astro.build/'
})

export const chakraUi = createSkillFactory({
	name: 'Chakra UI',
	icon: 'simple-icons:chakraui',
	iconColor: '#319795',
	url: 'https://chakra-ui.com/'
})

export const cypress = createSkillFactory({
	name: 'Cypress',
	icon: 'simple-icons:cypress',
	iconColor: '#17202C',
	url: 'https://www.cypress.io/'
})

export const eslint = createSkillFactory({
	name: 'ESLint',
	icon: 'simple-icons:eslint',
	iconColor: '#4B32C3',
	url: 'https://eslint.org/'
})

export const firebase = createSkillFactory({
	name: 'Firebase',
	icon: 'simple-icons:firebase',
	iconColor: '#FFCA28',
	url: 'https://firebase.google.com/'
})

export const jest = createSkillFactory({
	name: 'Jest',
	icon: 'simple-icons:jest',
	iconColor: '#C21325',
	url: 'https://jestjs.io/'
})

export const mongoDb = createSkillFactory({
	name: 'MongoDB',
	icon: 'simple-icons:mongodb',
	iconColor: '#47A248',
	url: 'https://www.mongodb.com/'
})

export const nestJs = createSkillFactory({
	name: 'NestJS',
	icon: 'simple-icons:nestjs',
	iconColor: '#E0234E',
	url: 'https://nestjs.com/'
})

export const nextJs = createSkillFactory({
	name: 'Next.js',
	icon: 'simple-icons:nextdotjs',
	iconColor: '#000000',
	url: 'https://nextjs.org/'
})

export const nx = createSkillFactory({
	name: 'Nx',
	icon: 'simple-icons:nx',
	iconColor: '#143055',
	url: 'https://nx.dev/'
})

export const pnpm = createSkillFactory({
	name: 'pnpm',
	icon: 'simple-icons:pnpm',
	iconColor: '#F69220',
	url: 'https://pnpm.io/'
})

export const postgreSql = createSkillFactory({
	name: 'PostgreSQL',
	icon: 'simple-icons:postgresql',
	iconColor: '#4169E1',
	url: 'https://www.postgresql.org/'
})

export const prettier = createSkillFactory({
	name: 'Prettier',
	icon: 'simple-icons:prettier',
	iconColor: '#F7B93E',
	url: 'https://prettier.io/'
})

export const react = createSkillFactory({
	name: 'React.js',
	icon: 'simple-icons:react',
	iconColor: '#61DAFB',
	url: 'https://reactjs.org/'
})

export const reactQuery = createSkillFactory({
	name: 'React Query',
	icon: 'simple-icons:reactquery',
	iconColor: '#FF4154',
	url: 'https://tanstack.com/query'
})

export const sass = createSkillFactory({
	name: 'SASS',
	icon: 'simple-icons:sass',
	iconColor: '#CC6699',
	url: 'https://sass-lang.com/'
})

export const supabase = createSkillFactory({
	name: 'Supabase',
	icon: 'simple-icons:supabase',
	iconColor: '#3ECF8E',
	url: 'https://supabase.io/'
})

export const tailwindCss = createSkillFactory({
	name: 'Tailwind CSS',
	icon: 'simple-icons:tailwindcss',
	iconColor: '#06B6D4',
	url: 'https://tailwindcss.com/'
})

export const typescript = createSkillFactory({
	name: 'TypeScript',
	icon: 'simple-icons:typescript',
	iconColor: '#3178C6',
	url: 'https://www.typescriptlang.org/'
})

export const vue = createSkillFactory({
	name: 'Vue.js',
	icon: 'simple-icons:vuedotjs',
	iconColor: '#4FC08D',
	url: 'https://vuejs.org/'
})

export const contentful = createSkillFactory({
	name: 'Contentful',
	icon: 'simple-icons:contentful',
	iconColor: '#F24E1E',
	url: 'https://www.contentful.com/'
})

export const decapCMS = createSkillFactory({
	name: 'DecapCMS',
	icon: 'simple-icons:decapcms' as AllIcons, // Icon exists but is not on types
	iconColor: '#F24E1E',
	url: 'https://www.decapcms.org/'
})

export const docusaurus = createSkillFactory({
	name: 'Docusaurus',
	icon: 'simple-icons:docusaurus' as AllIcons, // Icon exists but is not on types
	iconColor: '#3ecc5f',
	url: 'https://docusaurus.io/'
})

export const amazonS3 = createSkillFactory({
	name: 'Amazon S3',
	icon: 'simple-icons:amazons3',
	iconColor: '#569A31',
	url: 'https://aws.amazon.com/s3/'
})

export const nodeJs = createSkillFactory({
	name: 'Node.js',
	icon: 'simple-icons:nodedotjs',
	iconColor: '#339933',
	url: 'https://nodejs.org/'
})

export const docker = createSkillFactory({
	name: 'Docker',
	icon: 'simple-icons:docker',
	iconColor: '#2496ED',
	url: 'https://www.docker.com/'
})

export const azure = createSkillFactory({
	name: 'Azure',
	icon: 'simple-icons:azuredevops',
	iconColor: '#008AD4',
	url: 'https://azure.microsoft.com/'
})

export const flutter = createSkillFactory({
	name: 'Flutter',
	icon: 'simple-icons:flutter',
	iconColor: '#02569B',
	url: 'https://flutter.dev/'
})

export const kubernetes = createSkillFactory({
	name: 'Kubernetes',
	icon: 'simple-icons:kubernetes',
	iconColor: '#326CE5',
	url: 'https://kubernetes.io/'
})

export const dotnet = createSkillFactory({
	name: '.NET',
	icon: 'simple-icons:dotnet',
	iconColor: '#512BD4',
	url: 'https://dotnet.microsoft.com/'
})

export const sqlServer = createSkillFactory({
	name: 'SQL Server',
	icon: 'simple-icons:microsoftsqlserver',
	iconColor: '#CC2927',
	url: 'https://www.microsoft.com/en-us/sql-server'
})
export const solr = createSkillFactory({
	name: 'Solr',
	url: 'https://solr.apache.org/'
})

export const rubyOnRails = createSkillFactory({
	name: 'Ruby on Rails',
	icon: 'simple-icons:rubyonrails',
	iconColor: '#CC0000',
	url: 'https://rubyonrails.org/'
})

export const redis = createSkillFactory({
	name: 'Redis',
	icon: 'simple-icons:redis',
	iconColor: '#DC382D',
	url: 'https://redis.io/'
})

export const postgresql = createSkillFactory({
	name: 'PostgreSQL',
	icon: 'simple-icons:postgresql',
	iconColor: '#4169E1',
	url: 'https://www.postgresql.org/'
})

export const website = createSkillFactory({
	name: 'Website',
	icon: 'fa6-solid:link',
	iconColor: '#000000',
	url: '#'
})

export const expressJs = createSkillFactory({
	name: 'Express.js',
	icon: 'simple-icons:express',
	iconColor: '#000000',
	url: 'https://expressjs.com/'
})

export const koa = createSkillFactory({
	name: 'Koa.js',
	icon: 'simple-icons:koa',
	iconColor: '#000000',
	url: 'https://koajs.com/'
})

export const rollup = createSkillFactory({
	name: 'Rollup',
	icon: 'simple-icons:rollupdotjs',
	iconColor: '#EC4A3F',
	url: 'https://rollupjs.org/'
})
