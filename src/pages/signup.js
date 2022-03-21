import React, {useState,useContext} from 'react'
import {HeaderContainer} from '../containers/header'
import {FooterContainer} from '../containers/footer'
import {SigninForm} from '../components'
import {FirebaseContext} from '../context/firebase'
import {useNavigate} from 'react-router-dom'
import * as ROUTES from '../constants/routes'

export default function Signup(){

    const nav = useNavigate()
    const {firebase} = useContext(FirebaseContext)

    const [firstName,setFirstName] = useState('')
    const [emailAddress,setEmailAddress] = useState('')
    const [password,setPassword] = useState('')
    const [error, setError] = useState('')

    const isInvalid = firstName == '' || password == '' || emailAddress == ''

    const handleSignUp = (events) =>{
        events.preventDefault()

        firebase
            .auth()
            .createUserWithEmailAndPassword(emailAddress,password)
            .then((result)=>
                result.user
                .updateProfile({
                    displayName: firstName,
                    photoURL: Math.floor(Math.random()*5)+1
                }).then(()=> {
                    nav(ROUTES.BROWSE)
                })
            ).catch((error) => {
                setFirstName('')
                setEmailAddress('')
                setPassword('')
                setError(error.message)
            })
    }

    return(
        <>
            <HeaderContainer>
                <SigninForm>
                    <SigninForm.Title>Sign Up</SigninForm.Title>
                    {error && <SigninForm.Error>{error}</SigninForm.Error>}

                    <SigninForm.Base onSubmit={handleSignUp} method = 'POST'>
                        <SigninForm.Input placeholder = 'First name' value = {firstName} onChange = {({target})=> setFirstName(target.value)} />
                        <SigninForm.Input placeholder = 'Email address' value = {emailAddress} onChange = {({target})=> setEmailAddress(target.value)} />
                        <SigninForm.Input placeholder = 'Password' value = {password} onChange = {({target})=> setPassword(target.value)} />
                        <SigninForm.Submit disabled = {isInvalid} type = 'submit'>Sign Up</SigninForm.Submit>
                        <SigninForm.Text>
                            Already a user? <SigninForm.Link to = {ROUTES.SIGN_IN}>Sign in now.</SigninForm.Link>
                        </SigninForm.Text>
                        <SigninForm.SmallText>
                            This page is protected by Google 
                        </SigninForm.SmallText>
                    </SigninForm.Base>
                </SigninForm>
            </HeaderContainer>
            <FooterContainer/>
        </>
    )
}