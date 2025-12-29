import './CardFeatureWhatsApp.css'

function CardFeatureWhatsApp({icon , title , text}) {
  return (
    <div className='CardFeatureWhatsApp'>
      <div className="icon">{icon}</div>
      <h3>{title}</h3>
      <p>{text}</p>
    </div>
  )
}

export default CardFeatureWhatsApp
