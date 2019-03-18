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

        <div id="home-main-section" className="m-0 p-0">
            <div id="home-page-header" className="text-center">
                <h1 className="display-4 lead"><strong>Meet Via.</strong></h1>
                <p className="col-11 col-xl-5 mx-auto pb-5" id="p-header">Express yourself with a FREE modern and innovative website to provide a platform for your clients and your community.</p>
                <Sphere />
                <p id="p-desc" className="pt-3">Click above to get started or <Link href="/websites"><a style={{ color: 'white', textDecoration: 'underline' }}>learn more.</a></Link> </p>
            </div>
            <div class="airbnb-embed-frame" data-id="33018372" data-view="home" style="width:450px;height:300px;margin:auto"><a href="https://www.airbnb.com/rooms/33018372?s=51">View On Airbnb</a><a href="https://www.airbnb.com/rooms/33018372?s=51" rel="nofollow">Waffle Haus *Newly Remodeled* Close to Downtown</a><script async="" src="https://www.airbnb.com/embeddable/airbnb_jssdk"></script></div>
            <div class="airbnb-embed-frame" data-id="32994769" data-view="home" style="width:450px;height:300px;margin:auto"><a href="https://www.airbnb.com/rooms/32994769?s=51">View On Airbnb</a><a href="https://www.airbnb.com/rooms/32994769?s=51" rel="nofollow">New Luxurious Townhome with Beautiful Valley Views</a><script async="" src="https://www.airbnb.com/embeddable/airbnb_jssdk"></script></div>
        </div>

    </Layout>

);

export default INDEX;