import React from 'react';
import vg from '../assets/main1.webp';
import vg2 from '../assets/img2.jpg';
import '../styles/home.scss';
import { AiFillAmazonCircle, AiFillApple, AiFillGooglePlusCircle, AiFillInstagram, AiFillPhone, AiOutlineWhatsApp } from 'react-icons/ai';
import { SiXiaomi } from 'react-icons/si';

function Home() {
  return (
    <>
      <div className="main2" id='home'>
        <div>
          <h1>Welcome To Phone<span>Hub</span></h1>
          <h3>Buy Your Favrouite SmartPhone</h3>
        </div>
        <img src={vg2} alt="images" />
      </div>
      <div className="main1">
        <div>
          <h1>With Maximum Discount</h1>
          <h3>And Free Home Delivery</h3>
        </div>
        <img src={vg} alt="images" />
      </div>
      <div className="main3" id='brands' style={{ backgroundColor: 'blue' }}>
        <div>
          <h1>Brands</h1>
          <article>
            <a href="https://www.apple.com/in/" rel="noreferrer" target='_blank'>
              <div style={{ animationDelay: '0.3s' }}>
                <AiFillApple />
                <p>Apple</p>
              </div>
            </a>
            <a href="https://www.mi.com/in" rel="noreferrer" target='_blank'>
              <div style={{ animationDelay: "0.5s" }}>
                <SiXiaomi />
                <p>Xiaomi</p>
              </div>
            </a>
            <a href="https://amazon.in" rel="noreferrer" target='_blank'>
              <div style={{ animationDelay: "0.7s" }}>
                <AiFillAmazonCircle />
                <p>Amazon</p>
              </div>
            </a>
            <a href="https://google.com" rel="noreferrer" target='_blank'>
              <div style={{ animationDelay: "0.9s" }}>
                <AiFillGooglePlusCircle />
                <p>Google</p>
              </div>
            </a>
          </article>
        </div>
      </div>
      <div className='main4' id='about'>
        <div>
          <h1>About us</h1>
          <br />
          <p>Hello my name is Amit kumar a web developer from Patna college , Patna University. This website is created by me using React js , Express js, MongoDb Database , Scss etc. If you want to know more about this please contact us Thank You</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.est adipisci quia ad repellat itaque dolore minus aliquam! Amet quam impedit voluptatem explicabo assumenda veritatis delectus pariatur rem. Amet quibusdam sunt accusantium doloribus? Aspernatur expedita, eaque repudiandae, sit rerum itaque odio quis cum laudantium molestias aliquam magnam asperiores mollitia sed dicta quas optio enim velit tempore in dignissimos. Ducimus delectus quisquam atque debitis! Voluptate velit deserunt, molestias magni, autem repudiandae perspiciatis temporibus ipsum, libero exercitationem blanditiis veritatis.</p>
        </div>
      </div>
      <div className="main3" id='contact' style={{ backgroundColor: 'red' }}>
        <div>
          <h1>Contact Us</h1>
          <article>
            <a href="https://www.instagram.com/amit.kumar3998/" rel="noreferrer" target='_blank'>
              <div style={{ animationDelay: '0.3s' }}>
                <AiFillInstagram />
                <p>Instagram</p>
              </div>
            </a>
            <a href="https://wa.me/+916204074264" rel="noreferrer" target='_blank'>
              <div style={{ animationDelay: "0.5s" }}>
                <AiOutlineWhatsApp />
                <p>WhatsApp</p>
              </div>
            </a>
            <a href="tel:+916204074264" rel="noreferrer" target='_blank'>
              <div style={{ animationDelay: "0.7s" }}>
                <AiFillPhone />
                <p>Call Now</p>
              </div>
            </a>
          </article>
        </div>
      </div>
    </>
  )
}

export default Home;