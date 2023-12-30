import './index.css'

const DestinationItem = props => {
  const {DestinationDetails} = props
  const {imgUrl, name} = DestinationDetails

  return (
    <li className="destination-item">
      <img src={imgUrl} className="destination-image" alt={name} />
      <p className="name">{name}</p>
    </li>
  )
}

export default DestinationItem
