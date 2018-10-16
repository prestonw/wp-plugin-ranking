'use strict'

nx.components.display({
  template: require('./view.html'),
  style: require('./style.css'),
  props: ['plugin']
}).register('plugin-item')
