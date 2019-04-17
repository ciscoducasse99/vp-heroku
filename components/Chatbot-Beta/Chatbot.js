import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ChatBot from 'react-simple-chatbot';
import { ThemeProvider } from 'styled-components';
import "./Chatbot.scss";


class Review extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      zipCode:'',
      occupation:'TBD',
      contactInfo:'',
      email:'null',
      timeOfContact: '',
      socialMedia:'null',
      username:'null'
    };
  }

  componentWillMount() {
    const { steps } = this.props;
    const { name,  phone, contact, email, timeOfContact, socialMedia, username  } = steps;

    if(phone.value == null){
     phone.value == 'not needed';
      console.log('phone is undefinded');
    }
    if(email== null){
      this.setState({
        email: 'not needed'
      });
      console.log('email is undefinded');
    }
    if(timeOfContact == null){
      this.setState({
        timeOfContact: 'not-needed'
      });
    }
    if (socialMedia == null && username == null){
      this.setState({
        socialMedia: 'not-needed',
        username:'not-needed'
      });
    }
    
    this.setState({ name, contact, phone});
  }

  render() {
    const { name, contact, phone, email, timeOfContact, socialMedia, username  } = this.state;

    console.log(name.value);
    console.log(contact.value);
    console.log(phone.value);
    console.log(email.value);
    console.log(timeOfContact.value);
    console.log(socialMedia.value);
    console.log(username.value);

    return (
      <div style={{ width: '100%'}}>
        <h3>Summary</h3>
        <table>
          {/* <tbody>
            <tr>
              <td>Name:</td>
              <td>{name.value}</td>
            </tr> 
            <tr>
              <td>Contact by:</td>
              <td>{contact.value}</td>
            </tr>
            
            <tr>
              <td>Contact Method</td>
              <td>{phone.value}</td>
            </tr>
            <tr>
              <td>Contact Method</td>
              <td>{email.value}</td>
            </tr>
            <tr>
              <td>Contact Method</td>
              <td>{timeOfContact.value}</td>
            </tr>
            <tr>
              <td>Contact Method</td>
              <td>{socialMedia.value}</td>
            </tr>
            <tr>
              <td>Contact Method</td>
              <td>{username.value}</td>
            </tr> 
          </tbody> */}
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
    message: "Okay, {previousValue}! Do you know what my purpose is?",
    hideInput:true,
    trigger: 'viaActions',
  },
  {
    id: 'viaActions',
    hideInput:true,
    options: [
      { value: 'va1', label: 'Not a clue. Tell me more, please,', trigger: 'productReveal1' },
      { value: 'va2', label: "Yes! Let's get started.", trigger: 'yesFunc'},
    ],
  },
  {
    id: 'productReveal1',
    message: "Okay. Well...",
    hideInput:true,
    trigger: 'productReveal2'
  },
  {
    id: 'productReveal2',
    message: "I was developed to help get in touch people follow their passions and dreams.",
    hideInput:true,
    trigger: 'productReveal3'
  },
  {
    id: 'productReveal3',
    message: "Whether it's playing video games, walking dogs, painting walls, doing make-up, making songs, making movies, cooking...Doesn't matter.",
    hideInput:true,
    trigger: 'productReveal4'
  },
  {
    id: 'productReveal4',
    message: "We want to help.",
    hideInput:true,
    trigger: 'productReveal5'
  },
  {
    id: 'productReveal5',
    message: "The best way we can help people for now is to develop professional websites for those who want the help, 100% free. Interested?",
    hideInput:true,
    trigger: 'ask'
  },
  {
    id: 'ask',
    hideInput:true,
    options: [
      { value: 'yes', label: 'Yes!', trigger: 'yesFunc' },
      { value: 'no', label: 'No thanks', trigger: 'noFunc' },
    ],
  },
  {
    id: 'noFunc',
    message: "Well, okay. If you ever do want our help...for free, just come talk to me again.",
    hideInput:true,
  },
  {
    id: 'yesFunc',
    message: "Perfect! First off, what's your zip-code?",
    hideInput:true,
    trigger: 'zipCode'
  },
  {
    id: 'zipCode',
    user:true,
    validator: (value) =>{
      
      const zipArray = ['01850','01851', '01852', '01853','01854'];
      let zipMatches = false;
  
      for(let i=0; i<zipArray.length; i++){
        console.log('zip is checking at ' + zipArray[i]);

        if (isNaN(value)) {
          return 'Enter a zip-code number!';
        }

        if(zipArray[i] == value){
          console.log('it matches!')
          zipMatches=true;
          break;
        }
      }

      if (zipMatches==false){
        return 'We can only work in Lowell. Feel free to email us for more info!';
      } else{
        return zipMatches;
      }
    },
    trigger: 'occupation-dis'
  },
  {
    id:'occupation-dis',
    message:"Sounds good.",
    hideInput:true,
    trigger:'occupation-2'
  },
  {
    id:'occupation-2',
    message:'Ok. If you had the oppurtunity to do whatever you want, would you know what to do?',
    hideInput:true,
    trigger:'occupation-options'
  },
  {
    id:'occupation-options',
    hideInput:true,
    options:[
      { value: 'no-occu', label:'Not really', trigger:'no-occu'},
      { value: 'yes-occu', label:'Yes', trigger:'yes-occu'}
    ]
  },
  {
    id:'no-occu',
    message:"Aww.... I can't really do much without you knowing.",
    hideInput:true,
    trigger:'no-occu-2'
  },
  {
    id:'no-occu-2',
    message:"But if you ever think of something, you're more than welcome to come back and talk to me again.",
    hideInput:true,
    trigger:'no-occu-3'
  },
  {
    id:'no-occu-3',
    message:"We also welcome you to speak to one of our people and just try figure yourself out ..... no strings attached.",
    hideInput:true,
    trigger:'no-occu-4'
  },
  {
    id:'no-occu-4',
    message:"Interested?",
    hideInput:true,
    trigger:'no-occu-options'
  },
  {
    id:'no-occu-options',
    hideInput:true,
    options:[
      {value:'no-contact', label:"I'll pass", trigger:'noFunc'},
      {value:'yes-contact', label:'Sure, why not', trigger:'contact-asking'}
    ]
  },
  {
    id:'yes-occu',
    message:"And that would be?",
    trigger:'occupation'
  },
  {
    id:'occupation',
    user:true,
    trigger:'contact-asking'
  },
  {
    id:'contact-asking',
    message:'We can figure that out! I need a form of contact so I can get you connected to my people. What is the eastiest way of doing it for you?',
    hideInput:true,
    trigger:'contact'
  },
  {
    id: 'contact',
    hideInput:true,
    options: [
      { value: 'email', label: 'Email', trigger: 'email-validator' },
      { value: 'phone', label: 'Phone', trigger: 'phone-validator' }
    ]
  },
  { 
    id:'email-validator',
    message:"Okay, email it is. What's the best email address to contact you?",
    hideInput:true,
    trigger: "email"
  },
  { 
    id:'phone-validator',
    message:"Okay, phone it is. What's the best phone number to contact you?",
    hideInput:true,
    trigger: "phone"
  },
  {
    id:'email',
    user:true,
    validator: (value) =>{

      const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

      if(value==undefined){
        value == 'not needed';
      }

      if (regex.test(value)){
        return true;
      } else {
        return 'Invalid phone number. Please try again.';
      }
    },
    trigger:'time-ask'
  },
  {
    id:'phone',
    user:true,
    validator:(value)=>{
      const regex = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;

      if(value==undefined){
        value == 'not need';
      }

      if (regex.test(value)){
        return true;
      } else {
        return 'Invalid phone number. Please try again.';
      }
      if(value==undefined){
        value == 'not need';
      }
    },
    trigger:'time-ask'
  },




  {
    id:'time-ask',
    message:'Noted. We eventually need to get in touch. Is there any specific time that works best with you?',
    hideInput:true,
    trigger:'time-option'
  },
  {
    id:'time-option',
    hideInput:true,
    options:[
      { value: 'no', label: 'Nope, anytime is fine.', trigger: 'no-time' },
      { value: 'yes', label: 'Yes!', trigger: 'yes-time' }
    ],
  },
  {
    id:'no-time',
    message:"That's fine. You should hear from us soon!",
    trigger:'social-media-1'
  },
  {
    id:'yes-time',
    message:"That's fine. When's the best time to reach out?",
    trigger:'timeOfContact'
  },
  {
    id:'timeOfContact',
    user:true,
    trigger:'no-time'
  },
  {
    id:'social-media-1',
    message:"We're almost done here.",
    trigger:'social-media-2'
  },
  {
    id:'social-media-2',
    message:'We also give you the option of providing us with one of your social media pages.',
    trigger:'social-media-3'
  },
  {
    id:'social-media-3',
    message:'This just gives us a better idea of what style design might fit best for you. Would that interest you?',
    trigger:'social-media-options'
  },
  {
    id:'social-media-options',
    options:[
      {value:'sm-no', label:'No thanks.', trigger:'review'},
      {value:'sm-yes', label:'Sure', trigger:'social-media-asking'}
    ]
  },
  {
    id:'social-media-asking',
    message:'Ok, which outlet is preferred?',
    trigger:'socialMedia'
  },
  {
    id:'socialMedia',
    options:[
      {value:'facebook',label:'Facebook',trigger:'outlet-asking'},
      {value:'instagram',label:'Instagram',trigger:'outlet-asking'},
      {value:'twitter',label:'Twitter',trigger:'outlet-asking'},
      {value:'linkedin',label:'Linkedin',trigger:'outlet-asking'},
      {value:'pinterest',label:'Pinterest',trigger:'outlet-asking'},
    ]
  },
  {
    id:'outlet-asking',
    message:"What's your username on {previousValue}?",
    trigger:'username'
  },
  {
    id:'username',
    user:true,
    trigger:'username-confirmed'
  },
  {
    id:'username-confirmed',
    message:"We'll look into that!",
    trigger:'review'
  },
  {
    id:'review',
    component:<Review/>,
    trigger:'send-component',
    asMessage:true
  },
  {
    id:'send-component',
    message:'sending....',
    trigger:'end-step'
  },
  {
    id:'end-step',
    message:'The end is near.',
    end:true

  }
];

