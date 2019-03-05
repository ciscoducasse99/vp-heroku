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
            <div id="vp-welcoming-section" className="mt-0 ml-2 mr-2 mb-2">
                <div className="py-5" id="vp-masthead-content">
                    <div className="text-center">
                        <div className="col-lg-10 mx-auto py-2 mt-3">
                            <p className="text-dark text-uppercase font-weight-bold font-header p-0">Welcome to The Vision Project</p>
                            <h1 className=""><strong>What would you do if you can do anything you want?</strong></h1>
                        </div>
                        <div className="col-lg-8 mx-auto">
                            <p className="lead my-4">My best way to help is to develop FREE websites for those looking to go into a new profession...with no strings attached.</p>
                        </div>
                        <a className="btn vp-button mt-4 mb-3 mb-sm-0">Connect with Cisco</a>
                    </div>
                </div>
            </div>

            <div id="vp-masthead-section">
                <div id="dark-overlay">
                    <div id="vp-masthead-content">
                        <div className="text-center">
                            <p className="lead">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis voluptates quae at inventore laudantium quibusdam delectus aliquam.</p>
                        </div>
                    </div>
                </div>
            </div>

            <section id="vp-services-section">
                <div className="container">
                    <div className="row">
                        <div className="text-center">
                            <h3 className="subhead">What We Do</h3>
                            <h1 className="display-custom text-center">We’ve got everything you need to launch and expand your business online</h1>
                        </div>
                    </div>
                    <div className="row ">
                        <div className="col-block rounded p-2" data-aos="fade-up">
                            <div className="service-icon">
                                <i className="fa fa-paint-brush fa-4x"></i>
                            </div>
                            <div className="service-text">
                                <h3 className="h2">Brand Identity</h3>
                                <p className="text-grey">Nemo cupiditate ab quibusdam quaerat impedit magni. Earum suscipit ipsum laudantium.
                                Quo delectus est. Maiores voluptas ab sit natus veritatis ut. Debitis nulla cumque veritatis.
                                Sunt suscipit voluptas ipsa in tempora esse soluta sint.
</p>
                            </div>
                        </div>
                        <div className="col-block service-item" data-aos="fade-up">
                            <div className="service-icon">
                                <i className="fa fa-bullhorn"></i>
                            </div>
                            <div className="service-text">
                                <h3 className="h2">Marketing</h3>
                                <p className="text-grey">Nemo cupiditate ab quibusdam quaerat impedit magni. Earum suscipit ipsum laudantium.
                                Quo delectus est. Maiores voluptas ab sit natus veritatis ut. Debitis nulla cumque veritatis.
                                Sunt suscipit voluptas ipsa in tempora esse soluta sint.
</p>
                            </div>
                        </div>
                        <div className="col-block service-item" data-aos="fade-up">
                            <div className="service-icon">
                                <i className="fa fa-globe"></i>
                            </div>
                            <div className="service-text">
                                <h3 className="h2">Web Design</h3>
                                <p className="text-grey">Nemo cupiditate ab quibusdam quaerat impedit magni. Earum suscipit ipsum laudantium.
                                Quo delectus est. Maiores voluptas ab sit natus veritatis ut. Debitis nulla cumque veritatis.
                                Sunt suscipit voluptas ipsa in tempora esse soluta sint.
</p>
                            </div>
                        </div>

                        <div className="col-block service-item" data-aos="fade-up">
                            <div className="service-icon">
                                <i class="fa fa-th"></i>
                            </div>
                            <div className="service-text">
                                <h3 className="h2">Web Development</h3>
                                <p className="text-grey">Nemo cupiditate ab quibusdam quaerat impedit magni. Earum suscipit ipsum laudantium.
                                Quo delectus est. Maiores voluptas ab sit natus veritatis ut. Debitis nulla cumque veritatis.
                                Sunt suscipit voluptas ipsa in tempora esse soluta sint.
</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* <div id="why-vp-section" className="text-center m-2 py-5">
                <div id="questioning-section" className="mb-5 mb-sm-5">
                    <h3 className="font-weight-bold">Why The Vision Project?</h3>
                    <p>How we plan on providing a platform for you to persue whatever you may want to do</p>
                </div>
                <div id="reasonings" className="overflow-hidden">
                    <div className="row">
                        <div className="col-12 col-sm-4 mb-3 mb-sm-0 p-0">
                            <h5 className="pb-1 font-weight-bold">We build on modern technologies</h5>
                            <p className="col-10 mx-auto">We work with modern technologies to insure we stay brushed up on our skills, and to make sure you stay updated in the present.</p>
                        </div>
                        <div className="col-12 col-sm-4 mb-sm-0 p-0 ">
                            <h5 className="pb-1 font-weight-bold">We focus on customer goals</h5>
                            <p className="col-10 mx-auto">We want to help you make the most out of your site with provide the right software to help you gain clients, as well as provide guidance on how to stay connected.</p>
                        </div>
                        <div className="col-12 col-sm-4 mb-sm-0 p-0">
                            <h4 className="pb-1 font-weight-bold">We're cost effective!</h4>
                            <p className="col-10 mx-auto">We don't want any of your money! We want to provide as much help for our communinity with nothing in return!</p>
                        </div>
                    </div>
                </div>
            </div> */}

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
        </div>
    </Layout>
);

export default WebDev;