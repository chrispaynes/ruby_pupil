import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
    location: config.locationType
});

Router.map(function() {
    this.route('index', {
        path: '/'
    });
    this.route('web-development', {
        path: "/web"
    });
    this.route('resume');
    this.route('contact');
    this.route('blog');
    this.route('graphic-design');
});

export default Router;
