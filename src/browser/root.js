import React from 'react'

const Root = ({ componentToRender }) => {
  const Component = require(`../components/${componentToRender}`)
  const props = require(`../components/${componentToRender}/sample-data`)

  return <Component {...props} />
}

export default Root
