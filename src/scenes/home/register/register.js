import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import LogoSVG from 'src/assets/icons/logo.svg'
import { AutoComplete, Button, Input, Switch } from 'src/components'
import { errorAlert } from 'src/helpers/alerts'

import { useStyle } from './style'

const languageOptions = [
  { key: 'EN', value: 'EN' },
  { key: 'IT', value: 'IT' },
]

const currencyOptions = [
  { key: 'EUR', value: 'EUR' },
  { key: 'USD', value: 'USD' },
]

const StepOne = ({ setStep, email, setEmail, password, setPassword }) => {
  const classes = useStyle()
  const [passwordHidden, setPasswordHidden] = useState(true)
  return (
    <div className={classes.stepOneContainer}>
      <Input value={email} onChange={setEmail} placeholder="Email" />
      <Input
        onIconClick={() => setPasswordHidden(prevValue => !prevValue)}
        icon="./images/hidden-eye.png"
        value={password}
        onChange={setPassword}
        placeholder="Password"
        type={passwordHidden ? 'password' : 'text'}
      />
      <Button onClick={() => setStep(2)} label="Avanti" />
    </div>
  )
}

const StepTwo = ({
  setStep,
  firstname,
  setFirstname,
  lastname,
  setLastname,
  prefix,
  setPrefix,
  phoneNumber,
  setPhoneNumber,
}) => {
  const classes = useStyle()
  return (
    <div className={classes.stepTwoContainer}>
      <Input value={firstname} onChange={setFirstname} placeholder="Nome" />
      <Input value={lastname} onChange={setLastname} placeholder="Cognome" />
      <div className="phoneInputsContainer">
        <div className="prefix">
          <Input value={prefix} onChange={setPrefix} placeholder="Prefisso" />
        </div>
        <div className="phoneNumber">
          <Input
            placeholder="Telefono"
            value={phoneNumber}
            onChange={setPhoneNumber}
          />
        </div>
      </div>
      <Button onClick={() => setStep(3)} label="Avanti" />
    </div>
  )
}

const StepThree = ({
  navigate,
  language,
  setLanguage,
  currency,
  setCurrency,
  onRegisterClick,
}) => {
  const classes = useStyle()
  const [firstPolicy, setFirstPolicy] = useState(false)
  const [secondPolicy, setSecondPolicy] = useState(false)

  return (
    <div className={classes.stepThreeContainer}>
      <AutoComplete
        value={language}
        onChange={setLanguage}
        placeholder="Lingua"
        options={languageOptions}
      />
      <AutoComplete
        value={currency}
        onChange={setCurrency}
        placeholder="Valuta"
        options={currencyOptions}
      />
      <div className="regulatiosContainer">
        <div className="regulationItem">
          <div className="titleContainer">
            <span className="title">GDPR *</span>
            <div className="switchContainer">
              <Switch />
            </div>
          </div>
          <p>
            DIchiaro di avere letto I'informativa privacy e di espimere il
            conseno specifico al trattamento dei miei dati personali per le
            finanlita commerciali indicate nell'informativa
          </p>
        </div>
        <div className="regulationItem">
          <div className="titleContainer">
            <span className="title">Privacy *</span>
            <div className="switchContainer">
              <Switch />
            </div>
          </div>
          <p>
            DIchiaro di avere letto I'informativa privacy e di espimere il
            conseno specifico al trattamento dei miei dati personali per le
            finanlita commerciali indicate nell'informativa
          </p>
        </div>
      </div>

      <Button
        onClick={() => {
          onRegisterClick()
          navigate('/event-selection')
        }}
        label="Registrati"
      />
    </div>
  )
}

const Register = ({
  email,
  setEmail,
  password,
  setPassword,
  firstname,
  setFirstname,
  lastname,
  setLastname,
  prefix,
  setPrefix,
  phoneNumber,
  setPhoneNumber,
  language,
  setLanguage,
  currency,
  setCurrency,
  onRegisterClick,
}) => {
  const classes = useStyle()
  const navigate = useNavigate()

  const [step, setStep] = useState(1)

  return (
    <div className={classes.container}>
      <div className="header">
        <span
          onClick={() => {
            if (step === 1) navigate('/')
            else if (step === 2) setStep(1)
            else setStep(2)
          }}
        >
          {step === 1 ? 'Annulla' : 'Indietro'}
        </span>
      </div>
      <div className="body">
        <img alt="logo" src={LogoSVG} />
        <span>
          {step === 1
            ? 'Crea un account'
            : step === 2
            ? 'Inserici i tuoi dati'
            : ''}
        </span>
        <div className="formContainer">
          {step === 1 ? (
            <StepOne
              setStep={setStep}
              email={email}
              setEmail={setEmail}
              password={password}
              setPassword={setPassword}
            />
          ) : step === 2 ? (
            <StepTwo
              setStep={setStep}
              firstname={firstname}
              setFirstname={setFirstname}
              lastname={lastname}
              setLastname={setLastname}
              prefix={prefix}
              setPrefix={setPrefix}
              phoneNumber={phoneNumber}
              setPhoneNumber={setPhoneNumber}
            />
          ) : (
            <StepThree
              navigate={navigate}
              setStep={setStep}
              language={language}
              setLanguage={setLanguage}
              currency={currency}
              setCurrency={setCurrency}
              onRegisterClick={onRegisterClick}
            />
          )}
        </div>
      </div>
    </div>
  )
}

export default Register
