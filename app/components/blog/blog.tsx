import Link from 'next/link'
import './blog.css'
import type { BlogPost, BlogProps } from './blog.types'

const posts: BlogPost[] = [
	// Add your posts here when you are ready.
	// {
	// 	slug: 'your-post-title',
	// 	title: 'Your post title',
	// 	 excerpt: 'A short introduction to your post.',
	// 	date: 'September 20, 2026',
	// 	category: 'Notes',
	// },
]

export default function Blog({ posts: providedPosts }: BlogProps) {
	const blogPosts = providedPosts ?? posts

	return (
		<section className="blog" id="blog" aria-labelledby="blog-title">
			<nav className="blog__nav" aria-label="Blog navigation">
			</nav>

			<header className="blog__header">
				<p className="blog__eyebrow">06 / Journal / Ideas / Process</p>
				<h1 id="blog-title">Notes from<br />the margins.</h1>
				<p className="blog__intro">A space for observations, experiments, and things I am learning along the way.</p>
			</header>

			<section className="blog__posts" aria-labelledby="blog-posts-title">
				<div className="blog__section-heading">
					<p className="blog__eyebrow" id="blog-posts-title">Latest writing</p>
					<span>{String(blogPosts.length).padStart(2, '0')} posts</span>
				</div>

				{blogPosts.length > 0 ? (
					<div className="blog__grid">
						{blogPosts.map((post) => (
							<article className="blog__post" key={post.slug}>
								<p className="blog__post-meta">{post.category} <span>/</span> {post.date}</p>
								<h2>{post.title}</h2>
								<p>{post.excerpt}</p>
								<Link className="blog__read-more" href={`/blog/${post.slug}`}>Read article <span aria-hidden="true">→</span></Link>
							</article>
						))}
					</div>
				) : (
					<div className="blog__empty">
						<span className="blog__empty-number">01</span>
						<div>
							<h2>Something thoughtful is on its way.</h2>
							<p>The first entry is still taking shape. Check back soon for new notes and experiments.</p>
						</div>
					</div>
				)}
			</section>
		</section>
	)
}
