import type { WorkExperienceItem } from './work-experience.types'

const experiences: WorkExperienceItem[] = [
	{
		company: 'EBSCO Information Services',
		role: 'Software Engineer II',
		period: 'Nov 2023 - Present',
		duration: 'About 3 years',
		location: 'United States · Remote',
		description: [
			'Facilitated API development using an API-first approach, improving usability by 30%, scalability by 15%, and performance by 10%, while reducing API-related incidents by 12% within six months.',
			'Configured the Search API with new parameters and integrated AWS native components to strengthen security protocols and improve reliability during peak traffic.',
			'Championed modernization of legacy Search APIs through AWS native component integration, improving maintainability and reducing operational costs over three quarters.',
			'Engineered reusable UI components integrated with Search result Edge endpoints, increasing component reusability by 15% and reducing new feature development time by 13%.',
		],
	},
	{
		company: 'LYHOUR PAYPRO PLC.',
		role: 'Junior Developer (.NET)',
		period: 'Jul 2021 - Aug 2022',
		duration: 'About 1 year',
		location: 'Phnom Penh, Cambodia',
		description: [
			'Coordinated the transformation of ASP.NET MVC web applications to ASP.NET Core using Blazor, improving employee processes across the development lifecycle.',
			'Reduced application loading times by 10% through improvements based on application complexity, client-side processing, caching, network conditions, and optimization techniques.',
			'Built a streamlined, high-performing codebase with C# and ASP.NET, leading to a 30% increase in application performance and improved scalability and user engagement.',
			'Used SQL Server to construct efficient queries for data extraction and manipulation, supporting streamlined reporting and improved decision-making.',
			'Implemented encryption and hashing techniques within the Payment Gateway, safeguarding customer data and reducing security vulnerabilities.',
		],
	},
	{
		company: 'LUNASA TELEMATIC & TECHNOLOGIES CO., LTD.',
		role: 'Web Developer',
		period: 'Mar 2019 - Jun 2021',
		duration: 'About 2 years',
		location: 'Phnom Penh, Cambodia',
		description: [
			'Spearheaded GPS-based application development with C# and ASP.NET MVC, improving the user experience by 40% through Angular, TypeScript, Bootstrap, HTML, and CSS.',
			'Analyzed, designed, and developed applications including GPS Navigator-Localization and GPS Tracking using an enterprise-level architecture focused on productivity, simplicity, extensibility, and maintainability.',
			'Leveraged MS SQL Server and SQL Server Management Studio (SSMS) with indexing strategies, reducing data retrieval times by 35% and improving accuracy across diverse data sets.',
			'Implemented unit testing with xUnit across typical inputs, boundary values, and deliberately invalid inputs to verify expected outputs and exception handling.',
		],
	},
]

export default experiences
