import React, { useContext } from 'react'
import { CharacterListContext } from '../contexts/CharacterContext'
import CharacterKit from '../data/CharacterKit'

export default function ButtonSearch() {

    const characterKit = new CharacterKit()
    const { setCharacterList, setNextURL, setPreviousURL, searchTerm } = useContext(CharacterListContext)


    function clickHandler (e) {
        
        let query = `?search=${e.target.value}`

        characterKit.fetchSearch(query)
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
                console.log(newURL)
            }
            
        })


    }

    return (
 
        <button onClick={clickHandler} className='btn btn-primary' value={searchTerm}> Search </button>

    )
}
