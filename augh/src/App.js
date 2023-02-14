import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import Form from "./components/Form";

const App = () => {
  const [issues, setIssues] = useState([]);

  const getIssues = async () => {
    try {
      let res = await axios.get("http://localhost:3001/issues");
      setIssues(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getIssues();
  }, []);

  return <div></div>;
};

export default App;
