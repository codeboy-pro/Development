import React from 'react'
import Header from '../Others/Header'
import TAskListNumbers from '../Others/TAskListNumbers'
import TaskList from '../Task_list/TaskList'

const EmployeeDashBoard = () => {
  return (
    <div className='p-10 bg-[#1c1c1c] h-screen'>

      <Header/>
<TAskListNumbers/>
<TaskList/>
    </div>
  )
}

export default EmployeeDashBoard