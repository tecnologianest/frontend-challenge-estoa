import React from 'react'

interface PageProps {
    params: {
        id: string
    }
}

function page({params}: PageProps) {
    

  return (
    <div>
      <h1>This is the character details page</h1>
      <h1>Name: {params.id}</h1>
    </div>
  );
}

export default page