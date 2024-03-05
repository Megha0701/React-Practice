import React from "react";

function ProfileCard({ title, handle, image }) {
  //WAY-3 Directly do as in arguments
  //function ProfileCard({ title , handle })

  //WAY-2 destructuring thr props
  //const { title , handle } = props;

  //WAY-1 Putting in variable first
  // const title = props.title;
  // const handle = props.handle;

  return (
    <div className="card">
      <div className="card-image">
        <figure className="image is-1by1">
          <img src={image} alt="pda logo" />
        </figure>
      </div>
      <div className="card-content">
        <div className="media-content">
          <p className="title id-4">{title} </p>
          <p className="subtitle is-6">{handle}</p>
        </div>
      </div>
    </div>
  );
}

export default ProfileCard;
