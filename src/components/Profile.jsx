import PropTypes from 'prop-types';

export const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <div>
      <img src={avatar} alt="User avatar" width={200} />
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

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }),
};
