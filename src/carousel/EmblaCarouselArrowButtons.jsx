import React, { useCallback, useEffect, useState } from 'react'
import IconButton from '@mui/material/IconButton';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

export const usePrevNextButtons = (emblaApi) => {
  const [prevBtnDisabled, setPrevBtnDisabled] = useState(true)
  const [nextBtnDisabled, setNextBtnDisabled] = useState(true)

  const onPrevButtonClick = useCallback(() => {
    if (!emblaApi) return
    emblaApi.scrollPrev()
  }, [emblaApi])

  const onNextButtonClick = useCallback(() => {
    if (!emblaApi) return
    emblaApi.scrollNext()
  }, [emblaApi])

  const onSelect = useCallback((emblaApi) => {
    setPrevBtnDisabled(!emblaApi.canScrollPrev())
    setNextBtnDisabled(!emblaApi.canScrollNext())
  }, [])

  useEffect(() => {
    if (!emblaApi) return

    onSelect(emblaApi)
    emblaApi.on('reInit', onSelect).on('select', onSelect)
  }, [emblaApi, onSelect])

  return {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick
  }
}

export const PrevButton = (props) => {
  const { children, ...restProps } = props

  return (
    <IconButton
      className="embla__button embla__button--prev"
      type="button"
      sx={{
        position:'absolute',
        top: 0,
        left: 0,
        height: '100%',
        borderRadius: 0,        
      }}
      {...restProps}
    >
      <ArrowBackIosNewIcon />
    </IconButton>
  )
}

export const NextButton = (props) => {
  const { children, ...restProps } = props

  return (
    <IconButton
      className="embla__button embla__button--next"
      type="button"
      sx={{
        position:'absolute',
        top: 0,
        right: 0,
        height: '100%',
        borderRadius: 0,        
      }}
      {...restProps}
    >
      <ArrowForwardIosIcon />
      {children}
    </IconButton>
  )
}
