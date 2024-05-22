import React from 'react'
import Menuitem from './Menuitem'

const Menulist = ({list = []}) => {
  return (
    <ul>
      {
        list && list.length > 0 ? 
        list.map((item) => <Menuitem item={item} />)
        :null
      }
    </ul>
  )
}

export default Menulist
