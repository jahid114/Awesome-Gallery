import Gallery from './components/Gallery';
import Header from './components/Header';

function App() {
  return (
    <>
      <div className='bg-slate-200 p-4 md:p-6 min-h-screen'>
        <div className='bg-white min-h-fit rounded-md'>
          <header className='py-4 px-6'>
            <Header />
          </header>
          <hr className='text-gray-300' />
          <main className='p-6'>
            <Gallery />
          </main>
        </div>
      </div>
    </>
  );
}

export default App;
