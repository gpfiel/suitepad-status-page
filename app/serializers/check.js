import DS from 'ember-data'
import NormalizeEmbeddedData from 'be-common-model/mixins/normalize-embedded-data'

export default DS.RESTSerializer.extend(NormalizeEmbeddedData, {
  normalizeResponse(store, primaryModelClass, payload, id, requestType) {
    return this._super(store, primaryModelClass, payload, id, requestType);
  },
  normalizeSingleResponse(store, primaryModelClass, payload, id, requestType) {
    return this._super(store, primaryModelClass, payload, id, requestType);
  },
  normalizeArrayResponse(store, primaryModelClass, payload, id, requestType) {
    payload.forEach((check => {
      check.id = check.token;
    }))
    return this._super(store, primaryModelClass, payload, id, requestType);
  }
});
