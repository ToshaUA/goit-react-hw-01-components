export const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <div>
      <dir>src={avatar} alt="User avatar"</dir>
      <div>{username}</div>
      <div>@{tag}</div>
      <div>{location}</div>
      <div>
        <span>Followers</span>
        <span>{stats.followers}</span>
      </div>
      <div>
        <span>Views</span>
        <span>{stats.views}</span>
      </div>
      <div>
        <span>Likes</span>
        <span>{stats.likes}</span>
      </div>
    </div>
  );
};
