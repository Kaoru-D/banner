import React from 'react'
import { shortList,list, longList } from './data';
import { FaQuoteRight } from 'react-icons/fa';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'

function Carousel({ items }) {
    const [people, setPeople] = React.useState(shortList)
    const [currentIndex, setCurrentIndex] = React.useState(0)

  return (
    <section className='slider-container'>
       {people.map((person, index) => {
        const { id, image, name, title, quote } = person
        let position = 'nextSlide'
        if (index === currentIndex) {
          position = 'activeSlide'
        }
        if (
          index === currentIndex - 1 ||
          (currentIndex === 0 && index === people.length - 1)
        ) {
          position = 'lastSlide'
        }
        return (
          <article className={`${position} slide`} key={id}>
            <img src={image} alt={name} className='person-img' />
            <h5 className='name'>{name}</h5>
            <p className='title'>{title}</p>
            <p className='text'>{quote}</p>
            <FaQuoteRight className='icon'/>
          </article>
        )
      })}
       <button className='prev' onClick={() => setCurrentIndex(currentIndex - 1)}>
        <FiChevronLeft />
      </button>
      <button className='next' onClick={() => setCurrentIndex(currentIndex + 1)}>
        <FiChevronRight />
      </button>
    </section>
  )
}

export default Carousel