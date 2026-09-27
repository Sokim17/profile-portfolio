import { render, screen } from '@testing-library/react'
import Blog from './blog'

describe('Blog', () => {
  it('renders blog posts when they exist', () => {
    render(
      <Blog
        posts={[
          {
            slug: 'hello-world',
            title: 'Hello World',
            excerpt: 'A short note about building thoughtful products.',
            date: 'September 27, 2026',
            category: 'Notes',
          },
        ]}
      />
    )

    expect(screen.getByRole('heading', { name: 'Hello World' })).toBeInTheDocument()
    expect(
      screen.getByText((_, element) => {
        if (element?.tagName?.toLowerCase() !== 'p') return false
        if (element.className !== 'blog__post-meta') return false

        const text = element.textContent ?? ''
        return text.includes('Notes') && text.includes('September 27, 2026')
      })
    ).toBeInTheDocument()
    expect(screen.getByText('A short note about building thoughtful products.')).toBeInTheDocument()
  })

  it('renders the empty state when no posts are provided', () => {
    render(<Blog posts={[]} />)

    expect(screen.getByText('Something thoughtful is on its way.')).toBeInTheDocument()
    expect(screen.getByText('The first entry is still taking shape. Check back soon for new notes and experiments.')).toBeInTheDocument()
  })
})
