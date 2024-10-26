import s from './Profile.module.css'

const Profile = ({ name, tag, location, image, stats }) => {
  return (
     <div className={s.container}>
  <div className={s.list_first}>
        <img className={s.image} src={image} alt="User avatar"
    />
    <p className={s.name}>{name}</p>
    <p className={s.tag}>{tag}</p>
    <p className={s.location}>{location}</p>
  </div>

  <ul className={s.list}>
    <li className= {s.list_status}>
      <span>Followers</span>
      <span className={s.number}>{stats.followers}</span>
    </li>
    <li className= {s.list_status}>
      <span>Views</span>
      <span className={s.number}>{stats.views}</span>
    </li>
    <li className= {s.list_status}>
      <span>Likes</span>
      <span className={s.number}>{stats.likes}</span>
    </li>
  </ul>
</div>
  )
}

export default Profile