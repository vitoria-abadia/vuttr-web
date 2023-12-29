import { Dialog } from '@mui/material';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './styles.Delete.css';

/**
 * Interface que define as propriedades da modal de remoção de ferramentas.
 */
interface Props {
  /**
   * Função para executar a remoção da ferramenta.
   */
  submit: () => Promise<void>;

  /**
   * Flag que indica se a modal está aberta ou fechada.
   */
  openDialog: boolean;

  /**
   * Função para alternar entre abrir e fechar a modal.
   */
  handleToogleDialog: () => void;
}

/**
 * Componente funcional que representa a modal de remoção de ferramentas.
 * @param props - Propriedades da modal de remoção de ferramentas.
 */
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