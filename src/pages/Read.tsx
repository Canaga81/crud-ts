import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

interface Todo {
  id?: string;
  todo: string;
}

const dataLink = "https://663ba6dafee6744a6ea2736d.mockapi.io/todos/";

const Read: React.FC = () => {

  const { id } = useParams<{ id: string }>();
  const [item, setItem] = useState<Todo | null>(null);

  useEffect(() => {
    axios
      .get<Todo>(`${dataLink}${id}`)
      .then((res) => setItem(res.data))
      .catch((err) => console.log(err));
  }, [id]);

  return (
    <div className="read_container">
      {item ? <h2>{item.todo}</h2> : <p>Loading...</p>}
      <div className="button_container">
        <Link to="/">
            <button>Back ⬅️</button>
        </Link>
      </div>
    </div>
  );
};

export default Read;