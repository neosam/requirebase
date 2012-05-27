define(['jquery', "neoforms"], function($, Neoforms){
    return function() {
        input = Neoforms.newInput();
        input.setChangeFunction(function(value) {
            console.log(value);
        });
        console.log(input)
        $('body').append(input.getContainer());
    }
});
