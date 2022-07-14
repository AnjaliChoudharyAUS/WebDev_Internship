
import React from "react";
import BlogList from "./BlogList";
import { useState } from "react";



const Home = () => {
    const [blogs, setBlogs]=useState([
      {
        title: 'My First Blog', body:'Hi, this is a website wherein one can create new blogs and delete them, this website is made using react.', author:'Anjali Choudhary', id:1},
        {title:'Assam is Drowning', body:'Assam is currently flooded heavily, reports suggesting it as the worst flood since 1997, the situation remains grim on Thursday with ovver 54.5 lakh people still affeted and 12 fresh deaths  being reported.Brahmaputra and Barak rivers along with its tributaries are in spate in most of the affected districts and vast tracts of land remained inundated in 32 of the total 36 districts in the state. The flood waters, however, receded in a few places.Altogether 3,658 persons were evacuated with the help of 276 boats across the state by NDRF, SDRF and other agencies during the day. The situation is terrible as there is an acute shortage of food and drinking water, and without 60+ hours electricity and no network services. ', author:'Anjali Choudhary', id:2},
        {title:'Helplines!', body:'In view of current wave of FLOOD, to serve the poeple with respect to specific needs & with a view to address eectricity related aspects of peoplem , a control room for electricity is hereby notified .    1. 7086044112 2. 7635808520 3. 7086044124 .Control room for health.  1. 9394339406 2. 8876835091 3. 7002696853 .  Control room for drinking water :  1. 8133942539 2. 03842-262979  Control room for providing relief material and essentials: 1. 9101224484 2. 9830474785 .    Control room for rescue operations: 1. 7002768843 2. 8134978947 3. 8134828838   The above numbers will be operational 24 x 7',author:'Anjali Choudhary', id:3}

    ]);
    const handleDelete = (id) => {
      const newBlogs = blogs.filter(blog => blog.id !== id);
      setBlogs(newBlogs);
    }
  
   
    return ( 
      <div className="home">
      <BlogList blogs={blogs} title="All Blogs" handleDelete={handleDelete} />
    </div>
              
              
    
       
      
     );
}
 
export default Home;