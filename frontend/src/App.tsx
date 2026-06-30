import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  // 1. Create a state variable to hold the message from Spring Boot
  const [backendMessage, setBackendMessage] = useState<string>('Connecting to backend...');

  // 2. Fetch the data automatically when the page loads
  useEffect(() => {
    axios.get('http://localhost:8080/')
      .then(response => {
        // Update our state with the text returned from Spring Boot
        setBackendMessage(response.data);
      })
      .catch(error => {
        console.error("Error connecting to backend:", error);
        setBackendMessage("Failed to connect to backend server.");
      });
  }, []);

  // 3. Display it on the screen
  return (
    <div style={{ textAlign: 'center', marginTop: '50px', fontFamily: 'Arial, sans-serif' }}>
      <h1>My Java Full-Stack Project</h1>
      <div style={{ padding: '20px', border: '1px solid #ccc', display: 'inline-block', borderRadius: '8px' }}>
        <h3>Data from Spring Boot:</h3>
        <p style={{ color: 'green', fontWeight: 'bold', fontSize: '18px' }}>{backendMessage}</p>
      </div>
    </div>
  );
}

export default App;