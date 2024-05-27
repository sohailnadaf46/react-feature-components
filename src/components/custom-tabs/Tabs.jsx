import React from 'react'
import CustomTabs from './Tabs-test'

const RandomComponent = () =>{
  return <div>Some random value for component 3</div>
}

const Tabs = () => {
  const tabs = [
    {
      label:"tab 1",
      content:<div> This is content for tab 1</div>
    },
    {
      label:"tab 2",
      content:<div> This is content for tab 2</div>
    },
    {
      label:"tab 3",
      content:<RandomComponent />
    }

  ];

  function handleOnChange(currentTabIndex){
    console.log(currentTabIndex)
  }
  return (
    <CustomTabs tabsContent={tabs} onChange={handleOnChange}/>
  )
}

export default Tabs
