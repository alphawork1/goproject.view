yum.define([
    
], function () {

    Class('Project.Model').Extend(Mvc.Model.Base).Body({

        instances: function () {
            this.Publico = 0;
        },

        init: function () {
            this.base.init('/project');
        },

        validations: function () {
            return {
                'Nome': new Mvc.Model.Validator.Required('Informe o nome do projeto')
            };
        },

        initWithJson: function (json) {
            var model = new Project.Model(json);

            return model;
        },

        actions: {
            'get': '/get?Id=:Id'
        }

    });
});