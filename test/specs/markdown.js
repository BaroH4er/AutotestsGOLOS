//var request = require('request');
//var webhook = 'https://hooks.slack.com/services/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';


describe('Markdown', ()=> {
    
    
/*request.post('', (err, body) => {
request ({
 method: 'POST',
 url: webhook,
 json: {
     "text": "Markdown test start "}
});

});*/


    it('submit.', ()=> {
        browser
            .url('https://sandbox.golos.io/submit')
            .getTitle().should.be.equal('Создать пост | GOLOS.io Блоги');
       
        browser.saveScreenshot('reportsImg/result1.png')
    });

    it('Title', ()=> {
        browser.setValue('.PostTitle__input', 'AUTO_TEST.')
        browser.pause(1000);
        browser.getText('.Hint__content').should.be.equal('Не может заканчиваться на точку')
        browser.saveScreenshot('reportsImg/result2.png')
        browser.setValue('.PostTitle__input', 'AUTO_TEST')
    });
    it('Body', ()=> {



    browser.click('.MarkdownEditor')
    browser.pause(1000)
    var result = browser.elementActive();
    var activeElement = result.value && result.value.ELEMENT;
//        browser.elementIdValue('activeElement', 'world');
browser.elementIdValue(activeElement, ["ENTER"]);



        
        browser.pause(3000)        
        browser.saveScreenshot('reportsImg/result3.png')
        
        
    }); 
    
    
    it('Footer', ()=> {

        browser
            .setValue('.TagInput__input', 'test')
            .pause(1000)
    });
    
    it('Posting', ()=> {

        browser.click('.Button .Button_primary')    
        
    });
    
 /*   it('Report', ()=> {
request.post('', (err, body) => {
request ({
 method: 'POST',
 url: webhook,
 json: {
     "text": "Markdown test completed "}
});

});
});*/
  
});









/********************************************************************************/


     /*   let links = browser.elements('.MET__new-line-actions')

        for (let i=0; i < links.value.length; i++) {
          let link = links.value[i].ELEMENT,
              span = browser.elementIdAttribute(link,'span'),
              status = true
          console.log(span.value)
                
          fetch(span.value)
            .then( function(res){
            })
            .catch( function(err){
              status = false
            })
          expect(status).to.be.true;
        }*/
        
       // browser.getValue('.Icon editor-toolbar/picture MET__new-line-item MET__new-line-icon')
       
       
       
       
       
       
       
       
          //browser.click('.MarkdownEditor')
        //browser.setValue('.CodeMirror pre', 'Markdown autotest')
        //browser.pause(1000)
        
       // browser.click('.MarkdownEditor')
       // browser.ElEMENT('.MET__new-line-actions').click('span*=Добавить изображение')
        // browser.setValue('#q','webdriver')
        
        //var data = new Buffer("Hello World").toString('base64')
        //browser.pushFile('reportsImg/result2.png', data)
        //browser.click('.TagInput__input-plus')
