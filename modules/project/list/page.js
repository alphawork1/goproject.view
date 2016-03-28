yum.define([
  PI.Url.create('Project', '/list/page.html'),
  PI.Url.create('Project', '/list/page.css')

  ], function(html){

    Class('Project.List.Page').Extend(Mvc.Component).Body({

      instances: function(){
        this.view = new Mvc.View(html);
      },

      viewDidLoad: function(){

        this.base.viewDidLoad();

        var mix_data = {
          labels: ['Day 1', 'Day 2', 'Day 3', 'Day 4', 'Day 5', 'Day 6', 'Day 7', 'Day 8', 'Day 9', 'Day 10'],
          series: [
          [100, 90, 80, 70, 60, 50, 40, 30, 20, 10],
          [100, 80, 120, 40, 100, 20, 50, 95, 5, 20]
          ]
        };

        new Chartist.Line("#chartBarlineMix1 .chart-line", mix_data, {
          low: 0,
          width: '300px',
          height: '100px',
          showArea: false,
          showPoint: true,
          showLine: true,
          lineSmooth: true,
          fullWidth: true,
          lineSmooth: false,
          chartPadding: {
            top: 2,
            right: 4,
            bottom: 0,
            left: 4
          },
          axisX: {
            showLabel: false,
            showGrid: false,
            offset: 0
          },
          axisY: {
            showLabel: false,
            showGrid: false,
            offset: 0
          }
        });
      },

      events: {

        '@pesquisa.menu click': function(){
          alert('1');
        }
      }

    });

});