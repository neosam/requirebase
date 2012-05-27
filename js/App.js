define([
        'jquery',
        'underscore',
        "neoforms",
        'text!templates/dummyform.html'
], function($, _, Neoforms){
    return function() {
        input = Neoforms.newInput();
        input.setChangeFunction(function(value) {
            console.log(value);
        });
        console.log(input)
        $('body').append(input.getContainer());
        var dummyformCode = $(require('text!templates/dummyform.html'));
        $('body').append(dummyformCode);
        var dummyform = Neoforms.infectForm('input', dummyformCode);
        console.log(dummyform);
        dummyform.forename.setChangeFunction(function(value) {
            console.log("Changed forename to " + value);
        });
        dummyform.surname.setChangeFunction(function(value) {
            console.log("Changed surname to " + value);
        });
    }
});
