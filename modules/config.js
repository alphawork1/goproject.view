/**
 * Configuration Globais
 */
Application.config({

    environment: {
        type: 'develop'  
    },    

    viewcontroller:{

        react: {
            enable: false
        }

    },

    resources: {
        cache: true
    }
});

PI.Url.add('BaseUrl',   PI.Url.create(window.location.toString()).href());
PI.Url.add('Modules',   'BaseUrl', '/modules');

/**
 * Libs
 */
PI.Url.add('Lib',   'BaseUrl', '/lib');
PI.Url.add('UI',    'Lib', '/ui');

/**
 * Modules
 */
PI.Url.add('Project',           'Modules', '/project');
PI.Url.add('SearchBar',         'Modules', '/searchbar');



/**
* Services
*/
PI.Service.add('Project');