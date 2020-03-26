import Mixin from '@ember/object/mixin';
import { computed } from '@ember/object';

export default Mixin.create({
	reverse: computed('currentSortingDirection', function() {
		return this.get('currentSortingDirection') == 'asc' ? true : false
  }),

  reverseDirection() {
		return this.get('currentSortingDirection') == 'asc' ? 'desc' : 'asc'
	},

	actions: {
		sortBy(property) {
			const direction = (this.get('currentSortingProperty') == property) ? this.reverseDirection() : 'asc'
			this.set('currentSortingProperty', property)
			this.set('currentSortingDirection', direction)
			this.set('currentSortingProperties', [property+":"+direction])
		}
  }
});