//all available props
const theme = {
  background: '#1a1a1a',
  fontFamily: 'Poppins',
  headerBgColor: '#090909',
  headerFontColor: 'whitesmoke',
  headerFontSize: '20px',
  botBubbleColor: 'black',
  botFontColor: 'white',
  userBubbleColor: '#0086c5',
  userFontColor: 'white',
};

const ViaBeta = () => (
  <div id="Vee">
    <div id="chatbot-content">
      <div className="container">

        <ThemeProvider theme={theme}>
          <ChatBot
            headerTitle='Chatbot'
            hideUserAvatar='true'
            hideBotAvatar='true'
            width='650px'
	          steps={steps}

            bubbleOptionStyle={{
              background:'#090909',
              color:'white'
            }}
            
            floatingStyle={{
            //Something should be here where the chatbot should be aligned in the center on all viewports
                      }}
            // floatingIcon={
            // //Something else is suppose to go here, I’m not sure what. Something that finds the id of the button being used?
            // }

            //style affects the actual chatbot
            style={{ 
              margin: '0',
              position:'absolute',
              top: '50%',
              left:  '50%',
              transform: 'translate(-50%, -50%)'
            }} 
          />
        </ThemeProvider>

      </div>
    </div>
  </div>
);

export default ViaBeta;

// const button = (
//   <div>
//     <h1>Hello, world!</h1>
//     <h2>It is {new Date().toLocaleTimeString()}.</h2>
//   </div>
// );
// ReactDOM.render(
//   button,
//   document.getElementById('chatbot-button')
// );

//This might make an front end ui button open the chatbot

