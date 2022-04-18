import './Introduction.css'
import downarrow from '../images/chevrons-down.svg'
import TypeWriterEffect from 'react-typewriter-effect'
import { useNavigate } from 'react-router-dom'

export default function Introduction(props) {
    
    const navigate = useNavigate()


    function scrollTo() {
        console.log('hi')
        navigate('#about')
    }

    return(
        <div className='introduction-wrapper' id="home">
            <h1 className='title'>Hi, I'm Ameen. </h1>
            <h2 className="typewriter">I am <TypeWriterEffect 
                startDelay={100}
                textStyle={{
                    color:'rgb(241, 145, 145)',
                    maxWidth:'300px'
                }}
                cursorColor='white'
                typeSpeed={50}
                multiText={[
                    'a web developer',
                    'Economics & Japanese Graduate',
                    'a technology enthusiast',
                    'a web developer'
                ]}
                multiTextDelay={1000}                  

                />
            </h2>
            <div className='scroll button' onClick={scrollTo}>
                <a href="#about" style={{color:'white'}}>Get to know me!</a>
                <img src={downarrow}></img>
            </div>
        </div>
    )
}