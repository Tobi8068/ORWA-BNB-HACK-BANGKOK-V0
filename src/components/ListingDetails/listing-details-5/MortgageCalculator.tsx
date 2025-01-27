
const MortgageCalculator = ({ isOpen, handleAccordionClick }: any) => {
   return (
      <div className="accordion-item">
         <h2 className="accordion-header">
            <button
               className={`accordion-button ${isOpen ? "" : "collapsed"}`}
               type="button"
               onClick={handleAccordionClick}>
               Mortgage Calculator
            </button>
         </h2>
         <div className={`accordion-collapse collapse ${isOpen ? "show" : ""}`}>
            <div className="accordion-body">
               <div className="mortgage-calculator">
                  <form onSubmit={(e) => e.preventDefault()}>
                     <div className="input-box-three mb-25">
                        <div className="label">Home Price*</div>
                        <input type="tel" placeholder="1,32,789" className="type-input rounded-0" />
                     </div>
                     <div className="input-box-three mb-25">
                        <div className="label">Down Payment*</div>
                        <input type="tel" placeholder="$" className="type-input rounded-0" />
                     </div>
                     <div className="input-box-three mb-25">
                        <div className="label">Interest Rate*</div>
                        <input type="tel" placeholder="3.5%" className="type-input rounded-0" />
                     </div>
                     <div className="input-box-three mb-25">
                        <div className="label">Loan Terms (Years)</div>
                        <input type="tel" placeholder="24" className="type-input rounded-0" />
                     </div>
                     <button className="btn-five text-uppercase sm rounded-0 w-100 mb-10">CALCULATE</button>
                  </form>
               </div>
            </div>
         </div>
      </div>
   )
}

export default MortgageCalculator
