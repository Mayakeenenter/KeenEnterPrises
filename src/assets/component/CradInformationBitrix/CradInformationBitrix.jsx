import CardCrm from '../CardCrm/CardCrm'
import './CradInformationBitrix.css'
import { BitrixFeature1, BitrixFeature2, BitrixFeature3, BitrixFeature4, BitrixFeature5 } from "../../Data/DataPricing";
export default function CradInformationBitrix() {
  return (
    <>
        <div className="div-crm">
        <div>
          <h3>CRM</h3>
          <p className="crm-p1">
            Easily manage leads, deals, and contacts in one smart workspace.
          </p>
          <p className="crn-p2">Bitrix24 allows you to implement a complete accounting system. It covers everything from the first client contact to closing deals and processing invoice payments.</p>
        </div>
        <img src="/crm-main.webp" alt="" />
      </div>
      <h3 className='tool-h3'>Tools:</h3>
     <div className='card-crm'>
       <CardCrm
      title={"CRM"}
      description={"Manage sales and clients effortlessly"}
      array={BitrixFeature1}/>
       <CardCrm
      title={"Tasks & Projects"}
      description={"Get work done easier & faster"}
      array={BitrixFeature2}/>
       <CardCrm
      title={"Collaboration"}
      description={"Power up your teamwork"}
      array={BitrixFeature3}/>
       <CardCrm
      title={"Sites & Stores"}
      description={"Create websites that sell"}
      array={BitrixFeature4}/>
       <CardCrm
      title={"HR & Automaion"}
      description={"Optimize workflows & manage HR data"}
      array={BitrixFeature5}/>
     </div>
     
    </>
  )
}
