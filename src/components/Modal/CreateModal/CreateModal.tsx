import { useState } from 'react';
import { Input } from '../Input/input';
import { Dialog } from '@mui/material';
import './stylesCreate.css';

/**
 * Interface que define a estrutura de dados para representar uma ferramenta.
 */
interface ToolData {
  /**
   * Identificador único da ferramenta.
   */
  id: string;

  /**
   * Link associado à ferramenta.
   */
  link: string;

  /**
   * Título da ferramenta.
   */
  title: string;

  /**
   * Descrição da ferramenta.
   */
  description: string;

  /**
   * Lista de tags associadas à ferramenta.
   */
  tags: string[];
}

/**
 * Interface que define as propriedades da modal de criação de ferramentas.
 */
interface CreateModalProps {
  /**
   * Função para submeter os dados da nova ferramenta.
   */
  submit: (toolData: ToolData) => void;

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
 * Componente funcional que representa a modal de criação de ferramentas.
 * @param props - Propriedades da modal de criação de ferramentas.
 */
export function CreateModal(props: CreateModalProps) {
  const { submit, openDialog, handleToogleDialog } = props;
  const [link, setLink] = useState('');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [tags, setTags] = useState('');

  /**
   * Manipulador de evento para submeter os dados da nova ferramenta.
   */
  const handleSubmit = async () => {
    const toolData: ToolData = {
      link,
      title,
      description,
      tags: tags.split(',').map((tag) => tag.trim()),
      id: ''
    };

    const success = await submit(toolData);

    if (success) {
      handleToogleDialog();
    }
  };

  return (
    <Dialog open={openDialog} onClose={handleToogleDialog}>
      <div className="modal-overlay">
        <div className="modal-body">
          <h1 className="titleAdd">+ Add new tool</h1>
          <form className="Input-container">
            <Input label="Tool Name" value={title} updateTool={setTitle} />
            <Input label="Tool Link" value={link} updateTool={setLink} />
            <Input label="Tool description" value={description} updateTool={setDescription} />
            <Input label="Tags" value={tags} updateTool={setTags} />
            <button type="button" onClick={handleSubmit}>
              Add tool
            </button>
          </form>
        </div>
      </div>
    </Dialog>
  );
}