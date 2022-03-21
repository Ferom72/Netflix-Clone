import React from 'react'
import { Container,Base,Error,Title,Text,SmallText,Link,Input,Submit } from './styles/signin-form'

export default function SigninForm({children,...restprops}){
    return <Container {...restprops}>{children}</Container>
}

SigninForm.Base = function SigninFormBase({children,...restprops}){
    return <Base {...restprops}>{children}</Base>
}

SigninForm.Title = function SigninFormTitle({children,...restprops}){
    return <Title {...restprops}>{children}</Title>
}

SigninForm.Text = function SigninFormText({children,...restprops}){
    return <Text {...restprops}>{children}</Text>
}

SigninForm.SmallText =function SigninFormSmallText({children,...restprops}){
    return <SmallText {...restprops}>{children}</SmallText>
}

SigninForm.Link = function SigninFormLink({children,...restprops}){
    return <Link {...restprops}>{children}</Link>
}

SigninForm.Input = function SigninFormInput({children,...restprops}){
    return <Input {...restprops}>{children}</Input>
}

SigninForm.Submit = function SigninFormSubmit({children,...restprops}){
    return  <Submit {...restprops}>{children}</Submit>
}

SigninForm.Error = function SigninFormError({children,...restprops}){
    return <Error {...restprops}>{children}</Error>
}
