import { QuoteBox } from './components/QuoteBox';

function App() {
  return (
    <div 
      className='
        w-screen h-screen flex flex-col items-center justify-center p-10 gap-10
        bg-rose-400
      '
    >
      <QuoteBox />
      <div className='text-white'>
        coded by <a href="https://github.com/sevcak" className='font-bold hover:underline underline-offset-4'>sevcak</a>
      </div>
    </div>
  );
}

export default App;
