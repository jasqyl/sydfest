import React from 'react'
import EmblaCarousel from './EmblaCarousel'
import './css/embla.css'

const OPTIONS = { loop: true }

export const Carousel = ({data, refreshConcerts}) => (
  <EmblaCarousel slides={data} options={OPTIONS} refreshConcerts={refreshConcerts} />
)

export default Carousel
