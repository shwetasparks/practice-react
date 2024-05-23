

function ProfilePic() {
    const url =
       "https://images.pexels.com/photos/4051667/pexels-photo-4051667.jpeg?auto=compress&cs=tinysrgb&w=120&h=750&dpr=1";
    const handleClick=(e)=>e.target.style.display="none"

  return (
    <div>
        <img src={url} alt="image"  onClick={(e)=>{handleClick(e)}}/>

    </div>
  )
}

export default ProfilePic;
