import Figures from "../components/Figures";

const FiguresPage = (props) => {
  let figures = props.figures;

  return (
    <div>
      <Figures figures={figures} />
    </div>
  );
};

export default FiguresPage;
