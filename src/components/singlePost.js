import React from 'react';

export default function SinglePost(props) {
  const { body, title } = props.location && props.location.state && props.location.state.postDetails;
  const { name, website } = props.location && props.location.state && props.location.state.userDetails;
  console.log(props)

  return (
    <>
      <button className="inline-flex text-white bg-indigo-500 border-0 py-1 px-4 focus:outline-none hover:bg-indigo-600 rounded" onClick={() => props.history.goBack()}>Back</button>
      <section className="text-gray-700 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="xl:w-1/2 lg:w-3/4 w-full mx-auto text-center">
            <h2 className="text-gray-900 font-large title-font tracking-wider text-lg py-12">{title}</h2>
            <p className="leading-relaxed text-lg">{body}</p>
            <span className="inline-block h-1 w-10 rounded bg-indigo-500 mt-8 mb-6"></span>
            <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm">{name}</h2>
            <p className="text-gray-500">{website}</p>
          </div>
        </div>
      </section>
    </>
  )
}

