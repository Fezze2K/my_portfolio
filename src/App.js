import './App.css';
import {useState, useEffect} from 'react';
import {useRef} from 'react'
import Heading from './Heading.jsx';
// import Heading2 from './Heading2.jsx';
import SecondHeader from './SecondHeader';
import DownButton from './DownButton';
import Card1 from './Card1';

function App() {
  
  const [isShown, setIsShown] = useState(false);
  const ref = useRef(null);
  

  const handleScrollOnClick = () => {
    setIsShown(true);
    ref.current?.scrollIntoView({behavior: 'smooth'})
  }
  
  useEffect(() => {
    console.log('isShown', isShown)
    if(isShown) {
      console.log('Move Shit')
      ref.current?.scrollIntoView({behavior: 'smooth'})
    }

  }, [isShown])
  
  return (
  <div>
    <div className="border-white flex flex-col h-screen justify-center items-center bg-gradient-to-r from-violet-500 to-fuchsia-500">
      <Heading/>
      <div onClick={handleScrollOnClick} className="absolute bottom-0 cursor-pointer drop-shadow-2xl animate-bounce">
        <DownButton/>
      </div>
    </div>
    <div ref={ref} className={`${isShown ? '': 'hidden'} flex flex-col h-screen items-center bg-gradient-to-r from-violet-500 to-fuchsia-500`}>
      <div>
        <SecondHeader/>
      </div>
      <div className='mt-80 flex flex-row'>
        <div className='mr-56'>
          <Card1 imagePath="/assets/lambaimage.png" imageAlt="" title="MedTech Project" description="..." />
        </div>
        <div className=''>
          <Card1 imagePath="/assets/lambaimage.png" imageAlt="" title="ErrandFriend" description="..." />
        </div>
        <div className='scale-90 ml-56'>
          <Card1 imagePath="/assets/monopoly.png" imageAlt="" title="Monopoly in Haskell" description="..." />
        </div>
      </div>
    </div>
  </div>
  );
}

export default App;
