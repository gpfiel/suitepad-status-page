import Component from '@ember/component';
import { inject as service } from '@ember/service';
import AuthorizerHeader from "suitepad-status-page/mixins/authorizer";
import SortData from "suitepad-status-page/mixins/sort-data";
import { computed } from '@ember/object';
import { A } from '@ember/array'

export default Component.extend(AuthorizerHeader, SortData, {
  store: service(),
  check: service(),

  classNames: 'status-checker',
  
  checkList: null,
  checkListPromise: null,
  checkSelected: null,

  currentSortingProperty: 'down',
  currentSortingDirection: 'asc',

  displayCheckDetails: false,

  currentSortingProperties: A(["down:asc"]),
	sortedList: computed.sort('checkList', 'currentSortingProperties'),

  init() {
    this._super(...arguments)
    this.loadData()
  },

  loadData() {
    const request = this.get('check').getChecks()
    this.get('check').getDecriptions()
    this.set('checkListPromise', request)
    this.get('checkListPromise').then((data) => {
      this.set('checkList', data)
    })
  },

  actions: {
    showCheckView(check) {
      this.set('displayCheckDetails', true)
      this.set('checkSelected', check)
    },
    hideCheckView() {
      this.set('displayCheckDetails', false)
      this.set('checkSelected', null)
    },
  }
});
