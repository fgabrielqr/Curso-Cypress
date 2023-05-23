/// <reference types="cypress"/>

it('A external test...', () => {

})

describe('Should group test...', () => {
    describe.only('Should group more specific test...', () => {
        it.skip('A internal more specific test01...', () => {

        })
        it('A internal more specific test02...', () => {

        })
    })
    it('A internal test...', () => {

    })
})