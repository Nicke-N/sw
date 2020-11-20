import React  from 'react'
import Button from './ButtonPageNavigation'

export default function PageNext(props) {


    return (
        <>
            {props.nextURL && 
                <Button value={props.nextURL} text=' Next '/>
            }
        </>
    )
}
