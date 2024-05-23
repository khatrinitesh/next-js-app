'use client';

import React,{useState} from 'react';
import { createClient } from 'pexels';
import Banner from "../components/banner";

const Service = () => {

  const [loading,setLoading] = useState(true);
  const [curatedPhotos,setCuratedPhotos] = useState(null);

  const client = createClient('A6klweMzmOZwMlZn0udDwPKQ0h6G1yOAZQ3bFpSoIVFMtkwumW27FSxc'); // api key

  client.photos.curated().then((res) => {
    console.log(res)
    setCuratedPhotos(res.photos)
  }).catch((err) => console.log(err)).finally(() => setLoading(false));
  return (
    <div className='mainContent'>
      <Banner bannerStyle='bg-[orange]' bannerTitle="Service" bannerDesc="Anim ad voluptate adipisicing nulla cillum excepteur laborum."/>

      {curatedPhotos && curatedPhotos.length >0 ? (<>asdsad</>) : (<>no photos found</>)}

    </div>
  )
}

export default Service
