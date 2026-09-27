import { render, screen } from '@testing-library/react'
import WorkExperience from './work-experience'

describe('WorkExperience', () => {
  it('renders the company, role, and role description list', () => {
    render(
      <WorkExperience
        experiences={[
          {
            company: 'EBSCO Information Services',
            role: 'Software Engineer II',
            period: 'Nov 2023 - Present',
            location: 'United States · Remote',
            description: ['Built APIs for internal and external clients.', 'Improved system performance and reliability.'],
          },
        ]}
      />
    )

    expect(screen.getByRole('heading', { name: 'Software Engineer II' })).toBeInTheDocument()
    expect(screen.getByText('EBSCO Information Services')).toBeInTheDocument()
    expect(screen.getByText('United States · Remote')).toBeInTheDocument()
    expect(screen.getByText('Built APIs for internal and external clients.')).toBeInTheDocument()
    expect(screen.getByText('Improved system performance and reliability.')).toBeInTheDocument()
  })

  it('renders a fallback message when there are no experiences', () => {
    render(<WorkExperience experiences={[]} />)

    expect(screen.getByText('Currently building the next chapter.')).toBeInTheDocument()
    expect(screen.getByText('Add your roles, companies, and contributions to the experience list.')).toBeInTheDocument()
  })
})
