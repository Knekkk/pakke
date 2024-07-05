import React from 'react'

interface Chartprops {
  height:number,
  width:number,
  data?:{},
}

const Chart = (props: Chartprops) => {
  return (
    <div>Chart
      <svg height={props.height} width={props.width}>
      <text x="20" y="35">hello</text>
      </svg>
    </div>
  )
}

export default Chart