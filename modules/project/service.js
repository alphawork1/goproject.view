yum.define([
    PI.Url.create('Project', '/page/page.js'),
    PI.Url.create('Project', '/list/page.js'),
    PI.Url.create('Project', '/model.js')
], function (html) {

    Class('Service.Project').Extend(PI.Service).Body({

        load: function(app){
            this.base.load(app);
        },

        routes: {
            
            'project/add': function(){
                var page = new Project.Page({
                    model: new Project.Model()
                });
                
                app.setPage( page );
            },
            
            'project/edit/:Id': function(id){
                var page = new Project.Page({
                    model: new Project.Model({
                        Id: id
                    })
                });
                
                app.setPage( page );
            },
            
            'project/list': function(){
                var page = new Project.List.Page();
                
                app.setPage( page );
            }
            
        },

        events: {
            
        }

    });

});