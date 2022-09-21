///<reference types="cypress" />


describe('Working on different environments', {pageLoadTimeout:40000},() => {

  it('Dev environment', () => {
    cy.visit(Cypress.env("dev"))
  })

  it('Staging enviroment', () => {
    cy.visit(Cypress.env("staging"))
  })

  it('Prod enviroment', () => {
    cy.visit(Cypress.env("prod"))
    cy.get('.gLFyf').type('Hello world in how many languages')
  })
})

describe('Delay @DESCRIBE LEVEL', {keystrokeDelay:2000,pageLoadTimeout:800000},() => { //adding delay on describe level

  it('Prod enviroment', () => {
    cy.visit(Cypress.env("prod"))
    cy.get('.gLFyf').type('Hello world in 2secs')
  })
})

describe('Delay @IT LEVEL',() => { 

  it('Prod enviroment',{keystrokeDelay:4000}, () => { //adding delay on it level
    cy.visit(Cypress.env("prod"))
    cy.get('.gLFyf').type('Hello world in 4secs')
  })
})
