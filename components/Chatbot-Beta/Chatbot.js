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
    message: "Okay, {previousValue}! Do you know what my purpose is?",
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
    message: "I was developed to help get in touch people follow their passions and dreams.",
    trigger: 'productReveal3'
  },
  {
    id: 'productReveal3',
    message: "Whether it's playing video games, walking dogs, painting walls, doing make-up, making songs, making movies, cooking...Doesn't matter.",
    trigger: 'productReveal4'
  },
  {
    id: 'productReveal4',
    message: "We want to help.",
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
    trigger: 'zipCheck'
  },
  {
    id: 'zipCheck',
    user:true,
    validator: (value) =>{
      
      //variables containing user zip and an array of possible zips that should work with what we can work with
      const zipArray = ['01850','01851', '01852', '01853','01854'];
      let zipMatches = false;
      
      //checks what value is passed by the user and assigned to a variable
      console.log('user value is ' + value);
  


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

      return zipMatches;
    },
    trigger: 'occupation'
  },
  {
    id:'occupation',
    message:"Sounds good.",
    trigger:'occupation-2'
  },
  {
    id:'occupation-2',
    message:'Ok. If you had the oppurtunity to do whatever you want, would you know what to do?',
    trigger:'occupation-options'
  },
  {
    id:'occupation-options',
    options:[
      { value: 'no-occu', label:'Not really', trigger:'no-occu'},
      { value: 'yes-occu', label:'Yes', trigger:'yes-occu'}
    ]
  },
  {
    id:'no-occu',
    message:"Aww.... I can't really do much without you knowing.",
    trigger:'no-occu-2'
  },
  {
    id:'no-occu-2',
    message:"But if you ever think of something, you're more than welcome to come back and talk to me again.",
    trigger:'no-occu-3'
  },
  {
    id:'no-occu-3',
    message:"We also welcome you to speak to one of our people and just try figure yourself out ..... no strings attached.",
    trigger:'no-occu-4'
  },
  {
    id:'no-occu-4',
    message:"Interested?",
    trigger:'no-occu-options'
  },
  {
    id:'no-occu-options',
    options:[
      {value:'no-contact', label:"I'll pass", trigger:'noFunc'},
      {value:'yes-contact', label:'Sure, why not', trigger:'contact-asking'}
    ]
  },
  {
    id:'yes-occu',
    user:true,
    trigger:'contact-asking'
  },
  {
    id:'contact-asking',
    message:'Sounds good! I need a form of contact so I can get you connected to my people. What is the eastiest way of doing it for you?',
    trigger:'contact'
  },
  {
    id: 'contact',
    options: [
      { value: 'email', label: 'Email', trigger: 'email' },
      { value: 'phone', label: 'Phone', trigger: 'phone' }
    ]
  },
  { 
    id:'email',
    message:"Okay, email it is. What's the best email address to contact you?",
    trigger: "email-intake"
  },
  { 
    id:'phone',
    message:"Okay, phone it is. What's the best phone number to contact you?",
    trigger: "phone-intake"
  },
  {
    id:'email-intake',
    user:true,
    // trigger:'time-of-contact'
    trigger:'end-step'
  },
  {
    id:'phone-intake',
    user:true,
    // trigger:'time-of-contact'
    trigger:'end-step'
  },
  {
    id:'time-ask',
    message:'Noted. We eventually need to get in touch. Is there any specific time that works best with you?',
    trigger:'time-option'
  },
  {
    id:'time-option',
    options:[
      { value: 'no', label: 'No', trigger: 'end-step' },
      { value: 'yes', label: 'Yes', trigger: 'end-step' }
    ],
    //trigger:
  },
  {
    id:'time-of-contact',
    message:'Looking good. Want us to reach out at a specific time?',
    trigger:'toc-options'
  },
  {
    id:'toc-options',
    options:[
      {value:'any-time', label:'Any time is fine', trigger:'end-step'},
      {value:'specific-time', label:'Yes, please!', trigger:'end-step'}
    ]
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

// function phonenumber(inputtxt)
// {
//   var phoneno = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
//   if((inputtxt.value.match(phoneno))
//         {
//       return true;
//         }
//       else
//         {
//         alert("message");
//         return false;
//         }
// }