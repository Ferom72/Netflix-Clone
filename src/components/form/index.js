import React from 'react'
import {Container,Input,Button,Text} from './styles/form'

export default function Form({children,restprops}){
    return <Container {...restprops} >{children}</Container>
}

Form.Input = function FormInput({...restprops}){
    return <Input {...restprops}/>
}

Form.Button = function FormButton({children,restprops}){
    return (
        <Button {...restprops}>
            {children}
            <img src='/images/icons/chevron-right.png' alt = 'Try Now'/>
        </Button>
    )
}

Form.Text = function FormText({children,...restprops}){
    return <Text {...restprops}>{children}</Text>
}