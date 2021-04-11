import { useEffect, useState } from 'react';
import HomeScreen from './components/HomeScreen';

function App() {

  const [data, setData] = useState([]);

  useEffect(() => {

    const getData = async () =>{
      const records = await fetchData()
      setData(records)
    }

    getData()

  },[])

  const fetchData = async () =>{
    const res = await fetch('http://127.0.0.1:5000/products?input=iphone')
    const data = res.json()
    console.log(data)
    return data;
  }

  return (
    <div className="App">

      <HomeScreen data={data}/>
    </div>
  );
}

export default App;
