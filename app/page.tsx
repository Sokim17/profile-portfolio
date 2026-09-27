import MainPage from ".";
import skills from "./components/skills/skills-lists";

export default function Home() {
  return (
    <MainPage
      title="Sokim Nam"
      description="I create thoughtful digital experiences where clear ideas, useful technology, and a little personality come together."
      aboutDescription="Software Engineer with more than five years of hands-on experience designing and delivering web applications used by over 1,000 active users. I collaborate with cross-functional teams of six to ten members across architecture, development, and delivery, with a focus on reliable client-server communication and high-quality solutions in Agile and Scrum environments."
      skills={skills}
    />
  );
}
