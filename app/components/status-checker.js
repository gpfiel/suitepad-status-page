import Component from '@ember/component';
import { inject as service } from '@ember/service';
import AuthorizerHeader from "suitepad-status-page/mixins/authorizer";

export default Component.extend(AuthorizerHeader, {
  store: service(),
  classNames: 'status-checker',
  
  checkList: null,
  checkListPromise: null,

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
