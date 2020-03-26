import DS from 'ember-data';
const { Model } = DS;

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
});
