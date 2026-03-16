import { useEffect, useState} from 'react'
import { shortList,list, longList } from './data';
import { FaQuoteRight } from 'react-icons/fa';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'

function Carousel({ items }) {
    const [people, setPeople] = useState(longList);
    const [currentIndex, setCurrentIndex] = useState(0)

    const prevSlide = () => {
        setCurrentIndex ((oldPerson)=>{
            const result= (oldPerson - 1 + people.length) % people.length;
            return result;
        })
    };
    const nextSlide = () => {
        setCurrentIndex ((oldPerson)=>{
            const result= (oldPerson + 1) %people.length;
            return result;
        })
    };

    useEffect(() => {
        let slider = setInterval(() => {
            setCurrentIndex((oldPerson) => {
                const result = (oldPerson + 1) % people.length;
                return result;
            })
        }, 3000);
        return () => clearInterval(slider);
    }, [currentIndex, people.length])

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
          <article className={`${position} slide`} key={id} style={{
            transform: `translateX(${100 * (index - currentIndex)}%)`
          }}>
            <img src={image} alt={name} className='person-img' />
            <h5 className='name'>{name}</h5>
            <p className='title'>{title}</p>
            <p className='text'>{quote}</p>
            <FaQuoteRight className='icon'/>
          </article>
        )
      })}
       <button className='prev' onClick={prevSlide}>
        <FiChevronLeft />
      </button>
      <button className='next' onClick={nextSlide}>
        <FiChevronRight />
      </button>
    </section>
  )
}

export default Carousel