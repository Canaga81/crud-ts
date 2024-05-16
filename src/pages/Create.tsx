import axios from "axios";
import React, { useState, ChangeEvent } from "react";
import { Link } from "react-router-dom";

interface Todo {
  id?: string;
  todo: string;
}

const dataLink = "https://663ba6dafee6744a6ea2736d.mockapi.io/todos";

const Create: React.FC = () => {
    
  const [item, setItem] = useState<Todo>({ todo: "" });

  const addHandler = async () => {
    try {
      await axios.post(dataLink, item);
      alert('Mehsul Yaradildi!');
      setItem({ todo: "" });
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setItem({ ...item, todo: e.target.value });
  };

  return (
    <div>
      <div>
        <input 
          onChange={handleChange}
          placeholder="Product Yarat" 
          type="text"
          value={item.todo}
        />
        
        <div>
          <Link to="/">
            <button>Back ⬅️</button>
          </Link>
          <button onClick={addHandler}>Create ➡️</button>
        </div>
      </div>
    </div>
  );
};

export default Create;