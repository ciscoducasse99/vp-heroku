import './Form.scss';

const GiForm = () => (


    <div id="GiForm">
        <div className="mx-auto my-5">
            <form role="form">
                <div className="card shadow-lg vp-rounded ">
                    <h4 className="text-center py-4">Show us what you got</h4>
                    <div className="form-group">
                        <div className="container py-2">
                            <input type="name" className="form-control shadow-sm" id="name" placeholder="What's you name?" />
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="container py-2">
                            <select className="form-control shadow-sm">
                            {/*Edit dropdown to look like Googles lol*/}
                                <option value="default" defaultValue disabled hidden>Media Platform Used To Showcase</option>
                                <option value="Twitter">Twitter</option>
                                <option value="Instagram">Instagram</option>
                                <option value="Facebook">Facebook</option>
                            </select>
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="container py-2">
                            <input type="name" className="form-control shadow-sm" id="name" placeholder="What's your ____ handle"/>
                        </div>
                    </div>
                    <div className="form-group mb-0">
                        <div className="form-group">
                            <div className="container py-2">
                                {/* <Textarea placeholder="What do you do?"/> */}
                                <textarea name="Gi_ta" id="Gi_ta" cols="20" rows="5" className="form-control shadow-sm" placeholder="How do you think you can help?"></textarea>
                            </div>
                        </div>
                    </div>
                    <button type="submit" className="btn btn-custom my-4 mx-auto vp-rounded">Send</button>
                </div>
            </form>
        </div>
    </div>
);

export default GiForm;