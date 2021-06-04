import { useState } from 'react'

export const useForm = (initialState = {}, onSubmit) => {
  const [formData, setFormData] = useState(initialState)

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    onSubmit?.(formData)
  }

  return [formData, handleInputChange, handleSubmit]
}

// EXAMPLE
// const [ formData, handleInputChange, handleSubmit ] = useForm(
//   {
//     username: '',
//     password: '',
//   },
//   (formData) => console.log(formData)
// )
