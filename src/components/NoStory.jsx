import React from 'react'

function NoStory() {
  return (
    <div className='no-story'>
      <p>No story found</p>
      <a href='/newStory' className='link'>
        Create a new story instead
      </a>
    </div>
  )
}

export default NoStory
