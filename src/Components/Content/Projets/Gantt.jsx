import React from 'react'
import { Chart } from 'react-google-charts'

export default function Gantt(props) {
    
    return (
        <div>{props.project.map((pro) => (

        
            <Chart
  width={'100%'}
  chartType="Gantt"
  loader={<div>Loading Chart</div>}
  data={[
    [
      { type: 'string', label: 'Task ID' },
      { type: 'string', label: 'Task Name' },
      { type: 'date', label: 'Start Date' },
      { type: 'date', label: 'End Date' },
      { type: 'number', label: 'Duration' },
      { type: 'number', label: 'Percent Complete' },
      { type: 'string', label: 'Dependencies' },
      { type: 'string', label: 'Tâches' },
    ],
    [
      pro.name,
      pro.name,
      new Date(pro.startDate.substring(0,4),pro.startDate.substring(5,7),pro.startDate.substring(8,10) ),
      new Date(pro.endDate.substring(0,4),pro.endDate.substring(5,7),pro.endDate.substring(8,10) ),
      null,
      100,
      null,
      pro.tasks
    ],
  ]}
  rootProps={{ 'data-testid': '1' }}
/>))}
        </div>
    )
}
