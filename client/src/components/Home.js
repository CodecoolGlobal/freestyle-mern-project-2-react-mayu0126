import React, { useState, useEffect } from 'react';
import ContentPagination from './ContentPagination';
import SearchBar from './SearchBar';

import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

import './Home.css';

import { Link } from "react-router-dom";
import DailyWorkout from "./DailyWorkout"


function Home(props) {

    const [showFavourites, setShowFavourites] = useState(false);
    const [myFavourites, setMyFavourites] = useState([]);
    const [open, setOpen] = React.useState(false);

    const [commenting, setCommenting] = useState(false);
    const [deleting, setDeleting] = useState(false);

    const [commentingId, setCommentingId] = useState("");
    const [comment, setComment] = useState("");
    const [sendComment, setSendComment] = useState(false);

    const [showDailyWorkout, setShowDailyWorkout] = useState(false);


     //-------------SnackBar----------------------//
  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };

  const action = (
    <React.Fragment>
      <Button color="secondary" size="small" onClick={handleClose}>
        UNDO
      </Button>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClose}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </React.Fragment>
  );
//---------------------------------------------------------//

//handle clickbe tenni use effect helyett
useEffect(() => {
  fetch("http://localhost:3001/api/favourites")
        .then(res => res.json())
        //.then(data => console.log(data))
        .then(data => setMyFavourites(data))
        setDeleting(undefined)
}, [showFavourites, sendComment, deleting])


/*
    function getFavourites () {
        fetch("http://localhost:3001/api/favourites")
        .then(res => res.json())
        //.then(data => console.log(data))
        .then(data => setMyFavourites(data))
    }
*/

    const handleShowFavourites = (event) => {
        event.preventDefault()
        console.log(event)
        setShowFavourites(true)

        //getFavourites()
        console.log(myFavourites)
    }

    const handleBackButton = (event) => {
        event.preventDefault()
        console.log(event)
        setShowFavourites(false)
        setShowDailyWorkout(false)
    }


    const handleRemoveFromFavourites = (event) => {
        event.preventDefault();
        console.log(event);
        setDeleting(true)
    
        //id elküldése a szervernek, ő kikeresi az adatbázisból az objectet és deleteli a favourites collectionből
        fetch(`http://localhost:3001/api/favourites`, {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(
            {"deleteId":event.target.id},
            console.log("működik a delete from favourites fetch"),
            console.log({"deleteId":event.target.id})
          )
        });
        //getFavourites()
        setOpen(true);

    };
    
    
    useEffect(() => {
      fetch(`http://localhost:3001/api/favourites`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(
          {"buttonId":commentingId.slice(-4), "editedComment":comment},
          console.log("működik a patch"),
          console.log({"buttonId":commentingId.slice(-4)})
        )
      });
      setSendComment(false)
    }, [sendComment])
    
    

    const handleAddComment = (event) => {
      event.preventDefault()
      console.log(event)
      console.log(event.target.id)
      //setCommenting(true), inputmező megjelenik, setComment(): megkapja az inputmező tartalmát
      //az inputmező tartalma és az id mehet a szervernek, aki beteszi findoneandupdate-tel a databasebe

      setCommentingId(event.target.id)
      setCommenting(true)
      }

      const handleSaveComment = (event) => {
        event.preventDefault()
        console.log(event)
        console.log(event)
        setCommenting(false)
        setSendComment(true)
        //getFavourites()
    }

    const handleShowDailyWorkout = (event) => {
      event.preventDefault()
      console.log(event)
      setShowDailyWorkout(true);
    }

    return (
        showFavourites?(
        <>
        <div className="NavBar">
          <div className='homeNavigation'>
          <button onClick={(e)=>handleBackButton(e)} className="backButton navbarItem"><h2>Home</h2></button>
          </div>
         
        </div>


            <div className="row m-2 cards">
                {myFavourites.map((fav) => {
                    return (
                        <div key={fav.id} className="col-sm-6 col-md-auto mr-auto ml-auto v my-3 ">
                        <div id="exerciseCard" className="card shadow-sm w-100" style={{ minHeight: 225 }}>
                            <div className="card-body">
                            <h5 className="card-title text-center h2">Id :{fav.id} </h5>
                            <h6 className="card-subtitle mb-2 text-muted text-center">
                                {fav.name}
                            </h6>
                            <p className="card-text">{fav.target}</p>
                            <img alt="gif" src={fav.gifUrl}></img>
                            <button id={fav.id} className="removeFavorites" onClick={(e)=>handleRemoveFromFavourites(e)}>-</button>   
                            </div> 
                        </div>
                        {commenting?(
                          fav.id===commentingId.slice(-4)?(
                          <>
                          <button className="saveCommentButton" id={"saveCommentButton-"+(fav.id)} onClick={(e)=>handleSaveComment(e)}>Save comment</button>
                          <div>
                            <input id="commentEditInput" type="text" defaultValue={fav.comment} onChange={event => {
                              setComment(event.target.value)
                              console.log(event.target.value)}}/>
                          </div>
                          </>
                          ):(
                            <>
                            <button className="addCommentButton" id={"addCommentButton-"+(fav.id)} onClick={(e)=>handleAddComment(e)}>Add comment</button>
                            <div className="commentDiv">{fav.comment}</div>
                            </>
                          )
                        ):(
                          <>
                          <button className="addCommentButton" id={"addCommentButton-"+(fav.id)} onClick={(e)=>handleAddComment(e)}>Add comment</button>
                          <div className="commentDiv">{fav.comment}</div>
                          </>
                        )}
                        <Snackbar
                open={open}
                autoHideDuration={3000}
                onClose={handleClose}
                message="Removed from favourites"
                action={action}
                />
                        </div>
                    );
                })}
            </div>
            
        </>
        ):
        (

          showDailyWorkout?(
            <>
              <div className="NavBar">
                <div className='homeNavigation'>
                  <button onClick={(e)=>handleBackButton(e)} className="backButton navbarItem"><h2>Home</h2></button>
                </div>
              </div>
              <DailyWorkout/>
            </>
          
          ):(

              <div className='Home'>
                <div className='NavBar'>
                    <div className='options'>
                        <a id='Home' className='navbarItem'>Home</a>
                        <a className='navbarItem'>Exercises</a>
                        <button onClick={(e)=>handleShowFavourites(e)} className="favouritesButton navbarItem">Favourites</button>
                          <button type="button" onClick={(e)=> handleShowDailyWorkout(e) }>Daily workout planner</button>
                    </div>
                </div>
                <SearchBar></SearchBar>
            </div>
          )
        )   
      

    );
}

export default Home;