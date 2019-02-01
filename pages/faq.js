import Layout from '../components/Layout/Layout';
import Link from 'next/link';
import Head from 'next/head';
import '../static/style/faq.scss';

const Faq = () => (
    <Layout>
        <Head>
            <title>Frequently Asked Questions | Vision Project</title>
        </Head>
        <div id="main">
            <div className="container">
                <h6 className="text-right pt-4">Frequently Asked Questions</h6>
                <div className="pb-2 text-center">

                    <div className="my-5 py-3">
                        <div className="mx-auto col-md-7">
                            <h3 className="text-white">What's the point of this?</h3>
                            <p className="lead">We want to help everyone pursue their own journeys. We know how hard it can be to "take the leap" so we're trying to soften the start more. That means you get the services we can help with, and we can get the experience we need to continue.</p>
                        </div>
                    </div>
                    <div className="my-5">
                        <div className="mx-auto col-md-7">
                            <h4>What does this site do?</h4>
                            <p className="lead">All we can do for now is making websites for people, <span className="font-weight-bold">for free.</span> All you have to pay for is hosting, which someone can get in contact with you about.</p>
                        </div>
                    </div>
                    <div className="my-5">
                        <div className="mx-auto col-md-7">
                            <h4>What's the difference between a website from this site compared to another site?</h4>
                            <p className="lead">Most web services build websites from templates. That means most sites are just as unique as the next. We make websites <span className="font-weight-bold">from SCRATCH.</span> That means we make YOU a website the way YOU want it.</p>
                            <p className="lead">And we won't charge you for/after we make you one!</p>
                        </div>
                    </div>
                    <div className="my-5">
                        <div className="mx-auto col-md-7">
                            <h4>Who is Vy?</h4>
                            <p className="lead">Vy is a bot we developed to help us get in touch with you. We might not always to be able to get in direct contact, so Vy is the 'middle-person' in between us to make sure we do. She sends us information about whoever wants a site, so we can know who wants what.</p>
                        </div>
                    </div>
                    <div className="my-5">
                        <div className="mx-auto col-md-7">
                            <h4>What if I want to make a change to my site?</h4>
                            <p className="lead">Just let us know! It might make some time to get to, but we value speed and timing of things. The sooner you can let us know what you want to change, the quicker it'll happen.</p>
                        </div>
                    </div>
                    <div className="my-5">
                        <div className="mx-auto col-md-7">
                            <h4>Why are you only available in Lowell?</h4>
                            <p className="lead">We want to make change in Lowell. Since we started in Lowell, we want to be able to help the community on Lowell as much as possible before we could open the doors to anyone else. But who knows? Maybe one day we will.</p>
                        </div>
                    </div>
                    <div className="my-5">
                        <div className="mx-auto col-md-7">
                            <h4>What if I want to help?</h4>
                            <p className="lead">Then tell us what you want to help with! We can connect you to our <Link href="/getinvolved"><a>'Get Involved' page</a></Link> right here. We're all about helping people become better at whetever they try to achieve. Whether you want experience for a resume or can bring value to us, we'd be happy to help.</p>

                            <style jsx>{`
                                a {
                                    color:white;
                                }
                                h4{
                                    font-size:28px;
                                }
                                p.lead{
                                    font-size:18px;
                                }
                            `}</style>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </Layout>
);

export default Faq;