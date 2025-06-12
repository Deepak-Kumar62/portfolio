import "./portfolio.css"
import Expense from "../../assets/expense-tracker.png"

import ProjectCard from "./ProjectCard"

const Portfolio = () => {
    const projects = [
        {
            project_image: Expense,
            project_title: "Budget Buddy",
            project_link: "https://monitytrack.netlify.app/"
        },
    ]

    return (
        <section className="portfolio section" id="portfolio">
            <h2 className="section__title">Portfolio</h2>
            <span className="section__subtitle">Most recent work</span>

            {projects.length > 0 ? (
                <div className="portfolio__container container grid">
                    {projects.map((project, index) => (
                        <ProjectCard
                            key={index}
                            project_title={project.project_title}
                            project_link={project.project_link}
                            project_image={project.project_image}
                        />

                    ))}
                </div>
            ) : (
                <div className="no__projects_message">
                    <p>No projects to show right now.</p>
                    <p>Stay tuned! New projects will be added soon.</p>
                </div>
            )}


        </section>
    )
}

export default Portfolio