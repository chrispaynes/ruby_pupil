import Ember from 'ember';

export default Ember.Controller.extend({
    actions: {
        toggleDetails() {
            this.toggleProperty('showDetails');
        }
    }
});
