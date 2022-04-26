import './Projects.css'
import ProjectItem from './ProjectItem'
import shoppingcartdemo from '../images/shopping-cart-demo.gif'
import mangotalkdemo from '../images/amb-talk-demo.gif'
import weatherappdemo from '../images/weather-app-demo.gif'

export default function Projects(props) {

    return(
        <div id="projects" className='projects'>
            <h2 className='heading'>Personal Projects</h2>
            <ProjectItem 
            img={mangotalkdemo} 
            title={'MangoTalk Instant Messenger'}
            description={`
                A react-based instant messenger which takes advantage of a Firebase backend.
                Users can send messages in real time, and user login is handled securely by
                Firebase's Google and Email authorisation login API. Uses read/write security rules
                to keep users messages safe and secure.
            `}
            githubLink={'https://github.com/zakia98/AmbTalk'}
            liveDemo={'https://ambtalk-cae13.web.app/'} 
            />
            <ProjectItem 
            img={shoppingcartdemo} 
            title={'Japanese Posters Store'}
            description={`
                React based shopping cart composed of functional components and react hooks
                to manage state, to create a working cart system where users can add purchases 
                and checkout. 

            `}
            githubLink={'https://github.com/zakia98/shopping-cart'}
            liveDemo={'https://zakia98.github.io/shopping-cart'} 
            />
            <ProjectItem 
            img={weatherappdemo} 
            title={'Weather App'}
            description={`
                Grabs weather information based on user's input to provide search results
                and data grabbed from the Open Weather API.
            `}
            githubLink={'https://github.com/zakia98/weather-app'}
            liveDemo={'https://zakia98.github.io/weather-app'} 
            />
        </div>
    )
}