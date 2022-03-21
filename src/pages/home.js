import React from 'react'
import { JumbotronContainer } from '../containers/jumbotron'
import { FaqsContainer } from '../containers/faqs'
import { FooterContainer } from '../containers/footer'
import {HeaderContainer} from '../containers/header'
import { Feature, Form } from '../components'

export default function Home(){
    return(
        <>
          <HeaderContainer>
            <Feature>
              <Feature.Title>
                  Unlimited films, TV programes and more
              </Feature.Title>
              <Feature.SubTitle>
                  Watch anywhere. Cancel at any time.
              </Feature.SubTitle>
              <Form>
                  <Form.Input placeholer = "Email address"/>
                  <Form.Button>Try It now</Form.Button>
              </Form> 
              <Form.Text>
                      Ready to Watch? Enter your email to create or restart your membership
                  </Form.Text>
            </Feature>
          </HeaderContainer>

          <JumbotronContainer/>
          <FaqsContainer/>
          <FooterContainer/>
          
        </>
    )
}