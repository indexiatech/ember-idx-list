import Em from 'ember';
import WithConfigMixin from 'ember-idx-utils/mixin/with-config';
import AsListMixin from './as-item';

/**
 * `{{em-list-item}}` component
 * Add a new item to a list
 *
 * @class ListItem
 */

export default Em.Component.extend(WithConfigMixin, AsListMixin, {
  tagName: 'li',
  /**
   * Bind the specified attributes to the DOM element
   *
   * @property attributeBindings
   * @type Array
   */
  attributeBindings: ['css'],
  classNameBindings: ['styleClasses'],
  styleClasses: (function() {
    var _ref;
    return (_ref = this.get('config.list.itemClasses')) != null ? _ref.join(" ") : void 0;
  }).property()
});

