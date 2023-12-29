/**
 * Interface que define a estrutura de dados para representar uma ferramenta.
 */
export interface ToolData {
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
   * Exporta a interface `ToolData` para que possa ser utilizada em outros módulos.
   */
  export default ToolData;