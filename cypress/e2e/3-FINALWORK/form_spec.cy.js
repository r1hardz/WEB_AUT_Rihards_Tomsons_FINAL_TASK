describe('Automation Practice Form', () => {
    beforeEach(() => {
        Cypress.on('uncaught:exception', (err, runnable) => {
            return false;
        });
    });

    it('should submit the form with the correct data', () => {
        cy.visit('https://demoqa.com/automation-practice-form');
        cy.get('#firstName').type('Rihards');
        cy.get('#lastName').type('Tomsons');
        cy.get('#userEmail').type('rihardstomsosn2@gmail.com');
        cy.get('input[name=gender][value=Male]').check({ force: true });
        cy.get('#userNumber').type('1234567890');
        cy.get('#dateOfBirthInput').click();
        cy.get('.react-datepicker__month-select').select('February');
        cy.get('.react-datepicker__year-select').select('1930');
        cy.get('.react-datepicker__day--028:not(.react-datepicker__day--outside-month)').click();
        cy.get('#subjectsInput').type('Economics{enter}');
        cy.get('input[type=checkbox][id=hobbies-checkbox-3]').check({ force: true });
        cy.get('#uploadPicture').selectFile('cypress/files/1.jpg');
        cy.get('#currentAddress').type('123 Main St, Springfield');
        cy.get('#state').click().get('#react-select-3-option-0').click();
        cy.get('#city').click().get('#react-select-4-option-0').click();
        cy.get('#submit').click();

        cy.get('.modal-body').should('contain', 'Rihards');
        cy.get('.modal-body').should('contain', 'Tomsons');
        cy.get('.modal-body').should('contain', 'rihardstomsosn2@gmail.com');
        cy.get('.modal-body').should('contain', 'Male');
        cy.get('.modal-body').should('contain', '1234567890');
        cy.get('.modal-body').should('contain', '28 February,1930');
        cy.get('.modal-body').should('contain', 'Economics');
        cy.get('.modal-body').should('contain', 'Music');
        cy.get('.modal-body').should('contain', '1.jpg');
        cy.get('.modal-body').should('contain', '123 Main St, Springfield');
        cy.get('.modal-body').should('contain', 'NCR');
        cy.get('.modal-body').should('contain', 'Delhi');
    });
});
