import { useEffect, useState } from "react";
import Figure from "./Figure";
import axios from "axios";
import FigureFormUpdate from "./FigureFormUpdate";


const Figures = (props) => {

  const [figureCollection, setFigureCollection] = useState([])

  const getFigs = async () => {
    const props = await axios.get('http://localhost:3001/api/figures')
    console.log(props)
    setFigureCollection(props.data.figures)
  }

  const delFig = async (figure_id) => {
    const props = await axios.delete(`http://localhost:3001/api/figures/${figure_id}`)
    getFigs()
  }



  useEffect(()=> {
    getFigs()
  }, [])


  return(
    <div className="figures">
      <h2 class="page-title">Figures</h2>
      <section class="figures-feed">
        {figureCollection.map((figure) => (
          <div key={figure._id}>
            <Figure figure={figure} />
            <FigureFormUpdate figure={figure} getFigs={getFigs} />
            <button class="delb" onClick={() => delFig(figure._id)}>Delete</button>
          </div>
        ))}
      </section>
    </div>
  )

}

export default Figures