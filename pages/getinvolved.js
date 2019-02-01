import Layout from '../components/Layout/Layout';
import GiForm from '../components/GiForm/index';
import Head from 'next/head';
import '../static/style/getinvolved.scss';

const GetInvolved = () => (
    <Layout>
        <Head>
            <title>Get Involved | Vision Project</title>
        </Head>
        <div className="text-white">

            <div id="gi-header" className="pb-2 mb-4">
                <div id="gi-header-overlay">
                    <h6 className="text-right py-4">Get Involved</h6>
                    <div className="col-lg-9 mx-auto">
                        <h2 className="text-center">We use our superpowers to help build the future. Wanna join the team?</h2>
                    </div>
                </div>
            </div>
                <div id="options-section">
                    <div className="container">
                        <h3 className="text-center py-4">Positions we're looking for</h3>
                        <div className="row">
                            <div className="opt-card col-lg-5 col-10 shadow-lg mx-auto my-3">
                                <div className="py-4 my-3">
                                    <div className="text-center">
                                        <h6 className="lead">Photographers</h6>
                                        <p>Special eye for everything</p>
                                    </div>
                                </div>
                            </div>
                            <div className=" opt-card col-lg-5 col-10 shadow-lg mx-auto my-3">
                                <div className="py-4 my-3">
                                    <div className="text-center">
                                        <h4>Photographers</h4>
                                        <p>Special eye for everything</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="opt-card col-lg-5 col-10 shadow-lg mx-auto my-3">
                                <div className="py-5 my-3">
                                    <div className="text-center">
                                        <h6 className="lead">Photographers</h6>
                                        <p className="lead">Special eye for everything</p>
                                    </div>
                                </div>
                            </div>
                            <div className=" opt-card col-lg-5 col-10 shadow-lg mx-auto my-3">
                                <div className="py-5 my-3">
                                    <div className="text-center">
                                        <h4>Photographers</h4>
                                        <p>Special eye for everything</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <h5 className="text-center py-4">...or anything else!</h5>
                    </div>
                </div>
            </div>

        <div className="" >
            <div className="col-12 mx-auto">
                <GiForm />
            </div>
        </div>
    </Layout>
);

export default GetInvolved;