import Component from '@ember/component';

export default Component.extend({
  classNames: 'check-view',

  actions: {
    close() { this.close() }
  }
});
