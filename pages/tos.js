import Layout from '../components/Layout/Layout';
import Head from 'next/head';
import Link from 'next/link';
import '../static/style/legal.scss';

const TOS = () => (
    <Layout>
        <Head>
            <title>Terms Of Service | The Vision Project</title>
        </Head>
        <div id="page-content">
            <div className="text-center">
                <div className="py-3">
                    <h3 className="mb-0 font-weight-bold">Terms and Conditions</h3>
                    <p>Last updated: January 18, 2019</p>
                </div>

                <div className="legal-scrollmenu py-2">
                    <a className=" vp-rounded mr-1" href="#ltos">Links to Other Sites</a>
                    <a className=" vp-rounded mr-1" href="#gl">Governing Laws</a>
                    <a className=" vp-rounded mr-1" href="#changes">Changes</a>
                    <a className="vp-rounded mx-1" href="#contact">Contact</a>
                </div>
            </div>

            <div className="container">
                <p className="mt-5">Please read these Terms and Conditions ("Terms", "Terms and Conditions") carefully before using the www.thevisionproject.com website (the "Service") operated by The Vision Project ("us", "we", or "our").</p>

                <p>Your access to and use of the Service is conditioned on your acceptance of and compliance with these Terms. These Terms apply to all visitors, users and others who access or use the Service.</p>

                <p>By accessing or using the Service you agree to be bound by these Terms. If you disagree with any part of the terms then you may not access the Service. The Terms and Conditions agreement  for The Vision Project is based on the <a href="https://termsfeed.com/blog/sample-terms-and-conditions-template/">TermsFeed's Terms and Conditions Template</a>.</p>




                <h2 id="ltos">Links To Other Web Sites</h2>

                <p>Our Service may contain links to third-party web sites or services that are not owned or controlled by The Vision Project.</p>

                <p>The Vision Project has no control over, and assumes no responsibility for, the content, privacy policies, or practices of any third party web sites or services. You further acknowledge and agree that The Vision Project shall not be responsible or liable, directly or indirectly, for any damage or loss caused or alleged to be caused by or in connection with use of or reliance on any such content, goods or services available on or through any such web sites or services.</p>

                <p>We strongly advise you to read the terms and conditions and privacy policies of any third-party web sites or services that you visit.</p>




                <h2 id="gl">Governing Law</h2>

                <p>These Terms shall be governed and construed in accordance with the laws of Massachusetts, United States, without regard to its conflict of law provisions.</p>

                <p>Our failure to enforce any right or provision of these Terms will not be considered a waiver of those rights. If any provision of these Terms is held to be invalid or unenforceable by a court, the remaining provisions of these Terms will remain in effect. These Terms constitute the entire agreement between us regarding our Service, and supersede and replace any prior agreements we might have between us regarding the Service.</p>


                <h2 id="changes">Changes</h2>

                <p>We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material we will try to provide at least 30 days notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion.</p>

                <p>By continuing to access or use our Service after those revisions become effective, you agree to be bound by the revised terms. If you do not agree to the new terms, please stop using the Service.</p>


                <h2 id="contact">Contact Us</h2>

                <p>If you have any questions about these Terms, please contact us.</p>

            </div>
        </div>
    </Layout>
);

export default TOS;