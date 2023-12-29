/**
 * Interface que define as propriedades de um componente de entrada.
 */
interface InputProps {
  /**
   * Rótulo associado à entrada.
   */
  label: string;

  /**
   * Valor da entrada.
   */
  value: string;

  /**
   * Função para atualizar o valor da entrada.
   * @param value - Novo valor da entrada.
   */
  updateTool(value: string): void;
}

/**
 * Componente funcional que representa um campo de entrada.
 * @param props - Propriedades do componente de entrada.
 */
export const Input = ({ label, value, updateTool }: InputProps) => {
  return (
    <>
      <label>{label}</label>
      <input value={value} onChange={(event) => updateTool(event.target.value)} />
    </>
  );
};