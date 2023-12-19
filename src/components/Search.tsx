function Search({ onSearch }) {
    // Estado para armazenar o valor do campo
    const [value, setValue] = useState('');
  
    // Função para lidar com a mudança do valor do campo
    function handleChange(event) {
      // Atualizar o estado com o novo valor
      setValue(event.target.value);
    }
    // Função para lidar com o envio do formulário
  function handleSubmit(event) {
    // Prevenir o comportamento padrão do formulário
    event.preventDefault();
    // Chamar a função de busca passada como prop
    onSearch(value);
  }

  // Retornar o JSX do componente
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={value} onChange={handleChange} placeholder="Digite o termo de busca" />
      <button type="submit">Buscar</button>
    </form>
  );
}
