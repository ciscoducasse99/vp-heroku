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

        <div id="home-main-section" className="pt-4">
            <div id="home-page-header" className="pb-4 pb-sm-0">
                <div className="text-center p-0">
                
                    <h1 className="display-4 lead"><strong>Meet Via.</strong></h1>
                    <p className="col-7 col-xl-5 mb-5 mx-auto" id="p-desc">Express yourself with creative camera tools and effects and easily share your photos and videos with friends.</p>
                    <Sphere />
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
                    <Link href="/websites"><a className="btn btn-white vp-rounded font-weight-bold py-2 px-5 mb-2">Meet Via</a></Link><br/>
                    <a href="">Learn more</a>

                    <p className="mt-4 col-8 col-lg-3 mx-auto" id="instuction">
                        By continuing, you agree to our<Link href="tos"><a> terms and conditions </a></Link> and <Link href="/privacy"><a> privacy policy </a></Link>. We won't send you annoying information, just looking to help.
                    </p>
                </div>
            </div>
        </div>

    </Layout>

);

export default INDEX;