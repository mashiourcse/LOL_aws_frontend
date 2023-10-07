import React from 'react'

export const Home = () => {
  return (
    <div style={{marginLeft: '100px'}} className='flex flex-wrap'>

      <div id='listDiv' className='mr-2'>
      <div className="flex flex-col">
      <a href="#" className="py-2 px-4 hover:bg-gray-200">
        Introduction
      </a>
      <a href="#" className="py-2 px-4 hover:bg-gray-200">
        Project planning
      </a>
      <a href="#" className="py-2 px-4 hover:bg-gray-200">
        Technical Analysis
      </a>
      <a href="#" className="py-2 px-4 hover:bg-gray-200">
        Tools & Services
      </a>

      <a href="#" className="py-2 px-4 hover:bg-gray-200">
        Conclusion
      </a>
      {/* Add more items as needed */}
    </div>
      </div>

      <div id='content' className='ml-4'>
        Content
      </div>
    </div>
  )
}
