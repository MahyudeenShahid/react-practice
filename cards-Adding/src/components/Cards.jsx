import React, { useState } from 'react'
import Card from './card'


function Cards({ cards , onRemoveCard }) {
    

  return (
    <div className="w-[80%] mt-[5vh] mx-auto rounded-lg h-[70vh] py-5 overflow-y-auto  flex items-center justify-around flex-wrap gap-8">
      {cards.map((card, index) => (
        <Card key={index} data={card}  index={index} onRemoveCard={onRemoveCard} />
      ))}
    </div>
  )
}

export default Cards