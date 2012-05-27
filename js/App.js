define([
        'jquery',
        'underscore',
        "neoforms",
        'neotools',
        'text!templates/dummyform.html',
        'text!templates/design.css'
], function($, _, Neoforms, Neotools){
    return function() {
        var style = require('text!templates/design.css');
        Neotools.css.addCSS(style);

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
