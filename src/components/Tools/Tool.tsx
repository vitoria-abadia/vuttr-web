import { useState } from 'react';
import { RemoveModal } from '../Modal/DeleteModal';
import './Style/ToolStyle.css'

interface ToolProps {
  id: string;
  link: string;
  title: string;
  description: string;
  tags: string[];
  onRemove: (id: string) => Promise<boolean>
}

export function Tool({ id, link, title, description, tags, onRemove }: ToolProps) {
  const [openDialog, setOpenDialog] = useState<boolean>(false)

  const removeTool = async () => {
    const sucess = await onRemove(id);

    if (sucess) {
      setOpenDialog(false)
    }
  }
  return (
    <div className="tool">
      <div>
        <h3>
          <a href={link}>{title}</a>
        </h3>
        <button className="button-remove" onClick={() => setOpenDialog(true)}>
          x remove
        </button>
      </div>
      <p>{description}</p>
      <div>
        {tags.map(tag => (
          <span className='tags' key={tag}>#{tag}</span>
        ))}
      </div>
      <RemoveModal
        submit={removeTool}
        handleToogleDialog={() => setOpenDialog(!openDialog)}
        openDialog={openDialog}
      />
    </div>
  );
}
