import React, { useContext } from 'react'
import { CharacterListContext } from '../contexts/CharacterContext'

export default function SearchBar() {
    const {setSearchTerm} = useContext(CharacterListContext)
    return (
        <input type="text" onChange={e => setSearchTerm(e.target.value.replace(/</g, "&lt;").replace(/>/g, "&gt;"))} />
    )
}
