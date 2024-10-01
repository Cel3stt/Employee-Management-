import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from '../ui/button'

const Category = () => {
  return (
    <div>
        <div className="d-flex justify-content-center">
            <h1 className="text-lg font-semibold md:text-2xl">Category</h1>
        </div>

    
        <Button>
        <Link to='/dashboard/addCategory'>Add Category</Link> 
        </Button>
        
    </div>
    
  )
}

export default Category
