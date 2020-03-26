import DS from 'ember-data'

export default DS.RESTSerializer.extend({
  normalizeResponse(store, primaryModelClass, payload, id, requestType) {
    return this._super(store, primaryModelClass, payload, id, requestType);
  },
  normalizeSingleResponse(store, primaryModelClass, payload, id, requestType) {
    return this._super(store, primaryModelClass, payload, id, requestType);
  },
  normalizeArrayResponse(store, primaryModelClass, payload, id, requestType) {
    payload.forEach((check => { check.id = check.token; }))
    payload = { checks: payload }
    return this._super(store, primaryModelClass, payload, id, requestType);
  }
});
