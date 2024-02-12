import { useState } from 'react'
import PersonalForm from './forms/PersonalForm'
import Panel from './Panel'

function App() {
  const [panel, setPanel] = useState({education: false, experience: false})

  function toggleDisplay(panelKey) {
    setPanel(prevState => ({
      ...prevState,
      [panelKey]: !prevState[panelKey]
    }))
  }

  return (
    <div className='p-3'>
      <PersonalForm/>
      <Panel title="Education" togglePanelDisplay={() => toggleDisplay("education")} open={panel.education}/>
      <Panel title="Experience" togglePanelDisplay={() => toggleDisplay("experience")} open={panel.experience}/>
    </div>
  )
}

export default App
