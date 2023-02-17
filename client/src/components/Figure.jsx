

const Figure = (props) => {

  let figure = props.figure

  return(
    <div className="figure">
      <div className="figureName">Figure: {figure.name}</div>
      <div className="figureDate">{figure.releaseDate}</div>
      <img src={figure.image}></img>
      <div className="figureDescription">{figure.description}</div>
      <div className="figureClass">Class: {figure.class}</div>
      <div className="figureBrand">Brand: {figure.brand}</div>
      <div className="figurePrice">Retail Price: ${figure.price}</div>


    </div>
  )
}

export default Figure