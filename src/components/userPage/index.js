'use strict'

nx.components.page({
  template: require('./view.html'),
  style: require('./style.css'),
  title: 'Account | WP Plugins',
  params: {
    id: {url: true, readOnly: true, required: true}
  }
}).use(setup).register('user-page')

// this is a custom middleware, that fetches a user by its id
function setup (elem, state) {
  store.fetchUser(state.id)
    .then(user => state.user = user)
}
