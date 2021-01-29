import React from 'react'
import FormInput from '../form-input/form-input.component'
import CustomButton from '../Custom-button/custom-button.component'
import './signin.styles.scss';
import { signInWithGoogle } from '../../firebase/firebase.utils'

class SignIn extends React.Component{
    constructor(){
        super();

        this.state={ 
            email:'',
            password:''
        }
    }

    handleSubmit = event => {
        event.preventDefault();
        this.setState({email:'',password :''})
    }

    handleChange = event => {
        const {name, value} = event.target;
        this.setState(() =>( {[name]:value}))
        
    }

    render(){
        return (
            <div className='sign-in'>
                    <h2>I already have an account</h2>
                    <span>Sign In with your email Account</span>
            
            <form onSubmit={this.handleSubmit}>
                <FormInput 
                    type="email" 
                    name="email" 
                    label='Email'
                    value={this.state.email} 
                    handleChange={this.handleChange}/>
                <FormInput 
                    type='password' 
                    name ='password'
                    label='Password' 
                    value={this.state.password} 
                    handleChange={this.handleChange}/>
                    <div className='buttons'>
                    <CustomButton type='submit'>Sign In</CustomButton>
                    <CustomButton isGoogleSignIn onClick={ signInWithGoogle }>Sign In With Google</CustomButton>
                    </div>
             
            </form>
            </div>
        );
    }
}

export default SignIn;