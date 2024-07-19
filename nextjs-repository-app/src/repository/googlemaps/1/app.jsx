import React from 'react';

const CustomApp = () => {
  return (
    <>
     <div className="flex justify-center items-center h-screen">
      <div className="w-3/4 max-w-screen-md bg-white rounded-lg shadow-lg p-6">
        <h2 className="text-xl font-semibold mb-4">Google Maps</h2>
        <GoogleMap />
      </div>
    </div>
    </>
  )
}

export default CustomApp

const GoogleMap = () => {
  return (
    <div className="h-96 rounded-lg overflow-hidden">
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4642.924636635971!2d72.81306968571924!3d18.962465109695277!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7ce12ee903137%3A0x4b3b171c213927ae!2sOm%20Yoga!5e1!3m2!1sen!2sin!4v1712040423048!5m2!1sen!2sin"  className="w-full h-full"
        title="Google Map" width="600" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    </div>
  );
};