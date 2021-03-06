import DS from 'ember-data';
const { Model } = DS;
import { computed } from '@ember/object';
import moment from 'moment';

export default Model.extend({
  token: DS.attr('string'),
  url: DS.attr('string'),
  alias: DS.attr('string'),
  last_status: DS.attr('string'),
  uptime: DS.attr('number'),
  down: DS.attr('boolean'),
  down_since: DS.attr('date'),
  period: DS.attr('number'),
  apdex_t: DS.attr('number'),
  string_match: DS.attr('string'),
  enabled: DS.attr('boolean'),
  published: DS.attr('boolean'),
  disabled_locations: DS.attr(),
  last_check_at: DS.attr('date'),
  next_check_at: DS.attr('date'),
  mute_until: DS.attr('date'),
  favicon_url: DS.attr('string'),
  custom_headers: DS.attr(),
  http_verb: DS.attr('string'),
  http_body: DS.attr('string'),
  ssl: DS.attr(),

  uptime_formatted: computed('uptime', function() {
    let colour = null;

    if (this.get('uptime') == 100 )
      colour = 'green'
    else if (this.get('uptime') > 50 )
      colour = 'yellow'
    else
      colour = 'red'

    return {
      value: this.get('uptime') < 100 ? parseInt(this.get('uptime') * 100)/100 : this.get('uptime'),
      colour: colour
    }
  }),

  down_since_formatted: computed('down_since', function() {
    if (this.get('down_since') != null) {
      return moment.utc(this.get('down_since')).local().format('MMM DD, YYYY HH:mm')
    } else {
      return ''
    }
  }),
});
