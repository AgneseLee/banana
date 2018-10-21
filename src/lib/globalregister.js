// Globally register all base components for convenience, because they
// will be used very frequently. Components are registered using the
// PascalCased version of their file name.

import Vue from 'vue'
import upperFirst from 'lodash/upperFirst'
import camelCase from 'lodash/camelCase'

const requireComponent = require.context(
  '../components',
  // Do not look in subdirectories
  false,
  // Only include "_base-" prefixed .vue files
  /_base-[\w-]+\.vue$/
)

requireComponent.keys().forEach(fileName => {
  const componentConfig = requireComponent(fileName)
  const componentName = upperFirst(
    camelCase(
      fileName
        // Remove the "./_" from the beginning
        .replace(/^\.\/_/, '')
        // Remove the file extension from the end
        .replace(/\.\w+$/, '')
    )
  )
  console.log('componentName: ', componentName)
  // Globally register the component
  Vue.component(componentName, componentConfig.default || componentConfig)
})