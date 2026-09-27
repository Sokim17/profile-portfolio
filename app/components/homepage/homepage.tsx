import { HomepageProps } from './homepage.types'
import './homepage.css'

export default function Homepage({ title, description, aboutDescription }: HomepageProps) {
	return (
		<>
			<section className="homepage__hero" aria-labelledby="homepage-title">
				<div className="homepage__intro">
					<p className="homepage__eyebrow">Designer · Developer · Problem solver</p>
					<h1 id="homepage-title">{title}</h1>
					<p className="homepage__description">{description}</p>
					<div className="homepage__actions">
						<a className="homepage__button homepage__button--dark" href="#about">Explore my work <span aria-hidden="true">↗</span></a>
						<a className="homepage__text-link" href="mailto:namsokim9@gmail.com">Let&apos;s talk <span aria-hidden="true">→</span></a>
					</div>
				</div>

				<div className="homepage__signature" aria-label="Sokim Nam monogram">
					<span>S</span>
					<span>N</span>
				</div>
			</section>

			<section className="homepage__about" id="about" aria-labelledby="about-title">
				<div>
					<p className="homepage__eyebrow">01 / About</p>
					<h2 id="about-title">Thoughtful work,<br />made to matter.</h2>
				</div>
				<div>
					<p className="homepage__about-copy">{aboutDescription ?? description}</p>
				</div>
			</section>
		</>
	)
}
