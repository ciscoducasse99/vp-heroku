import React, { Component } from "react";
import Link from 'next/head';
import "./MainCover.scss";

class MainCover extends Component {
  constructor() {
    super();

    this.state = {
      showCover: true
    };
    
    this.handleClose= this.handleClose.bind(this);
  }
  

  handleClose(e){
    this.setState({
      showCover:!this.state.showCover
    });
  }

  render() {

    return (
      <div id="vee_bg" className={this.state.showCover ? 'd-block' : 'd-none'} >
        <div className="container">
          <div id="vee_cover" className="row pt-1 vp-rounded custom-shadow mx-auto p-4">
            <div className="col-lg-6 border border-top-0 border-left-0 border-bottom-0 d-none d-lg-block">
              <div className="text-center">
                <div className="p-5">
                  <h2>Header 1</h2>
                  <p className="lead">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Culpa pariatur ipsa, autem laudantium incidunt sint ducimus
                    eveniet mollitia blanditiis, atque eius qui perspiciatis
                    excepturi quo repellat veritatis, quos natus sunt!
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="vp-align">
                <div className="text-center">
                  <h2>Introducing Via</h2>
                  <p className="lead">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Culpa pariatur ipsa, autem laudantium incidunt sint ducimus
                    eveniet mollitia blanditiis, atque eius qui perspiciatis
                    excepturi quo repellat veritatis, quos natus sunt!
                  </p>
                  <button className="btn btn-rounded" onClick = {this.handleClose}>
                    <span className="lead font-weight-bold">Meet Via</span>
                  </button>
                  <p className="mt-3" id="instuction">
                    By clicking &ldquo;Meet Via&rdquo;, you agree to our
                    <a> terms of service </a> and <a> privacy statement </a>. We
                    won't send you annoying information, just looking to help.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );  
  }
}

export default MainCover;
