import DS from 'ember-data';
import AuthorizerHeader from "bolt-ember-common/mixins/authorizer";

export default DS.RESTAdapter.extend(AuthorizerHeader, {
});
