import Layout from '../components/Layout/Layout';
import ViaBeta from '../components/Chatbot-Beta/Chatbot';
import Sphere from '../components/Sphere/index';
const ViaBetaExport = () =>(
    <Layout>
        <ViaBeta/>

        <style jsx>{`
            position: absolute;
        `}</style>
    </Layout>
);

export default ViaBetaExport;