import React from 'react'
import useEmblaCarousel from 'embla-carousel-react'

export const EmblaCarousel = () => {
  const [emblaRef] = useEmblaCarousel()

  const containerStyle = {
    overflow: 'hidden'
  }

  const innerContainerStyle = {
    display: 'flex'
  }

  const slideStyle = {
    flex: '0 0 100%',
    minWidth: 0
  }

  return (
    <div className="embla" ref={emblaRef} style={containerStyle}>
      <div className="embla__container" style={innerContainerStyle}>
        <div className="embla__slide" style={slideStyle}>Slide 1</div>
        <div className="embla__slide" style={slideStyle}>Slide 2</div>
        <div className="embla__slide" style={slideStyle}>Slide 3</div>
      </div>
    </div>
  )
}
