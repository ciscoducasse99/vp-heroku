import Layout from '../components/Layout/Layout';
import Head from 'next/head';
import Link from 'next/link';
import '../static/style/index.scss';
import Sphere from '../components/Sphere/index';


const INDEX = () => (

    <Layout>
        <Head>
            <title>Home | The Vision Project</title>
            <link rel="stylesheet" href="/_next/static/style.css" />
        </Head>

        <div id="home-main-section">
            <div id="home-page-header" className="text-center">
                <h1 className="display-4 lead"><strong>Meet Via.</strong></h1>
                <p className="col-11 col-xl-5 mx-auto pb-5" id="p-header">Express yourself with a modern and innovative website to provide a platform for your clients and your community.</p>
                <Sphere />
                {/* <p id="p-desc" className="pb-5">Click above to get started or <Link href="/websites"><a style={{ color: 'white'}}>learn more here.</a></Link> </p> */}
                <div className="pb-5">
                    <p className="lead">Click above to get started <br/> - or -</p>
                    <button className="btn vp-rounded shadow">Learn more</button>
                </div>
            </div>
        </div>

    </Layout>

);

export default INDEX;