import { QuoteBox } from './components/QuoteBox';

function App() {
  return (
    <div className='flex flex-col items-center px-20 py-64 gap-10'>
      <QuoteBox />
      <div>
        coded by <a href="https://github.com/sevcak" className='text-blue-600'>sevcak</a>
      </div>
    </div>
  );
}

export default App;
