import { useState } from 'react';
import quotes from '../data/quotes.json';
import twitter from '../icons/twitter.svg'

const QuoteBox = () => {
  const getRandomInt = (min: number, max: number) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
  }

  const [currentQuoteIndex, setCurrentQuoteIndex] = useState(getRandomInt(0, quotes.length));

  const newQuote = () => {
    let newIndex = getRandomInt(0, quotes.length);

    while (newIndex === currentQuoteIndex) {
      newIndex = getRandomInt(0, quotes.length);
    }

    setCurrentQuoteIndex(newIndex);
  }

  return (
    <div
      id='quote-box'
      className='w-full md:w-[32rem] bg-white/90 rounded-lg p-8 text-xl font-semibold text-rose-400'
    >
      <div>
        <div id='text' className='text-3xl font-bold mb-4'>
          „{quotes[currentQuoteIndex]}“
        </div>
        <div className='text-right'>~ <span id='author'>Šimi</span></div>
        {/* Buttons */}
        <div className='mt-12 flex flex-row justify-between items-end'>
          {/* Share */}
          <div>
            <a
              id='tweet-quote'
              href={`
              https://twitter.com/intent/tweet?text=„${quotes[currentQuoteIndex]}“%0A~Šimi%0A---%0Asevcak.github.io/simi-quote-generator
              `}
              className='block w-fit h-fit p-2 bg-rose-400 rounded-full hover:scale-90 duration-500'
            >
              <img src={twitter} alt="tweet" className='w-6 h-6' />
            </a>
          </div>
          {/* New quote button */}
          <button
            id='new-quote'
            onClick={newQuote}
            className='p-2 bg-rose-400 text-white text-lg rounded-md hover:scale-95 duration-500 tracking-wide'
          >
            🗣️ NECHATJE HO VARIŤ
          </button>
        </div>
      </div>
    </div>
  )
}

export { QuoteBox }