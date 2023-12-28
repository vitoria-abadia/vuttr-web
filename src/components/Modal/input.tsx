
interface InputProps {
    label: string;
    value: string;
    updateTool(value: string): void;
  }
  
  export const Input = ({ label, value, updateTool }: InputProps) => {
    return (
      <>
        <label>{label}</label>
        <input value={value} onChange={(event) => updateTool(event.target.value)} />
      </>
    );
  };
  