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
                    <h1 className="display-4 lead mb-5"><strong>Introducing Via</strong></h1>
                    <Sphere/>
                    {/* <p className="lead col-sm-7 mx-auto ">
                        Meet Via to take the next step with getting your free website.<br/> Always free. All the time.
                    </p>
                    <div className="">
                        <div className="mx-auto">
                            <Link href="/websites"><a className="btn btn-black vp-rounded mx-2 font-weight-bold ">Learn More</a></Link>
                            <Link href="/meetvia"><a className="btn btn-white vp-rounded mx-2 font-weight-bold">Meet Via</a></Link>
                            <p className="mt-3 col-8 col-lg-3 mx-auto" id="instuction">
                                By clicking &ldquo;Meet Via&rdquo;, you agree to our
                                <Link href="tos"><a> terms and conditions </a></Link> and <Link href="/privacy"><a> privacy policy </a></Link>. We
                                won't send you annoying information, just looking to help.
                            </p>
                        </div>
                    </div> */}
                    <Link href="/websites"><a className="btn btn-white vp-rounded">Learn more</a></Link>
                </div>
            </div>
        </div>
    </Layout>
);

export default INDEX;