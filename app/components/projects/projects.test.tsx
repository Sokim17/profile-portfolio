import { render, screen } from '@testing-library/react'
import Projects from './projects'

describe('Projects', () => {
  it('renders project title, category, year, and link', () => {
    render(
      <Projects
        projects={[
          {
            title: 'EnterpriseWebTemplate Project',
            description: 'An enterprise-level web application framework.',
            year: '2026',
            category: 'Enterprise web application framework',
            url: 'https://github.com/Sokim17/EnterpriseWebAPITemplate',
          },
        ]}
      />
    )

    expect(screen.getByRole('heading', { name: 'EnterpriseWebTemplate Project' })).toBeInTheDocument()
    expect(screen.getByText('Enterprise web application framework')).toBeInTheDocument()
    expect(screen.getByText('2026')).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /View project/i })).toHaveAttribute('href', 'https://github.com/Sokim17/EnterpriseWebAPITemplate')
  })

  it('renders the empty state when no projects are provided', () => {
    render(<Projects projects={[]} />)

    expect(screen.getByText('Your next project could be here.')).toBeInTheDocument()
    expect(screen.getByText('Add your work to the projects list when you are ready.')).toBeInTheDocument()
  })
})
