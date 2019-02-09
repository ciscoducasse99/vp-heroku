import Layout from '../components/Layout/Layout';
import Head from 'next/head';
import Link from 'next/link';
import '../static/style/websites.scss';

const WebDev = () => (
    <Layout>
        <Head>
            <title>Web Development | Vision Project</title>
        </Head>

        <div id="vp-masthead" className="m-3">
            <div className="dark-overlay">
                <div className="container">
                    <div className="py-5" id="vp-masthead-content">
                        <div className="text-center">
                            <div className="col-lg-10 mx-auto ">
                                <h1 className="py-2"><strong>What would you do if you can do anything you want?</strong></h1>
                            </div>
                            <div className="col-lg-8 mx-auto">
                                <p className="lead mb-5">Start Bootstrap can help you build better websites using the Bootstrap CSS framework! Just download your template and start going, no strings attached!</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div id="main-section">
            <div id="transition-section">
                <div className="text-center py-5">
                    <h2 className="display-4">Attractive from every angle</h2>
                    <p className="lead">Wingman delivers a seamless user experience, offering visual consistency for your brand, from landing to logged-in</p>
                </div>
            </div>

            <div className="container">
                <div className="pb-5">
                    <div className="row">
                        <div className="col-lg-3 mb-5 mb-lg-0">
                            <div className="card shadow-lg">
                                <div className="pt-5 pb-1 text-center">
                                    <img src="../static/images/photo.svg" />
                                </div>
                                <div className="px-4 pb-5 text-center">
                                    <h4>Modern Designs</h4>
                                    <p className="mt-4">Let's get started with one of these landing page examples.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 mb-5 mb-lg-0">
                            <div className="card shadow">
                                <div className="pt-5 pb-1 text-center">
                                    <img alt="" src="../static/images/photo.svg" />
                                </div>
                                <div className="px-4 pb-5 text-center">
                                    <h4>Scalable in all forms</h4>
                                    <p className="mt-4">Inner pages templates designed to cover a large number of purposes.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 mb-5 mb-lg-0">
                            <div className="card shadow">
                                <div className="pt-5 pb-1 text-center">
                                    <img src="../static/images/photo.svg" />
                                </div>
                                <div className="px-4 pb-5 text-center">
                                    <h4>Fast Development</h4>
                                    <p className="mt-4">Let's get started with one of these landing page examples.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 mb-5 mb-lg-0">
                            <div className="card shadow">
                                <div className="pt-5 pb-1 text-center">
                                    <img alt="" src="../static/images/photo.svg" />
                                </div>
                                <div className="px-4 pb-5 text-center">
                                    <h4>Cost Effiecent</h4>
                                    <p className="mt-2">Inner pages templates designed to cover a large number of purposes.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div id="modern-design-section">
                <div className="text-center">
                    <h2>Based off up-to-date designs</h2>
                </div>
            </div>
            <div id="scalable-section">
                <div className="text-center">
                    <h2>All for one and one for all</h2>
                </div>
            </div>
            <div id="fast-development-section">
                <div className="text-center">
                    <h2></h2>
                </div>
            </div>
            <div id="cost-section">
                <div className="text-center">
                    <h2>All</h2>
                </div>
            </div>

            <section>
                <div className="d-md-flex flex-md-equal w-100 my-md-3 px-md-1">
                    <div className="bg-dark col-lg-6 mr-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center text-white overflow-hidden">
                        <div className="my-3 py-3">
                            <h2 className="display-5">Another headline</h2>
                            <p className="lead">And an even wittier subheading.</p>
                        </div>
                    </div>
                    <div className="bg-light col-lg-6 mr-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center text-dark overflow-hidden">
                        <div className="my-3 p-3">
                            <h2 className="display-5">Another headline</h2>
                            <p className="lead">And an even wittier subheading.</p>
                        </div>
                    </div>
                </div>
            </section>


        </div>

        <div id="meet-via-section">
            <div id="mvs-content">
                <div className="my-4 text-light">
                    <div className="container">
                        <div className="text-center">
                            <h4 className="display-4">Meet Via</h4>
                            <p className="mt-3 lead">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae non quidem impedit omnis quis deserunt aut, laboriosam id natus saepe laborum pariatur ipsam! Voluptatum, provident blanditiis. Provident, error repellat?
                            </p>
                            <Link href="/meetvia">
                                <a className="btn vp-rounded btn-secondary px-4 py-2 font-weight-bold">Meet Via</a>
                            </Link>

                            <style jsx>{`

                                p{
                                    color:grey;
                                }

                                a{
                                    background:white;
                                    border:1px solid white;
                                    color:black;
                                }

                                a:hover{
                                    background: #262626;
                                    border:1px solid #262626;
                                }
                            `}</style>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </Layout>
);

export default WebDev;