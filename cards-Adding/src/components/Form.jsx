import React from 'react'
import { useForm } from "react-hook-form"

function Form( { onAddCard }) {
  const { register, handleSubmit ,reset } = useForm()
//   const onSubmit: SubmitHandler = data => console.log(data)
const onAddCards = (data) => {
    onAddCard(data);
    reset();
    }

  return (
    <div className="w-[50%] h-auto mt-[5vh] m-auto rounded-lg  py-5   flex flex-col items-center justify-around  gap-8">
        <form action="" onSubmit={handleSubmit(onAddCards)} >
      <input {...register('name')} type="text" placeholder="Card Title" className="border border-gray-300 rounded-lg p-2 w-full" />
        <input {...register('price')} type="number" placeholder="Card Price" className="border border-gray-300 rounded-lg p-2 w-full" />
        <input {...register('image')} type="text" placeholder="Card Image URL" className="border border-gray-300 rounded-lg p-2 w-full" />
      <textarea {...register('description')} placeholder="Card Description" className="border border-gray-300 rounded-lg p-2 w-full h-[15vh]" />

      <input className="bg-blue-500 text-white rounded-lg py-2 px-4" type="submit" value="Add Card" />
    </form>
    </div>
  )
}

export default Form