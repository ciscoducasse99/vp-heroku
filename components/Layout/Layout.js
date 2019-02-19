import Head from 'next/head';
import Navbar from '../Navbar/index';
import Footer from '../Footer/index';
import "./layout.scss";

const LAYOUT = (props) =>(
    <div>
        <Head>
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossOrigin="anonymous"/>
            <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"/>
            <link href="https://fonts.googleapis.com/css?family=Poppins" rel="stylesheet"/>
            <link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet"/>
            <link rel="shortcut icon" href="static/images/favicon.ico"/>
            <link rel="manifest" href="manifest.json"/>
            <meta name="mobile-web-app-capable" content="yes"/>
            <meta name="apple-mobile-web-app-capable" content="yes"/>
            <meta name="application-name" content="Vision"/>
            <meta name="apple-mobile-web-app-title" content="Vision"/>
            <meta name="theme-color" content="#000000"/>
            <meta name="msapplication-navbutton-color" content="#000000"/>
            <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent"/>
            <meta name="msapplication-starturl" content="/"/>
            <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>

            <link rel="icon" type="image/ico" href="static/images/favicon.ico"/>
            <link rel="apple-touch-icon" type="image/ico" href="static/images/favicon.ico"/>
        </Head>
        <Navbar/>
        <div >
            {props.children}
        </div>
        <Footer/>
   

<script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" 
integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" 
crossOrigin="anonymous"></script>

<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.0/umd/popper.min.js" 
integrity="sha384-cs/chFZiN24E4KMATLdqdvsezGxaGsi4hLGOzlXwp5UZB1LY//20VyM2taTB4QvJ" 
crossOrigin="anonymous"></script>

<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.0/js/bootstrap.min.js" 
integrity="sha384-uefMccjFJAIv6A+rW+L4AHf99KvxDjWSu1z9VI8SKNVmz4sk7buKt/6v9KI65qnm" 
crossOrigin="anonymous"></script>

</div>
);

export default LAYOUT;