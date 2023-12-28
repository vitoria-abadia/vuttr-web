import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { MouseEvent } from 'react';
import { Input } from './input';
import './Modal.css'
import { Dialog } from '@mui/material';

interface ToolData {
  id: string;
  link: string;
  title: string;
  description: string;
  tags: string[];
}

interface CreateModalProps {
  submit: (toolData: ToolData) => void;
  openDialog: boolean
  handleToogleDialog: () => void
}

export function CreateModal(props: CreateModalProps) {
  const { submit, openDialog, handleToogleDialog } = props;
  const [link, setLink] = useState('');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [tags, setTags] = useState('');

  const handleSubmit = async () => {
    const toolData: ToolData = {
      link,
      title,
      description,
      tags: tags.split(',').map((tag) => tag.trim()),
    };


    const success = await submit(toolData);

    if(success){
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

