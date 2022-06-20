import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.css";
import './style.css';
class Header extends Component {
    state = {  } 
    render() { 
        return (
            <div className="header">
                <nav className="navbar navbar-expand-lg">
                <a className="navbar-brand" href="#">
                    <img src="./img/logo.svg" alt="Park2_logo" />
                </a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon">
                    <div className="hamburger hamburger-top"></div>
                    <div className="hamburger hamburger-center"></div>
                    <div className="hamburger hamburger-bottom"></div>
                    </span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav">
                    <li className="nav-item active">
                        <a className="nav-link" href="#">近期活動<span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">場區地圖</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">店家介紹</a>
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#">
                        進駐申請
                        </a>
                        <div className="custom-dropdown">
                        <div className="custom-container">
                            <div className="space"></div>
                            <a className="custom-item" href="#">店家進駐</a>
                            <a className="custom-item" href="#">市集進駐</a>
                        </div>
                        </div>
                    </li>
                    </ul>
                </div>
                <div className="right-bar">
                    <div className="weather-block">
                    <img className="w-icon" src="./img/weather1.svg" alt="" />
                    <div className="temperature">17°C</div>
                    </div>
                    <div className="social-block">
                    <a href="">
                        <svg width="16" height="28" viewBox="0 0 16 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path className="fb" d="M4.3273 10.0232C4.3273 8.76738 4.3273 7.6511 4.3273 6.53482C4.3273 4.99994 4.74617 3.60459 5.72353 2.34877C6.98013 0.813889 8.6556 0.116215 10.4707 0.116215C11.8669 -0.0233202 13.2631 0.116215 14.6594 0.116215C15.0782 0.116215 15.3575 0.25575 15.3575 0.813889C15.3575 2.20924 15.3575 3.46505 15.3575 4.8604C15.3575 5.27901 15.2179 5.55807 14.6594 5.55807C13.682 5.55807 12.7047 5.55807 11.8669 5.55807C10.8896 5.55807 10.3311 5.97668 10.3311 6.95342C10.3311 7.93017 10.3311 8.90691 10.3311 9.88366C10.3311 9.88366 10.3311 10.0232 10.3311 10.1627C10.4707 10.1627 10.6103 10.1627 10.7499 10.1627C12.0065 10.1627 13.2631 10.1627 14.3801 10.1627C14.9386 10.1627 15.2179 10.3023 15.2179 10.9999C15.2179 12.3953 15.2179 13.6511 15.2179 15.0464C15.2179 15.6046 15.0782 15.8837 14.3801 15.8837C13.1235 15.8837 11.8669 15.8837 10.7499 15.8837C10.6103 15.8837 10.4707 15.8837 10.3311 15.8837C10.3311 16.0232 10.3311 16.1627 10.3311 16.3023C10.3311 19.7906 10.3311 23.4185 10.3311 26.9069C10.3311 27.7441 10.1915 27.8837 9.21409 27.8837C7.81787 27.8837 6.56126 27.8837 5.16504 27.8837C4.46692 27.8837 4.18768 27.7441 4.18768 27.0464C4.18768 23.4185 4.18768 19.9302 4.18768 16.3023C4.18768 16.1627 4.18768 16.0232 4.18768 15.8837C4.04805 15.8837 3.90843 15.8837 3.76881 15.8837C2.79145 15.8837 1.81409 15.8837 0.697111 15.8837C-0.00100233 15.8837 -0.140625 15.7441 -0.140625 15.0464C-0.140625 13.6511 -0.140625 12.3953 -0.140625 10.9999C-0.00100236 10.1627 0.13862 10.0232 0.836734 10.0232C1.81409 10.0232 2.79145 10.0232 3.90843 10.0232C4.04805 10.0232 4.04805 10.0232 4.3273 10.0232Z" fill="white"/>
                        </svg>
                    </a>
                    <a href="">
                        <svg width="31" height="30" viewBox="0 0 31 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0.980469 23.1628C0.980469 17.7209 0.980469 12.2791 0.980469 6.83721C0.980469 6.69767 0.980469 6.69767 0.980469 6.55814C1.39934 2.93023 4.61066 0 8.38047 0C13.4069 0 18.5729 0 23.5993 0C27.6484 0 30.9993 3.34884 30.9993 7.39535C30.9993 12.4186 30.9993 17.5814 30.9993 22.6047C30.9993 25.9535 28.7654 28.7442 25.5541 29.7209C25.1352 29.8605 24.5767 29.8605 24.1578 30C18.7125 30 13.2673 30 7.82198 30C7.68236 30 7.68236 30 7.54273 30C4.47104 29.5814 2.3767 27.907 1.25972 24.9767C1.12009 24.2791 1.12009 23.7209 0.980469 23.1628ZM3.91254 14.9302C3.91254 17.4419 3.91254 19.9535 3.91254 22.4651C3.91254 24.9767 5.86726 26.9302 8.38047 26.9302C13.4069 26.9302 18.4333 26.9302 23.4597 26.9302C24.1578 26.9302 24.9956 26.7907 25.5541 26.3721C27.0899 25.5349 27.788 24.1395 27.788 22.3256C27.788 19.814 27.788 17.3023 27.788 14.7907C27.788 12.2791 27.788 9.90698 27.788 7.39535C27.788 4.88372 25.8333 2.93023 23.3201 2.93023C18.2937 2.93023 13.2673 2.93023 8.10122 2.93023C7.26349 2.93023 6.42575 3.2093 5.72764 3.62791C4.33141 4.46512 3.6333 5.86047 3.6333 7.39535C3.91255 10.0465 3.91254 12.5581 3.91254 14.9302Z" fill="white"/>
                        <path d="M16.0592 22.4653C11.8705 22.4653 8.51953 19.1164 8.51953 14.9304C8.51953 10.7443 11.8705 7.39551 16.0592 7.39551C20.2478 7.39551 23.5988 10.7443 23.5988 14.9304C23.4592 19.256 20.2478 22.4653 16.0592 22.4653ZM16.0592 10.4653C13.5459 10.4653 11.5912 12.4188 11.5912 14.9304C11.5912 17.442 13.5459 19.3955 16.0592 19.3955C18.5724 19.3955 20.5271 17.442 20.5271 14.9304C20.5271 12.4188 18.5724 10.4653 16.0592 10.4653Z" fill="white"/>
                        <path d="M24.9975 7.53488C24.9975 8.37209 24.2994 9.06977 23.4616 9.06977C22.6239 9.06977 21.9258 8.37209 21.9258 7.53488C21.9258 6.69767 22.6239 6 23.4616 6C24.2994 6 24.9975 6.69767 24.9975 7.53488Z" fill="white"/>
                        </svg>
                    </a>
                    </div>
                    <div className="open-block">正常開放</div>
                </div>
                </nav>
            </div>
        );
    }
    componentDidMount() {
        console.log('did')
        let dropdown = document.querySelector('.custom-container');
        let height = dropdown.offsetHeight;
        dropdown.style.height = '0px';
    
        let arrow = document.querySelector('.dropdown-toggle');
    
        window.addEventListener("resize", ()=>{
          hideArrow();
        });
        function hideArrow() {
          let windowWidth = window.innerWidth;
          if(windowWidth < 992){
            arrow.classList.add('remove-arrow')
          }else{
            arrow.classList.remove('remove-arrow')
          }
        }
        hideArrow();
    
        document.querySelector('.dropdown').addEventListener('mouseover', ()=>{
            console.log(height)
            dropdown.style.height = `${height}px`;
        })
        dropdown.addEventListener('mouseover', ()=>{
          dropdown.style.height = `${height}px`;
        })
        document.querySelector('.dropdown').addEventListener('mouseleave', ()=>{
          dropdown.style.height = '0px';
        })
        
        let isActive = false;
        document.querySelector('.navbar-toggler').onclick = ()=>{
          isActive = !isActive
          if(isActive) {
            document.querySelector('.hamburger-top').classList.add('toggle-top-active');
            document.querySelector('.hamburger-center').classList.add('toggle-center-active');
            document.querySelector('.hamburger-bottom').classList.add('toggle-bottom-active');
          }else{
            document.querySelector('.hamburger-top').classList.remove('toggle-top-active');
            document.querySelector('.hamburger-center').classList.remove('toggle-center-active');
            document.querySelector('.hamburger-bottom').classList.remove('toggle-bottom-active');
          }
        }
    }
}
 
export default Header;