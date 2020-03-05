import React, { Component } from 'react'
import './Footer.css'
class Footer extends Component {
  render() {
    return (
      <div
        className='d-flex flex-column align-items-center pt-4 pb-4 w-100 bg-white'
        id='footer'
      >
        <p className='mb-0 pb-0'>
          <span className='text-danger'>{'<3'}</span>{' '}
          <strong onClick={()=> windoe.open('https://www.npmjs.com/~bhaleraok65')}>Open Source 😍</strong>
        </p>
        <p className='text-center pl-3 pr-3 pt-1'>
          Copyright © {new Date().getFullYear()} Created by{' '}
          <a
            className='text-dark'
            href='https://www.linkedin.com/in/kiran-bhalerao-b12aa9132/'
            target='blank'
          >
            <strong>Kiran Bhalerao </strong>
          </a>
          Graphics by
          <a
            className='text-dark'
            href='https://www.freepik.com/free-vector/app-development-concept-with-flat-design_2533377.htm'
            target='blank'
          >
            <strong> Freepik</strong>
          </a>
        </p>
      </div>
    )
  }
}
export default Footer
