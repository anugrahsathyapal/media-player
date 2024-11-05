import React, { useState } from 'react'
import { Card, Modal, } from 'react-bootstrap'
import { removeVideosAPI, saveHistoryAPI } from '../services/allAPI';

const VideoCard = ({displayData,setDeleteVideoResponseFromVideoCard,insideCategory}) => {                            //destructured

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);

  const handleShow = async ()=>{
    setShow(true)
    const {caption,youTubeLink} = displayData
    const sysDateTime = new Date()
    console.log(sysDateTime.toLocaleString('en-US',{timeZoneName:'short'}))
    const timeStamp = sysDateTime.toLocaleString('en-US',{timeZoneName:'short'})
    const historyDetails = {caption,youTubeLink,timeStamp}
    try{
      await saveHistoryAPI(historyDetails)
    }catch(err){
      console.log(err);
      
    }
    

  }

  const deleteVideo = async (id)=>{
    try{
      const result =  await removeVideosAPI(id)
      setDeleteVideoResponseFromVideoCard(result)

    }catch(err){
      console.log(err);
      
    }

  }

  const videoCardDragStarted = (e,dragVideodetails) => {
    console.log("Inside videoCardDragStarted with videoID: "+dragVideodetails?.id);
    e.dataTransfer.setData("videoDetails",JSON.stringify(dragVideodetails))
  }


  return (
    <>
      <Card draggable={true} onDragStart={e=>videoCardDragStarted(e,displayData)} style={{ height: '250px' }}>
        <Card.Img onClick={handleShow} variant="top" height={'150px'} src={displayData?.imgUrl}/>
        <Card.Body>
          <Card.Text className='d-flex justify-content-between'>
            <p style={{color:'white'}}>{displayData.caption}</p>
            {
              !insideCategory &&
              <button onClick={()=>deleteVideo(displayData?.id)} className="btn"><i className="fa-solid fa-trash text-danger"></i></button>
            }
          </Card.Text>
        </Card.Body>
      </Card>

      <Modal size='lg' centered show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{displayData.caption}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <iframe height="360" width="100%" src={`${displayData?.youTubeLink}?autoplay=1`} title="Caption" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

        </Modal.Body>

      </Modal>


    </>
  )
}

export default VideoCard