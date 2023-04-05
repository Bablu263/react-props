import './App.css'
import data from './data'

function App() {
  return (
    <div className="card">
    {
    data.map((eacho) =>
    {
      const {id,title,url,thumbnailUrl} = eacho;
      return (
        <Pro
          key = {id}
          id  = {id}
          title  = {title}
          url = {url}
          thumbnailUrl = {thumbnailUrl}
        />
      )
    }
    )
     }
    </div>
  );
}

const Pro = ({id,title,thumbnailUrl}) =>
{
  return (<div className="card1">
  <div className="inside">
    <img className="image" src={thumbnailUrl} alt=""></img>
    <h3 className="para">{title}</h3>
    <a className="details" href={thumbnailUrl}>Details</a>
  </div>
</div>
);  
}
export default App;
