//RequireJS config was partly created from the post at http://bardevblog.wordpress.com/2013/01/05/re-learning-backbone-js-require-js-and-amd/
requirejs.config({
    //Forces files to be retreived from the server, not the cache
    urlArgs: "bust=" +  (new Date()).getTime(), 
    //Set timeoutfor loading scripts
    waitSeconds: 200,
    //If modules that are loaded do not use "define" then a error will be thrown
    //If set to true this will throw exception for bootstrap js. Still not clear why
    enforceDefine: true, 
    //By default load any module IDs from this path
    baseUrl: 'js',
    //except, if the module ID starts with "app",
    //load it from the js/app directory. paths
    //config is relative to the baseUrl, and
    //never includes a ".js" extension since
    //the paths config could be for a directory.
    paths: {
        app: 'app',
        jquery: 'lib/jquery/jquery-2.0.3',
        underscore: 'lib/underscore/underscore',
        backbone: 'lib/backbone/backbone',
        text: 'lib/require/text',

        bootstrap : 'lib/bootstrap/bootstrap',
        
        //Templates folder path
        templates : '../templates'
    },
    shim: {
        "underscore": {
            deps: [],
            exports: "_"
        },
        "backbone": {
            deps: ["jquery", "underscore"],
            exports: "Backbone"
        },
        
        /* Without this backbone define block below will throw exception for bootstrap.js.
         * To fix this you need to add exports value in the shim config so that RequireJS can check 
         * whether the script was succesfully loaded. In case of Bootstrap that’s slightly tricky as 
         * Bootstrap doesn’t ‘export’ a propert global variable only a bunch of jquery plugins, but you can 
         * use any of those plugins as an export value e.g. $.fn.popove - 
         * See more at: http://cloverink.net/shim-twitter-bootstrap-for-requirejs/#sthash.Oq7dnBFg.dpuf        */        
        "bootstrap": {
            deps: ["jquery" ],
            exports: "$.fn.popover"
        }
        
    },

});

/* Start the main app logic.
 * This is where the mian app view is initiated.
 * Note: http://bardevblog.wordpress.com/2013/01/05/re-learning-backbone-js-require-js-and-amd/
 * There is something odd here. The first error identifies that main.js does not have a define, 
 * which it doesn’t. This has been identified as an issue: enforceDefine triggers error on main file.
 *  For the most part the author of RequireJS mentions to ignore the error or use “define” 
 *  method instead of the require method. So in the next example we are going to change the “require” 
 *  method to “define”. It seems like an odd workaround, but this is what we will do.
 */
define( [
    'app/views/AppView',
    'router',
    'vm',
    'bootstrap'
], function( AppView, Router, Vm ) {
    
    var appView = Vm.create({}, 'AppView', AppView);

    appView.render();
    Router.initialize({appView: appView});  // The router now has a copy of all main appview
    
});