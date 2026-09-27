import './skills.css'
import type { SkillsProps } from './skills.types'

export default function Skills({ skills }: SkillsProps) {
	return (
		<section className="skills" id="skills" aria-labelledby="skills-title">
			<div className="skills__heading">
				<p className="skills__eyebrow">03 / Capabilities</p>
				<h2 id="skills-title">Things I<br />do well.</h2>
			</div>
			<div className="skills__list">
				{skills.length > 0 ? skills.map((skill, index) => (
					<div className="skills__item" key={skill}>
						<span className="skills__number">{String(index + 1).padStart(2, '0')}</span>
						<span>{skill}</span>
					</div>
				)) : (
					<p className="skills__empty">Add your skills to the homepage data.</p>
				)}
			</div>
		</section>
	)
}
