import './intro.scss'
import Typewriter from 'typewriter-effect';

export default function Intro() {

    return (
        <div className='intro' id='intro'>
            <div className='left'>
                <div className='imgContainer'>
                    <img src='images/web-development-image-01.png' alt='' />
                </div>
            </div>
            <div className='right'>
                <div className='wrapper'>
                    <h2>Hi There, I`m</h2>
                    <h1>Mohamed Abdelnaser</h1>
                    <h3>
                        Freelance {" "}
                        <span><Typewriter
                            options={{
                                strings: ['Developer', 'Designer', 'Geopyhsicist'],
                                autoStart: true,
                                loop: true,
                            }}
                        /></span>
                    </h3>
                </div>
                <a href='#portfolio'>
                    <img src='images/down_arrow.png' alt='' />
                </a>
            </div>
        </div>
    )
}
