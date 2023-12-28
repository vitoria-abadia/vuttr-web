import { Dialog } from '@mui/material';
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
          <h1 className="titleAdd">X Remove tool</h1>
          <form className="Input-container">
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
    </Dialog>
  );
}

