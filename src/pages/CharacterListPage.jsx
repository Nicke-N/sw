import React, { useEffect, useContext } from 'react'
import { CharacterListContext } from '../contexts/CharacterContext'
import CharacterKit from '../data/CharacterKit'
import Collapse from '../components/Collapse'
import PagePrevious from '../components/PagePrevious'
import PageNext from '../components/PageNext'
import SearchField from '../components/SearchField'

export default function CharacterListPage() {

    const { 
        characterList, 
        setCharacterList, 
        nextURL, 
        setNextURL, 
        previousURL, 
        setPreviousURL 
    } = useContext(CharacterListContext)

    const characterKit = new CharacterKit() 

    function fetchList() {


        characterKit.fetchList()
            .then(res => res.json())
            .then(data => {
                setCharacterList(data.results)
                setNextURL(data.next)
                setPreviousURL(data.previous)

            })
            //.catch(err => console.log(err))
        
    }

    useEffect(() => {
        fetchList()
    }, [])

    return (
        <div>
            <SearchField />
            <PageNext nextURL={nextURL}/>
            <PagePrevious previousURL={previousURL}/>
            

            {characterList && characterList.map((character, index) => {
                const info = {
                    gender: character.gender,
                    height: character.height,
                    hairColor: character.hair_color,
                    eyeColor: character.eye_color    
                }
                return <Collapse key={index} title={character.name} content={info} />
               // <CharacterListItem key={index} index={index+1} character={character} />
            })}

            
        </div>   
        
            
    

    )
}
