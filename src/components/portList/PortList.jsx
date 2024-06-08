import './portList.scss'

export default function PortList({ title, id, setActive, liActive}) {
    return (
        <li className={id === liActive && 'active'} onClick={() => setActive(id)}>{title}</li>
    )
}
