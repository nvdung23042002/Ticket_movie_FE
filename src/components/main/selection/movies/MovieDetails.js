import React from 'react'
import { Button } from '../../../../utils/Button'
import "./Style.css"
import MyContext from '../../../../utils/ShareState/Context';
import { Modal } from 'react-bootstrap';
import { useState } from 'react';
import { useContext } from 'react';
// su dug useContext
function MovieDetails() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [data, setData] = useState([])
  return (
    <MyContext.Consumer>
      {(context)=> (
        // <div className={`backdrop ${showModal ? 'showBackdrop' : 'hideBackdrop'}`}>
        //   <div className={`modal ${showModal ? 'showModal': 'hideModal'}`}>
        //     <div className="container">
        //       <div className="movie-info">
        //         <h1 className="movie-title">{contect.name}</h1>
        //         <p className='statistical'>
        //           <span className='rating'>{contect.rating}</span>
        //         </p>
        //         <p className='release-date'>12/03/2002</p>
        //         <p className="cast">{contect.cast}</p>
        //         <p className="director">{contect.director}</p>
        //         <p className="description">{contect.description}</p>
        //         <Button type="button" buttonStyle="btn--primary--outline" buttonSize="btn--medium">Trailer</Button>
        //       </div>
        //     </div>
        //   </div>
        // </div>
        <>
      <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading </Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
      )}
    </MyContext.Consumer>
  )
}

export default MovieDetails