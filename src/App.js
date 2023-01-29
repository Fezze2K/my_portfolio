import './App.css';
import {useState, useEffect} from 'react';
import {useRef} from 'react'
import Heading from './Heading.jsx';
// import Heading2 from './Heading2.jsx';
import SecondHeader from './SecondHeader';
import DownButton from './DownButton';



function App() {
  
  const [isShown, setIsShown] = useState(false);
  const ref = useRef(null);
  
  // const handleShowDivOnClick = () => {
  //   setIsShown(true);
  //   console.log("Showing Div");
  // }

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
    <div className="flex  flex-col h-screen justify-center items-center bg-gradient-to-r from-violet-500 to-fuchsia-500">
      <Heading/>
      <div onClick={handleScrollOnClick} className="mt-96 cursor-pointer drop-shadow-2xl animate-bounce">
        <DownButton/>
      </div>
    </div>
    <div ref={ref} className={`${isShown ? '': 'hidden'}  flex flex-col h-screen items-center bg-gradient-to-r from-violet-500 to-fuchsia-500`}>
      <div className={``}>
        <SecondHeader/>
      </div>
    </div>
  </div>
  );
}

export default App;
