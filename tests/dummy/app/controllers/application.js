import Ember from 'ember';

export default Ember.Controller.extend({
  chartData: {
    labels: ["Open", "In Progress", "Closed"],
    datasets: [
      {
        fillColor: "rgba(56, 134, 184, 0.5)",
        pointColor: "rgba(220,220,220,1)",
        pointstrokeColor: "yellow",
        data: [95,53,99],
        title: "2015"
      }
    ]
  },

  chartOptions: {
    animationSteps: 30,
    graphTitle: "Title",
    inGraphDataShow: true,
    annotateDisplay: true,
    graphTitleFontSize: 18
  },
  
});
