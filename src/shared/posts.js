import React, { Component } from 'react';
import { Link } from "react-router-dom";


export default class Posts extends Component {


  render() {
    const { id, body, title } = this.props.post;
    const { username, email } = this.props.user ? this.props.user : undefined;
    return (
      <div>
        <section className="text-gray-700 body-font overflow-hidden">
          <div className="container px-5 py-24 mx-auto">
            <div className="-my-8">
              <div className="py-8 flex border-t-2 border-gray-200 flex-wrap md:flex-no-wrap">
                <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                  <span className="mt-1 text-gray-500 text-sm">Posted by</span>
                  <span className="tracking-widest font-medium title-font text-gray-900">{username + ' ' + email}</span>
                </div>
                <div className="md:flex-grow">
                  <h2 className="text-2xl font-medium text-gray-900 title-font mb-2">{title}</h2>
                  <p className="leading-relaxed">{body}</p>
                  <Link
                    className="text-indigo-500 inline-flex items-center mt-4"
                    to={{
                      pathname: `/post/${id}`,
                      state: {
                        userDetails: this.props.user,
                        postDetails: this.props.post
                      }
                    }}
                  >Read more
                      </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}
