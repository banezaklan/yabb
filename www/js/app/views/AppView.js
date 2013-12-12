/* 
 * Main view code. This is where the app is setup and from where the basic parts of the site are loaded.
 */
define([
    'jquery',
    'underscore',
    'backbone',
    'vm',
    'text!templates/MainLayoutTemplate.html',
], function($, _, Backbone, Vm, MainLayoutTemplate) {
    
    var AppView = Backbone.View.extend({
        el: '.container',
        initialize: function() {

//            var NestedView2 = Backbone.View.extend({});
//            var NestedView1 = Backbone.View.extend({
//                initialize: function() {
//                    var nestedView2 = Vm.create(this, 'Nested View 2', NestedView2);
//                }
//            });
//            var nestedView1 = Vm.create(this, 'Nested View 1', NestedView1);

        },
        render: function() {

            this.$el.html(MainLayoutTemplate);
            var that = this;
            require(['app/views/MainMenuView'], function(MainMenuView) {
                var mainMenuView = Vm.create(that, 'MainMenuView', MainMenuView);
                mainMenuView.render();
            });
            require(['app/views/MainFooterView'], function(MainFooterView) {
                // Pass the appView down into the footer so we can render the visualisation
                var footerView = Vm.create(that, 'MainFooterView', MainFooterView, {appView: that});
                footerView.render();
            });
//            return this;
        }
    });
    return AppView;
    
});
