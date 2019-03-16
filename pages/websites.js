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
            <div id="vp-welcoming-section" className="">
                <div className="" id="vp-masthead-content">
                    <div className="text-center">
                        <div className="col-lg-10 mx-auto">
                            <p className="text-dark text-uppercase font-weight-bold font-header">Welcome to The Vision Project</p>
                            <h1 className=""><strong>What would you do if you can do anything you want?</strong></h1>
                        </div>
                        <div className="col-lg-8 mx-auto">
                            <p className="lead">My best way to help is to develop FREE websites for those looking to go into a new profession...with no strings attached.</p>
                        </div>
                        <a className="btn vp-button">Connect with Cisco</a>
                    </div>
                </div>
            </div>

            <section id="vp-services-section" className="py-3">
                <div className="container">
                    <div className="row">
                        <div className="text-center">
                            <h3 className="subhead">What We Do</h3>
                            <h1 className="display-custom text-center">We’ve got everything you need to launch and expand your business online</h1>
                        </div>
                    </div>
                    <div className="row py-4">
                        <div className="col-block col-sm-8 col-md-5 col-lg-3 rounded mx-auto">
                            <div className="service-icon text-center">
                                <i className="fa fa-code fa-3x"></i>
                            </div>
                            <div className="service-text">
                                <h3 className="text-center">Web development</h3>
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
                                <h3 className="text-center">Fast production</h3>
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
                                <h3 className="text-center">New Ideas</h3>
                                <p className="text-grey">Nemo cupiditate ab quibusdam quaerat impedit magni. Earum suscipit ipsum laudantium.
                                Quo delectus est. Maiores voluptas ab sit natus veritatis ut. Debitis nulla cumque veritatis.
                                Sunt suscipit voluptas ipsa in tempora esse soluta sint.</p>
                            </div>
                        </div>

                        <div className="col-block col-sm-8 col-md-5 col-lg-3 mx-auto">
                            <div className="service-icon text-center">
                                <i class="fa fa-diamond fa-3x"></i>
                            </div>
                            <div className="service-text">
                                <h3 className="text-center">Web Design</h3>
                                <p className="text-grey">Nemo cupiditate ab quibusdam quaerat impedit magni. Earum suscipit ipsum laudantium.
                                Quo delectus est. Maiores voluptas ab sit natus veritatis ut. Debitis nulla cumque veritatis.
                                Sunt suscipit voluptas ipsa in tempora esse soluta sint.
</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* <section id="vp-why-reason">
                <div className="text-center">
                    <h3>Why we do it</h3>
                    <h4 className="">People hate their jobs</h4>
                    <p>something goes here part 1</p>
                    <h4 className="">promote creativeness</h4>
                    <p>something goes here part 2</p>
                    <h4 className="">Find more reasons Cisco</h4>
                    <p>something goes here part 3</p>
                </div>
            </section>             */}

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

            <div id="vp-vision-section">
                <div className="text-center">
                    <h1 className="display-3">Our Vision</h1>
                    <p className="lead">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum tempora laborum explicabo! Dolores accusantium porro sit at, ducimus asperiores beatae!</p>
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
        </div>
    </Layout>
);

export default WebDev;