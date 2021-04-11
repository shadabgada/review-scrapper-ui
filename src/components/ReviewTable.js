import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import React, { useEffect, useState } from 'react'
import './ReviewTable.css'


function ReviewTable() {


    const data = [
        [
            {
                "Comment": "The Best Phone for the MoneyThe iPhone 11 offers superb cameras, a more durable design and excellent battery life for an affordable price.Compelling ultra-wide cameraNew Night mode is excellentLong battery life",
                "CommentHead": "Brilliant",
                "Name": "Ankit",
                "Product": "iphone",
                "Rating": "5"
            },
            {
                "Comment": "Amazing phone with great cameras and better battery which gives you the best performance. I just love the camera .",
                "CommentHead": "Perfect product!",
                "Name": "Flipkart Customer",
                "Product": "iphone",
                "Rating": "5"
            },
            {
                "Comment": "Previously I was using one plus 3t it was a great phone And then I decided to upgrade I am stuck between Samsung s10 plus or iPhone 11 I have seen the specs and everything were good except the display it’s somewhere between 720-1080 and it’s not even an amoled it’s an LCD display But I decided to go with iPhone because I have never used an IOS device I have Been an android user from the past 9 years I ordered IPhone 11 (128gb) product redMy experience after using 3 weeks 1. The delivery ...",
                "CommentHead": "Worth every penny",
                "Name": "Vamshi  Yadav",
                "Product": "iphone",
                "Rating": "5"
            },
            {
                "Comment": "Amazing Powerful and Durable Gadget.I’m am very happy with the camera picture quality, Amazing face id unlocked in dark room, Strong battery with perfect screen size as you can carry easily in pocket. This is my third iPhone. I shifted from android Samsung Note series to iPhone because of the strong build quality and peace of mind for next 3-4 years.Don’t think to much just go for it and I suggest you to go for minimum 128gb variant or more 256gb. I’ve attached my puppy pics and no fi...",
                "CommentHead": "Great product",
                "Name": "Rahul Verma",
                "Product": "iphone",
                "Rating": "5"
            },
            {
                "Comment": "iphone 11 is a very good phone to buy only if you can compromise for the display. The display on this is device is pretty good but you can get other options with better displays in this price segment.If you can survive with an HD+ LCD panel with thicker bezels and a notch up top then this is a very good phone for you.Cameras are awesome, battery backup excellent, great performance and a decent premium look. Good job Apple !",
                "CommentHead": "Highly recommended",
                "Name": "muddassar shaikh",
                "Product": "iphone",
                "Rating": "5"
            },
            {
                "Comment": "It’s a must buy who is looking for an upgrade from previous generation of iPhones. If you are using XR then still you can hold on for sometime and upgrade to 2020 model else this phone is a must buy . Camera quality is amazing and wide angle is something to count upon. Performance wise it’s amazing and feels premium while holding in hand. So a big YES for this device. Go for 128 GB variant as the 4K videos will occupy lots of space and the storage can get over very quickly. Try to buy it with...",
                "CommentHead": "Perfect product!",
                "Name": "tushar srivastava",
                "Product": "iphone",
                "Rating": "5"
            },
            {
                "Comment": "Value for money❤️❤️Its awesome mobile phone in the world ...Display was very good and bright ..Trust me freinds you r never regret after Buying..Just go for it....I love this phone and i switch to iphone x to 11",
                "CommentHead": "Perfect product!",
                "Name": "Flipkart Customer",
                "Product": "iphone",
                "Rating": "5"
            },
            {
                "Comment": "This is my first iOS phone. I am very happy with this product. Very much satisfied with this. I love this phone.",
                "CommentHead": "Fabulous!",
                "Name": "Naveen Boopathi",
                "Product": "iphone",
                "Rating": "5"
            },
            {
                "Comment": "*Review after 10 months of usage*Doesn't seem bulky with decent touch and camera. The \"standard maintained\" quality of IPhone. Go for it, if your budget is not more enough for pro models. It's a value for money among the 11 series Stereo speakers are so good, you will love the stereo sound. Battery backup is not decent but still better than Iphone 7 and 8.Processor is fast, the phone doesn't lag at all even with heavy games, waterproof, faster face id and with no fingerprint scanners. The ca...",
                "CommentHead": "Wonderful",
                "Name": "Abhinav  K",
                "Product": "iphone",
                "Rating": "5"
            },
            {
                "Comment": "Best budget Iphone till date ❤️ go for it guys without second thought. Let me explain you guys about Camera, Display, battery, and performance. Camera: at this price range there is no comparison of camera, you’ll love the picture quality as well as video quality. I am a Vlogger I wanted an iPhone with 4k video by front camera and I got this phone and I am more than happy 😃 Battery: I use this phone roughly as I am active social media person and I have a youtube channel. so the battery ba...",
                "CommentHead": "Worth every penny",
                "Name": "Arshad Ahmed",
                "Product": "iphone",
                "Rating": "5"
            },
            {
                "Comment": "It’s been almost a month since I have been using this phone. I upgraded from an iPhone 8. The main issue with my 8 was battery and this phone is just awesome when it comes to battery. It lasts a day and a half for me with my regular use , internet connected always with 4g Can’t move forward without saying this. Battery of this phone is a life saver when I am traveling or at work when I don’t get the option to charge Camera is superb. Front cam selfies and back cam photos are just awesome. ...",
                "CommentHead": "Worth every penny",
                "Name": "Flipkart Customer",
                "Product": "iphone",
                "Rating": "5"
            },
            {
                "Comment": "Iphone is just awesome.. battery backup is very very nice.. continuously for 10 hours we can use it.camera is just awesome.. display is just fab.i love it alot..i had to wait 15 days for it as i pre ordered it..overalll it's worth the price..these all images are clicked by my iPhone..and i love it.",
                "CommentHead": "Perfect product!",
                "Name": "Rishika  Agarwal ",
                "Product": "iphone",
                "Rating": "5"
            },
            {
                "Comment": "Excellent camera, good performance, no lag. The lcd display is also good.. but difference come when we watch movie in prime and Netflix, the colours are not vibrant.. as we see in amoled display.. and the charger in box is of 5 watts.. takes more than 3 hours to charge from 0 to 100.. so guys be prepare to buy 18 watts charger . Finally I am an android user, it was my first Iapple phone, I promise u guys the iOS is so smooth.. overall the phone is damn good.... close eyes to buy it.. thanks t...",
                "CommentHead": "Simply awesome",
                "Name": "chaitanya  kumar",
                "Product": "iphone",
                "Rating": "5"
            },
            {
                "Comment": "Awesome Phone. Slightly high price but worth. Better than iPhone XR. Camera is superb and wide angle camera is very clear. 12MP selfie camera is also very good. A13 Chip gives a very good and smooth performance.",
                "CommentHead": "Nice product",
                "Name": "Abhinav Gupta",
                "Product": "iphone",
                "Rating": "4"
            },
            {
                "Comment": "Really worth of money. i just love it. It is the best phone ever.",
                "CommentHead": "Terrific",
                "Name": "SOURAV DHAR",
                "Product": "iphone",
                "Rating": "5"
            },
            {
                "Comment": "I have migrated from OP 7pro... and trust me, iPhone 11 is totally worth it.. following are the reasons:-1)there is ABSOLUTELY NO ISSUE WITH THE DISPLAY... its crisp, sharp and I found it to be much much better than OP7 pro. Netflix, Prime video all run crisply... you won’t miss a thing. True Tone works flawlessly...the display brightness is perfect. OP have not calibrated their screens properly.  2) iPhone 11 series have really good cameras... others have spoken in depth about them.3) bat...",
                "CommentHead": "Brilliant",
                "Name": "Pratik  M",
                "Product": "iphone",
                "Rating": "5"
            },
            {
                "Comment": "It’s an amazing product from apple and the camera is simply superb. Phone is faster.Night shot is simply superb and detailing and colour differentiation from camera is an added advantageThis review I have written from iPhone 11 only and I am glad to say outside.Cons wise if we see HD+ display only, no battery percentage indicator as in older iPhone 8. No assistive touch control button in itNo oleophobic coating on back panel glass and finger prints are visible but since I bought mint gr...",
                "CommentHead": "Must buy!",
                "Name": "sankar ganesh",
                "Product": "iphone",
                "Rating": "5"
            },
            {
                "Comment": "This is my first ever I phone. Before this I was using my google nexus 5. But moving from android to iOS is a great experience. It’s worth at this price. I will highly recommend it if you want to move to iOS. The best part of this phone is it’s camera and it’s battery life. This two things have won my heart. I loved it. Happy to have it in my hand. Still exploring its features. And can’t forget to mention Flipkart service. Very prompt service and fast delivery.",
                "CommentHead": "Wonderful",
                "Name": "Sushilkumar Shinde",
                "Product": "iphone",
                "Rating": "5"
            },
            {
                "Comment": "Upgraded from iphone 6 to 11 best phone for iphone users battery is much better than other iphones camera is awesome love to use it.camera is so clear in night.",
                "CommentHead": "Terrific purchase",
                "Name": "Nitin Sharma",
                "Product": "iphone",
                "Rating": "5"
            },
            {
                "Comment": "This will help you more. See if you are planning to buy iPhone 11. I will say. Yes. But there are some plans I just want to disclose before you buy. 1) If you are an existing iPhone X/XS/XS Max/ XR user, better you guys do not think it to buy. You guys have more or less better gadget. 2) If you are an android user and planning to buy premium phone. I will suggest them to please buy iPhone instead of buying an Android. I bet you will never go back to android after using IOS. Now I want to shar...",
                "CommentHead": "Mind-blowing purchase",
                "Name": "Avishek Naha",
                "Product": "iphone",
                "Rating": "5"
            }
        ],
        {
            "current": "330"
        },
        {
            "total_pages": 332
        },
        {
            "result_count": 20
        }
    ]

      const columns = [
        "Product",
        "Name",
        "Rating",
        "CommentHead",
        "Comment",
      ];

    
      const [page, setPage] = useState();
      const [pageData, setPageData] = useState();

      useEffect(() => {
        

        var pages = []
        var start = ""
        var end = ""

        if(data[1]['current']==1){
            start = true;
            console.log(start)
        }

        if(data[1]['current']==data[2]['total_pages']){
            end=true;
            console.log(end)
        }


        if( data[1]['current'] < 10 ){
            pages = Array.from(Array(10).keys()).map(i => 1 + i * 1);
        } else if( data[1]['current'] > (data[2]['total_pages']-9)){
            pages = Array.from(Array(10).keys()).map(i => (data[2]['total_pages']-9) + i * 1);
        }
        else{
            pages = Array.from(Array(10).keys()).map(i => (data[1]['current']-4) + i * 1);
        }
        setPage({"pages":pages,"start":start,"end":end})

        console.log(pages)


        setPageData(data[0])
        console.log(pageData)
    }, [])


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
                <div className={`page ${page?.start?'start':''}`}>
                    <NavigateBeforeIcon className="pageIcon"/>
                </div>
                    {
                    page?.pages?.map(
                        page =><p className={`page ${(data[1]['current']==page)?'current':''}`}>
                                 {page}
                                </p>)
                    }
                <div className={`page ${page?.end?'end':''}`}>
                    <NavigateNextIcon className="pageIcon"/>                
                </div>

            </div>
        </div>
    )
}

export default ReviewTable;
