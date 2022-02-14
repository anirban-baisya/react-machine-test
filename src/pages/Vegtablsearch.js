import React,{useState} from 'react'
import Navbar from './Navbar';

import Items from './Items'; //importing the json file


export default function Vegtablsearch() {
  const [data, setData] = useState(Items)//passing the Items array as intial value

  const [searchTerm, setSearchTerm] = useState('') //searchTerm is going to hold whatever i writing in input search bar

  return (
    <>
      {/* <!--wrapper start--> */}

      <div className="wrapper">

        <Navbar />

                          {/* <!--Vegetable Search start--> */}
        <div className="search_main_section">
          <div className="container">
            <div className="row res_padd">


              <div className="bread_crumb">
                <a href="#">Home</a>
                <span>
                  <i className="fa fa-angle-right" aria-hidden="true"></i>
                </span>
                <a href="#">Vegetables</a>
              </div>

              <div className="mobile_filter">

                <i className="fa fa-filter" aria-hidden="true"></i>
                <p>Show Filter</p>
              </div>


                  {/* <!--Left side Vegtable filtering part START --> */}
              <div className="laft_search_panel text-left">
                <h3>Filter Options</h3>

                <div className="form_group" style= {{position:'relative'}}>
                  <input
                    type="text"
                    placeholder="Keyword"
                    className="search-input"
                    onChange={event => {setSearchTerm(event.target.value)}}
                  />
                  <img src="assets/images/icon36.png" className="search_icon" />
                </div>

                <div className="form_group">
                  <label className="search_label">Category</label>
                  <select className="slectt">
                    <option>Vegetable</option>
                    <option>Fruits</option>
                    <option>Dairy products</option>
                    <option>Organic Products</option>
                    <option>Grocery Items</option>
                  </select>
                </div>

                <div className="form_group">
                  <label className="search_label">Sub Category</label>
                  <ul className="c_ul">
                    <li>
                      <label className="contect_container_checkBox">
                        Sub Category one
                        <input type="checkbox"  name="text" />
                        <span className="contect_checkmark"></span>
                      </label>
                    </li>
                    <li>
                      <label className="contect_container_checkBox">
                        Sub Category two
                        <input type="checkbox" name="text" />
                        <span className="contect_checkmark"></span>
                      </label>
                    </li>
                    <li>
                      <label className="contect_container_checkBox">
                        Sub Category
                        <input type="checkbox"  name="text" />
                        <span className="contect_checkmark"></span>
                      </label>
                    </li>
                    <li>
                      <label className="contect_container_checkBox">
                        Sub Categoru name here
                        <input type="checkbox" name="text" />
                        <span className="contect_checkmark"></span>
                      </label>
                    </li>
                    <li>
                      <label className="contect_container_checkBox">
                        Sub Category
                        <input type="checkbox" name="text" />
                        <span className="contect_checkmark"></span>
                      </label>
                    </li>
                  </ul>
                </div>

                <div className="form_group">
                  <label className="search_label">Price Range</label>
                  <div className="slider_rnge">
                  {/* <div className="rangeslider"> */}
                    <div
                      id="slider-range"
                      className="ui-slider ui-slider-horizontal ui-widget ui-widget-content ui-corner-all"
                    >
                      <div
                        className="ui-slider-range ui-widget-header ui-corner-all"
                        // style= {{left: '0%', width: '100%'}}
                      ></div>
                      <span
                        tabindex="0"
                        className="ui-slider-handle ui-state-default ui-corner-all"
                        // style= {{left: '0%'}}
                      ></span>
                      <span
                        tabindex="0"
                        className="ui-slider-handle ui-state-default ui-corner-all"
                        // style= {{left: '100%'}}
                      ></span>
                    </div>
                    <span className="range-text">
                      <input
                        type="text"
                        className="price_numb"
                        readonly
                        id="amount"
                      />
                    </span>
                    {/* <label for="price-min">Price:</label>
        <input type="range" name="price-min" id="price-min" value="200" min="0" max="1000"/> */}
        {/* <label for="price-max">Price:</label> */}
        {/* <input type="range" name="price-max" id="price-max" value="800" min="0" max="1000"></input> */}
                  </div>
                </div>

                <button type="submit" className="search-submit1">
                  Filter
                </button>
              </div>
                  {/* <!--Left side Vegtable filtering part END --> */}



              {/* <!--right side part START--> */}
              <div className="right_search_panel">
                <div className="evnt_shot_by_main">
                  <label className="event-sort">
                    Showing 1-20 out of 100 product for Vegetable
                  </label>
                  <div className="sort-filter">
                    <p>Sort by :</p>
                    <select className="sort-select">
                      <option>Select</option>
                      <option>Price - Low to High</option>
                      <option>Price - High to Low </option>
                    </select>
                  </div>
                </div>

                {/* <div className="search_proo">
                  <div className="srch_pic_box">
                    <img src="assets/images/search01.jpg" alt="" />
                    <span>
                      <a href="#">Call For Enquiry</a>
                    </span>
                  </div>
                  <div className="srch_dtls_box">
                    <a href="#">Fresh Onion</a>
                    <p>Rs.40.00</p>
                  </div>
                </div> */}


                      {data.filter((val)=>{//to provide searching functionality we have to use filter() 
                        if(searchTerm ==""){ 
                          return val //if search box is empty it return entire data
                        }else if(val.title.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase())){//it compares the data with search inputs
                          return val
                        }
                      }).map((values)=>{//try to accessing all array elements & the values having entir data
                          const {id,title,price,image}=values; //if we array destructuring the array then we dont needs to call the array elements as values.price


                        return (
                          <>
                            <div className="search_proo" key={id}>
                              <div className="srch_pic_box">
                                <img src={image} alt="" />
                                <span>
                                  <a href="#">Call For Enquiry</a>
                                </span>
                              </div>
                              <div className="srch_dtls_box">
                                <a href="#">{title}</a>
                                <p>Rs.{price}</p>
                              </div>
                            </div>
                          </>
                        );
                      })}
                








                <div className="w-100"></div>

                <div className="pagination_area">
                  <ul>
                    <li>
                      <a href="#">
                        <i className="fa fa-angle-left" aria-hidden="true"></i>{" "}
                      </a>
                    </li>
                    <li>
                      <a href="#">1</a>
                    </li>
                    <li>
                      <a href="#">2</a>
                    </li>
                    <li className="active">
                      <a href="#">3</a>
                    </li>
                    <li>
                      <a href="#">4</a>
                    </li>
                    <li>
                      <a href="#">...</a>
                    </li>
                    <li>
                      <a href="#">25</a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-angle-right" aria-hidden="true"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>


            </div>
          </div>
        </div>
                            {/* <!--Vegetable Search END--> */}



      </div>
      {/* <!--wrapper END--> */}
    </>
  );
}
