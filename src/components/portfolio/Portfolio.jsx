import PortList from '../portList/PortList'
import { featurPort, mobilePort, webPort, designPort, brandingPort, portiList } from '../data/data'
import { useEffect, useState } from 'react'
import './portfolio.scss'

export default function Portfolio() {
    const [liActive, setActive] = useState('featured')
    const [data, setData] = useState(featurPort)
    useEffect(()=> {
        switch(liActive){
            case "featured":
                setData(featurPort)
                break;
            case "mobile":
                setData(mobilePort)
                break;
            case "web":
                setData(webPort)
                break;
            case "design":
                setData(designPort)
                break;
            case "branding":
                setData(brandingPort)
                break;
            default:
                setData(featurPort)
        }
    }, [liActive])

    return (
        <div className='portfolio' id='portfolio'>
            <h1>Proftfolio</h1>
            <ul>
                {portiList.map(item => {
                    return <PortList title={item.title} id={item.id} liActive={liActive} setActive={setActive} />
                })}
            </ul>
            <div className="container">
                {
                    data.map(fePor => {
                        return (
                            <div className="item">
                                <img src={fePor.img} alt="" />
                                <h3>{fePor.id}</h3>
                            </div>
                        )
                    })
                }

            </div>
        </div>
    )
}
