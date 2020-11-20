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
            setNextURL(data.next)
            setPreviousURL(data.previous)
        })


    }
    return (
        
        <button onClick={clickHandler} className='btn btn-secondary' value={props.value}> {props.text} </button>
        
    )
}
