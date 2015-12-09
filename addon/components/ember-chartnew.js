import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['ember-chartnew'],

  defaultOptions: {
    animationSteps: 30,
    graphTitle: "Title",
    inGraphDataShow: true,
    annotateDisplay: true,
    graphTitleFontSize: 18
  },

  dataDidChange: Ember.observer('data', function(){
    this.renderChart();
  }),

  renderChart(){
    let context = this.get('element').childNodes[0].getContext("2d")
    let chartType = Ember.String.classify(this.get('type'));
    let data = this.get('data');
    let options = Ember.merge(this.get('defaultOptions'), this.get('options'))
    new Chart(context)[chartType](data, options);
  },

  didInsertElement(){
    this.renderChart();
  }
});
