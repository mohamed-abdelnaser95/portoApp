import './testimonials.scss'
import { testimoialsData } from '../data/data'
export default function Testimonials() {
    return (
        <div className='testimonials' id='testimonials'>
            <h1>Testimonials</h1>
            <div className="container">
                {
                    testimoialsData.map(item => (
                        <div className= {item.featured? 'card featured' : 'card'}>
                            <div className="top">
                                <img src="images/white-right-arrow.png" alt="" className='left' />
                                <img src={item.img} alt="" className='user' />
                                <img src={item.icon} alt="" className='right' />
                            </div>
                            <div className="middle">
                                <p>{item.desc}</p>
                            </div>
                            <div className="bottom">
                                <h2>{item.name}</h2>
                                <h3>{item.title}</h3>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}
