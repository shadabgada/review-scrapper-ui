import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import React, { useEffect, useState } from 'react'
import './ReviewTable.css'


function ReviewTable({pagination, pageData, filter_results, getData}) {

      const columns = [
        "Product",
        "Name",
        "Rating",
        "CommentHead",
        "Comment",
      ];

     
    return (
        <div className="review-table">

            <table>
                <tr className="heading">

                    {columns.map(column => 
                         <th>{column }<ArrowUpwardIcon style={{float:"right"}}/></th>
                         )}
                </tr>
                <tr className="heading">

                    {columns.map(column => 
                         <th><input type="text" onChange={(e)=>filter_results(column, e.target.value)} style={{outline: "none"}}/></th>
                         )}
                </tr>
                
                
                    {pageData?.map(
                        data => <tr>
                                <td>{data.Product}</td>
                                <td>{data.Name}</td>
                                <td>{data.Rating}</td>
                                <td>{data.CommentHead}</td>
                                <td>{data.Comment}</td>
                            </tr>)}
            </table>

            <div className="paginator">
                <div className={`page ${pagination?.start?'start':''}`} onClick={(e)=>getData(pagination?.pages[0]-1)}>
                    <NavigateBeforeIcon className="pageIcon"/>
                </div>
                    {
                    pagination?.pages?.map(
                        page =><p className={`page ${(pagination?.current==page)?'current':''}`} onClick={(e)=>getData(page)}> 
                                 {page}
                                </p>)
                    }
                <div className={`page ${pagination?.end?'end':''}`} onClick={(e)=>getData(pagination?.pages[9]+1)}>
                    <NavigateNextIcon className="pageIcon" />                
                </div>

            </div>
        </div>
    )
}

export default ReviewTable;
