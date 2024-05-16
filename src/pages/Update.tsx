import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

interface Todo {
  id?: string;
  todo: string;
}

const dataLink = "https://663ba6dafee6744a6ea2736d.mockapi.io/todos/";

const Update: React.FC = () => {

  const { id } = useParams<{ id: string }>();
  const [item, setItem] = useState<Todo>({ todo: "" });

  useEffect(() => {
    axios
      .get<Todo>(`${dataLink}${id}`)
      .then((res) => setItem(res.data))
      .catch((err) => console.log(err));
  }, [id]);

  const addHandler = async () => {
    try {
      await axios.put(dataLink + id, item);
      alert("Mehsul Deyisdirildi !");
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
          placeholder="Product Adini Deyis"
          type="text"
          value={item.todo}
        />

        <div>
          <Link to="/">
            <button>Back ⬅️</button>
          </Link>
          <button onClick={addHandler}>Update ➡️</button>
        </div>
      </div>
    </div>
  );

};

export default Update;