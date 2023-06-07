import Register from './register'
import { useState } from 'react'
import { insertUser } from 'src/services/user'

export default ({}) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [firstname, setFirstname] = useState('')
  const [lastname, setLastname] = useState('')
  const [prefix, setPrefix] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')
  const [language, setLanguage] = useState({ key: '', value: '' })
  const [currency, setCurrency] = useState({ key: '', value: '' })

  const onRegisterClick = () => {
    console.log({
      email,
      password,
      name: firstname,
      surname: lastname,
      phone: prefix + phoneNumber,
      language,
      currency,
    })

    insertUser({
      email,
      password,
      name: firstname,
      surname: lastname,
      phone: prefix + phoneNumber,
      language: language.value,
      currency: currency.value,
      privacy: true,
    }).then(res => {
      console.log(res)
    })
  }

  return (
    <Register
      email={email}
      setEmail={setEmail}
      password={password}
      setPassword={setPassword}
      firstname={firstname}
      setFirstname={setFirstname}
      lastname={lastname}
      setLastname={setLastname}
      prefix={prefix}
      setPrefix={setPrefix}
      phoneNumber={phoneNumber}
      setPhoneNumber={setPhoneNumber}
      language={language}
      setLanguage={setLanguage}
      currency={currency}
      setCurrency={setCurrency}
      onRegisterClick={onRegisterClick}
    />
  )
}
