import Helper from '@ember/component/helper';
import { inject as service } from '@ember/service';


export default Helper.extend({
	check: service(),
	compute: function(params) {
		return this.get('check.descriptions.' + params[0])
	}
});