import Ember from 'ember';

export default Ember.Controller.extend({
  barChartData: {
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


  pieChartData: [
    {
        value : 30,
        color: "#D97041",
        title : "January"
    },
    {
        value : 90,
        color: "#C7604C",
        title : "February"
    },
    {
        value : 24,
        color: "#21323D",
        title : "March"
    },
    {
        value : 58,
        color: "#9D9B7F",
        title : "April"
    },
    {
        value : 82,
        color: "#7D4F6D",
        title : "May"
    },
    {
        value : 8,
        color: "#584A5E",
        title : "June"
    }
  ],

  doughnutChartData: [
    {
        value : 30,
        color: "#D97041",
        title : "January"
    },
    {
        value : 90,
        color: "#C7604C",
        title : "February",
        expandInRadius : 0.2,
        expandOutRadius : 0.2
    },
    {
        value : 24,
        color: "#21323D",
        title : "March"
    },
    {
        value : 58,
        color: "#9D9B7F",
        title : "April",
        expandInRadius : -0.2
    },
    {
        value : 82,
        color: "#7D4F6D",
        title : "May"
    },
    {
        value : 8,
        color: "#584A5E",
        title : "June",
        expandOutRadius : 0.3
    }
  ]

});
