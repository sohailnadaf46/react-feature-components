import React from 'react'
import Menulist from './Menulist';

const TreaView = ({menus = []}) => {
  return (
    <div>
    <Menulist list = {menus} />
    </div>
  )
}

export default TreaView;
