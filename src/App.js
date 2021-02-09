import React, { Component } from 'react';
import './style.css';
import Close from '@material-ui/icons/Close';
import Menu from '@material-ui/icons/Menu';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import {Link} from 'react-router-dom';
import logo from './images/logo.jpg';
import basket from './images/basket.svg';
import footer from './images/footer.png';
import onions from './images/onions.png';
import tomatos from './images/tomatos.png';
import instagram from './images/instagram.png'
import facebook from './images/facebook.png'
import bg1 from './images/bg1.jpg'
import bgimg from './images/bgimg.png'
import meoanOrganicStore from './images/meoan-organic-store.jpg'
import PermIdentityIcon from '@material-ui/icons/PermIdentity';
import CloseIcon from '@material-ui/icons/Close';
import RemoveIcon from '@material-ui/icons/Remove';
import AddIcon from '@material-ui/icons/Add';
export default class App extends Component {
clickMenu = () => {
	let mainNav = document.getElementById("js-menu");
	mainNav.classList.toggle("active");	
}

render(){
return( 
<div>
	<div class="container-fluid py-lg-1 main-menu" id="navbar-menu" style={{borderBottom:'4px solid #93c458'}}>
	    <div class="row align-items-center">
	      <div class="col-2 col-lg-2 navbar-toggle-btn">
	        <span id="js-navbar-togglee" onClick={this.clickMenu} >
		             {<Menu style={{fontSize:50}} />}
		    </span>
	      </div>
	      <div class="col-8 col-lg-2 d-flex justify-content-center">
		      <div>
		        <a href="#" class="nav-list-links"><img src={logo} className="w-100"/></a>
		      </div>
	      </div>
	      <div class="col-2 col-lg-4  basket">
            <div className="pr-2">
	            <img src={basket}/>
	        </div>
	      </div>
	      <div class="col-lg-6 p-lg-0 p-3 main-nav" id="js-menu">
	        <ul style={{marginBottom:'0px'}}>
	            <li>
	              <a href="#" class="nav-list-links">Home</a>
	            </li>
	            <li>
	              <a href="#" class="nav-list-links">Products</a>
	            </li>
	            <li>
	              <a href="#" class="nav-list-links">About Us</a>
	            </li>
	            <li>
	              <a href="#" class="nav-list-links">Contact Us</a>
	            </li>
			</ul>
	      </div>
	      <div class="col-2 col-lg-4" id="login">
		    <div className="d-grid basket-menu">
			    <div className="d-flex">
			        <h6 className="px-lg-1">{<PermIdentityIcon/>}Login</h6>|
			        <h6 className="px-lg-1">Signup</h6>
			    </div>
		        <div className="d-flex align-items-center pl-3" style={{backgroundColor:'#f2f2f2'}}>
		            <div className="pr-2">
		                 <img src={basket}/>
		            </div>
		            <div className="pt-1 pr-1">
		                <h6><b>My Basket</b></h6>
		                <h6><b>0 Items</b></h6>
		            </div>
		            <div className="px-2" style={{backgroundColor:'#93c458',height:'50px'}}>
		            </div>
		        </div>
		        
		      </div>
		    </div>
	    </div>
	</div>
	<section>
         <div className="container-fluid explore">
              <div className="row">
                   <div className="col-12">
                        <img src={bg1} className="w-100"/>
                   </div>
              </div>
         </div>
	</section>
	<section>
	   <div className="d-flex card-heading" style={{justifyContent:'space-between',alignItems:'center'}}>
	      <div>
	       <p className="py-3" style={{fontSize:'20px'}}>The Organic Favourites</p>
	      </div>
	      <div>
	       <a href="#" style={{border:'1px solid #649475',color:'#649475'}} className="p-2">see all</a>
	      </div>
	   </div>
	  <div id="card">
	        <div className="card">
			    <img class="card-img-top w-100" src={onions} alt="Card image"/>
			    <div class="card-body" style={{backgroundColor:'#f4f3f2'}}>
			      <p>Organic Onions</p>
			      <div style={{display:'flex',justifyContent:'space-between'}} className="pt-4">
			        <p class="card-text" style={{color:'#93c458'}}><b>₹ 120</b></p>
			        <p class="card-text"><b>1</b>kg</p>
			      </div>
			    </div>
			    <div style={{backgroundColor:'#f4f3f2'}} className="pb-2">
			        <div style={{display:'flex',justifyContent:'center',backgroundColor:'red',width:'90%',margin:'auto'}}>
			           <a href="#" class="btn btn-block add-btn">ADD</a>
			        </div>
			    </div>
            </div>
	        <div className="card">
			    <img class="card-img-top" src={tomatos} alt="Card image"/>
			    <div class="card-body" style={{backgroundColor:'#f4f3f2'}}>
				    <p>Veg Wash + Fruit & Vege ble Wash(Bottle)</p>
				    <div style={{display:'flex',justifyContent:'space-between'}}>
				       <p class="card-text" style={{color:'#93c458'}}><b>₹ 60</b></p>
				       <p class="card-text"><b>1</b>kg</p>
				    </div>
			    </div>
			    <div style={{backgroundColor:'#f4f3f2'}} className="pb-2">
			        <div style={{display:'flex',justifyContent:'center',backgroundColor:'red',width:'90%',margin:'auto'}}>
			           <a href="#" class="btn btn-block add-btn">ADD</a>
			        </div>
			    </div>
            </div>
            <div className="card">
			    <img class="card-img-top w-100" src={onions} alt="Card image"/>
			    <div class="card-body" style={{backgroundColor:'#f4f3f2'}}>
			      <p>Organic Onions</p>
			      <div style={{display:'flex',justifyContent:'space-between'}} className="pt-4">
			        <p class="card-text" style={{color:'#93c458'}}><b>₹ 120</b></p>
			        <p class="card-text"><b>1</b>kg</p>
			      </div>
			    </div>
			    <div style={{backgroundColor:'#f4f3f2'}} className="pb-2">
			        <div style={{display:'flex',justifyContent:'center',width:'90%',margin:'auto'}}>
			           <a href="#" class="btn btn-block add-btn">ADD</a>
			        </div>
			    </div>
            </div>
            <div className="card">
			    <img class="card-img-top" src={tomatos} alt="Card image"/>
			    <div class="card-body" style={{backgroundColor:'#f4f3f2'}}>
				    <p>Veg Wash + Fruit & Vege ble Wash(Bottle)</p>
				    <div style={{display:'flex',justifyContent:'space-between'}}>
				       <p class="card-text" style={{color:'#93c458'}}><b>₹ 60</b></p>
				       <p class="card-text"><b>1</b>kg</p>
				    </div>
			    </div>
			    <div style={{backgroundColor:'#f4f3f2',display:'flex',justifyContent:'space-between'}} className="pb-2">
			        <div className="ml-2">
			           <a href="#" class="btn add-btn">{<RemoveIcon style={{color:'#fff',fontSize:'20px'}}/>}</a>
			        </div>
			        <div className="mr-2">
			           <a href="#" class="btn add-btn">{<AddIcon style={{color:'#fff',fontSize:'20px'}}/>}</a>
			        </div>
			    </div>
            </div>
			
            <div className="card">
			    <img class="card-img-top w-100" src={onions} alt="Card image"/>
			    <div class="card-body" style={{backgroundColor:'#f4f3f2'}}>
			      <p>Organic Onions</p>
			      <div style={{display:'flex',justifyContent:'space-between'}} className="pt-4">
			        <p class="card-text" style={{color:'#93c458'}}><b>₹ 120</b></p>
			        <p class="card-text"><b>1</b>kg</p>
			      </div>
			    </div>
			    <div style={{backgroundColor:'#f4f3f2'}} className="pb-2">
			        <div style={{display:'flex',justifyContent:'center',backgroundColor:'red',width:'90%',margin:'auto'}}>
			           <a href="#" class="btn btn-block add-btn">ADD</a>
			        </div>
			    </div>
            </div>
	   </div>
	</section>
	<section>
	   <div className="d-flex card-heading" style={{justifyContent:'space-between',alignItems:'center'}}>
	      <div>
	       <h2 className="py-3" style={{fontSize:'20px'}}>Staples Corner</h2>
	      </div>
	      <div>
	       <a href="#" style={{border:'1px solid #649475',color:'#649475'}} className="p-2">see all</a>
	      </div>
	   </div>
	   <div id="card">
	        <div className="card">
			    <img class="card-img-top w-100" src={onions} alt="Card image"/>
			    <div class="card-body" style={{backgroundColor:'#f4f3f2'}}>
			      <p>Organic Onions</p>
			      <div style={{display:'flex',justifyContent:'space-between'}} className="pt-4">
			        <p class="card-text" style={{color:'#93c458'}}><b>₹ 120</b></p>
			        <p class="card-text"><b>1</b>kg</p>
			      </div>
			    </div>
			    <div style={{backgroundColor:'#f4f3f2'}} className="pb-2">
			        <div style={{display:'flex',justifyContent:'center',backgroundColor:'red',width:'90%',margin:'auto'}}>
			           <a href="#" class="btn btn-block add-btn">ADD</a>
			        </div>
			    </div>
            </div>
	        <div className="card">
			    <img class="card-img-top" src={tomatos} alt="Card image"/>
			    <div class="card-body" style={{backgroundColor:'#f4f3f2'}}>
				    <p>Veg Wash + Fruit & Vege ble Wash(Bottle)</p>
				    <div style={{display:'flex',justifyContent:'space-between'}}>
				       <p class="card-text" style={{color:'#93c458'}}><b>₹ 60</b></p>
				       <p class="card-text"><b>1</b>kg</p>
				    </div>
			    </div>
			    <div style={{backgroundColor:'#f4f3f2'}} className="pb-2">
			        <div style={{display:'flex',justifyContent:'center',backgroundColor:'red',width:'90%',margin:'auto'}}>
			           <a href="#" class="btn btn-block add-btn">ADD</a>
			        </div>
			    </div>
            </div>
            <div className="card">
			    <img class="card-img-top w-100" src={onions} alt="Card image"/>
			    <div class="card-body" style={{backgroundColor:'#f4f3f2'}}>
			      <p>Organic Onions</p>
			      <div style={{display:'flex',justifyContent:'space-between'}} className="pt-4">
			        <p class="card-text" style={{color:'#93c458'}}><b>₹ 120</b></p>
			        <p class="card-text"><b>1</b>kg</p>
			      </div>
			    </div>
			    <div style={{backgroundColor:'#f4f3f2'}} className="pb-2">
			        <div style={{display:'flex',justifyContent:'center',backgroundColor:'red',width:'90%',margin:'auto'}}>
			           <a href="#" class="btn btn-block add-btn">ADD</a>
			        </div>
			    </div>
            </div>
            <div className="card">
			    <img class="card-img-top" src={tomatos} alt="Card image"/>
			    <div class="card-body" style={{backgroundColor:'#f4f3f2'}}>
				    <p>Veg Wash + Fruit & Vege ble Wash(Bottle)</p>
				    <div style={{display:'flex',justifyContent:'space-between'}}>
				       <p class="card-text" style={{color:'#93c458'}}><b>₹ 60</b></p>
				       <p class="card-text"><b>1</b>kg</p>
				    </div>
			    </div>
			    <div style={{backgroundColor:'#f4f3f2',display:'flex',justifyContent:'space-between'}} className="pb-2">
			        <div className="ml-2">
			           <a href="#" class="btn add-btn">{<RemoveIcon style={{color:'#fff',fontSize:'20px'}}/>}</a>
			        </div>
			        <div className="mr-2">
			           <a href="#" class="btn add-btn">{<AddIcon style={{color:'#fff',fontSize:'20px'}}/>}</a>
			        </div>
			    </div>
            </div>
			
            <div className="card">
			    <img class="card-img-top w-100" src={onions} alt="Card image"/>
			    <div class="card-body" style={{backgroundColor:'#f4f3f2'}}>
			      <p>Organic Onions</p>
			      <div style={{display:'flex',justifyContent:'space-between'}} className="pt-4">
			        <p class="card-text" style={{color:'#93c458'}}><b>₹ 120</b></p>
			        <p class="card-text"><b>1</b>kg</p>
			      </div>
			    </div>
			    <div style={{backgroundColor:'#f4f3f2'}} className="pb-2">
			        <div style={{display:'flex',justifyContent:'center',backgroundColor:'red',width:'90%',margin:'auto'}}>
			           <a href="#" class="btn btn-block add-btn">ADD</a>
			        </div>
			    </div>
            </div>
	   </div>
	</section>
	<section>
         <div className="container-fluid explore mt-5">
              <div className="row">
                   <div className="col-12">
                        <img src={bgimg} className="w-100"/>
                   </div>
              </div>
         </div>
	</section>
	<section>
	    <div className="container py-5 h-100 ">
		    <div className="pb-5">
			    <span style={{fontSize:'20px'}}>Come explore our</span><br/>
			    <span style={{fontSize:'30px'}}>Store</span>
			</div>
	        <div className="row"  style={{display:'flex',alignItems:'center'}}>
	            <div className="col-12 col-md-6">
	                <img src={meoanOrganicStore} className="w-100"/>
	            </div>
	            <div className="col-12 col-md-6 mt-5 mt-md-0">
	                <span>{<LocationOnIcon style={{fontSize:'50px'}}/>}<span style={{fontSize:'30px'}}>Manikonda</span></span>
	                <p className="pl-5" style={{fontSize:'20px'}}>Plot 37/c, Lanco Hills Road, Opp Lanco <br/>
	                Hanging Gardens, Manikonda, Hyderabad, <br/>Telangana 500032</p>
	            </div>
	        </div>
	    </div>
	</section>
	<section style={{backgroundColor:'#f5f4f4'}} className="p-5">
	    <div className="container">
	        <div className="row">
	            <div className="col-6 col-md-3">
                    <p>MEON ORGANICS</p>
                    <p>Home</p>
                    <p>About Us</p>
                    <p>Products</p>
                    <p>Locate Us</p>
                    <p>Contact Us</p>
	            </div>
	            <div className="col-6 col-md-3">
                    <p>MORE INFO</p>
                    <p>Search Product</p>
                    <p>Refund Policy</p>
                    <p>Privacy Policy</p>
                    <p>Terms</p>
	            </div>
	            <div className="col-6 col-md-3">
	            <p>FOLLOW US</p>
                   <img src={facebook} className="px-3 py-2 mr-2" style={{backgroundColor:'#fff',borderRadius:'50%'}}/>
                   <img src={instagram} className="px-2 py-2" style={{backgroundColor:'#fff',borderRadius:'50%'}}/>
	            </div>
	            <div className="col-6 col-md-3 footer">
	            
	            </div>
	            
	        </div>
	    </div>
	</section>
    <section style={{backgroundColor:'#f5f4f4',opacity: '0.5'}} className="py-3 d-flex justify-content-center">
        <div>
          @2020 Meoan Organics
        </div>
    </section>

</div>
	);
}

}
