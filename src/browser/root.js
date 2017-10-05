import React from 'react'

const Root = ({ componentToRender }) => {
  const Component = require(`../components/bc/${componentToRender}`)

  return <Component />
}

export default Root
