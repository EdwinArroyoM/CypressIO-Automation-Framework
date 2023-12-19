

describe('Dynamic table', () => {
  beforeEach('Visit Dynamic table', () => {
    cy.visit('/dynamictable')
  });
  it.skip('Chrome CPU Test', () => {
    cy.get('div[role= "row"]>span ').each(($cell)=>{
      if ($cell.text().includes('Chrome')) {
        cy.log(`I have found the ${$cell.text()} Row`)
        let chromeRowValues: string[] = []
        chromeRowValues.push($cell.next().text())
        chromeRowValues.push($cell.next().next().text())
        chromeRowValues.push($cell.next().next().next().text())
        chromeRowValues.push($cell.next().next().next().next().text())
        cy.log('Chrome row values', chromeRowValues)
        
        chromeRowValues.forEach((chromCPUCellValue) => {
          if (chromCPUCellValue.includes('%')) {
            cy.log(chromCPUCellValue)
            //cy.get('.bg-warning').should('have.text', `Chrome CPU:${chromCPUCellValue}`)  //line with error
            cy.get('.bg-warning').should('have.text', `Chrome CPU: ${chromCPUCellValue}`)
          }
        })
      }
    })
  })
  it.skip('Testing', () => {
    cy.get('div[role= "row"]>span ').each(($cell) => {
      if ($cell.text().includes('Chrome')) {
        cy.log(`I have found the ${$cell.text()} Row`)
        let chromeRowValues: string[] = []
        for (var i = 0; i < 4; i++){
          chromeRowValues.push($cell.nextUntil().eq(i).text())
        }
        cy.log('Chrome row values', chromeRowValues)
        chromeRowValues.forEach((chromCPUCellValue) => {
          if (chromCPUCellValue.includes('%')) {
            cy.log(chromCPUCellValue)
            //cy.get('.bg-warning').should('have.text', `Chrome CPU:${chromCPUCellValue}`)  //line with error
            cy.get('.bg-warning').should('have.text', `Chrome CPU: ${chromCPUCellValue}`)
          }
        })
      }
    })
  })

  it('Testing new process', () => {
    cy.contains('div[role="row"]','Chrome')
    .contains('span[role="cell"]', '%')
    .then($chromeCPUCell => {
      cy.get('.bg-warning').should('include.text', $chromeCPUCell.text())
    })
  })
  it("Chrome CPU test", () => {
    cy.get('div[role="row"]')
      .contains("Chrome")
      .parent()
      .contains("%")
      .then((cell) => {
        cy.get(".bg-warning").should("contain", cell.text())
      })
  })
})