import { SetStateAction, useEffect, useState } from 'react'
import { FiSearch } from 'react-icons/fi'
import { TfiPlus } from "react-icons/tfi";
import './index.css'
import './App.css'

function App() {
  const [tool, setTools] = useState([]);

//   function searchTools(query: string) {
//     fetch(`http://localhost:3000/tools?q=${query}`)
//     .then((response: { data: SetStateAction<never[]>; }) => {
//       setTools(response.data);
//     })
//     .catch((_error: any) => {
//       alert('Ocorreu um erro ao buscar as ferramentas.');
//     });
// }

  useEffect(() => {
    searchTools('')
  }, []);

  return (
    <div className="app">
      <h1>Vuttr</h1>
      <h2>Very Useful Tools to Remember</h2>
      <FiSearch onSearch={searchTools} />
      <div className="tools">
        {tool.map(tool => <Tool key={tool.id} tool={tool} />)}
      </div>
    </div>
  );
}


//   function addTool(_tool: { title: string; link: string; description: string; tags: string[]; }) { 
//     axios.post('http://localhost:3000/tools', _tool)
//     .then((response: { data: any; }) => {
//       // Atualizar o estado com a nova ferramenta
//       setTools([..._tool, response.data]);
//     })
//     .catch((error: any) => {
//       // Mostrar uma mensagem de erro
//       alert('Ocorreu um erro ao adicionar a ferramenta.');
//     });
// }
// Efeito para carregar as ferramentas da API
// useEffect(() => {
//   axios.get('http://localhost:3000/tools')
//     .then((response: { data: any; }) => {
//       // Atualizar o estado com as ferramentas recebidas
//       setTools(response.data);
//     })
//     .catch((error: any) => {
//       // Mostrar uma mensagem de erro
//       alert('Ocorreu um erro ao carregar as ferramentas.');
//     });
// }, []);

// // Retornar o JSX do componente
// return (
//   <div className="app">
//     <h1>Vuttr</h1>
//     <h2>Very Useful Tools to Remember</h2>
//     <div className="tools">
//       {tools.map(tool => <Tool key={tool.id} tool={tool} />)}
//     </div>
//     <button onClick={() => addTool({
//       title: 'json-server',
//       link: 'https://github.com/typicode/json-server',
//       description: 'Fake REST API based on a json schema',
//       tags: ['api', 'json']
//     })}>Adicionar ferramenta</button>
//   </div>
// );

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
          <script>
              document.getElementById('indeterminate-checkbox').indeterminate = true;
          </script>
          <div className='containerAdd'>
          <button className='Add'>
            <TfiPlus size={14} color="#ffff" />
          </button>
            <input type="text"
            placeholder='Add' />
          <div>
          </div>
          </div>
        </div>
        <main className='main'>
          <article>
            <h2>Notion</h2>
            <span>All in one to organize teams and ideas. Write, plan, collaborate, and get organized.</span>
            <span>#organization  #planning  #collaboration  #writing  #calendar</span>
          </article>
        </main>
      </div>
      <p className="read-the-docs">

      </p>
    </>
  )
}

export default App
function setTools(data: any) {
  throw new Error('Function not implemented.');
}

