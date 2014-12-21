import Em from 'ember';

export default Em.ArrayController.extend({
  needs: ['application'],
  model: [
    {route: 'gettingstarted', text: 'Getting Started'},
    {route: 'simple', text: 'Simple'},
    {route: 'state', text: 'State'},
    {route: 'models', text: 'Bound to Models'}
  ]
});