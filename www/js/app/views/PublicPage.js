define([
    'jquery',
    'underscore',
    'backbone',
    'vm',
    'text!templates/PublicPageTemplate.html',
], function($, _, Backbone, Vm, PublicPageTemplate) {
    
    var PublicPage = Backbone.View.extend({
        
        initialize: function() {

        },
        el: '.page',
        render: function() {
            console.log(PublicPageTemplate);
            var t = _.template( PublicPageTemplate, { content:'Hello content from json' });
            this.$el.html(t);

//            var v = Vm.create( this, 'TodoItemListView', TodoItemListView, {collection: this.collection} );
//            v.render();


        }
        
    });

    return PublicPage;    
    
});