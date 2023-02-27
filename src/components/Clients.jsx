import React from 'react'
import { clients } from '../constants'
import { layout } from '../style'


export const Clients = () => {
  return (
    <section className={`${layout.section} justify-between md:mr-12`}>
      {clients.map((client) => (
        <div className={`${layout.sectionImg} `}> 
        <img src={client.logo} className=" w-30 h-10 change_color "/>
        </div>
      ))}

    </section>
  )
}
export default Clients
