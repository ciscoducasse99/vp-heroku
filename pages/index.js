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

        <div id="home-main-section">
            <div id="home-page-header" className="pb-sm-0">
                <div className="text-center">
                    <h1 className="display-4 lead"><strong>Meet Via.</strong></h1>
                    <p className="col-10 col-xl-5 mb-5 mx-auto" id="p-desc">Express yourself with creative camera tools and effects and easily share your photos and videos with friends.</p>
                    <Sphere />
                    <p className="text-white">Click above to get started or <Link href="/websites"><a style={{color:'#0076ff'}}>Learn more.</a></Link></p>
                </div>
            </div>
        </div>

    </Layout>

);

export default INDEX;