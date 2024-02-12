function Panel({title, togglePanelDisplay, open}) {
  const panelStyle = {
    boxShadow: '0 5px 10px rgba(0,0,0,0.3)',
  }
  return (
    <div className="font-bold text-2xl rounded-lg p-3 mb-3 max-w-[330px] text-black flex items-center justify-between" style={panelStyle}>
      <p>{title}</p>
      <button onClick={togglePanelDisplay}>{open ? "-" : "+"}</button>
    </div>
  )
}

export default Panel