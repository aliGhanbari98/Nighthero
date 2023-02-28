import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import LogoSVG from 'src/assets/icons/logo.svg'
import { AutoComplete, Button, Input, Switch } from 'src/components'
import { errorAlert } from 'src/helpers/alerts'

import { useStyle } from './style'

const cityOptions = [
  { key: 'Torino', value: 'TO' },
  { key: 'Milan', value: 'MI' },
  { key: 'Rome', value: 'RM' },
  { key: 'Padova', value: 'PD' },
  { key: 'Genova', value: 'GN' },
]

const StepOne = ({ setStep }) => {
  const classes = useStyle()
  const [passwordHidden, setPasswordHidden] = useState(true)
  return (
    <div className={classes.stepOneContainer}>
      <Input placeholder="Email" />
      <Input
        onIconClick={() => setPasswordHidden(prevValue => !prevValue)}
        icon="./images/hidden-eye.png"
        placeholder="Password"
        type={passwordHidden ? 'password' : 'text'}
      />
      <Button onClick={() => setStep(2)} label="Avanti" />
    </div>
  )
}

const StepTwo = ({ setStep }) => {
  const classes = useStyle()
  return (
    <div className={classes.stepTwoContainer}>
      <Input placeholder="Nome" />
      <Input placeholder="Cognome" />
      <div className="phoneInputsContainer">
        <div className="prefix">
          <Input placeholder="Prefisso" />
        </div>
        <div className="phoneNumber">
          <Input placeholder="Telefono" />
        </div>
      </div>
      <Button onClick={() => setStep(3)} label="Avanti" />
    </div>
  )
}

const StepThree = ({ navigate }) => {
  const classes = useStyle()
  return (
    <div className={classes.stepThreeContainer}>
      <AutoComplete placeholder="Lingua" />
      <AutoComplete placeholder="Valuta" />
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

      <Button onClick={() => navigate('/event-selection')} label="Registrati" />
    </div>
  )
}

const Register = ({}) => {
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
            <StepOne setStep={setStep} />
          ) : step === 2 ? (
            <StepTwo setStep={setStep} />
          ) : (
            <StepThree navigate={navigate} setStep={setStep} />
          )}
        </div>
      </div>
    </div>
  )
}

export default Register
