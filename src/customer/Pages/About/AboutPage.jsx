import React from "react";

import {
  FaLinkedin,
  FaFacebook,
  FaInstagram,
  FaEnvelope,
} from "react-icons/fa";
import { RiDoubleQuotesL, RiDoubleQuotesR } from "react-icons/ri";
import { Link } from "react-router-dom";
import MemberCard from "../../components/AboutPage/MemberCard/MemberCard";

const AboutPage = () => {
  const teamMembers = [
    {
      name: "John Doe",
      designation: "CEO",
      image: "https://i.postimg.cc/9fCX4GC4/John-Smiths.jpg",
      linkedin: "https://www.linkedin.com/in/aditya--sahu89/",
    },
    {
      name: "Jane Smith",
      designation: "CTO",
      image: "https://i.postimg.cc/9fCX4GC4/John-Smiths.jpg",
      linkedin: "https://www.linkedin.com/in/aditya--sahu89/",
    },
    {
      name: "Jane Smith",
      designation: "Full Stack Developer",
      image: "https://i.postimg.cc/9fCX4GC4/John-Smiths.jpg",
      linkedin: "https://www.linkedin.com/in/aditya--sahu89/",
    },
    {
      name: "Jane Smith",
      designation: "Marketing Head",
      image: "https://i.postimg.cc/9fCX4GC4/John-Smiths.jpg",
      linkedin: "https://www.linkedin.com/in/aditya--sahu89/",
    },
    {
      name: "Jane Smith",
      designation: "BDE",
      image: "https://i.postimg.cc/9fCX4GC4/John-Smiths.jpg",
      linkedin: "https://www.linkedin.com/in/aditya--sahu89/",
    },
    {
      name: "Jane Smith",
      designation: "HR Lead",
      image: "https://i.postimg.cc/9fCX4GC4/John-Smiths.jpg",
      linkedin: "https://www.linkedin.com/in/aditya--sahu89/",
    },
    // Add more team members here
  ];

  return (
    <div className="relative">
      {/* Banner Image Section */}
      {/* <Banner /> */}
      <div className="container mx-auto px-4 py-12">
        {/* Our Mission */}
        {/* <section className="text-left mb-12 font-cat bg-white p-4">
          <h2 className="text-4xl font-dosis font-bold mb-4">Our Mission</h2>
          <p className="text-lg">
            To be the premier education portal, we strive to provide the most
            interactive user interface and rigorously validated content. Our
            mission is to support students comprehensively, ensuring their
            college selection process is simplified and informed.
          </p>
        </section> */}

        {/* Our Story */}
        <section className="text-left mb-12 font-cat bg-white px-4">
          <h2 className="text-4xl font-dosis font-bold mb-4">Our Story</h2>
          <div className="flex flex-col-reverse lg:flex-row gap-x-4">
            <div className="text-md text-justify w-full lg:w-2/5 flex justify-start items-start pt-4">
              <div className="ring-2 ring-black rounded-md p-2">
                <div className="flex justify-start">
                  <RiDoubleQuotesL className="text-[20px]" />
                </div>
                <p className="p-6">
                  At The Career Valley, we envision creating a student-friendly
                  ecosystem where every individual finds a ladder to climb the
                  stairs of success. Our mission is to provide new minds with
                  not just knowledge, but also aspirations and determination,
                  empowering them to craft their unique success stories.
                </p>
                <div className="flex justify-end">
                  <RiDoubleQuotesR className="text-[20px]" />
                </div>
              </div>
            </div>
            <div className="w-full lg:w-3/5 pl-10 p-6">
              <img
                src="https://i.postimg.cc/25hJHbb0/annie-spratt-Tywjk-DHf0-Ps-unsplash.jpg"
                className="rounded-md h-full w-full"
              />
            </div>
          </div>
        </section>

        {/* Our Founder */}
        <section className="text-left mb-12 font-cat bg-white px-4">
          <h2 className="text-4xl font-dosis font-bold mb-4">Our Founder</h2>
          <div className="flex flex-col-reverse lg:flex-row-reverse gap-x-2">
            <div className="text-md text-justify w-full lg:w-3/5 flex flex-col justify-start items-start pt-4">
              <div className="ring-2 ring-black rounded-md p-2">
                <h1 className="text-2xl pl-2 font-dosis font-semibold">Kalpana Mahanti</h1>
                <h2 className="text-xl pl-2 font-dosis font-medium">Founder & CEO</h2>
                <div className="mb-4 pl-2 gap-x-3 flex text-[18px] mt-2">
                  <Link to="https://www.linkedin.com/in/aditya--sahu89/">
                    <FaLinkedin className="hover:text-[#2d49ff]" />
                  </Link>
                  <Link to="https://www.facebook.com">
                    <FaFacebook className="hover:text-[#3470fb]" />
                  </Link>
                  <Link to="https://www.instagram.com">
                    <FaInstagram className="hover:text-[#ea3773]" />
                  </Link>
                  <Link to="mailto:example@gmail.com">
                    <FaEnvelope className="hover:text-red-600" />
                  </Link>
                </div>
                <div>
                  <div className="flex justify-start">
                    <RiDoubleQuotesL className="text-[20px]" />
                  </div>
                  <p className="p-6 text-[18px]">
                    Imagine a student, full of dreams and ready to take on the
                    world, standing at the bottom of a big staircase. Each step
                    is a new achievement, a challenge, and a chance to grow.
                    This staircase is like the path to success, and at The
                    Career Valley, we're here to help every student climb it
                    with confidence. Our goal is to create a place where
                    students can learn, be inspired, and use that inspiration to
                    reach their goals. We believe education is about growing
                    your mind, finding what you love, and having the courage to
                    make your own path. As we start this journey together, we're
                    inviting you to join us in making education better. Let's
                    build bridges to knowledge, dreams, and possibilities, and
                    together, let's create a legacy of success that will inspire
                    future generations. Welcome to a place where every dream has
                    a purpose, and every student is the architect of their own
                    destiny.
                  </p>
                  <div className="flex justify-end">
                    <RiDoubleQuotesR className="text-[20px]" />
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-2/5 pl-0 p-0 lg:p-4">
              <div className="cards flex justify-center items-center">
                  <img
                    src="https://i.postimg.cc/mgv5wrxW/team-h-11-8-1.png"
                    alt="3D Hover"
                    className=""
                  />
              </div>
            </div>
          </div>
        </section>

        {/* Our Co-Founder */}
        <section className="text-left mb-12 font-cat bg-white px-4">
          <h2 className="text-4xl font-dosis font-bold mb-4">Our Co-Founder</h2>
          <div className="flex flex-col-reverse lg:flex-row gap-x-2">
            <div className="text-md text-justify w-full lg:w-3/5 flex flex-col justify-start items-start pt-4">
              <div className="ring-2 ring-black rounded-md p-2">
                <h1 className="text-2xl pl-2 font-dosis font-semibold">Abhishek Mahanti</h1>
                <h2 className="text-xl pl-2 font-dosis font-medium">Co-Founder & CMO</h2>
                <div className="mb-4 pl-2 gap-x-3 flex text-[18px] mt-2">
                  <Link to="https://www.linkedin.com/in/aditya--sahu89/">
                    <FaLinkedin className="hover:text-[#2d49ff]" />
                  </Link>
                  <Link to="https://www.facebook.com">
                    <FaFacebook className="hover:text-[#3470fb]" />
                  </Link>
                  <Link to="https://www.instagram.com">
                    <FaInstagram className="hover:text-[#ea3773]" />
                  </Link>
                  <Link to="mailto:example@gmail.com">
                    <FaEnvelope className="hover:text-red-600" />
                  </Link>
                </div>
                <div>
                  <div className="flex justify-start">
                    <RiDoubleQuotesL className="text-[20px]" />
                  </div>
                  <p className="p-6 text-[18px]">
                    Imagine a student, full of dreams and ready to take on the
                    world, standing at the bottom of a big staircase. Each step
                    is a new achievement, a challenge, and a chance to grow.
                    This staircase is like the path to success, and at The
                    Career Valley, we're here to help every student climb it
                    with confidence. Our goal is to create a place where
                    students can learn, be inspired, and use that inspiration to
                    reach their goals. We believe education is about growing
                    your mind, finding what you love, and having the courage to
                    make your own path. As we start this journey together, we're
                    inviting you to join us in making education better. Let's
                    build bridges to knowledge, dreams, and possibilities, and
                    together, let's create a legacy of success that will inspire
                    future generations. Welcome to a place where every dream has
                    a purpose, and every student is the architect of their own
                    destiny.
                  </p>
                  <div className="flex justify-end">
                    <RiDoubleQuotesR className="text-[20px]" />
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-2/5 pl-0 p-0 lg:p-4">
              <div className="cards flex justify-center items-center">
                  <img
                    src="https://i.postimg.cc/9fCX4GC4/John-Smiths.jpg"
                    alt="3D Hover"
                    className=""
                  />
              </div>
            </div>
          </div>
        </section>

        {/* Our Team */}
        <div className="bg-white items-center lg:justify-none">
          <h2 className="text-left font-dosis text-4xl font-bold mb-4 bg-white pb-0 p-4">
            Our Team
          </h2>
          <div className="flex flex-col justify-center bg-white items-center lg:justify-none">
            <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-20 lg:gap-x-20 p-20">
              {teamMembers.map((member) => (
                <MemberCard image={member.image} name={member.name} designation={member.designation}/>
              ))}
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
