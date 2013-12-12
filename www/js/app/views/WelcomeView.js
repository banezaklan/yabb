define([
    'jquery',
    'underscore',
    'backbone',
    'vm',
    'text!templates/WelcomeTemplate.html',
], function($, _, Backbone, Vm, WelcomeTemplate) {
    
    var WelcomePage = Backbone.View.extend({
        
        initialize: function() {

        },
        el: '.page',
        render: function() {
            this.$el.html(WelcomeTemplate);

//            var v = Vm.create( this, 'TodoItemListView', TodoItemListView, {collection: this.collection} );
//            v.render();


        }
        
    });

    return WelcomePage;    
    
});