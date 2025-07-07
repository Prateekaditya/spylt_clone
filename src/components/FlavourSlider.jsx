import { flavorlists } from "../constants"

const FlavourSlider = () => {
  return (
    <div className="slider-wrapper">
      <div className="flavors">
        {
          flavorlists.map((flavor)=>(
            <div key={flavor.name} className="relative z-30 lg:w-[50vw] w-96 flex-none lg:h-[70vh] md:h-[50vh] md:w-[90vw] h-80">
              <img src={`/images/${flavor.color}-bg.svg`} alt={`${flavor.color}`} className="absolute bottom-0"  />
              <img src={`/images/${flavor.color}-drink.webp`} alt={`${flavor.color}`} className="drinks"  />
              <img src={`/images/${flavor.color}-elements.webp`} alt={`${flavor.color}`} className="elements"  />
            </div>
          )
          )
        }
      </div>
    </div>
  )
}

export default FlavourSlider