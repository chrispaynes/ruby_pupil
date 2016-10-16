import Ember from 'ember';
import showdown from "~/bower_components/showdown/";

export function formatMarkdown(params) {
  return new Ember.String.htmlSafe(new showdown.Converter().makeHtml(params[0]));
}

export default Ember.Helper.helper(formatMarkdown);