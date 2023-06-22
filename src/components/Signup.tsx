import React from 'react'

import { AiOutlineEye } from 'react-icons/ai'
import { IoIosArrowDown } from 'react-icons/io'
import { RiEyeCloseLine } from 'react-icons/ri'
import { FcGoogle } from 'react-icons/fc'
import { AiFillLinkedin } from 'react-icons/ai'

const Signup = () => {
  return (
    <div className='container'>
        {/*Left side */}
        <section className='left-side'>
           <div className='text1'>
            <h1 >CHATTER</h1>
            <p className='para1'>Unleash the Power of Words, Connect with Like-minded Readers and Writers</p>
           </div>

        </section>
        {/*Right side*/}
        <section className='right-side'>
            <div className='header'>
                <span className='register'>REGISTER
                </span>
    
                <span className='login'>LOG IN</span>

            </div>
            <div className='horizontal-line'>
                <hr className='line-register'/>
                <hr className='line-login'/>
            </div>
            <p className='para2-signup'>Register as a Write/ Reader</p>

            <form>
                <div className='input-container'>
                    <div style={{ display: 'flex', position: 'relative' }}>
                    <label className='label' style={{
                    position: 'absolute',
                    top: -40,
                    left: 0,
                    marginBottom: '5px',
                    }}>
                        First Name
                    </label>
                    <input className='input' type='text' placeholder='John' style={{ marginRight: '10px' }}/>

                    <label className='label' style={{
                    position: 'absolute',
                    top: -40,
                    left: 250,
                    marginBottom: '5px',
                    }}>
                        Last Name
                    </label>
                    <input className='input' type='text' placeholder='Doe'/>
                    </div>

                    <p className='para-signup'>You are joining as?</p>

                    <div className='writer'>
                    <input type='text' id='writer' name='writer' value='writer'/>
                    <IoIosArrowDown className='arrow-icon'/>
                    </div>

                    <label className='label'>
                    Email address
                    </label>
                    <input className='input' type='email' placeholder='example@gmail.com'/>
                    <div className='password-con'> 

                    <label className='label'>
                    Password
                    </label>
                    <div className='password-input'>
                    <input className='input' type='password' placeholder='*********'/>
                    < AiOutlineEye className='eye-icon'/>
                    </div>
                    </div>
                    <div className='confirm-password'>
                    <label className='label'>
                    Confirm Password
                    </label>
                    <div className='password-input'>
                    <input className='input' type='password' placeholder='*********'/>

                    <RiEyeCloseLine className='eye-icon'/>
                    </div>
                    
                    <button type='submit' className='btn'>Create account</button>

                    <div className='google-signup'>
                        <FcGoogle className='google-icon'/>
                        <input type='submit' value='Sign up with google' className='google-btn'/>
                    
                    </div>

                    <div className='linkin-signup'>
                        <AiFillLinkedin className="linkin-icon"/>
                        <input type='submit' value='Sign up with Linkedin' className='google-btn'/>
                    
                    </div>
                    
                </div>
                </div>

            </form>
            
        </section>
    </div>
  )
}

export default Signup;