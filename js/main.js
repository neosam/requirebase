require.config({
    packages: [
        { name: 'neoforms'
        , location: 'libs/neoforms' },
        { name: 'neotools'
        , location: 'libs/neotools' }
    ],

    paths: {
      jquery: 'libs/jquery/jquery'
      , underscore: 'libs/underscore/underscore'
      , backbone: 'libs/backbone/backbone'
    },

    use: {
        'underscore': {
            attach: '_'
        },
        'backbone': {
            deps: ['use!underscore', 'libs/jquery/jquery'],
            attach: function(_, $) {
                return Backbone;
            }
        }
    }
});

require([
      'App'
], function(App) {
    App();
});
