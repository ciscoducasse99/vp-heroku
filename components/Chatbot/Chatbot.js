import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ChatBot from 'react-simple-chatbot';
import { ThemeProvider } from 'styled-components';
import "./Chatbot.scss";

class zipReview extends Component{
  constructor(props){
    super(props);

    this.state ={
      zip:'',
    }
  }
  
  componentWillMount(){
    const {steps} = this.props;
    const {zipAsk} = steps;
    console.log(zipAsk);

    this.setState({zipAsk});
  }

  render(){
    const {zipAsk} = this.state;
    const zipArray = ['01850','01851', '01852', '01853','01854'];
    let result='';

    for(i=0; i<zipArray.length; i++){
      if(i===zip){
        result = <div>That works!</div>
      } else {
        result= <div>We can't work with anyone outside of Lowell yet. You may contact us directly to discuss your situation.</div>
      }
    }

    return(
      <div style={{width:'100%'}}>
        <p>{result.value}</p>
      </div>
    )
  }

}

class Review extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      contact: '',
      reach_out: '',
    };
  }

  componentWillMount() {
    const { steps } = this.props;
    const { name, email, reach_out } = steps;

    this.setState({ name, email, phone });
    //find a way to make default values null before they get filled and set to api


    console.log(this.steps.value);
  }

  render() {
    const { name, contact, reach_out } = this.state;
    console.log('State after first console.log' + this.state.value);

    return (
      <div style={{ width: '100%' }}>
        <h3>Summary</h3>
        <table>
          <tbody>
            <tr>
              <td>Name</td>
              <td>{name.value}</td>
            </tr>
            <tr>
              <td>Contact Method</td>
              <td>{contact.value}</td>
            </tr>
            <tr>
                <td>Reach out @</td>
                <td>{reach_out.value}</td>
              </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

Review.propTypes = {
  steps: PropTypes.object,
};

Review.defaultProps = {
  steps: undefined,
};

const steps = [
  {
    id: '1',
    hideInput: true,
    message: 'Hi!',
    trigger: '2',
  },
  {
    id: '2',
    hideInput: true,
    message: "I'm Via!",
    trigger: '3',
  },
  {
    id: '3',
    hideInput: true,
    message: 'What can I call you for now?',
    trigger: 'name',
  },
  {
    id: 'name',
    user: true,
    trigger: '4',
  },
  {
    id: '4',
    message: "Okay, {previousValue}! Do you know why I'm here?",
    trigger: 'veeActions',
  },
  {
    id: 'veeActions',
    options: [
      { value: 'va1', label: 'Not a clue. Tell me more, please,', trigger: 'productReveal1' },
      { value: 'va2', label: "Yes! Let's get started.", trigger: 'yesFunc'},
    ],
  },
  {
    id: 'productReveal1',
    message: "Okay. Well...",
    trigger: 'productReveal2'
  },
  {
    id: 'productReveal2',
    message: "I was created to help people follow their passions and dreams.",
    trigger: 'productReveal3'
  },
  {
    id: 'productReveal3',
    message: "Whether it's playing video games, walking dogs, painting walls, doing make-up, making songs, making movies, cooking...Doesn't matter.",
    trigger: 'productReveal4'
  },
  {
    id: 'productReveal4',
    message: "I want to help.",
    trigger: 'productReveal5'
  },
  {
    id: 'productReveal5',
    message: "The best way we can help people for now is to develop professional websites for those who want the help, 100% free. Interested?",
    trigger: 'ask'
  },
  {
    id: 'ask',
    options: [
      { value: 'yes', label: 'Yes!', trigger: 'yesFunc' },
      { value: 'no', label: 'No thanks', trigger: 'noFunc' },
    ],
  },
  {
    id: 'noFunc',
    message: "Well, okay. If you ever do want our help...for free, just come talk to me again.",
  },
  {
    id: 'yesFunc',
    message: "Perfect! First off, what's your zip-code?",
    trigger: 'zipAsk'
  },
  {
    id: 'zipAsk',
    user: true,
    trigger: 'zipCheck'
  },
  {
    id: 'zipCheck',
    // component:<zipCheck/>,
    validator: (value) =>{
      
      const zipArray = ['01850','01851', '01852', '01853','01854'];
      let userValue = value;
  
      for( let i=0; i<zipArray.length; i++){
        if(i===value){
          return true;
        } else {
          return 'We can only work with zip codes in Lowell!'
          //try to use an asMessage:true somewhere.
        }
      }
      
      return result;
    },
    user: true,
    trigger: 'serviceAsk'
  },
  {
    id: 'serviceAsk',
    user: true,
    trigger: 'serAccepted'
  },
  {
    id: 'serAccepted',
    message: "Hmm, okay. What's the best way to get in touch with you?",
    trigger: 'contact'
  },
  {
    id: 'contact',
    options: [
      { value: 'email', label: 'email', trigger: 'emailcomp' },
      { value: 'phone', label: 'phone', trigger: 'phonecomp' },
      { value: 'socialmedia', label: 'Social Media', trigger: 'end-message' },
    ],
  },
  {
    id: 'emailcomp',
    message: 'Okay, through {previousValue}',
    trigger: 'email'
  },
  {
    id: 'phonecomp',
    message: 'Sure. What is your phone number?',
    trigger: 'phone',
  },
  {
    id: 'email',
    user: true,
    trigger: 'time',
  },
  {
    id: 'phone',
    user: true,
    trigger: 'time',
  },
  {
    id: 'time',
    message: "Ok. At what time is the best time to reach?",
    trigger: 'timeAsk'
  },
  {
    id: 'timeAsk',
    user: true,
    trigger: 'review'
  },
  {
    id: '7',
    message: 'Great! Check out your summary',
    trigger: 'review',
  },
  {
    id: 'review',
    component: <Review />,
    asMessage: true,
    trigger: 'update',
  },
  {
    id: 'update',
    message: 'Would you like to update some field?',
    trigger: 'update-question',
  },
  {
    id: 'update-question',
    options: [
      { value: 'yes', label: 'Yes', trigger: 'update-yes' },
      { value: 'no', label: 'No', trigger: 'end-message' },
    ],
  },
  {
    id: 'update-yes',
    message: 'What field would you like to update?',
    trigger: 'update-fields',
  },
  {
    id: 'update-fields',
    options: [
      { value: 'name', label: 'Name', trigger: 'update-name' },
      { value: 'gender', label: 'Gender', trigger: 'update-gender' },
      { value: 'age', label: 'Age', trigger: 'update-age' },
    ],
  },
  {
    id: 'update-name',
    update: 'name',
    trigger: '7',
  },
  {
    id: 'update-gender',
    update: 'gender',
    trigger: '7',
  },
  {
    id: 'update-age',
    update: 'age',
    trigger: '7',
  },
  // {
  //   id: 'send-data',
  //   component:<SendData/>,
  //   trigger:'end-message'
  // },
  {
    id: 'end-message',
    message: 'Thanks! Your data was submitted successfully!',
    end: true,
  }
];

//all available props
const theme = {
  background: '#1a1a1a',
  fontFamily: 'Poppins',
  headerBgColor: '#040404',
  headerFontColor: 'whitesmoke',
  headerFontSize: '20px',
  botBubbleColor: 'black',
  botFontColor: 'white',
  userBubbleColor: '#0086c5',
  userFontColor: 'white',
};

const SimpleForm = () => (
  <div id="Vee">
    <div id="chatbot-content">
      <div className="container">
        <ThemeProvider theme={theme}>
          <ChatBot
            headerTitle='Via'
            enableMobileAutoFocus='true'
            
            hideUserAvatar='true'
            hideBotAvatar='true'
            width='650px'
            steps={steps}
            bubbleStyle={{

            }}
            bubbleOptionStyle={{
              background:'#090909',
              color:'white'
            }}
            floatingStyle={{
              left: 'calc(50% - 28px)',
              right: 'initial',
              transformOrigin: 'bottom center',
              borderRadius: 15,
            }}
            style={{
              left: 'calc(50% - 320px)'
            }} 
          />
        </ThemeProvider>
      </div>
    </div>
  </div>
);

export default SimpleForm;