import { useState, useEffect } from 'react';
import { Link } from "react-router-dom"
function Listfact() {
	let [lstd,setlstd]=useState([]);
async function getstd(){
	var resp=await fetch("http://localhost:5000/listfac");
	var data=await resp.json();
	setlstd(data);
}


	useEffect(()=>{
getstd();
	},[]);
	return (

		<>

			
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css" integrity="sha512-KfkfwYDsLkIlwQp6LFnl8zNdLGxu9YAA1QvwINks4PhcElQSvqcyVLLD9aMhXd13uQjoXtEKNosOWaZqXgel0g==" crossorigin="anonymous" referrerpolicy="no-referrer" />
<nav class="navbar background">
        <ul class="nav-list">
            <div class="logo">
                <img src="images/logo.png" alt="Addressbook"/>
            </div>
			<li><Link to="/">Home</Link></li>

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

				<div class="table">
					<div class="section group">
						<div className="row">
							<div className="col-md-12">
								<table className="table table-bordered table-responsive-sm">
									<thead className="thead-dark">
										<tr>
											
											<th scope="col">Name</th>
											<th scope="col">Email</th>
											<th scope="col">Contact</th>
											<th scope="col">Gender</th>
											<th scope="col">Department</th>
										</tr>
									</thead>
									<tbody>
										{lstd.map((s)=>
										<tr key={s._id} className='table-primary'>
											<td>{s.name}</td>
											<td>{s.email}</td>
											<td>{s.contact}</td>
											<td>{s.gender}</td>
											<td>{s.department}</td>
											
										</tr>
                                       )}
										
									</tbody>
								</table>
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

export default Listfact;