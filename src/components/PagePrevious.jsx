import React from 'react'
import Button from './ButtonPageNavigation'

export default function PagePrevious(props) {


    return (
        <>
            {props.previousURL && 
                 <Button value={props.previousURL} text=' Back '/>
            }
        </>
    )
}