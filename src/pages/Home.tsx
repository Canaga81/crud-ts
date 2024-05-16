import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

interface Todo {
  id: string;
  todo: string;
}

const dataLink = "https://663ba6dafee6744a6ea2736d.mockapi.io/todos";

const Home = () => {

  const [items, setItems] = useState<Todo[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const getAllProducts = async () => {
      try {
        const res = await axios.get<Todo[]>(dataLink);
        setItems(res.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    getAllProducts();
  }, []);

  const deleteHandler = async (id: string) => {
    try {
      await axios.delete(`${dataLink}/${id}`);
      setItems((prev) => prev.filter((item) => item.id !== id));
      alert("Mehsul Silindi!");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="products_container">
      <Link to={"/create"}>
        <button className="create_btn">Create</button>
      </Link>
      {loading ? (
        <p>Loading...</p>
      ) : (
        items.map((item) => (
          <div className="product" key={item.id}>
            <h2>{item.todo}</h2>
            <div className="button_container">
              <Link to={`/read/${item.id}`}>
                <button>🎯</button>
              </Link>
              <Link to={`/update/${item.id}`}>
                <button style={{backgroundColor: 'greenyellow'}}>🖊️</button>
              </Link>
              <button onClick={() => deleteHandler(item.id)}>❌</button>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default Home;