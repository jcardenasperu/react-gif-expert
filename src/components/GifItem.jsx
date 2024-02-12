
export const GifItem = ({title, url, id}) => {
  return (
    <div className="car" >
        <img src={url} alt={title}></img>       
        <p>{title}</p>
    </div>
  )
}
