import React from 'react'
import Multiple from '../assets/MultiplePizzas.jpeg'
import '../styles/About.css'

function About() {
  return (
    <div className='about'>
      <div className='aboutTop' style={{backgroundImage: `url(${Multiple})`}}>
        
      </div>
      <div className='aboutBottom'>
        <h1>About Us </h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut eum voluptatum exercitationem impedit 
          quia eos officia doloribus officiis molestiae consequuntur. Commodi aliquam quidem magnam ut et
          repellendus modi quia alias sint, velit nemo! Necessitatibus unde dolore aliquid. Ipsa quo fuga,
          earum reprehenderit velit voluptate dolore ullam consequatur, placeat quaerat laboriosam. Lorem 
          ipsum dolor sit amet consectetur adipisicing elit. Alias expedita aspernatur eum ut ducimus sed 
          voluptates dolores accusamus tempore harum!</p>
      </div>
    </div>
  )
}

export default About
