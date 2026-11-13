import type { SkillGroup } from './skills.types'

const skills: SkillGroup[] = [
  {
    category: 'Languages & frameworks',
    skills: [
      'C#', 'ASP.NET Core Blazor', 'ASP.NET (MVC/Core)', '.NET Core', '.NET Framework',
      'Angular', 'ReactJS', 'NextJS', 'Groovy', 'HTML', 'CSS', 'JavaScript',
      'TypeScript', 'jQuery', 'Bootstrap', 'Node.js', 'Express',
    ],
  },
  {
    category: 'Backend & data',
    skills: [
      'Entity Framework', 'LINQ', 'IIS', 'AWS', 'MS SQL', 'JMESPath', 'JSONPath',
      'REST API', 'JSON', 'SSIS', 'ClosedXML', 'T-SQL', 'MongoDB', 'Microservices',
    ],
  },
  {
    category: 'Testing & delivery',
    skills: ['Unit Testing (xUnit)', 'SpecFlow', 'Cypress 4', 'Agile / Scrum', 'BDD', 'TDD', 'Waterfall', 'NewRelic'],
  },
  {
    category: 'Tools & platforms',
    skills: [
      'Visual Studio', 'Visual Studio Code', 'Jenkins', 'Postman', 'IntelliJ', 'Jira',
      'Trello', 'Rally', 'Miro', 'Git/GitHub Desktop',
    ],
  },
  {
    category: 'Design patterns',
    skills: ['Singleton', 'Template', 'Observer', 'Factory', 'Adapter', 'Dependency Injection', 'Builder', 'Facade', 'Composite'],
  },
]

export default skills
