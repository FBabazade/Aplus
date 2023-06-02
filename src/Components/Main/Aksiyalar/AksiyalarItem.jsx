import React from 'react'

function AksiyalarItem({item}) {
  return (
    <>
    <div className="actioans-card-content" key={item.id}>
      <img   src={item?.picture} alt="" />
      <h3>{item?.title?.az}</h3>
      <h5>20 - 09 iyul 2023</h5>
    </div>
  </>
  )
}

export default AksiyalarItem