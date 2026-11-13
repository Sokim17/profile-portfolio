import './skills.css'
import type { SkillsProps } from './skills.types'

export default function Skills({ skills }: SkillsProps) {
	const skillCount = skills.reduce((total, group) => total + group.skills.length, 0)

	return (
		<section className="skills" id="skills" aria-labelledby="skills-title">
			<div className="skills__heading">
				<p className="skills__eyebrow">03 / Expertise</p>
				<h2 id="skills-title">A toolkit<br />for the work.</h2>
				<p className="skills__intro">A practical range of technologies and methods used to build, test, and deliver reliable software.</p>
				<div className="skills__summary" aria-label={`${skillCount} skills across ${skills.length} disciplines`}>
					<span className="skills__summary-count">{String(skillCount).padStart(2, '0')}</span>
					<span className="skills__summary-label">skills across<br />{skills.length} disciplines</span>
				</div>
			</div>
			<div className="skills__groups">
				{skillCount > 0 ? skills.map((group) => (
					<article className="skills__group" key={group.category}>
						<div className="skills__group-heading">
							<h3>{group.category}</h3>
							<span>{String(group.skills.length).padStart(2, '0')}</span>
						</div>
						<ul className="skills__list" aria-label={group.category}>
							{group.skills.map((skill) => <li className="skills__item" key={skill}>{skill}</li>)}
						</ul>
					</article>
				)) : (
					<p className="skills__empty">Add your skills to the homepage data.</p>
				)}
			</div>
		</section>
	)
}
