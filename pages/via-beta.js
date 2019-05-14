import Layout from '../components/Layout/Layout';
import ViaBeta from '../components/Chatbot-Beta/Chatbot';

const ViaBetaExport = () =>(
    <Layout>
        <ViaBeta/>

        <div id="via-beta">
            <div className="text-center">
                <h1 className="display-md-3 display-4">Do anything.</h1>


                <p className="col-10 col-md-5 mx-auto">By clicking "Meet Via", you're agreeing to respect and honor our <a href="">privacy policy</a> and our <a href="">Terms and conditions</a>. We don't dispuse your data to anyone else. Pls trust me, daddy</p>
                <a className="rsc-float-button btn btn-primary btn-round">Chatbot</a>
            </div>
        </div>

        <style jsx>{`
            #via-beta{
                min-height:90vh;
            }

            #via-beta h1{
                color:white;
            }
        `}</style>

    </Layout>
);

export default ViaBetaExport;