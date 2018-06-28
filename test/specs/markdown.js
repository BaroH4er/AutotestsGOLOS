describe('Markdown', ()=> {

    it('/submit - OK', ()=> {
        browser.url('https://sandbox.golos.io/submit')
        browser.getTitle().should.be.equal('Создать пост | GOLOS.io Блоги')
    });

    
    /*it('Registration - OK', ()=> {
        browser.url('https://sandbox.golos.io/create_account')
        browser.getTitle().should.be.equal('GOLOS.io Блоги')
        browser.url('')
        let links = browser.elements('a')

        for (let i=0; i < links.value.length; i++) {
          let link = links.value[i].ELEMENT,
              href = browser.elementIdAttribute(link,'href'),
              status = true

          console.log(href.value)

          fetch(href.value)
            .then( function(res){
            })
            .catch( function(err){
              status = false
            })

          expect(status).to.be.true;
        }*/
    });
