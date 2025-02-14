import React from 'react'

const Bio = () => {
  return (
    <div className='Bio'>
      <h2 className='bio-heading'>Hello there!</h2>
      <p className='bio-text'>
        I'm Enrique, a passionate <strong>Computer Engineering student</strong>{' '}
        and
        <strong> Marine Corps veteran</strong> with an insatiable curiosity for
        technology, especially <strong>embedded systems and electronics</strong>
        .
      </p>

      <h3 className='bio-subheading'>My Passion</h3>
      <p className='bio-text'>
        I specialize in designing and developing{' '}
        <strong>hardware-software integrations</strong>
        that bring ideas to life. From microcontrollers to circuit design, I
        love working on projects that push the boundaries of efficiency and
        functionality.
      </p>

      <h3 className='bio-subheading'>My Journey</h3>
      <p className='bio-text'>
        My fascination with technology began with the realization of how{' '}
        <strong>circuits, microcontrollers, and code</strong> can work together
        to create innovative solutions. This passion drives me to explore
        <strong>
          {' '}
          low-level system design, embedded applications, and hardware-software
          integration
        </strong>{' '}
        every day.
      </p>

      <h3 className='bio-subheading'>What I Do</h3>
      <p className='bio-text'>
        I thrive on solving complex engineering problems and building systems
        that make an impact. Whether it's
        <strong>
          {' '}
          developing firmware, designing PCBs, or optimizing embedded
          architectures
        </strong>
        , I'm always eager to dive into new challenges.
      </p>
    </div>
  )
}

export default Bio
