// frontend/src/App.jsx
import { useEffect, useState } from 'react'

function App() {
  const [message, setMessage] = useState('Loading...')

  useEffect(() => {
    fetch(import.meta.env.VITE_API_URL + '/api/hello')
      .then(res => res.json())
      .then(data => setMessage(data.message))
  }, [])

  return <h1>{message}</h1>
}

export default App