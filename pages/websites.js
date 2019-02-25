import Layout from '../components/Layout/Layout';
import Head from 'next/head';
import Link from 'next/link';
import '../static/style/websites.scss';

const WebDev = () => (
    <Layout>
        <Head>
            <title>Web Development | Vision Project</title>
        </Head>

        <div id="webdev-page">
            <div id="vp-masthead" className="m-2">
                <div className="dark-overlay">
                    <div className="container">
                        <div className="py-5" id="vp-masthead-content">
                            <div className="text-center">
                                <div className="col-lg-10 mx-auto ">
                                    <h1 className="py-2"><strong>What would you do if you can do anything you want?</strong></h1>
                                </div>
                                <div className="col-lg-8 mx-auto">
                                    <p className="lead my-4">My best way to help is to develop FREE websites for those looking to go into a new profession...with no strings attached.</p>
                                </div>
                                <a className="btn vp-button">Connect with Cisco</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div id="why-vp-section" className="text-center m-2 py-3">
                <div id="questioning-section" className="mb-5 mb-sm-4">
                    <h2 className="font-weight-bold">Why The Vision Project?</h2>
                    <p>Why we think we're a good option for you</p>
                </div>
                <div id="reasonings">
                    <div className="row">
                        <div className="col-12 col-sm-4">
                            <h5 className="pb-1 font-weight-bold">We build on modern technologies</h5>
                            <p className="col-10 mx-auto">We work with modern technologies to insure we stay brushed up on our skills, and to make sure you stay updated in the present.</p>
                        </div>
                        <div className="col-12 col-sm-4">
                            <h5 className="pb-1 font-weight-bold">We focus on customer goals</h5>
                            <p className="col-10 mx-auto">We want to help you make the most out of your site with provide the right software to help you gain clients, as well as provide guidance on how to stay connected.</p>
                        </div>
                        <div className="col-12 col-sm-4">
                            <h5 className="pb-1 font-weight-bold">We're cost effective!</h5>
                            <p className="col-10 mx-auto">We don't want any of your money! We want to provide as much help for our communinity with nothing in return!</p>
                        </div>
                    </div>
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
                                    <a className="btn vp-rounded btn-secondary px-4 font-weight-bold">Meet Via</a>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </Layout>
);

export default WebDev;