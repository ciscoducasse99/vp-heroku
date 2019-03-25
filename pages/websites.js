import Layout from '../components/Layout/Layout';
import Head from 'next/head';
import Link from 'next/link';
import '../static/style/websites.scss';

const WebDev = () => (
    <Layout>
        <Head>
            <title>Web Development | Vision Project</title>
        </Head>


        {/* <div id="vp-welcoming-section" className="">
                <div id="vp-welcoming-content" className="text-center pt-5">
                    <div className="col-lg-10 mx-auto mt-1 mt-sm-1">
                        <p className="text-dark text-uppercase font-weight-bold font-header">Welcome to The Vision Project</p>
                        <h1 className="w-sm-75"><strong>What would you do if you can do anything you want?</strong></h1>
                    </div>
                    <div className="col-lg-8 mx-auto">
                        <p className="lead w-75 mx-auto">Our best way to help is to develop FREE websites for those looking to go into a new profession...with no strings attached.</p>
                    </div>
                    <a className="btn vp-button">Connect with Cisco</a>
                </div>
            </div> */}

        <div id="vp-welcoming-section">
            <div id="vp-welcoming-content" className="text-center pt-5">
                <div className="col-lg-10 mx-auto mt-1 mt-sm-1">
                    <p className="text-dark text-uppercase font-weight-bold font-header">Welcome to The Vision Project</p>
                    <h1 className="w-sm-75"><strong>What would you do if you can do anything you want?</strong></h1>
                </div>
                <div className="col-lg-8 mx-auto">
                    <p className="lead w-75 mx-auto">Our best way to help is to develop FREE websites for those looking to go into a new profession...with no strings attached.</p>
                </div>
                <a className="btn vp-button">Connect with Cisco</a>
                
                
            </div>
            <svg id="svg" xmlns="http://www.w3.org/2000/svg" viewBox="-300 0 950 270" >
                    <path d="M-314,267 C105,364 400,100 812,279" fill="none" stroke="white" stroke-width="120" stroke-linecap="round" />
                </svg>
        </div>

        <section id="vp-services-section" className="">
            {/* <div className="container">
                    <div className="row">
                        <div className="text-center">
                            <h6 className="mx-auto">What We Do</h6>
                            <h2 className="heading mx-auto w-sm-75 ">Everything you need to expand yourself online</h2>
                        </div>
                    </div>
                    <div className="row py-4">
                        <div className="col-block col-sm-8 col-md-5 col-lg-3 rounded mx-auto">
                            <div className="service-icon text-center">
                                <i className="fa fa-code fa-3x"></i>
                            </div>
                            <div className="service-text">
                                <h4 className="text-center">Web development</h4>
                                <p className="text-grey">Nemo cupiditate ab quibusdam quaerat impedit magni. Earum suscipit ipsum laudantium.
                                Quo delectus est. Maiores voluptas ab sit natus veritatis ut. Debitis nulla cumque veritatis.
                                Sunt suscipit voluptas ipsa in tempora esse soluta sint. </p>
                            </div>
                        </div>
                        <div className="col-block col-sm-8 col-md-5 col-lg-3 mx-auto">
                            <div className="service-icon text-center">
                                <i className="fa fa-bolt fa-3x"></i>
                            </div>
                            <div className="service-text">
                                <h4 className="text-center">Fast production</h4>
                                <p className="text-grey">Nemo cupiditate ab quibusdam quaerat impedit magni. Earum suscipit ipsum laudantium.
                                Quo delectus est. Maiores voluptas ab sit natus veritatis ut. Debitis nulla cumque veritatis.
                                Sunt suscipit voluptas ipsa in tempora esse soluta sint.</p>
                            </div>
                        </div>
                        <div className="col-block col-sm-8 col-md-5 col-lg-3 mx-auto" >
                            <div className="service-icon text-center">
                                <i className="fa fa-lightbulb-o fa-3x"></i>
                            </div>
                            <div className="service-text">
                                <h4 className="text-center">New Ideas</h4>
                                <p className="text-grey">Nemo cupiditate ab quibusdam quaerat impedit magni. Earum suscipit ipsum laudantium.
                                Quo delectus est. Maiores voluptas ab sit natus veritatis ut. Debitis nulla cumque veritatis.
                                Sunt suscipit voluptas ipsa in tempora esse soluta sint.</p>
                            </div>
                        </div>

                        <div className="col-block col-sm-8 col-md-5 col-lg-3 mx-auto">
                            <div className="service-icon text-center">
                                <i className="fa fa-diamond fa-3x"></i>
                            </div>
                            <div className="service-text">
                                <h4 className="text-center">Web Design</h4>
                                <p className="text-grey">Nemo cupiditate ab quibusdam quaerat impedit magni. Earum suscipit ipsum laudantium.
                                Quo delectus est. Maiores voluptas ab sit natus veritatis ut. Debitis nulla cumque veritatis.
                                Sunt suscipit voluptas ipsa in tempora esse soluta sint. </p>
                            </div>
                        </div>
                    </div>
                </div> */}

            <div className="container pb-sm-5">
                <div className="row py-3">
                    <div className="col-md-6">
                        <div className="">
                            <h1>How we get things done</h1>
                            <p className="w-75">We're a small team, but this is how we try to be as efficent as possible.</p>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="d-flex d-row">
                            <div className="p-3 align-self-start">
                                <i className="fa fa-diamond fa-3x"></i>
                            </div>
                            <div className="p-3 align-self-end">
                                <div className="text-center">
                                    <h4 className="text-black">Header 1</h4>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia maiores nisi nihil.</p>
                                </div>
                            </div>
                        </div>
                        <div className="d-flex d-row">
                            <div className="p-3 align-self-start">
                                <i className="fa fa-diamond fa-3x"></i>
                            </div>
                            <div className="p-3 align-self-end">
                                <div className="text-center">
                                    <h4 className="text-black">Header 1</h4>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia maiores nisi nihil.</p>
                                </div>
                            </div>
                        </div>
                        <div className="d-flex d-row">
                            <div className="p-3 align-self-start">
                                <i className="fa fa-diamond fa-3x"></i>
                            </div>
                            <div className="p-3 align-self-end">
                                <div className="text-center">
                                    <h4 className="text-black">Header 1</h4>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia maiores nisi nihil.</p>
                                </div>
                            </div>
                        </div>
                        <div className="d-flex d-row">
                            <div className="p-3 align-self-start">
                                <i className="fa fa-diamond fa-3x"></i>
                            </div>
                            <div className="p-3 align-self-end">
                                <div className="text-center">
                                    <h4 className="text-black">Header 1</h4>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia maiores nisi nihil.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </section>

        <div id="vp-vision-section">
            <div className="text-center">
                <h1 className="display-3">Our Vision</h1>
                <p className="lead">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum tempora laborum explicabo! Dolores accusantium porro sit at, ducimus asperiores beatae!</p>
                <p>build something that outlasts you</p>
            </div>
        </div>

        <div id="vp-mission-section">
            <div className="text-center">
                <h1 className="display-4">Our current Mission</h1>
                <p className="lead">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam iure veritatis sunt fuga adipisci tempora repellendus vitae esse voluptatem quo, veniam architecto cumque numquam ipsum.</p>
                <p className="lead">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, deserunt odit? Dolore facere eligendi consequatur adipisci illo blanditiis voluptatibus neque!</p>
                <p className="lead">Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse consequatur saepe ipsam eveniet laudantium rem.</p>
                <p className="lead">Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, provident?</p>
                <p className="lead">Lorem ipsum dolor sit amet.</p>
            </div>
        </div>

        <div id="meet-via-section">
            <div id="mvs-content">
                <div className="text-light">
                    <div className="container">
                        <div className="text-center">
                            <h4 className="display-4">Meet Via</h4>
                            <p className="my-3 lead">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae non quidem impedit omnis quis deserunt aut, laboriosam id natus saepe laborum pariatur ipsam! Voluptatum, provident blanditiis. Provident, error repellat?
                                </p>
                            <Link href="/meetvia">
                                <a className="btn vp-rounded btn-secondary px-4 mt-3 font-weight-bold">Meet Via</a>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </Layout>
);

export default WebDev;