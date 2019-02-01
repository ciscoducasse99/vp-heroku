class Prices extends React.Component {
    state = {
        currency: 'USD' //sets USD as default
    }

    render() {

        let list = ''; //'list' is actually a <li> element

        if(this.state.currency === 'USD'){
            list = <li className="list-group-item">
            Bitcoin rate for {this.props.bpi.USD.description}:&nbsp;
            <span className=" badge badge-primary">{this.props.bpi.USD.code}</span>
            <strong> &nbsp;{this.props.bpi.USD.rate}</strong>
        </li>
        } else if (this.state.currency === 'GBP'){
            list = <li className="list-group-item">
            Bitcoin rate for {this.props.bpi.GBP.description}: &nbsp;
            <span className=" badge badge-primary">{this.props.bpi.GBP.code}</span>
            <strong> &nbsp;{this.props.bpi.GBP.rate}</strong>
        </li>
        } else if (this.state.currency === 'EUR'){
                list = <li className="list-group-item">
                Bitcoin rate for {this.props.bpi.EUR.description}: &nbsp;
                <span className=" badge badge-primary">{this.props.bpi.EUR.code}</span>
                <strong> &nbsp;{this.props.bpi.EUR.rate}</strong>
            </li>
        }

        return(
            <div>
                <ul className="list-group">
                    {list}
                </ul>
                <br />
                <select className="form-control bg-dark mb-5" onChange={e => this.setState({currency: e.target.value})}>
                    <option value="USD">USD</option>
                    <option value="GBP">GBP</option>
                    <option value="EUR">EUR</option>
                </select>
            </div>
            
        );
    }
}

export default Prices;