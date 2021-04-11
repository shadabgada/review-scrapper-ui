import "./ReviewPage.css"
import { Input } from '@material-ui/core';
import { OutlinedInput } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import ReviewTable from './ReviewTable';
import React, {  useEffect, useState } from "react";

function ReviewPage() {

  const [searchInput, setSearchInput] = useState([])
    
  const [data, setData] = useState([]);
  const [pagination, setPagination] = useState();
  const [pageData, setPageData] = useState();

  useEffect(()=>{
    console.log("useffect")
    console.log(data)
    
    fetch_and_set(data)

  },[data])


  const fetch_and_set= async (data) => {
    var pages =  await fetchPages(data)
    setPagination(pages)

    setPageData(await data[0])
    console.log(pageData)
  }

    const getData = async (page) =>{
      console.log(searchInput)
      const records = await fetchData(searchInput,page)
      setData(records)

      console.log('data')
      console.log(data);

    }

    const fetchPages = async (data) =>{
        var pages = []
        var start = false
        var end = false

        if(await data[1]?.current==1){
            start = true;
            console.log(start)
        }
  
        console.log(await data[1]?.current);
        console.log(await data[2]?.total_pages);
        
        if(await data[1]?.current == await data[2]?.total_pages){
            end = true;
            console.log(end)
        }
  
  
        if(await data[1]?.current < 10 ){
            pages = Array.from(Array(10).keys()).map(i => 1 + i * 1);
        } else if(await data[1]?.current >  (await data[2]?.total_pages-9)){
            pages = Array.from(Array(10).keys()).map(i => (data[2]?.total_pages-9) + i * 1);
        }
        else if ((data[1]?.current > 10) && (data[1]?.current <  ( data[2]?.total_pages-9))){
            pages = Array.from(Array(10).keys()).map(i => (data[1]?.current-4) + i * 1);
        }
        return {"pages":pages,"start":start,"end":end,"current":await data[1]?.current}
    }


  const fetchData = async (input, page) =>{
    console.log(input)

    let url = 'http://127.0.0.1:5000/products?input='+input

    console.log(page)
    if(page){
        url = url + "&page=" + page
    }
    console.log(url)
    const res = await fetch(url)
    const data = await res.json()
    console.log(data)
    return data;
  }

  const filter_results = (column, value) => {
    console.log(column);
    console.log(value);
    console.log(pageData)
    
    setPageData(data[0].filter(page => {
        if(page[column].toLowerCase().includes(value.toLowerCase())){
            return page;
        }
    }))
} 

    return (
        <div className="review-page">

            <div className="review-page-contents">

                <div className="search-box">
                    <OutlinedInput placeholder="Enter Product Name" onChange={(e)=> setSearchInput(e.target.value)}/>
                    <Button variant="outlined" color="primary" onClick = {(e) => getData()}>
                        Search
                    </Button>
                </div>

                {/* <div className="search-filters">
                    <Input placeholder="Product Name"/>
                    <Input placeholder="Rating"/>
                    <Input placeholder="Comment Heading"/>
                    <Input placeholder="Comment Description"/>
                    <Button variant="contained" color="primary">
                        Search By Filters
                    </Button>
                    <Button variant="contained" color="primary">
                        clear Filters
                    </Button>
                </div> */}

                <ReviewTable pagination={pagination} pageData={pageData} filter_results={filter_results} getData={getData}/>                

            </div>
            
        </div>
    )
}

export default ReviewPage;
