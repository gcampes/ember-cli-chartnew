module.exports = {
  description: ''

  // locals: function(options) {
  //   // Return custom template variables here.
  //   return {
  //     foo: options.entity.options.foo
  //   };
  // }

  afterInstall: function() {
    var _this = this;

    return this.addBowerPackagesToProject([{name: 'chartnew-js', target:'latest'}]);
  }

};
