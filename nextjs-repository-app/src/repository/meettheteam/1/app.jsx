import React from "react";

const CustomApp = () => {
  return (
    <>
    <MeetTheTeam/>
    </>
  )
};

export default CustomApp;

// Team members data stored in constants
const teamMembers = [
  {
    id: 1,
    name: "John Doe",
    position: "Frontend Developer",
    bio: "John is passionate about creating user-friendly and efficient web applications.",
    image: "https://wallpapercave.com/wp/wp1867294.jpg", // Path to image file
  },
  {
    id: 2,
    name: "Jane Smith",
    position: "UI/UX Designer",
    bio: "Jane specializes in designing intuitive and visually appealing user interfaces.",
    image: "https://w0.peakpx.com/wallpaper/907/432/HD-wallpaper-jane-with-names-female-names-jane-name-purple-neon-lights-horizontal-text-with-jane-name.jpg", // Path to image file
  },
  {
    id: 3,
    name: "Mike Johnson",
    position: "Backend Developer",
    bio: "Mike loves solving complex problems and building robust backend systems.",
    image: "https://c0.wallpaperflare.com/preview/79/491/796/microphone-mic-mike-voice.jpg", // Path to image file
  },
];


const MeetTheTeam =() => {
    return(
        <> 
        <h1>Meet the Team</h1>
        <div className="team">
         {teamMembers.map((team) => (
            <div key={team.id} className="member">
                <img src={team.image} alt={team.name} className="img-fluid"/>
                <h2>{team.name}</h2>
                <h3>{team.position}</h3>
                <p>{team.bio}</p>
            </div>
         ))}
        </div>
        </>
    )
}
