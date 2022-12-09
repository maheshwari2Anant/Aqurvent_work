import React from "react";
import { Container, Row, Col } from "reactstrap";
import heroimage from "./images/heroimage.jpg";
import aboutimage from "./images/aboutus.jpg";
import directchat from "./images/directchat.jpg";
import "./JobSeeker.css";
import gmail from "./images/logos/gmail.png";
import leet from "./images/logos/leet.png";
import meta from "./images/logos/meta.png";
import twitter from "./images/logos/twitter.png";
import linked from "./images/logos/in.png";
import logo from "./images/logook.png"





// import {Grid} from "@material-ui/core"

function JobSeekerHP() {
  return (
    <section>
        <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
          <a class="navbar-brand" href="#">
            <img
              src={logo}
              alt="Logo"
              width="60"
              height="55"
              class="d-inline-block align-text-top"
            />
          </a>

          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav"></ul>
          </div>
        </div>

        <div
          
          id="navbarScroll"
          class="collapse navbar-collapse"
        >
          <ul
            
            class="
            navbar-nav
            ms-auto
            my-2 my-lg-0
            navbar-nav-scroll
            nav-dropdown-link
          "
          >
            <li  class="nav-item">
              <a href="/" class="nav-link">
                Home
              </a>
            </li>{" "}
            <li class="nav-item">
              <a  href="/connect" class="nav-link">
                Recruiters
              </a>
            </li>{" "}
            {/* <li  class="nav-item">
              <a  href="/job-seeker" class="nav-link">
                Job Seekers
              </a>
            </li>{" "} */}
            <li  class="nav-item in-mobile-1">
             
            </li>{" "}
            <li  class="nav-item in-mobile-1">
             
            </li>{" "}
            <li  class="nav-item">
              <button
                
                type="button"
                class=" default-btn button-sm download-btn login-btn"
              >
                Recruiter Login
              </button>
            </li>{" "}
            <li  class="nav-item">
              <button
                
                type="button"
                class=" default-btn button-sm download-btn"
              >
               User Login
              </button>
            </li>{" "}
            <li  class="nav-item in-mobile-2">
              {/* <button
                
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#secondnavbar"
                aria-controls="navbarScroll"
                aria-expanded="false"
                aria-label="Toggle navigation"
                id="toggling"
              >
                <span  class="navbar-toggler-icon"></span>
              </button>{" "} */}
              <div
                
                id="secondnavbar"
                class="collapse nav-coll"
              >
                
              </div>
            </li>
          </ul>
        </div>
      </nav>
      {/*------------------------- heroSection --------------------- */}
      <Container>
        <Row>
          <Col lg="6" md="6">
            <div className="hero_image centre">
              <h2 className="mb-4 title">Find Your perfect Job easily</h2>
              <p className="mb-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi
                animi iusto minus dignissimos commodi doloribus, tempora ipsum
                eveniet quaerat at enim accusamus.
              </p>

              <div className = "ctn">
                {/* <input type="text" placeholder="Search"></input> */}
                <button className=" btn-app-find color-btn btn">Search a job</button>
                <button className=" btn-app-find btn"> Find a Talent</button>
              </div> 
            </div>
          </Col>

          <Col lg="6" md="6">
            <div>
              <img style = {{"margin-top":"20px"}}
                src={heroimage}
                  
                alt="heroimage"
                className="w-100 imgtab"
              ></img>
            </div>
          </Col>
        </Row>
      </Container>
      {/*------------------------- heroSection --------------------- */}

      {/* <Container>
        <div data-v-38884f29="" class="">
          <h2  className="mb-4 title">
            Get the <span>Aqurvent</span> App
          </h2>{" "}
          <p data-v-38884f29="">
            We will send you a link via SMS. To download the app, simply open
            it.
          </p>
          <input
            className="search"
            data-v-261186ae=""
            type="tel"
            maxlength="10"
            placeholder="Enter Mobile Number"
            class="form-search-mob"
          ></input>
          <button
            data-v-261186ae=""
            type="button"
            class="el-button btn btn-app el-button--primary"
          >
            <span>Get App</span>
          </button>
        </div>
      </Container> */}

      {/* <Container>
      <Row>
        <Col lg="2" md="3">
          <h2 className="d-flex align-items-center gap-1">
            {""}
            <i class="fa-brands fa-apple"> Apple</i>
          </h2>
        </Col>
      </Row>
    </Container> */}

      <Container>
        
        <h3 class="title-full">Trending Job Categories</h3>
        <div class ="cardcontainer">


    <div class="card">
      <div Class="content" >
    <div class="front">Sales & BD</div>
    <div class="back">350+ Candidates</div>
    </div>
  </div>

  <div class="card">
      <div Class="content" >
    <div class="front">Marketing</div>
    <div class="back">350+ Candidates</div>
    </div>
  </div>
 
  <div class="card">
      <div Class="content" >
    <div class="front">Support</div>
    <div class="back">350+ Candidates</div>
    </div>
  </div>

  <div class="card">
      <div Class="content" >
    <div class="front">IT</div>
    <div class="back">350+ Candidates</div>
    </div>
  </div>
  <div class="card">
      <div Class="content" >
    <div class="front">Sales & BD</div>
    <div class="back">350+ Candidates</div>
    </div>
  </div>
  <div class="card">
      <div Class="content" >
    <div class="front">Sales & BD</div>
    <div class="back">350+ Candidates</div>
    </div>
  </div>
  <div class="card">
      <div Class="content" >
    <div class="front">Sales & BD</div>
    <div class="back">350+ Candidates</div>
    </div>
  </div>
  <div class="card">
      <div Class="content" >
    <div class="front">Sales & BD</div>
    <div class="back">350+ Candidates</div>
    </div>
  </div>
 
 


  </div>  
      </Container>




      <Container>
        <Row>
      <Col lg="6" md="6">
            <div className="chatimg">
              <img src={directchat} alt="" className="w-100"></img>
            </div>
          </Col>
          <Col lg="6" md="6">
        <div class="">
          <h2  className=" title">
            Chat directly with
            <br />
            Decision-Makers
          </h2>{" "}
          <p>
            Hirect encourages direct and quick responses between job-seekers and
            recruiters. Through the bi-directional direct chat feature,
            candidates can chat directly with relevant and verified recruiters
            on this job search app.
          </p>{" "}
          <a
            href="/job-seeker"
            class="btn btn-app start-hiring"
          >
            Get Hired
          </a>

        </div>
        </Col>
        </Row>
      </Container>



{/* ourpartners ------------------------*/}

 <Container>
  <h3  className="mb-4 title-full">More than <span> 190K</span>  Recruiters  trust <span>  Aqurvent</span> </h3>
<div class="logo-slider">
	<div class="logo-slide-track">
		<div class="slide">
			<img  class="size"  src={twitter} alt="" />
		</div>
    <div class="slide">
			<img  class="size" src={meta} alt="" />
		</div>
    <div class="slide">
			<img class="size"  src={gmail} alt="" />
		</div>
    <div class="slide">
			<img  class="size" src={linked} alt="" />
		</div>

    <div class="slide">
			<img class="size"  src={leet} alt="" />
		</div>
  </div>
</div>

 </Container>


{/* aboutus--------------------- */}
      <Container>
        <Row>
       
          <Col lg="6" md="6">
            <h2  className="mb-4 title">About Us</h2>
            <p>
              Owing to the presence of experienced team members, we have been able to provide Manpower Consultant services to our valued clients. Our experienced staffs search our extensive candidate database and actively search the market for right candidate.

Keeping in mind the precise demands of clients, our team members hunt for the right candidates who are looking for jobs in various companies. Besides, as an authorized organization we act as a perfect mediator between employers and candidates.

Our Strength
Our organization uses innovative approach and offers highly desirable international recruitment services to the clients. We are committed in providing the very best and unmatched services to all our clients and service seekers. Our main focus has been and will be Right People for the Right Job. Our goal is the complete satisfaction of our esteemed clients, customers, job seekers and associates, in the process developing a mutually rewarding and a long-term relationship with each of them.

Training
We understand that companies today require more than a skilled candidate. They reach for employees who are innovative, who can think out of the box, be more productive, exhibit a positive attitude, work as a team, handle challenging situations and have the ability to lead from the front, to become an asset for the company for a longer time. The companies want to nurture these capabilities and talents of their employees further so that they add value to the organization’s performance and build a competitive advantage.
            </p>
          </Col>
          <Col lg="6" md="6">
            <div className="about_image">
              <img src={aboutimage} alt="" className="w-100"></img>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default JobSeekerHP;
