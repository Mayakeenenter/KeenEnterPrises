import { NavLink } from 'react-router-dom'
import './ExpertSupportSection.css'

const ExpertSupportSection = () => {
  return (
    <div className='export'>
      <img src="/home/bitrix24.webp" alt="bitrix24" />
      <div className='card-export'>
        <div className='access-p'>
            <p>ACCESS ADVISORS</p>
        </div>
        <h3>Get personalized expert support from Bitrix24</h3>
        <p className='export-p'>With our dedicated team of bitrix24 experts, you can get personalized advice and support that is tailored to your unique bitrix24 integration and needs.</p>
        <button className='button'>
                <NavLink to={"/informationBitrix24"} >Get in Touch</NavLink>
          </button>
      </div>
    </div>
  )
}

export default ExpertSupportSection
