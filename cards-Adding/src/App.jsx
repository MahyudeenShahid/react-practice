import { useState } from 'react'
import Cards from './components/Cards'
import Form from './components/Form'


function App() {
  const [cards, setCards] = useState([])

  const addCard = (cardData) => {
    setCards([...cards, cardData])
  }

  const removeCard = (index) => {
    const newCards = cards.filter((items, i) => i !== index)
    setCards(newCards)
  }
  return (
    <>
      <div className='bg-gray-100 w-full h-auto pt-[2vh]'>
        <h1 className='text-3xl font-bold fixed left-1/2 transform -translate-x-1/2 text-center text-gray-800'>Cards Adding App</h1>

        <Cards cards={cards} onRemoveCard={removeCard} />

        <Form onAddCard={addCard} />

      </div>
    </>
  )
}

export default App
