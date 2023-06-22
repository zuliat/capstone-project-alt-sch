import React from 'react'
import { AiOutlineEye } from 'react-icons/ai'



const Login = () => {
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
            <p className='para2'>Welcome back</p>

            <form>
                <div className='input-container'>
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
                    <button type='submit' className='btn'>Log in</button>
                </div>

            </form>
            
        </section>
    </div>
  )
}

export default Login;