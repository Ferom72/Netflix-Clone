import React from 'react'
import {Background,Container,Logo,ButtonLink} from './styles/header'
import {Link} from 'react-router-dom'

export default function Header({ bg= true, children,...restprops}){
    return bg ? <Background {...restprops}>{children}</Background> : children 
}

Header.Frame = function HeaderFrame({children,...restprops}){
    return <Container {...restprops}>{children}</Container>
}

Header.ButtonLink = function HeaderButtonLink({children,...restprops}){
    return <ButtonLink {...restprops}>{children}</ButtonLink>
}

Header.Logo = function HeaderLogo({to,...restprops}){
    return (
        <Link to = {to}>
            <Logo {...restprops}/>
        </Link>
    )
}