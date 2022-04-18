import gmailicon from '../images/gmail-icon.svg'
import linkedinicon from '../images/linkedin-icon.svg'
import githubicon from '../images/github-icon.svg'
import './Footer.css'

export default function Footer() {

    return(
        <footer className='footer'>
            <div className='contact-info'>
                <img src={linkedinicon} alt='linkedin'></img>
                <a href="https://www.linkedin.com/in/ameenahmed192/">https://www.linkedin.com/in/ameenahmed192/</a>
            </div>
            <div className='contact-info'>
                <img src={githubicon} alt='github'></img>
                <a href='https://github.com/zakia98'>https://github.com/zakia98</a>
            </div>
        </footer>
    )
}