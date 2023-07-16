import { QuoteBox } from './components/QuoteBox';

function App() {
  return (
    <div 
      className='
        w-screen h-screen flex flex-col items-center justify-center p-10 gap-10
        bg-rose-400
      '
    >
      <div className='relative w-full md:w-[32rem]'>
        <div
          className='
            text-white font-bold text_border text-2xl
            absolute -bottom-14 -left-4 -rotate-3 hover:scale-110 duration-500
          '
        >
          🗣️ Šimi chcel variť 🔥🔥🔥🔥💀
      </div>
      </div>
      <QuoteBox />
      <div className='text-white'>
        coded by <a href="https://github.com/sevcak" className='font-bold hover:underline underline-offset-4'>sevcak</a>
      </div>
    </div>
  );
}

export default App;
