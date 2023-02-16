import Figure from "./Figure";

const Figures = () => {

  let figures = props.figures

  return(
    <div className="figures">
      <h2>Figures</h2>
      <section class="figures-feed">
        {figures.map((figure) => (
          <Figure figure={figure} /> 
        ))}
      </section>
    </div>
  )

}

export default Figures