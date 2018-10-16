'use strict'

nx.components.page({
  template: require('./view.html'),
  style: require('./style.css'),
  title: 'Review | WP Plugins',
  params: {
    id: {url: true, readOnly: true, required: true}
  }
}).use(setup).register('story-page')

// this is a custom middleware, that fetches a story by its id
function setup (elem, state) {
  store.fetchItem(state.id)
    .then(story => state.story = story)
}
