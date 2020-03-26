import Component from '@ember/component';
import { inject as service } from '@ember/service';

export default Component.extend({
  store: service(),
  classNames: 'status-checker',
  checkList: null,

  init() {
    this._super(...arguments)
    this.loadData()
  },

  loadData() {
    this.get('store').findAll('check').then((data) => {
      this.set('checkList', data)
    })
  },
});
