import { faPlus, faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useState } from 'react';
import { FiCheckSquare } from "react-icons/fi";
import ToolData from '../Interface/ToolData';
import { CreateModal } from '../Modal/CreateModal/CreateModal';
import { Tool } from './../Tools/Tool';
import './styles.css';

function App() {
  const [tools, setTools] = useState<ToolData[]>([]);
  const [openDialog, setOpenDialog] = useState<boolean>(false)
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalSearch, setIsModalSearch] = useState(false);
  const [searchName, setSearchName] = useState('');
  const [searchInTagsOnly, setSearchInTagsOnly] = useState(false);

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
      setTools(p => p.filter(i => i.id !== id))
      return true
    } catch (e) {
      alert(e)
      return false
    }
  };

  async function createTool(tool: ToolData) {
    try {
      const response = await fetch('http://localhost:3000/', {
        method: 'POST',
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(tool)
      });
      const responseJson = await response.json();
      setTools(p => [...p, responseJson])
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

  async function fetchToolsTags() {
    const response = await fetch(`http://localhost:3000/?searchName=${searchName}&searchInTagsOnly=${searchInTagsOnly}`);
    const responseJson = await response.json();
    setTools(responseJson);
  }

  useEffect(() => {
    fetchToolsTags();
  }, [searchInTagsOnly]);

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
          <label htmlFor="indeterminate-checkbox" className='buttonCheckbox'>
            <input className='buttonCheckbox'
              type='checkbox' 
              id='indeterminate-checkbox'
              name='indeterminate-checkbox'
              onChange={() => setSearchInTagsOnly(!searchInTagsOnly)}
              checked={searchInTagsOnly}
            />
            <div className='searchin'>
            search in tags only
            </div>
          </label>         
          <h3 className="search"></h3>
          <button className='buttonAdd' onClick={handleToggleModal}>
            <div className="add-input">
              <FontAwesomeIcon icon={faPlus} className="add-icon" />
              Add
            </div>
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
            onRemove={() => handleRemove(toolData.id)}
          />
        ))}
      </div>
      <CreateModal
        submit={createTool}
        handleToogleDialog={handleToggleModal}
        openDialog={openDialog}
      />
    </>
  );
}

export default App;