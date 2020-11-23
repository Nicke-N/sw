import React, { useContext } from 'react'
import CharacterKit from '../data/CharacterKit'
import { CharacterListContext } from '../contexts/CharacterContext'

export default function Button(props) {

    const characterKit = new CharacterKit()
    const { setCharacterList, setNextURL, setPreviousURL } = useContext(CharacterListContext)

    function clickHandler (e) {
        const newURL = e.target.value
        characterKit.fetchListByURL(newURL)
        .then(res => res.json())
        .then(data => {
            setCharacterList(data.results)
            var newURL
            if(data.next) {
                newURL = data.next.replace(/http/g, "https");            
                setNextURL(newURL)
                
            }

            if(data.previous) {
                newURL = data.previous.replace(/http/g, "https");
                setPreviousURL(newURL)
               
            }
        })


    }
    return (
        
        <button onClick={clickHandler} className='btn btn-secondary' value={props.value}> {props.text} </button>
        
    )
}
