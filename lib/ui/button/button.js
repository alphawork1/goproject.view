yum.define([
    PI.Url.create('UI', '/button/button.html'),
    PI.Url.create('UI', '/button/button.css')
], function(html){

    Class('UI.Button').Extend(Mvc.Component).Body({

        instances: function(){
            this.view = new Mvc.View(html);       
            
            this.__lock = false;                
        },
        
        loading: function(b){
            if(b){
                this.view.icon.hide();
                this.view.loading.show();
            }else{
                this.view.icon.show();
                this.view.loading.hide();
            }
            
            return this;
        },
        
        lock: function(){
            this.__lock = true;
            
            return this;
        },
        
        unlock: function(){
            this.__lock = false;
            
            return this;
        },
        
        events: {
        
            '{element} click': function(){
                if(this.__lock) return;
                
                this.loading(true).lock();
                this.event.trigger('click');
            }
        }

    });

});