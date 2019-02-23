import Link from 'next/link';
import './footer.scss';


const Footer = () => (

    <footer className="footer-long pt-2">
        <div className="container-fluid">
            <div className="row">
                <div className="col-2 text-center mx-auto">
                    <a href="https://www.instagram.com/kingducasse/" className="btn btn-xs-pad btn-white-noborder" target="_blank" title="@kingducasse on Instagram"
                        data-hover="#125688">
                        <i className="fa fa-instagram fa-lg" aria-hidden="true"></i>
                    </a>
                </div>
                <div className="col-2 text-center mx-auto">
                    <a href="http://facebook.com/francisco.ducasse1" className="btn btn-xs-pad btn-white-noborder" target="_blank" title="Cisco on Facebook">
                        <i className="fa fa-facebook fa-lg" ></i>
                    </a>
                </div>
                <div className="col-2 text-center mx-auto">
                    <a href="http://twitter.com/kingducasse" className="btn btn-xs-pad btn-white-noborder" target="_blank" title="Follow @kingducasse"
                        data-hover="#25a8e0">
                        <i className="fa fa-twitter fa-lg" aria-hidden="true"></i>
                    </a>
                </div>
                <div className="col-2 text-center mx-auto">
                    <a href="http://snapchat.com/add/cisco_dc5" className="btn btn-xs-pad btn-white-noborder" target="_blank" title="cisco_dc5 on Snapchat"
                        data-hover="#fffc00">
                        <i className="fa fa-snapchat-ghost fa-lg" aria-hidden="true"></i>
                    </a>
                </div>
                <div className="col-2 text-center mx-auto">
                    <a data-toggle="modal" data-target="#myModal" className="btn btn-xs-pad btn-white-noborder">
                        <i className="fa fa-envelope-o fa-lg" aria-hidden="true"></i>
                    </a>
                </div>
            </div>
        </div>

            <div className="container mt-2">
                <div className="text-center scrollmenu">
                    <Link href="/faq"><a>FAQ</a></Link>
                    <Link href="/websites"><a>Websites</a></Link>
                    <Link href="/privacy"><a>Privacy Policy</a></Link>
                    <Link href="/tos"><a>Term and Conditions</a></Link>
                    <Link href="/via-beta"><a>Via Beta</a></Link>
                </div>
                <div >
                    <div className="row mt-2 ml-c">
                        <p className="mr-auto">Made with <span>&hearts;</span> by <a href="https://www.instagram.com/kingducasse/" target="_blank">Cisco</a></p>

                        <style jsx>{`
                            p{
                                font-size:12px;
                            }
                            span{
                                color:#0076ff;
                            }
                            a:hover{
                                text-decoration:none;
                            }
                            .ml-c{
                                margin-left:.05rem !important;
                            }
                        `}</style>

                    </div>
                </div>
            </div>

  <div className="modal fade" id="myModal">
    <div className="modal-dialog modal-dialog-centered">
      <div className="modal-content">
      
        <div className="modal-header">
          <h4 className="modal-title">Modal Heading</h4>
          <button type="button" className="close" data-dismiss="modal">×</button>
        </div>
        
        <div className="modal-body">
          Modal body..
        </div>
        
        <div className="modal-footer">
          <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
        </div>
        
      </div>
    </div>
  </div>

    </footer>
);

export default Footer;

