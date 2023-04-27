import { useEffect, useState } from 'react'
import './App.css'
import PhotosList from './components/PhotosList'
import AddPhotoForm from './components/AddPhotoForm'

function App() {
  const url = 'http://localhost:3000/photos'

  const [photosList, setPhotosList] = useState([])

  useEffect(() => {
    fetch(url)
    .then(response => response.json())
    .then(data => setPhotosList(data))
  }, [])

  return (
    <>
      <AddPhotoForm photosList={photosList} setPhotosList={setPhotosList} />
      <PhotosList photosList={photosList} setPhotosList={setPhotosList} />
    </>
  )
}

export default App
