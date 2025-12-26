import './CardValues.css'

export default function CardValues({number ,title , description , className}) {
  return (
    <div>
      <div className={`card-value ${className ? 'border' : ""}`}>
        <div className='number-and-title'>
            <div className='number'>
                <p>{number}</p>
            </div>
            <h4>{title}</h4>
        </div>
        <p>{description}</p>
      </div>
    </div>
  )
}
