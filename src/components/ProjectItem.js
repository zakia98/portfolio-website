

export default function ProjectItem(props) {
    return(
        <article className="project-item">
            <div className='project-display'>
                <img src={props.img}></img>
                <h3>{props.title}</h3>
            </div>
            <div className='project-info'>
                <p>{props.description}</p>
                <div className='project-buttons'>
                    <button className="project-link"><a href={props.githubLink}>Github</a></button>
                    <button className="project-link"><a href={props.liveDemo}>Live Demo</a></button>

                </div>
            </div>
        </article>
    )
}