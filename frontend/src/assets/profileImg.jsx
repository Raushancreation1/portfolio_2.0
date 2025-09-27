import React from 'react'
import Image from './Image .jpeg'

// Reusable profile image component sourcing the JPEG from this folder.
// Ensure the file exists at: frontend/src/assets/Image.jpeg (case-sensitive)
export default function ProfileImg({ alt = 'Portrait of Raushan Kumar', className = '' }) {
  return (
    <img
      src={Image}
      alt={alt}
      className={className}
      loading="eager"
    />
  )
}