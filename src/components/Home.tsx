import React from 'react'


const Home = () => {
  return (
    <div>
      <header className='header'>
        <h2 >CHATTER</h2>
        <nav>
          <a href='#'>Home</a>
          <a href='#'>About us</a>
          <a href='#'>Contact </a>
          <a href='#'>Blogs</a>   
        </nav>
        <div className='header-btn'>
        <button className='btn1-header'>Log in</button>
        <button className='btn2-header' >Sign up</button>
        </div> 
      </header>
      <main>
        <section className='hero'>
          <h3>Welcome to chatter: A Heaven for Test-based Content</h3>
         <h6>Unleash the Power of Words, Connect with Like-minded Readers and Writers</h6>
         <button className='hero-btn'>Get Started</button>
        </section>
        <section className='about-container'>
          <div>
          <h4>About Chatter</h4>
          <p>Chatter is a platform for readers and writers to connect and share their ideas and thoughts. It is a platform for readers to read and share their thoughts on the content they read. It is a platform for writers to write and share their thoughts on the content they write. It is a platform for readers to read and share their thoughts on the content they read. It is a platform for writers to write and share their thoughts on the content they write.</p>
          </div>
          <img src="../images/photo2.png" alt="photo"/>

        </section>

        <section className='features-container'>
          <h4>Why you Should join chatter</h4>
          <p>Our goal is to make writers and readers see our platform as their next heaven for blogging, ensuring ease in interractions, connecting with like-minded peers, have access to favorite content based on interests and able to communitcate your great ideas with people</p>
          <div className='features'>
            <img src="../images/frame28.png" alt="frame"/>
        </div>
        
        </section>
        <section className='sub-feature'>
        <img src="../images/photo3.png" alt="frame" className='photo3'/>
        <p className='content'>
          "Chatter has become an integral part of my online experience. As a user of this incredible blogging platform, I have discovered a vibrant community of individuals who are passionate about sharing their ideas and engaging  in thoughtfull discussions."
          <div className='sub-content'><b>Adebobola Muhydeen</b>, software developer at Apple 
          <div>
            <button type='submit' className='btn-join'>Join Chatter</button>
        </div>
          
          </div>
        </p>
        </section>
        <section className='sub-content2'>
        <img src="../images/frame 39.png" alt="frame"/>
        <img src="../images/frame 24.png" alt="frame"/>
        </section>
        
      </main>
      <footer className='footer'>
      <img src="../images/footer.png" alt="footer"/>
        
        

      </footer>
    </div>
  )
}

export default Home

