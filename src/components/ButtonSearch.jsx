import React, { useContext } from 'react'
import { CharacterListContext } from '../contexts/CharacterContext'
import CharacterKit from '../data/CharacterKit'

export default function ButtonSearch() {

    const characterKit = new CharacterKit()
    const { setCharacterList, setNextURL, setPreviousURL, searchTerm } = useContext(CharacterListContext)


    function clickHandler (e) {
        const query = `?search=${e.target.value}`
        characterKit.fetchSearch(query)
        .then(res => res.json())
        .then(data => {
            setCharacterList(data.results)
            setNextURL(data.next)
            setPreviousURL(data.previous)
        })


    }

    return (
 
        <button onClick={clickHandler} className='btn btn-primary' value={searchTerm}> Search </button>

    )
}
