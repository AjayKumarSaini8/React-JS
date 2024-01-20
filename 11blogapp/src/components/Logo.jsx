import React from 'react'
import Image from './image/Image.jpeg'

function Logo({ width = "15%" }) {
    return (
        <img src={Image} style={{ width }} alt='Logo placed' />
    )
}

export default Logo