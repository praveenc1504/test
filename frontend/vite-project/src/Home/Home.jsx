import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';

function Home() {
  const [total, setTotal] = useState(0);
  const [avg, setAvg] = useState(0);
  const [count, setCount] = useState(0);

  const navigate = useNavigate(); // correct spelling

  
  return (
    <>
      <div className='navbar'>
        <div className='right-nav'>
          <h2>OnlineQuiz</h2>
        </div>
        <div className='left-nav'>
          <h2>total test: {total}</h2>
          <h2>avg: {avg}</h2>
         <button onClick={() => navigate('/login')}>Login</button>
        </div>
      </div>

      <div className='home-container'>
        <div className='own-test' onClick={()=>navigate('/own-test')}>
            <p>Select your own test</p>
        </div>
        <div className='random-test'  onClick={()=>navigate('/random-test')}>
            <p>Take a random test</p>
    
        </div>
      </div>
    </>
  );
}

export default Home;
