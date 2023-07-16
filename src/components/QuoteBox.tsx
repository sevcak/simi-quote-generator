import { useState } from 'react';
import quotes from '../data/quotes.json';
import twitter from '../icons/twitter.svg'

const QuoteBox = () => {
  const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0);

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
        <div className='mt-12'>
          <div id='new-quote'></div>
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
        </div>
      </div>
    </div>
  )
}

export { QuoteBox }