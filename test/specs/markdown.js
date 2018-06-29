var request = require('request');
var webhook = 'https://hooks.slack.com/services/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';


describe('Markdown', ()=> {
request.post('', (err, body) => {
request ({
 method: 'POST',
 url: webhook,
 json: {
     "text": "Markdown test start "}
});

});
    it('/submit - OK', ()=> {
        browser.url('https://sandbox.golos.io/submit')
        browser.getTitle().should.be.equal('Создать пост | GOLOS.io Блоги')
    });

    
    it('Check links', ()=> {
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
        }
         
    });
    
    it('Report', ()=> {
request.post('', (err, body) => {
request ({
 method: 'POST',
 url: webhook,
 json: {
     "text": "Markdown test completed "}
});

});
});
  
});
