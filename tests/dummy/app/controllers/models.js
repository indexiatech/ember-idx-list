import Em from 'ember';

export default Em.ArrayController.extend({
  actions: {
    editModelChanged: function(editItem, models) {
      return editItem.set('disabled', models.length === 1 ? void 0 : 'disabled');
    },
    deleteModelChanged: function(deleteItem, models) {
      return deleteItem.set('disabled', models.length > 0 ? void 0 : 'disabled');
    }
  },
  checked: (function() {
    return this.filterBy('checked', true);
  }).property('@each.checked')
});