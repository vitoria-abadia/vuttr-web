import { useState } from 'react';
import { RemoveModal } from '../Modal/DeleteModal/DeleteModal';
import './ToolStyle.css';

/**
 * Interface que define as propriedades de um componente Tool.
 */
interface ToolProps {
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

  /**
   * Função para remover a ferramenta.
   * @param id - Identificador único da ferramenta a ser removida.
   * @returns Uma Promise que resolve para verdadeiro se a remoção for bem-sucedida, falso caso contrário.
   */
  onRemove: (id: string) => Promise<boolean>;

  /**
   * Função para manipular tags.
   * @param tags - Lista de tags a serem manipuladas.
   * @returns Uma Promise que resolve para verdadeiro se a manipulação for bem-sucedida, falso caso contrário.
   */
  onTags: (tags: string[]) => Promise<boolean>;
}

/**
 * Componente funcional que representa uma ferramenta.
 * @param props - Propriedades do componente Tool.
 */
export function Tool({ id, link, title, description, tags, onRemove, onTags }: ToolProps) {
  const [openDialog, setOpenDialog] = useState<boolean>(false);

  /**
   * Função para remover a ferramenta.
   */
  const removeTool = async () => {
    const success = await onRemove(id);

    if (success) {
      setOpenDialog(false);
    }
  };

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