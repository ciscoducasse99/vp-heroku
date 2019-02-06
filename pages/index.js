//Use 'npm run dev' to run app

import Layout from '../components/Layout/Layout';
import Head from 'next/head';
import Link from 'next/link';
import '../static/style/index.scss';
import Sphere from '../components/Sphere/index';


const INDEX = () => (

    <Layout>
        <Head>
            <title>Home | Vision Project</title>
            <link rel="stylesheet" href="/_next/static/style.css" />
        </Head>

        <div id="Main_Page">
        <div className="container">
        </div>
            <div className="py-2" id="page-header">
                <div className="text-center">
                    <h1 className="display-2 lead mb-5"><strong>Introducing Via</strong></h1>
                    <Sphere/>
                    <p className="lead col-sm-7 mx-auto mt-5">
                        Meet Via to take the next step with getting your free website.<br/> Always free. All the time.
                    </p>
                    <div className="mt-5">
                        <div className="mx-auto">
                            <Link href="/websites"><a className="btn btn-black vp-rounded mx-2 font-weight-bold px-4 py-2">Learn More</a></Link>
                            <Link href="/meetvia"><a className="btn btn-white vp-rounded mx-2 font-weight-bold px-5 py-2">Meet Via</a></Link>
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
    </Layout>
);

export default INDEX;