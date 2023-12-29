import { faPlus, faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useState } from 'react';
import { FiCheckSquare } from "react-icons/fi";
import ToolData from '../Interface/ToolData';
import { CreateModal } from '../Modal/Create-Modal';
import { Tool } from './../Tools/Tool';
import './index.css';

function App() {
  const [tools, setTools] = useState<ToolData[]>([]);
  const [openDialog, setOpenDialog] = useState<boolean>(false)
  // const { data } = useToolData();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalSearch, setIsModalSearch] = useState(false);
  const [searchName, setSearchName] = useState('');

  const handleOpenModal = () => {
    setIsModalOpen((prev) => !prev);
  };

  const handleCancel = () => {
    setIsModalSearch(false);
  };

  const handleToggleModal = () => {
    setOpenDialog(prevState => !prevState)
  }


  const handleRemove = async (id: string) => {
    try {
      await fetch('http://localhost:3000/' + id, {
        method: 'DELETE',
      });

      // Atualiza localmente o estado de ferramentas adicionando a nova ferramenta.
      setTools(p => p.filter(i => i.id != id))

      return true
    } catch (e) {
      alert(e)
      return false
    }
  };

  /**
 * Função assíncrona para criar uma nova ferramenta.
 * @param tool - Dados da ferramenta a ser criada.
 * @returns Retorna true se a criação for bem-sucedida, false em caso de erro.
 */

  async function createTool(tool: ToolData) {
    try {
      /**
     * Requisição de envio de dados
     * @param fetch - para realizar uma requisição HTTP.
     * @param POST - para requisição de envio de dados.
     * @returns O URL alvo é 'http://localhost:3000/' e a configuração da 
     * requisição é um objeto JavaScript com o método 'POST'
     
     * @param Content-Type - para indicar que os dados estão no formato JSON.
     * @param tool - para indicar o corpo da requisição
     * @returns O 'tool' é convertido para JSON usando JSON.stringify(tool).
     */
      const response = await fetch('http://localhost:3000/', {
        method: 'POST',
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(tool)
      });
      /*: Aguarda a conclusão da requisição usando await e, em seguida, converte 
      a resposta para JSON usando response.json(). 
      O resultado é armazenado na variável responseJson.*/
      const responseJson = await response.json();

      // Atualiza localmente o estado de ferramentas adicionando a nova ferramenta.
      setTools(p => [
        ...p,
        responseJson
      ])

      return true
    } catch (e) {
      alert(e)
      return false
    }
  }

  async function fetchTools() {
    const response = await fetch('http://localhost:3000/');
    const responseJson = await response.json();
    setTools(responseJson);
  }

  useEffect(() => {
    fetchTools();
  }, []);

  return (
    <>
      <div className="container">
        <div>
          <h1 className="title">VUTTR</h1>
          <h1 className="subTitle">Very Useful Tools to Remember</h1>
        </div>
        <div className="header">
          <div className="search-input">
            <FontAwesomeIcon icon={faSearch} className="search-icon" />
            <input
              className='Input-search'
              type="text"
              placeholder="Search"
              onChange={(event) => setSearchName(event.target.value)}
            />
          </div>
          <FiCheckSquare className="CheckSquare" />
          <h3 className="search"> search in tags only </h3>
          <button onClick={handleToggleModal}>
            <div className="add-input">
            <FontAwesomeIcon icon={faPlus} className="add-icon" />
            Add
            </div>
          </button>
          <button className="button-remove" onClick={() => setOpenDialog(true)}>
          X Remove
        </button>
        </div>

        {tools?.map((toolData) => (
          <Tool
            key={toolData.id}
            id={toolData.id} 
            link={toolData.link}
            title={toolData.title}
            description={toolData.description}
            tags={toolData.tags}
            onRemove={handleRemove}
          />
        ))}
      </div >
      <CreateModal
        submit={createTool}
        handleToogleDialog={handleToggleModal}
        openDialog={openDialog}
      />
    </>
  );
}

export default App;
