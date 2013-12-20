/*
 * Router setup, all visible webiste paths should be here with appropirate views attached below.
 */
define([
    'jquery',
    'underscore',
    'backbone',
    'vm'
], function($, _, Backbone, Vm) {
    var AppRouter = Backbone.Router.extend({
        routes: {
            
            // Pages
            'welcome': 'welcome',
            'docs': 'docs',
            
            // Default - catch all
            '*actions': 'welcome'
        }
    });

    var initialize = function(options) {
        
        var appView = options.appView;
        
        var router = new AppRouter(options);

        /**
         * Repeate these for other paths. The views will render inside the template used in the appView.
         */
        router.on('route:welcome', function() {

            require(['app/views/WelcomeView'], function(WelcomePage) {
                var welcomePage = Vm.create(appView, 'WelcomePage', WelcomePage);
                welcomePage.render();
            });
            
        }); 
        
        router.on('route:docs', function() {

            require(['app/views/PublicPage'], function(PublicPage) {
                var publicPage = Vm.create(appView, 'PublicPage', PublicPage);
                publicPage.render();
            });
            
        });         
        
        Backbone.history.start();
    };
    return {
        initialize: initialize
    };
    
});
