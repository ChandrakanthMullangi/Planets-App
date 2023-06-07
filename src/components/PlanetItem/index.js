// Write your code here

import './index.css'

const PlanetItem = props => {
  const {data} = props
  const {name, imageUrl, description} = data

  return (
    <div className="planet-item">
      <img src={imageUrl} alt={`planet ${name}`} className="planet-image" />
      <h1 className="planet-name"> {name} </h1>
      <p className="planet-description"> {description} </p>
    </div>
  )
}

export default PlanetItem
