yum.define([
    PI.Url.create('Modules', '/app.css'),
    PI.Url.create('Project', '/page/page.js'),
    PI.Url.create('SearchBar', '/search.js')
], function(html){

    Class('App').Extend(Mvc.Component).Body({

        instances: function(){
            this.searchbar = new SearchBar.Search();
            
            this.currentPage = null;            
        },
        
        setPage: function(page){
            if(this.currentPage != null){
                this.currentPage.destroy();
            }
            
            this.currentPage = page;
            
            page.render( this.view.page );
        }

    });

});