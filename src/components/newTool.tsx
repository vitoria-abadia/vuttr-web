import React, {useState} from "react";

const NewTool = ({onSubmit}) => { 
    const[newTool, setNewTool] = useState("");

    function setNewTool({ target }) {
        setNewTool(target.value);
    };

    const
}