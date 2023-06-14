import React from 'react'
import {NavLink} from 'react-router-dom'
import './Footer.css'

const Footer = () => {
  return (
    <>
             <div className='footer_container'>
             <div className="navbar navbar-expand-lg bg-body-tertiary mt-5 pt-5 pb-5 footer_styles">
                    <div className="container  d-flex  justify-content-center  text-start mt-5 mb-4 pt-3 pb-3">

                            <div className="row align-items-center">
                                <div className=' col-12 col-lg-6 align-items-center pb-2 pt-2'>
                                    <small>The website is a final project for a React course at CoderHouse.  
                                        It demonstrates the ability to build a functional and interactive web application using React.</small>
                                </div>
                                <ul className=" navbar-nav me-auto mb-2 mb-lg-0  col-12 col-lg-6 align-items-center pb-2 pt-2">
                                        <li className="nav-item"> Site Fake Sonor</li>
                                        <li className="nav-item">
                                            <a href="https://github.com/dacerb/full-stack-coderhouse-c43205" target='_blank' aria-current="page" className='page-link'>GitHub</a>
                                        </li>
                                        <li className="nav-item"> &#169; Copyright 2023</li>
                                </ul>
                            </div>
                    </div>
                    
                </div>
                <div className='container-fluid footer_style_bg_end'>
                </div>
             </div>
</>
  )
}

export default Footer