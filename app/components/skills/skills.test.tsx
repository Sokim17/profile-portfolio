import { render, screen } from '@testing-library/react'
import Skills from './skills'

describe('Skills', () => {
  it('renders the provided skills', () => {
    render(<Skills skills={['React', 'Next.js', 'TypeScript']} />)

    expect(screen.getByText('React')).toBeInTheDocument()
    expect(screen.getByText('Next.js')).toBeInTheDocument()
    expect(screen.getByText('TypeScript')).toBeInTheDocument()
  })

  it('renders the empty state when no skills are provided', () => {
    render(<Skills skills={[]} />)

    expect(screen.getByText('Add your skills to the homepage data.')).toBeInTheDocument()
  })
})
