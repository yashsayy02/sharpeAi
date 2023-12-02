import React from 'react'

const Table = ({data}) => {
  return (
      //   <div className="border-2 border-neutral-950">
      //       <div className="border-2 grid grid-cols-3 m-1">
      //           <div className="border-r-2">Post ID</div>
      //           <div className="border-r-2">Post Title</div>
      //           <div>Post Body</div>
      //       </div>
      //       {data.map((post) => (
      //           <div className="border-2 grid grid-cols-3 m-1">
      //               <div className="border-r-2">{post.id}</div>
      //               <div className="border-r-2">{post.title}</div>
      //               <div className="max-h-24 overflow-y-auto">{post.body}</div>
      //           </div>
      //       ))}
      //   </div>

      <table className='bg-slate-100'>
          <thead>
              <tr>
                  <th>POST ID</th>
                  <th>POST TITLE</th>
                  <th>POST BODY</th>
              </tr>
          </thead>

          <tbody>
              {data.map((post, index) => (
                  <tr key={post.id}>
                      <td>{post.id}</td>
                      <td>{post.title}</td>
                      <td>{post.body}</td>
                  </tr>
              ))}
          </tbody>
      </table>
  );
}

export default Table