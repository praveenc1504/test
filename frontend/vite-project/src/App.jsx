import { useState } from 'react';
import axios from 'axios';
import './App.css';
function App() {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [email,setEmail]= useState('');

  const [mode, setMode] = useState('login'); // or 'signup'
  const [msg, setMsg] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const endpoint = mode === 'login' ? 'login' : 'signup';
      const res =await axios.post(`http://localhost:5000/api/${endpoint}`, { name, password, email });
      setMsg(res.data.message);
    } catch (err) {
      setMsg(err.response?.data?.error || 'Something went wrong');
    }
  };

  return (
    <div style={{ padding: '2rem', textAlign: 'center' ,display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
      <h2>{mode === 'login' ? 'Login' : 'Sign Up'}</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        /><br /><br />
        <input
          type="password"
          placeholder="Enter password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        /><br /><br />
        <input 
          type='email'
          placeholder="Enter email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        /><br /><br />
        
                <button type="submit">{mode === 'login' ? 'Login' : 'Sign Up'}</button>
      </form>
      <p>{msg}</p>
      <p>
        {mode === 'login' ? 'No account?' : 'Already have an account?'}{' '}
        <button onClick={() => setMode(mode === 'login' ? 'signup' : 'login')}>
          {mode === 'login' ? 'Sign Up' : 'Login'}
        </button>
      </p>
    </div>
  );
}

export default App;
