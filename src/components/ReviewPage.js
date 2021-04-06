import React from 'react'
import "./ReviewPage.css"
import { Input } from '@material-ui/core';
import { OutlinedInput } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import ReviewTable from './ReviewTable';

function ReviewPage() {
    return (
        <div className="review-page">

            <div className="review-page-contents">

                <div className="search-box">
                    <OutlinedInput placeholder="Enter Product Name" />
                    <Button variant="outlined" color="primary">
                        Search
                    </Button>
                </div>

                <div className="search-filters">
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
                </div>


                <ReviewTable/>                


            </div>
            
        </div>
    )
}

export default ReviewPage;
