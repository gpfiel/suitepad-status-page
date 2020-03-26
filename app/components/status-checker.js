import Component from '@ember/component';
import { inject as service } from '@ember/service';
import AuthorizerHeader from "suitepad-status-page/mixins/authorizer";
import { computed, get, set } from '@ember/object';
import { A } from '@ember/array'

export default Component.extend(AuthorizerHeader, {
  store: service(),
  classNames: 'status-checker',
  
  checkList: null,
  checkListPromise: null,

  currentSortingProperties: A(["down:asc"]),
	sortedList: computed.sort('checkList', 'currentSortingProperties'),

  init() {
    this._super(...arguments)
    this.loadData()
  },

  loadData() {
    this.set('checkListPromise', this.get('store').findAll('check'))
    this.get('checkListPromise').then((data) => {
      this.set('checkList', data)
    })
  },
});
