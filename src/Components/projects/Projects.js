import React from 'react'
import Title from '../Title'
import '../projects/Projects.css'
import Project from './Project'
const Projects = () => {
  return (
    <div className='Projects' id='projects'>
      <Title text={'Projects'} className={'title'} />
      <Project
        url={'https://github.com/erod4/ESP-IDF-Plant_Monitor'}
        title={'PlantSense IoT iOS App'}
        imgURL={
          'https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/ae/c3/97/aec397be-0fed-3964-775d-514e119527fb/AppIcon-0-0-1x_U007ephone-0-1-85-220.png/434x0w.webp'
        }
        text={`PlantSense is an iOS app designed to help users monitor their plants in real-time. It connects to a custom-built IoT device via Bluetooth, allowing users to set up WiFi connectivity for data transmission. The device collects key environmental metrics, including soil moisture, temperature, and humidity, which are sent via MQTT to a server. The data is then displayed on a web app, providing users with real-time insights. Additionally, the app alerts users with notifications when plant conditions become suboptimal, ensuring plants receive the care they need. This project combines embedded systems, wireless communication, and cloud technology to create an efficient plant monitoring solution.`}
        link={
          <a
            target='_blank'
            href='https://apps.apple.com/us/app/plantsense/id6739386742'
            className='link-app'
          >
            Download Here
          </a>
        }
      />
      <Project
        url={'https://github.com/erod4/Senior-Design'}
        title={'STM32 DSP Audio Analyzer'}
        imgURL={
          'https://www.enclustra.com/assets/images/services/Enclustra_Digital_Signal_Processing_with_FPGA.jpg'
        }
        text={
          'This project features an STM32 microcontroller-based audio processing system that performs real-time signal analysis. The system receives an analog audio input, applies signal conditioning, and processes the signal using a digital low-pass filter (LPF) and Fast Fourier Transform (FFT). The processed data is displayed on an LCD screen, providing real-time frequency spectrum visualization. My contributions included designing the digital signal processing (DSP) algorithms, implementing the signal conditioning circuitry, and developing the PCB design. This project showcases expertise in embedded DSP, hardware design, and real-time signal visualization.'
        }
      />
    </div>
  )
}

export default Projects
