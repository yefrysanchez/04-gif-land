import { Cards } from "./Cards";
import { useFetchGifs } from "../hooks/useFetchGifs";
import propTypes from 'prop-types'

const GifGrid = ({ category }) => {
  const { images, isloading } = useFetchGifs(category);

  return (
    <>
      <h3 className="search">{category}</h3>
      {isloading && <h2>Loading...</h2>}
      <div className="card-grid">
        {images.map((img) => (
          <Cards {...img} key={img.id} />
        ))}
      </div>
    </>
  );
};


GifGrid.propTypes = {
  category: propTypes.string.isRequired
}

export default GifGrid;
