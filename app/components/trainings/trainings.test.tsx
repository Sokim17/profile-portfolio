import { render, screen } from '@testing-library/react'
import Trainings from './trainings'

describe('Trainings', () => {
  it('renders the training title, provider, and year', () => {
    render(
      <Trainings
        trainings={[
          {
            title: 'AWS Certified Cloud Practitioner',
            provider: 'PluralSight',
            year: 'September 2025',
            description: 'Cloud foundations and compute basics.',
          },
        ]}
      />
    )

    expect(screen.getByRole('heading', { name: 'AWS Certified Cloud Practitioner' })).toBeInTheDocument()
    expect(screen.getByText('PluralSight')).toBeInTheDocument()
    expect(screen.getByText('September 2025')).toBeInTheDocument()
    expect(screen.getByText('Cloud foundations and compute basics.')).toBeInTheDocument()
  })

  it('renders the empty state when there are no trainings', () => {
    render(<Trainings trainings={[]} />)

    expect(screen.getByText('Your learning journey starts here.')).toBeInTheDocument()
    expect(screen.getByText('Add courses, certifications, and training programs to the trainings list.')).toBeInTheDocument()
  })
})
