'use strict'

// this exposes the global nx object, which is the entry point of the NX framework
require('@nx-js/framework')

// this exposes a global store object, that can be used to access Hacker News data
require('./plugin')

// this registers the NX components to be used in the HTML view by their name
require('./components')
