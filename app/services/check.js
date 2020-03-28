import Service from '@ember/service'
import ENV from 'suitepad-status-page/config/environment';
import { inject as service } from '@ember/service'
import { resolve } from 'rsvp';
import PromiseProxyMixin from '@ember/object/promise-proxy-mixin'
import ObjectProxy from '@ember/object/proxy';
import $ from 'jquery'
const isProduction = ENV.environment === 'production';
import { run } from '@ember/runloop';

export default Service.extend({
  store: service(),

  descriptions: null,

  getChecks() {
    return isProduction ? this.getChecksProduction() : this.getChecksDevelopment()
  },
  
  getChecksDevelopment() {
    const ObjectPromiseProxy = ObjectProxy.extend(PromiseProxyMixin);
    return ObjectPromiseProxy.create({
      promise: resolve($.getJSON(ENV.sample_data)).then((data) => {
        data.forEach(check => { check.id = check.token })
        this.get('store').pushPayload('check', {checks: data})
        return this.get('store').peekAll('check')
      })
    });
  },

  getChecksProduction() {
    return this.get('store').findAll('check')
  },

  getDecriptions() {
    $.getJSON(ENV.check_descriptions).then(data => {
      run.next(() => {
        this.set('descriptions', data)
      })
    })
  }
});
