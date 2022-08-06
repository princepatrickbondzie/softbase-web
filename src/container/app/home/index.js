import React from 'react';
import Hero from "../../../components/Hero";
// import Navbar from '../../../components/Navbar';
import ClientSays from '../../../components/ClientSays';
import Kids from '../../../components/Kids';
import Course from '../../../components/Course';

export default function Home() {
  return (
    <div>
      <Hero/>
      <Kids/>
      <Course/>
      <ClientSays/>
    </div>
  )
}
