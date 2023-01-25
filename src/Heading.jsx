import './App.css';
import TypeWriter from 'typewriter-effect'



function Heading() {
  
  return (
  <div className='tracking-wider	font-mono text-white text-9xl text-center'> 
      <TypeWriter
        options={{ 
          loop: true,
          delay: 100,

        }}
        onInit={(typewriter) => {
          typewriter.typeString("").pauseFor(2000).start().deleteAll(100).pauseFor(2000)
          
        }}
      />
  </div>
  );
}

export default Heading;
