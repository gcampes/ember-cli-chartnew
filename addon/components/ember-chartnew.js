import Ember from 'ember';

export default Ember.Component.extend({
  didInsertElement(){
    new Chart(this.get('element').childNodes[0].getContext("2d"))[Ember.String.classify(this.get('type'))](this.get('data'), this.get('options'));
  }
});
