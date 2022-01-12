import { useEffect, useState } from "react";
import EmojiData from "../../emojiapi/emoji.json"
import "./css/style.css"
const EmojiApp = () => {
  const [search,setSearch] = useState("");
  const [data,setData] = useState([]);

  useEffect(()=>{
      const newData = EmojiData.filter(emoji => emoji.title.toLowerCase().includes(search.toLowerCase()));
      setData(newData);
  },[search])
  


  return (
    <div className="mt-20">
      
      <div>
      <nav className="navbar navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand">Emoji Search</a>
          <form className="d-flex">
            <input style={{display:"flex",width:"400px",alignItems:"center"}} className="form-control mx-2" type="text" placeholder="Search" value={search} value={search} onChange={(e) => setSearch(e.target.value)} aria-label="Search" />
          </form>
        </div>
      </nav>
      </div>

      <div className="container">
        <div className="row">
          <div className="col">
        

          {data.map(emoji =>
          <div className="card" key={emoji.title}>
          <div className="card-body" onClick={() => {navigator.clipboard.writeText(emoji.symbol)}}>
            {emoji.symbol} {emoji.title}
          </div>
        </div>
        )}
          </div>
          <div className="col">
          {data.map(emoji =>
          <div className="card" key={emoji.title}>
          <div className="card-body" onClick={() => {navigator.clipboard.writeText(emoji.symbol)}}>
            {emoji.symbol} {emoji.title}
          </div>
        </div>
        )}
            
          </div>
          <div className="col">
          {data.map(emoji =>
          <div className="card" key={emoji.title}>
          <div className="card-body" onClick={() => {navigator.clipboard.writeText(emoji.symbol)}}>
            {emoji.symbol} {emoji.title}
          </div>
        </div>
        )}
    
          </div>
        </div>
      </div>
        
      
    </div>
  )
}

export default EmojiApp