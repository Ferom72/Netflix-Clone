import React from 'react'
import faqsData from '../fixtures/faqs.json'
import { Accordion, Form } from '../components'


export function FaqsContainer(){
    return(
        <Accordion>
            <Accordion.Title>Frequesntly Asked Questions</Accordion.Title>
            {faqsData.map((item)=>(
                <Accordion.Item key={item.id}>
                    <Accordion.Header>{item.header}</Accordion.Header>
                    <Accordion.Body>{item.body}</Accordion.Body>
                </Accordion.Item>
            ))}   
            <Form>
                    <Form.Input placeholer = "Email address"/>
                    <Form.Button>Try It now</Form.Button>
                    <Form.Text>
                        Ready to Watch? Enter your email to create or restart your membership
                    </Form.Text>
            </Form>         
        </Accordion>
    )
}