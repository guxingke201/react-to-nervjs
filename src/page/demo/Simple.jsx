import React from 'react'
import { Routes } from '@gem-mine/durex-router'
import Footer from './Footer'

export default props => {
  return (
    <div>
      <Routes path="demo.simple" />
      <Footer />
    </div>
  )
}
