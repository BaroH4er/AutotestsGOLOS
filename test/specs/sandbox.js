describe('SandBox', ()=> {

    it('Index - OK', ()=> {
        browser.url('https://sandbox.golos.io/')
        browser.getTitle().should.be.equal('Trending Посты | GOLOS.io Блоги')
    });

    it('Market - OK', ()=> {
        browser.url('https://sandbox.golos.io/market')
        browser.getTitle().should.be.equal('Market | GOLOS.io Блоги')
        //browser.url('https://sandbox.golos.io/market')
        //browser.getText('#What-is-WebdriverIO').should.be.equal('What is WebdriverIO?')
    });

    it('Registration - OK', ()=> {
        browser.url('https://sandbox.golos.io/create_account')
        browser.getTitle().should.be.equal('GOLOS.io Блоги')
        /*browser.url('')
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
});
// curl -X POST -H 'Content-type: application/json' --data '{"text":"SandBox - Доступен"}' https://hooks.slack.com/services/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
