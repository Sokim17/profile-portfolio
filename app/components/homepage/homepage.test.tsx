import { render, screen } from '@testing-library/react'
import Homepage from './homepage'

describe('Homepage', () => {
  it('renders the heading, description, and about text', () => {
    render(
      <Homepage
        title="Sokim Nam"
        description="I create thoughtful digital experiences."
        aboutDescription="Software Engineer with a focus on building reliable web applications."
      />
    )

    expect(screen.getByRole('heading', { name: 'Sokim Nam' })).toBeInTheDocument()
    expect(screen.getByText('I create thoughtful digital experiences.')).toBeInTheDocument()
    expect(screen.getByText('Software Engineer with a focus on building reliable web applications.')).toBeInTheDocument()
  })

  it('renders the primary call-to-action links', () => {
    render(
      <Homepage
        title="Sokim Nam"
        description="I create thoughtful digital experiences."
        aboutDescription="Software Engineer with a focus on building reliable web applications."
      />
    )

    expect(screen.getByRole('link', { name: /Explore my work/i })).toHaveAttribute('href', '#about')
    expect(screen.getByRole('link', { name: /Let's talk/i })).toHaveAttribute('href', 'mailto:namsokim9@gmail.com')
  })
})
