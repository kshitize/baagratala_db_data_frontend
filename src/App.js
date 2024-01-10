import React,{useState,useEffect} from 'react'
import './App.css';
// import fireDb from "./firebase"

function App() {
  const [data,setData]=useState(null);
  useEffect(() => {
    //console.log("first")
    fetch('https://agartalarandomba-default-rtdb.firebaseio.com/BaRecord.json')
    .then(res=>{
      return res.json();
    }).then(resdata=>setData(resdata))
  },[])
  
  
  const current = new Date();
  const date = `${current.getDate()}/${
    current.getMonth() + 1
  }/${current.getFullYear()}`;

  let firebaseApi = "https://agartalarandomba-default-rtdb.firebaseio.com/BaRecord.json";
  
  const fetchApiData =  async (url) => {
      try {
        //console.log("In fetch API")
        const res = await fetch(url);
        const resdata = await res.json();
        //console.log(resdata['-NMN9Z_fbNO8Li_DM36c'].date);
        setData(resdata);
        // console.log(data['-NMN9Z_fbNO8Li_DM36c'].time)
      } catch (error) {
        console.log(error)
      }
  }

  
  // useEffect(() => {
  //   fetchApiData(firebaseApi);
  // })
    return (
    <>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <b className="navbar-brand" href="/">
            Names Selected for BA: {date}
          </b>
          <div
            className="collapse navbar-collapse"
            id="navbarSupportedContent"
          ></div>
        </div>
      </nav>

{/* Table */}

  {data && <table className="table">
  <thead className="thead-dark">
    <tr>
      <th scope="col">No.</th>
      <th scope="col">Date</th>
      <th scope="col">Time</th>
      <th scope="col">Checked Names</th>
      <th scope="col">Random Names</th>
    </tr>
  </thead>
  <tbody>
  {Object.keys(data).map((id,index)=>{
      return(
        <tr key={id}>
          <th scope="row">{index+1}</th>
          <td>{data[id].date}</td>
          <td>{data[id].time}</td>
          <td>{data[id].checkedValuesString}</td>
          <td>{data[id].randomNameArrayString}</td>
        </tr>
      )
    })}
  </tbody>
</table>}

    </>
  );
}

export default App;
