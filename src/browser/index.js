import React from 'react'
import ReactDOM from 'react-dom'
import { AppContainer } from 'react-hot-loader'

import Root from './root'

const render = (Component, props) => {
  ReactDOM.render(
    <AppContainer>
      <Component {...props} />
    </AppContainer>,
    document.getElementById('root')
  )
}

const props = {
  componentToRender: 'reset-password'
}

render(Root, props)

if (module.hot) {
  module.hot.accept('./root', () => {
    console.warn('accepting hot reloaded module')
    render(Root, props)
  })
}
