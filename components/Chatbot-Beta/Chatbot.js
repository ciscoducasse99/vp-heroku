import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ChatBot from 'react-simple-chatbot';
import { ThemeProvider } from 'styled-components';

class MessageValidator extends Component {
  constructor(props){
    super(props);

    this.state = {
      message:''
    }

  }

  componentWillMount() {
    const { previousStep, triggerNextStep } = this.props;
    const trigger = 'user-validator';

    //Sets state for whatever the previousStep.value is
    if(previousStep.value==='email'){
      this.setState({message:'email'});
    }else{
      this.setState({message:'phone'});
    }
    
    triggerNextStep({ value: this.state.message, trigger });
  }

  render() {
    if(this.state.message === 'email'){
      return 'Ok, email it is. What\'s the best email address to contact you?';
    } else {
      return 'Ok, phone it is. What\'s the best phone number to contact you?';
    }
  }
}


class UserValidator extends Component {
  
  //Component description:

  //A) Component should read multiple things.
    //1. Whether email or phone option was chosen
    //2. Previous value of user input
  //B) Compare whether email or phone was chosen. Depending on which value is true, run specific regEx to determine if user input is valid
  //c) Based on completion of validation thru RegEx options, return a message to the user depending on user value
  //D) trigger either next step, back to user input if invalid or blank

  // **NOTES** //
  //-Use state for option value
  //-user all logic under the render function
  //-values should ne determined before chatbot reply, meaning trigger should already be set before reply.

  constructor(props){
    super(props);

    this.state = {
      passTrigger:false
    };

    this.runEmailTester=this.runEmailTester.bind(this);
    this.runPhoneTester=this.runPhoneTester.bind(this);
  }

  componentWillMount(){
    const {previousStep} = this.props;
    const userOption = this.props.steps.contact.value;
    let pass = false;

    console.log(userOption);
    console.log(previousStep.value);
    console.log('value of pass before checking userOption:' +pass);


    if(userOption === 'email'){
      pass == this.runEmailTester(previousStep.value);
    } else {
      pass == this.runPhoneTester(previousStep.value);
    }

    console.log('value of pass after checking userOption:' +pass);


    if(!pass){
      this.setState({
        passTrigger: true
      });
    }

    // // Goes to the next step
    // this.props.triggerNextStep({ value: metadata.triggerNext, trigger });
  
  }

  runEmailTester= (value) => {
    const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    
    console.log('runEmailTester() is being tested with the value of '+ value);

    if(value !== ''){
      if(emailRegex.test(value)){
        return true;
      }
    } else {
      return false;
    }

  }

  runPhoneTester = (value) => {
    const phoneRegex = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;

    console.log('runPhoneTester() is being tested with the value of ' + value);

    if(value !== ''){
      if(phoneRegex.test(value)){
        return true;
      }} else {
        return false;
      }

    }
  

  render() {

    return null;
  }
}

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
    const { name,  contact, phone, email, timeOfContact, socialMedia, username  } = steps;

    if(phone == undefined){
     phone == {};
    }
    if(email == undefined){
      email == {};
    }
    if(timeOfContact == null){
      timeOfContact == {};
    }
    if (socialMedia == null && username == null){
      socialMedia == {};
      username == {};
    }

    console.log('Checked values.');
    
    
    this.setState({ name, contact, phone, email, timeOfContact, socialMedia, username});
  }

  render() {
    const { name, contact, phone, email, timeOfContact, socialMedia, username  } = this.state;

    console.log(name);
    console.log(contact);
    console.log(phone);
    console.log(email);
    console.log(timeOfContact);
    console.log(socialMedia);
    console.log(username);

    let returnString = '';
    let nameString = this.state.name.value;
    let contactString = this.state.contact.value;
    let contactTypeString = (contactString)? 'phone': 'email';
    let tocString = 'not needed';
    let smString = 'not needed';
    let usernameString = 'not needed';

    if (this.state.phone !== undefined){
      contactTypeString == phone.value; 
    } else if (this.state.email !== undefined){
      contactTypeString == email.value;
    }
    returnString = nameString + contactString + contactTypeString + tocString + smString + usernameString;
      

    return (
      <div style={{ width: '100%'}}>
        <h3>Summary</h3>
        {/*<table>
           <tbody>
            <tr>
              <td>Name:</td>
              <td>{name.value}</td>
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
          </tbody> 
        </table> */}
        {returnString}
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

// class LinkHandler extends Component {
//   componentWillMount() {
//     const { steps, triggerNextStep } = this.props;

//     const link = steps.option.value;
//     this.props.handleLink(link);
//     document.querySelector('.tutorial .rsc-header a').click();
//     document.querySelector(`.sub-links a[data-href="${link}"]`).click();
//     document.body.scrollTop = 0;

//     setTimeout(() => {
//       triggerNextStep();
//     }, 500);
//   }

//   render() {
//     return <span />;
//   }
// }

// LinkHandler.propTypes = {
//   steps: PropTypes.object,
//   triggerNextStep: PropTypes.func,
//   handleLink: PropTypes.func.isRequired,
// };

// LinkHandler.defaultProps = {
//   steps: undefined,
//   triggerNextStep: undefined,
// };

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

        if (isNaN(value)) {
          return 'Enter a zip-code number!';
        }

        if(zipArray[i] == value){
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
      { value: 'email', label: 'Email', trigger: 'get-contact-message' },
      { value: 'phone', label: 'Phone', trigger: 'get-contact-message' }
    ],
    metadata:{
      triggerNext:'user-validatior'
    }
  },
  {
    id:'get-contact-message',
    asMessage: true,
    component: <MessageValidator />,
    delay: 13,
    waitAction: true
  },
  {
    id:'user-validator',
    user:true,
    trigger:'user_validation',
  },
  {
    id:'user_validation',
    component:<UserValidator/>,
    asMessage:true,
    waitAction:true
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
const theme = {
  background: '#f2f2f2',
  fontFamily: 'Poppins',
  headerBgColor: '#090909',
  headerFontColor: 'whitesmoke',
  headerFontSize: '20px',
  botBubbleColor: '#002f6f',
  botFontColor: 'white',
  userBubbleColor: '#0086c5',
  userFontColor: 'white',
};
class ViaBeta extends Component {
  constructor(props) {
    super(props);

    this.state = {
      opened: false,
    };

    //this.handleClick = this.handleClick.bind(this);
  }
  
  render() {
    // const { loading } = this.state;
    // const mobile = window.innerWidth < 578;
    // const triggerMobile = mobile ? 'mobile-step' : 'result';

    // if (loading) {
    //   return <span />;
    // }

    return (
      <ThemeProvider theme={theme}>
      <ChatBot
        className="via-cb"
        headerTitle='Chatbot'
        hideUserAvatar='true'
        hideBotAvatar='true'
        width='650px'

        bubbleStyle={{
          background:'white',
          color:'#121212'
        }}
        bubbleOptionStyle={{
          background:'white',
          color:'#121212',
          borderColor:'red'
        }}
        customStyle={{ display: 'none' }}
        floating={true}
        handleEnd={this.handleEnd}
        steps={steps}
      />
      </ThemeProvider>
    );
  }
}

// ViaBeta.propTypes = {
//   handleLink: PropTypes.func.isRequired,
// };

export default ViaBeta;