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
                                    <p className="lead mb-5">Start Bootstrap can help you build better websites using the Bootstrap CSS framework! Just download your template and start going, no strings attached!</p>
                                </div>
                            </div>
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