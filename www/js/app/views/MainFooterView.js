define([
    'jquery',
    'underscore',
    'backbone',
    'vm',
    'text!templates/MainFooterTemplate.html',
], function($, _, Backbone, Vm, MainFooterTemplate ) {
    var MainMenuView = Backbone.View.extend({
        el: '#main-footer',
        initialize: function() {
        },
        render: function() {
            $(this.el).html( MainFooterTemplate );
        },

    })

    return MainMenuView;
});
