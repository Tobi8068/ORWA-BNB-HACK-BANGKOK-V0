import { Link } from "react-router-dom"

const DeleteModal = () => {
   return (
      <>
         <div className="modal fade" id="deleteModal" tabIndex={-1} aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered">
               <div className="container">
                  <div className="remove-account-popup text-center modal-content">
                     <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                     <img src="/assets/images/dashboard/icon/icon_22.svg" alt="" className="lazy-img m-auto" />
                     <h2>Are you sure?</h2>
                     <p>Are you sure to delete your account? All data will be lost.</p>
                     <div className="button-group d-inline-flex justify-content-center align-items-center pt-15">
                        <Link to="#" className="confirm-btn fw-500 tran3s me-3">Yes</Link>
                        <button type="button" className="btn-close fw-500 ms-3" data-bs-dismiss="modal" aria-label="Close">Cancel</button>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </>
   )
}

export default DeleteModal
