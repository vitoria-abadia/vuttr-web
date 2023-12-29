import { Dialog } from '@mui/material';
import {faTimes} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Modal.css';

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
            Remove tool
        <div/>
          <form className="Input-container-remove">
            <a> Are you sure you want to remove </a>
            <button className='button-cancel' type="button" onClick={handleToogleDialog}>
              Cancel
            </button>
            <button className='button-remove' type="button" onClick={submit}>
              Yes, remove
            </button>
          </form>
          </div>
        </div>
      </div>
    </Dialog>
  );
}

