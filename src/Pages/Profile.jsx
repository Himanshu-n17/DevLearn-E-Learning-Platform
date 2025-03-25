import React, { useState } from "react";

const Profile = () => {
  const [profile, setProfile] = useState({
    name: "Himanshu Sekhar Nayak",
    email: "nayak.himanshu2004@gmail.com",
    bio: "Passionate learner | Web Developer",
    notifications: true,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle profile update
    alert("Profile updated successfully!");
  };

  return (
    <div className="profile">
      <h1>My Profile</h1>

      <form onSubmit={handleSubmit} className="profile-form">
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            value={profile.name}
            onChange={(e) => setProfile({ ...profile, name: e.target.value })}
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={profile.email}
            onChange={(e) => setProfile({ ...profile, email: e.target.value })}
          />
        </div>

        <div className="form-group">
          <label htmlFor="bio">Bio</label>
          <textarea
            id="bio"
            value={profile.bio}
            onChange={(e) => setProfile({ ...profile, bio: e.target.value })}
          ></textarea>
        </div>

        <div className="form-group">
          <label>
            <input
              type="checkbox"
              checked={profile.notifications}
              onChange={(e) =>
                setProfile({ ...profile, notifications: e.target.checked })
              }
            />
            Receive email notifications
          </label>
        </div>

        <button type="submit" className="save-button">
          Save Changes
        </button>
      </form>
    </div>
  );
};

export default Profile;
