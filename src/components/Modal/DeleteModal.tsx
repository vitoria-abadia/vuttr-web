import { Dialog } from '@mui/material';
import {faTimes} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './../Style/Modal.css';

interface Props {
  submit: () => Promise<void>;
  openDialog: boolean
  handleToogleDialog: () => void
}
export function RemoveModal({ submit, openDialog, handleToogleDialog }: Props) {
  return (
    <Dialog open={openDialog} onClose={handleToogleDialog}>
      <div className="modal-overlay">
        <div className="modal-body">
          <div className="title-remove">
            <FontAwesomeIcon icon={faTimes} className="close-icon" onClick={handleToogleDialog} />
            <h2>Remove tool</h2>
          </div>
          <div className="texto-remove"> 
          <p>Are you sure you want to remove?</p>
          </div>
          <div className="button-container">
            <button className='button-cancel' type="button" onClick={handleToogleDialog}>
              Cancel
            </button>
            <button className='button-remove' type="button" onClick={submit}>
              Yes, remove
            </button>
          </div>
        </div>
      </div>
    </Dialog>
  );
}

