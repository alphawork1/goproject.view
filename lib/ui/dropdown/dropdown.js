yum.define([
    PI.Url.create('UI', '/dropdown/dropdown.html'),
    PI.Url.create('UI', '/dropdown/dropdown.css')
], function(html){

    Class('UI.Dropdown').Extend(Mvc.Component).Body({

        instances: function(){
            this.view = new Mvc.View(html);
        }

    });

});