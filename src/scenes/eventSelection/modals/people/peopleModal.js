import { useState, useEffect } from 'react'
import { Button } from 'src/components'

import { useStyle } from './style'

const PeopleModal = ({ onConfirm, selectedPeople }) => {
  const classes = useStyle()

  const [people, setPeople] = useState('')

  useEffect(() => {
    console.log(selectedPeople)
    setPeople(selectedPeople)
  }, [selectedPeople])

  return (
    <div className={classes.container}>
      <h4>Seleziona tra le fasce orarie disponibili</h4>
      <input value={people} onChange={e => setPeople(e.target.value)} />
      <div className="buttonsContainer">
        <Button onClick={() => onConfirm(people)} label="Conferma" />
      </div>
    </div>
  )
}

export default PeopleModal
