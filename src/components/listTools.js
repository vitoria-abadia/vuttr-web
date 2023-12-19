import React from "react";

function ListTool({ onChange, onDelete, value }) => {
    return ( 
        <div className="ContainerTool"> 
            <input value={value} onChange={=onChange} className="Field-tool" />
            <button onClick={onDelete}>Deletar</button>
        </div>
    )
}