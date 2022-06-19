import { Link } from "react-router-dom"
import {useState} from 'react';
function Faculties() {
let[name,setName]=useState("");
let[email,setEmail]=useState("");
let[contact,setContact]=useState("");
let[gender,setGender]=useState("");
let[department,setDepartment]=useState("");
	return (

		<>

			
			
			
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css" integrity="sha512-KfkfwYDsLkIlwQp6LFnl8zNdLGxu9YAA1QvwINks4PhcElQSvqcyVLLD9aMhXd13uQjoXtEKNosOWaZqXgel0g==" crossorigin="anonymous" referrerpolicy="no-referrer" />
<nav class="navbar background">
        <ul class="nav-list">
            <div class="logo">
                <img src="images/logo.png" alt="Addressbook"/>
            </div>
			<li><a href="/">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><Link to="/liststd">Student list</Link></li>
            <li><Link to="/listfact">Faculty list</Link></li>
        </ul>
        <div class="rightnav">
            <input type="text" name="search" id="search" placeholder="search"/>
            <button class="btn"><i class="fa-solid fa-magnifying-glass"></i></button>
        </div>
    </nav>

			<div class="wrap">
				<div class="image-slider">

					<ul class="rslides" id="slider1">
						<li><img src="images/slide2.jpg" alt="" /></li>
					</ul>

				</div>

				<div class="content">
					<div class="section group">
						<div className="row">
							<div className="col-md-6 reg">
								<p>Name:</p>
								<input onChange={(ev)=>{
								setName(ev.target.value);
							}} type="text" placeholder="Enter your full name" className="form-control" />
								<p>Email:</p>
								<input onChange={(ev)=>{
								setEmail(ev.target.value);
							}} type="text" placeholder="Enter your email id" className="form-control" />
								<p>Contact No:</p>
								<input onChange={(ev)=>{
								setContact(ev.target.value);
							}} type="number" placeholder="Enter a valid contact no" className="form-control" />
								<p class="gender">Select Your Gender</p>
								<select onChange={(ev)=>{
								setGender(ev.target.value);
							}} name="gender" className="form-control">
									<option value="none" selected>-Gender-</option>
									<option value="male">Male</option>
									<option value="female">Female</option>
									<option value="other">other</option>
								</select>
								<p>Select Your Department</p>
							<select onChange={(ev)=>{
								setDepartment(ev.target.value);
							}} name="department" className="form-control"	>
								<option value="none" selected>-Department-</option>
								<option value="Computer Science">Computer Science</option>
								<option value="Mechanical">Mechanical</option>
								<option value="Electrical">Electrical</option>
								<option value="Civil">Civil</option>
								<option value="Automobile">Automobile</option>
								<option value="Hotel Management">Hotel Management</option>
								<option value="Others">Others</option>
							</select>

							<button onClick={async ()=>{
								var fd=new FormData();
								fd.append("name",name);
								fd.append("email",email);
								fd.append("contact",contact);
								fd.append("gender",gender);
								fd.append("department",department);
								

							var resp=await fetch("http://localhost:5000/fact-reg",{
								method:'POST',
								body:fd
							});
							var data=await resp.json();
							console.log(data);
							}} type="button" class="btn btn-primary btn-lg btn-block">Submit</button>
							</div>
						</div>
					</div>
				</div>

				<div class="clear"> </div>
			</div>
			<footer>
        <div class="foot">
            <div class="footer-content">
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, nihil.
                </p>
            </div>
            <div class="footer-content">
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, nihil.
                </p>
            </div>
            <div class="footer-content">
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, nihil.
                </p>
            </div>
            <div class="footer-content">
                <img src="images/eiem.png" alt="logo" class="footer-logo"/>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, nihil.
                </p>
            </div>
        </div>
    </footer>
		</>
	);
}

export default Faculties;