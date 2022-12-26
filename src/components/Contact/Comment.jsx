import React from "react";

const Comment = (props) => {
  return (
    <div className="h-[300px] max-w-[800px] w-full bg-slate-800 mt-6 mx-auto overflow-x-auto rounded-lg">
      {props.commentsData.length > 0 ? (
        props.commentsData.map((comments) => (
          <div
            key={comments.id}
            className="h-[250px] w-[700px] mx-auto bg-slate-600 m-5 p-2 rounded-md"
          >
            <p className="text-lg lg:text-xl font-medium text-gray-200">
              <span className="text-red-400">Name</span> : {comments.name}
            </p>
            <p className="text-lg lg:text-xl font-medium text-gray-200">
              <span className="text-red-400">Email</span> : {comments.email}
            </p>
            <p className="text-lg lg:text-lg font-medium text-gray-200">
              <span className="text-red-400">Message</span> : {comments.message}
            </p>
          </div>
        ))
      ) : (
        <div className="h-[250px] w-[700px] mx-auto bg-slate-600 m-5 p-2 rounded-md flex justify-center items-center">
          <p className="text-2xl text-center text-slate-100 font-bold">
            Found no comments.
          </p>
        </div>
      )}
    </div>
  );
};

export default Comment;
