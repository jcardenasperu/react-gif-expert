import { GifItem } from "./GifItem";
import { useFetchGifs } from "../hooks/useFetchGifs";

export const GifGrid = ({ category }) => {
  //const gifs = [1,2,3,4,5]
  /*   useEffect(() => {
    getGifs(category);
  }, []); */

  const { images, isLoading } = useFetchGifs(category);

  console.log(isLoading);

  /* const [images, setImages] = useState([]);

  const getImages = async () => {
    const newImages = await getGifs(category);
    setImages(newImages);
  };

  useEffect(() => {
    getImages();
  }, []);*/

  return (
    <>
      <h3>{category}</h3>
      {
        isLoading && ( <h2>Cargando...</h2> )
      }    
      {/* {
        isLoading ? ( <h2>Cargando...</h2> ) : null
      } */}
      <div className="card-grid">
        {images.map((objecto) => (
          <GifItem key={objecto.id} {...objecto}></GifItem>
        ))}
      </div>

      {/*  <h5>{counter}</h5>
      <button onClick={() => setCounter(counter + 1)}>+1</button> */}
      {/*  {
        gifs.map( gif =>(
            <p key={gif}>{gif}</p>    
        ))
      } */}
    </>
  );
};
