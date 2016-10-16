import Ember from 'ember';
import moment from "~/bower_components/moment/";

export function formatDate(params) {
  return moment(params[0]).fromNow();
}

export default Ember.Helper.helper(formatDate);
