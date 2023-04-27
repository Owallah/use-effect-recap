import React from 'react'

const Photo = ({photo}) => {
  return (
    <li>
        <img src={photo.download_url} alt={photo.author} />
        <h4>{photo.author}</h4>
        <button>Delete</button>
    </li>
  )
}

export default Photo