import React from 'react'

function ProfileCard({ title , handle }) {

    //WAY-3 Directly do as in arguments
    //function ProfileCard({ title , handle })

    //WAY-2 destructuring thr props
    //const { title , handle } = props;

    //WAY-1 Putting in variable first
    // const title = props.title;
    // const handle = props.handle;

  return (
    <div>
      <div>Title is {title} </div>
      <div>Handle is {handle}</div>
    </div>
  )
}

export default ProfileCard;
