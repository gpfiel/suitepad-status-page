import DS from 'ember-data';
import AuthorizerHeader from "suitepad-status-page/mixins/authorizer";

export default DS.RESTAdapter.extend(AuthorizerHeader, {});