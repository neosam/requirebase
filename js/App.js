define(['jquery', "neoforms"], function($, Neoforms){
    return function() {
        input = Neoforms.newInput();
        console.log(input)
        $('body').append(input.getContainer());
    }
});
