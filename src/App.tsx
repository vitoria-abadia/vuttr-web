import { FormEvent, SetStateAction, useEffect, useState } from 'react'
import { FiSearch } from 'react-icons/fi'
import { TfiPlus } from "react-icons/tfi";
import './index.css'
import './App.css'
import { Tool } from './components/Tool';

function App() {
  const [tools, setTools] = useState([]);

  async function createTool(e: FormEvent){
    e.preventDefault()

    const data = new FormData(e.currentTarget as HTMLFormElement)
    let jsonData = Object.fromEntries(data)
    
    var tool = "api", "json", "schema", "node", "github',"rest";
    var 
    console.log(jsonData)
    // setTools(p => [...p, jsonData])
  }

  async function fetchTools() {
    const response = await fetch('http://localhost:3000/')
    const responseJson = await response.json()
    setTools(responseJson)
  }

  useEffect(() => {
    fetchTools()
  }, [])

  return (
    <>
      <div className="container">
        <div>
          <h1 className="title">VUTTR</h1>
          <h2 className='subTitle'>Very Useful Tools to Remember</h2>
          <div className="containerInput">
            <button className="buttonSearch">
              <FiSearch size={14} color="#ffff" />
            </button>
            <input
              type='text'
              placeholder='search' />
          </div>

          <form onSubmit={createTool} className='formulario-criar'>
            <input type="text" placeholder='title' name='title' />
            <input type="text" placeholder='link' name='link' />
            <textarea name='description' placeholder='description' />
            <input type="text" name="tags" placeholder='tags' />
            <button type='submit'>
              Salvar
            </button>
          </form>

          {/* <script>
            document.getElementById('indeterminate-checkbox').indeterminate = true;
          </script> */}
          {/* <div className='containerAdd'>
            <button className='Add'>
              <TfiPlus size={14} color="#ffff" />
            </button>
            <input type="text"
              placeholder='Add' />
            <div>
            </div>
          </div> */}
        </div>
        <main className='main'>
          {
            tools.map(tool => <Tool tool={tool} />)
          }
        </main>
      </div>
      <p className="read-the-docs">

      </p>
    </>
  )
}

export default App
