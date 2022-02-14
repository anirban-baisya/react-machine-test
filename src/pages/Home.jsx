import React from 'react'
import About from './About'
import Products from './Products'
import Footer from './Footer';
import Navbar from './Navbar';
// import { Link } from "react-router-dom";

export default function Home() {
  return <>
            {/* <!--wrapper start--> */}
<div className="wrapper">

    

          <Navbar/>

{/* <!--banner--> */}
<section className="banner">
	<div id="demo" className="carousel slide" data-ride="carousel">

  {/* <!-- Indicators --> */}
  <div className="container">
  	<div className="row res_padd">
    	<ul className="carousel-indicators">
            <li data-target="#demo" data-slide-to="0" className="active"></li>
            <li data-target="#demo" data-slide-to="1"></li>
            <li data-target="#demo" data-slide-to="2"></li>
        </ul>
    </div>
  </div>
  

  {/* <!-- The slideshow START --> */}
  <div className="carousel-inner">
  
    <div className="carousel-item active">
      <img src="assets/images/banner1.jpg" alt=""/>
      <div className="container">
      	<div className="row res_padd">
        <div className="sliderr_ttxt">
         <div className="carousel-caption">
         	<h3>Quality Assurance</h3>
            <p>Free weighting Machine for our members.</p>
            <a href="#">Call For Enquiry</a>
          </div>
          </div>
        </div>
      </div>
    </div>
    
    <div className="carousel-item">
      <img src="assets/images/banner2.jpg" alt=""/>
      <div className="container">
      	<div className="row res_padd">
        <div className="sliderr_ttxt">
         <div className="carousel-caption">
            <h3>Simply Dummy Caption Here</h3>
            <p>Free weighting Machine for our members.</p>
            <a href="#">Call For Enquiry</a>
          </div>
          </div>
        </div>
      </div>
    </div>
    
    <div className="carousel-item">
      <img src="assets/images/banner3.jpg" alt=""/>
      <div className="container">
      	<div className="row res_padd">
        <div className="sliderr_ttxt">
         <div className="carousel-caption">
         	<h3>Quality Assurance</h3>
            <p>Free weighting Machine for our members.</p>
            <a href="#">Call For Enquiry</a>
          </div>
          </div>
        </div>
      </div>
    </div>
    
  </div>
              {/* <!-- The slideshow END --> */}


</div>
</section>


<About/>
<Products/>
<Footer/>

</div> {/*end of total div */}

                    {/* <!--wrapper end--> */}


        {/* Scroll Top START */}
                    <a href="#top" id="toTop"></a>
        {/* Scroll Top END */}


{/* 

<!--wrapper end-->

<a href="#top" id="toTop"></a>
 
<!--category menu-->
<script>
	offCanvasNav({
		target_nav: '.dropdown',
		nav_next_btn: '<i className="icon-right"></i>'
	});
</script>

*/}



    </>
  
}
