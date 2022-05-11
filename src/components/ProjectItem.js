

export default function ProjectItem(props) {
    return(
        <article className="project-item">
            <div className='project-display'>
                <h3>{props.title}</h3>
                <img src={props.img}></img>
            </div>
            <div className='project-info'>
                <p>{props.description}</p>
                <div className='project-buttons'>
                    <a className='project-link' href={props.githubLink}>Github</a>
                    <a className='project-link' href={props.liveDemo}>Live Demo</a>

                </div>
            </div>
        </article>
    )
}