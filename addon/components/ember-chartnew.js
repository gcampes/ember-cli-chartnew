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

  processWidth(){
    if(this.get('width')){
      this.set('processedWidth', this.get('width'));
    }
    this.set('processedWidth', this.get('element').clientWidth);
  },

  processHeight(){
    if(this.get('height')){
      console.log(1);
      this.set('processedHeight', this.get('height'));
    }
    console.log(this.get('element'));
    this.get('element').style.height = this.get('element').parentNode.clientHeight + 'px';
    this.set('processedHeight', this.get('element').clientHeight);
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
    setTimeout(() => {
      this.processWidth();
      this.processHeight();
    });
    setTimeout(() => {
      this.renderChart();
    }, 1000);
  }
});
