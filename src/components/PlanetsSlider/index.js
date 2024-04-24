// Write your code here
import Slider from 'react-slick'

import PlanetItem from '../PlanetItem'
import './index.css'

const PlanetsSlider = props => {
  const {planetsList} = props

  return (
    <div className="lol" data-testid="planets">
      <h1>PLANETS</h1>
      <Slider>
        {planetsList.map(eachItem => (
          <PlanetItem balu={eachItem} key={eachItem.id} />
        ))}
      </Slider>
    </div>
  )
}
export default PlanetsSlider

