import Mixin from '@ember/object/mixin';
import { computed } from '@ember/object';
import ENV from 'suitepad-status-page/config/environment';

export default Mixin.create({
  host: ENV.api_url,
  apiKey: ENV.api_key,
  website: ENV.website,
	headers: computed('ENV.api_key', function() {
		return {
      'X-API-KEY': ENV.api_key
    };
  })
});