import { useGSAP } from "@gsap/react"
import { flavorlists } from "../constants"
import { gsap } from "gsap"
import { useRef } from "react"
import { useMediaQuery } from "react-responsive"

const FlavourSlider = () => {
  const sliderRef=useRef();
  const isTablet =useMediaQuery({
    query:"(max-width:1024px)",
  })

  useGSAP(()=>{
    const scrollAmount = sliderRef.current.scrollWidth -window.innerWidth;
    if(!isTablet){
      const tl =gsap.timeline({
        scrollTrigger:{
          trigger:".flavor-section",
          start:"2% top",
          end:`+=${scrollAmount + 1000}px`,
          scrub:true,
          pin:true
        }
      })
      tl.to(".flavor-section",{
        x:`-=${scrollAmount+1000}px`,
        ease:"power1.out"
      })
    }
   

  
  })
  return (
    <div ref={sliderRef} className="slider-wrapper">
      <div className="flavors">
        {
          flavorlists.map((flavor)=>(
            <div key={flavor.name} className={`relative z-30 lg:w-[50vw] w-96 flex-none lg:h-[70vh] md:h-[50vh] md:w-[90vw] h-80 ${flavor.rotation}`}>
              <img src={`/images/${flavor.color}-bg.svg`} alt={`${flavor.color}`} className="absolute bottom-0"  />
              <img src={`/images/${flavor.color}-drink.webp`} alt={`${flavor.color}`} className="drinks"  />
              <img src={`/images/${flavor.color}-elements.webp`} alt={`${flavor.color}`} className="elements"  />
              <h1>{flavor.name}</h1>
            </div>
          )
          )
        }
      </div>
    </div>
  )
}

export default FlavourSlider