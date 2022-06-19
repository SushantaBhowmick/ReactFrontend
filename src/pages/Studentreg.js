import { Link } from "react-router-dom"
import {useState} from 'react';
function Studentreg() {
let[name,setName]=useState("");
let[fname,setFname]=useState("");
let[email,setEmail]=useState("");
let[contact,setContact]=useState("");
let[dob,setDob]=useState("");
let[gender,setGender]=useState("");
let[department,setDepartment]=useState("");
let[address,setAddress]=useState("");
let[e_qualification,setE_qualification]=useState("");
let[job,setJob]=useState("");
let[c_job,setC_job]=useState("");
let[freshers,setFreshers]=useState("");
let[experience,setExperience]=useState("");
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
								<hr></hr>
							<h1>Personal Details</h1>
							<hr></hr>
						<form action="" class="form-container">
							<p>Student Name</p>
							<input type="text" onChange={(ev)=>{
								setName(ev.target.value);
							}} placeholder="First Name" className="form-control" />
							

							<p>Father's Name</p>
							<input  onChange={(ev)=>{
								setFname(ev.target.value);
							}}  type="text" placeholder="First Name" className="form-control"/>
							
							<p>Email Address</p>
							<input  onChange={(ev)=>{
								setEmail(ev.target.value);
							}} type="email" placeholder="Enter your email" className="form-control" />
							<p>Contact No</p>
							<input  onChange={(ev)=>{
								setContact(ev.target.value);
							}} type="number" placeholder="Enter Valid Phone no " className="form-control"/>
							
							<p>Date Of Birthday</p>
							<input  onChange={(ev)=>{
								setDob(ev.target.value);
							}} type="date" id="birthday" name="birthday" className="form-control"/>
							<p class="gender">Select Your Gender</p>
							<select onChange={(ev)=>{
								setGender(ev.target.value);
							}} name="gender" className="form-control">
								<option value="none" selected>-Gender-</option>
								<option value="male">Male</option>
								<option value="female">Female</option>
								<option value="other">other</option>
							</select>
							<br></br>
							<p>Select Your Department</p>
							<select  onChange={(ev)=>{
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
							<br></br>
							<p for="address">Current Address</p>
							<input  onChange={(ev)=>{
								setAddress(ev.target.value);
							}} type="text" placeholder="Enter your full address" className="form-control"/>
							<br></br>
							<p>Education Qualification</p>
							<select  onChange={(ev)=>{
								setE_qualification(ev.target.value);
							}} name="department" className="form-control">
								<option value="" selected>-Qualification-</option>
								<option value="Higher Secondary">Higher Secondary</option>
								<option value="Secondary">Secondary</option>
								<option value="ITI">ITI</option>
								<option value="Vocational">Vocational</option>
								<option value="B.A">B.A</option>
								<option value="M.A">M.A</option>s
								<option value="Others">Others</option>
							</select>

							<hr></hr>
							<h1>Domain Of Job</h1>

							<hr></hr>
							<p>You Want to get a job: </p>
							<select  onChange={(ev)=>{
								setJob(ev.target.value);
							}} name="department" className="form-control">
								  <option value="" selected>-Select here-</option>
								<option value="Yes" >Yes</option>
								<option value="No">No</option>
								
							</select>

							<p>Category of Job:</p>
                            <select onChange={(ev)=>{
								setC_job(ev.target.value);
							}} name="" id="job" className="form-control">
                                <option value="" selected>-Select here-</option>
                                <option value="Sofware Jobs">Sofware Jobs</option>
                                <option value="Technical Architect">Technical Architect</option>
                                <option value="Data Architect">Data Architect</option>
                                <option value="Solution Architect">Solution Architect</option>
                                
                            </select>

							<p>Freshers :</p>    
							<select onChange={(ev)=>{
								setFreshers(ev.target.value);
							}} name="" id="job" className="form-control">
                                <option value="" selected>-Select here-</option>
                                <option value="Yes">Yes</option>
                                <option value="No">No</option>
                                
                            </select>

							<p>Experience :</p>
                            <textarea onChange={(ev)=>{
								setExperience(ev.target.value);
							}} name="" id="" cols="50" rows="6" width="" placeholder="You have any experience?" className="form-control"></textarea>

							<button onClick={async ()=>{
								var fd=new FormData();
								fd.append("name",name);
								fd.append("fname",fname);
								fd.append("email",email);
								fd.append("contact",contact);
								fd.append("dob",dob);
								fd.append("gender",gender);
								fd.append("department",department);
								fd.append("address",address);
								fd.append("e_qualification",e_qualification);
								fd.append("job",job);
								fd.append("c_job",c_job);
								fd.append("freshers",freshers);
								fd.append("experience",experience);

							var resp=await fetch("http://localhost:5000/std-reg",{
								method:'POST',
								body:fd
							});
							var data=await resp.json();
							console.log(data);
							}}type="button" class="btn btn-primary btn-lg btn-block">Submit</button>
						</form>
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

export default Studentreg;