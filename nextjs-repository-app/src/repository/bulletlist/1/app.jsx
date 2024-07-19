import React from 'react'

const CustomApp = () => {
    const data = ['item1','item2','item3','item4']
  return (
    <>
      <BulletList items={data}/>
    </>
  )
}

export default CustomApp

const BulletList =({items}) => {
    return(
        <>
         <ul>
            {items.map((val,index) => {
                return(
                    <li key={index}>{val}</li>
                )
            })}
         </ul>
        </>
    )
}
