
const ProjectCard = ({project_title, project_link, project_image}) => {
    return (
        <div className="portfolio__content">
            <div className="portfolio__image_container">
                <img src={project_image} alt="" />
            </div>
            <div className="portfolio__heading_container">
                <h2>{project_title}</h2>
                <a href={project_link} target="_blank" className="portfolio__link">
                    Demo <i className="uil uil-arrow-right portfolio__button-icon"></i>
                </a>
            </div>
        </div>
    )
}

export default ProjectCard