import selfportrait from '../images/self-portrait2.jpg'
import smallselfportrait from '../images/self-portrait2-small.jpg'
import './About.css'
export default function About(props) {

    return(
        <div className='about-wrapper' id='about'>
            <div className="profile-container">
                <div className='profile-pic'>
                    <img className='profile' src={smallselfportrait} ></img>
                </div>
                <div className='description'>
                    <p>Can an <span className='highlight'>Economics and Japanese graduate</span> teach themselves programming?</p>
                    <p>
                        With hard work and dedication, I believe so. 
                        For the past 6 months through <span className='highlight'>continuous practice, development, and grit, </span> 
                         I have taught myself programming through the lens of web development. 
                    </p>
                    <p>
                        I have been surprised by what I have been able to create over the past 6 months, 
                        and am excited to continue learning and creating new applications.
                    </p>
                    <p>I am a web developer with a passion for <span className='highlight'>JavaScript, React, and all things programming.</span></p>
                </div>
            </div>
            <h2 className='stack-title'>My tools:</h2>
            <div className='tech-stack-wrapper'>
                <div className='tech-icon'>
                    <i className="devicon-html5-plain colored icon"></i>
                    <p>HTML5</p>
                </div>
                <div className='tech-icon'>
                    <i className="devicon-react-original colored icon"></i>
                    <p>REACT</p>
                </div>
                <div className='tech-icon'>
                    <i className="devicon-jest-plain colored icon"></i>
                    <p>JEST</p>
                </div>
                <div className='tech-icon'>
                    <i className="devicon-css3-plain colored icon"></i>
                    <p>CSS3</p>
                </div>
                <div className='tech-icon'>
                    <i className="devicon-git-plain colored icon"></i>
                    <p>GIT</p>
                </div>
                <div className='tech-icon'>
                    <i className="devicon-javascript-plain colored icon"></i>
                    <p>JavaScript</p>
                </div>
                <div className='tech-icon'>
                    <i className="devicon-webpack-plain colored icon"></i> 
                    <p>Webpack</p>
                </div>
                <div className='tech-icon'>
                    <i className="devicon-npm-original-wordmark colored icon"></i>
                    <p>NPM</p>
                </div>
                <div className='tech-icon'>
                    <i className="devicon-nodejs-plain colored icon"></i>
                    <p>NodeJS</p>
                </div>
            </div>
            <p className="description">
                Outside of web development, I enjoy <span className='highlight'>escape rooms, </span>
                <span className='highlight'>cooking, </span>
                <span className='highlight'>history, </span>
                and <span className='highlight'>horror movies.</span>
            </p>
        </div>
    )
}