import Em from 'ember';
import Config from 'ember-idx-utils/config'

export default {
  name: 'ember-idx-list',
  initialize: function() {
    if (!Em.Config) {
        Em.Config = Config.create()
    }
  }
};
