import Prices from '../components/Prices';
import Layout from '../components/Layout/Layout';
import Fetch from 'isomorphic-unfetch';

const Bitcoin = (props) =>(
<Layout>
    <div className="container">
        <p>Testing and running an app with Next.js and React.js</p>
        <p> Check current Bitcoin rate </p>
        <Prices bpi={props.bpi}/>
    </div>
</Layout>


);

Bitcoin.getInitialProps = async function(){ //returns 'bpi' object as a prop to 'Bitcoin' const
    const res = await fetch('https://api.coindesk.com/v1/bpi/currentprice.json'); //Using 'fetch' means returning a 'promise'
    const data = await res.json();

    return {
        bpi: data.bpi //data.'bpi' object just stores information and returns to the 'bpi: ' prop
    };
};

export default Bitcoin;