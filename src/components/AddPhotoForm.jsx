import React, { useState } from 'react'

const AddPhotoForm = ({photosList, setPhotosList}) => {
    const url = 'http://localhost:3000/photos'

    const [authorInput, setAuthorInput] = useState("")
    const [imgUrlInput, setImgUrlInput] = useState("")

function handleSubmit(e) {
    e.preventDefault()
    fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body:JSON.stringify(
            {
                author: authorInput,
                download_url: imgUrlInput
            }
        )
    })
    .then(response => response.json())
    .then(data => {
        setPhotosList([...photosList,data])
        setAuthorInput("")
        setImgUrlInput("")
    })

}


    
  return (
    <>
    <h3>AddPhotoForm</h3>
    <form onSubmit={handleSubmit} >
        <input placeholder='Enter Author Name' type="text" onChange={(e) => setAuthorInput(e.target.value)} />
        <br />
        <input placeholder='Enter Image Url' type="text" onChange={(e) => setImgUrlInput(e.target.value)} />
        <br />
        <button>Add Photo</button>
    </form>
    </>
  )
}

export default AddPhotoForm