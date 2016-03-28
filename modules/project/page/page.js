yum.define([
  PI.Url.create('Project', '/page/page.html'),
  PI.Url.create('Project', '/page/page.css'),
  PI.Url.create('UI', '/button/button.js')

  ], function(html){

    Class('Project.Page').Extend(Mvc.Component).Body({

      instances: function(){
        this.view = new Mvc.View(html);
        
        this.save = new UI.Button();
      },

      viewDidLoad: function(){

        if(this.model.isNotNew()){
          this.popule();                
        }
        
        this.base.viewDidLoad();
      },
      
      popule: function(){
        var self = this;
        
        this.model.get().ok(function(project){
          self.model = project;
          
          self.injectModelToView( project );
        });
      },

      events: {

        '{save} click': function(){
          var self = this;
          
          this.saveModel( this.model ).ok(function(project){
                PI.Url.Hash.to( 'project/edit/' + project.Id );
          }).error(function(messages){
                alert(messages.join('\n'));
          }).done(function(){
                self.save.unlock().loading(false);
          });
        }

      }

    });

});