import React from 'react'
import Photo from './Photo'

const PhotosList = ({photosList, setPhotosList}) => {

    const PhotoItem = photosList.map((photo) => {
        return <Photo key={photo.id} photo={photo} />
    })

  return (
    <>
    <ul>
        {PhotoItem}
    </ul>
    </>
  )
}

export default PhotosList