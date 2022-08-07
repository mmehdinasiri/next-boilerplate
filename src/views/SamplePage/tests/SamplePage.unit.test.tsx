// tests for SamplePage go here
import React from 'react'
import { mount } from '@cypress/react'
import { Home } from '@/pages/index'

it('renders link', () => {
    mount(<Home locale='en' />)
    cy.get('a').contains('Learn React')
})
