import React, { useState, useEffect } from "react";

const API_URL =
  "https://datausa.io/api/data?drilldowns=Nation&measures=Population";

const ProfileCard = () => {
  const [profile, setProfile] = useState([]);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await fetch(API_URL);
        if (!response.ok) {
          throw new Error(`Http status ${response.status}`);
        }
        const result = await response.json();
        setProfile(result.data);
        console.log(result.data);
      } catch (error) {
        console.error("Error fetching profile:", error);
      }
    };
    fetchProfile(); // Fetch profile data when component mounts
  }, []);
  return (
    <>
      <div className="profile-card">
        {profile.length > 0 ? (
          profile.map((val,index) => (
            <div key={index} className="mb-5 bg-gray-300 p-5 rouned-[3px]">
                <h1 className="text-red-500 font-bold">{index}</h1>
              <h2><b>Nation:</b> {val.Nation}</h2>
              <p><b>ID Nation:</b> {val['ID Nation']}</p>
              <p><b>Email:</b> {val.Year}</p>
              <p><b>Location:</b> {val.Population}</p>
            </div>
          ))
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </>
  );
};

export default ProfileCard;
