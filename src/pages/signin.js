import React, {useState,useContext} from 'react'
import {HeaderContainer} from '../containers/header'
import {FooterContainer} from '../containers/footer'
import {SigninForm} from '../components'
import {FirebaseContext} from '../context/firebase'
import {useNavigate} from 'react-router-dom'
import * as ROUTES from '../constants/routes'

export default function Signin(){

    const nav = useNavigate()
    const {firebase} = useContext(FirebaseContext)
    const [emailAddress,setEmailAddress] = useState('');
    const [password,setPassword] = useState('');
    const [error,setError] = useState('');
    
    const isInvalid = password === '' || emailAddress === ''

    const handleSignin = (event) =>{
        event.preventDefault()

        firebase
            .auth()
            .signInWithEmailAndPassword(emailAddress,password)
            .then(()=>{
                nav.push(ROUTES.BROWSE)
            })
            .catch((error) => {
                setEmailAddress('')
                setPassword('')
                setError(error.message)
            })
    }

    return(
        <>
         <HeaderContainer>
             <SigninForm>
                 <SigninForm.Title>Sign In</SigninForm.Title>
                 {error && <SigninForm.Error data-testid="error">{error}</SigninForm.Error>}

                 <SigninForm.Base onSubmit = {handleSignin} method = 'POST'>
                    <SigninForm.Input placeholder = 'Email address' value = {emailAddress} onChange = {({target}) => setEmailAddress(target.value)}/>
                    <SigninForm.Input placeholder = 'Password' type ='password' autoComplete = 'off' value = {password} onChange = {({target}) => setPassword(target.value)}/>
                 </SigninForm.Base>

                 <SigninForm.Submit disabled = {isInvalid} type = 'submit'>Sigin In</SigninForm.Submit>
                 <SigninForm.Text>New to Netflix? <SigninForm.Link to = {ROUTES.SIGN_UP}>Sign up now.</SigninForm.Link></SigninForm.Text>
                 <SigninForm.SmallText>
                     This page is protected by Google 
                 </SigninForm.SmallText>
             </SigninForm>
         </HeaderContainer>
         <FooterContainer/>
        </>
    )
}