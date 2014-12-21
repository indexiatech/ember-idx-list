import Em from 'ember';

export default Em.ObjectController.extend({
  message: 'Push the "World" button.',
  actions: {
    worldSelected: function(item) {
      return this.set('message', "" + item.name + " selected, now click Hello");
    },
    worldDeselected: function(item) {
      return this.set('message', "" + item.name + " was de-selected, now click World");
    },
    helloState: function(helloItem, otherItem) {
      if (otherItem.name === 'W') {
        return helloItem.set('disabled', 'disabled');
      }
    }
  }
});
