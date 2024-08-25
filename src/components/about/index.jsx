import Image from "next/image";
import React from "react";
import ItemLayout from "./ItemLayout";
import Link from "next/link";
import profile from "../../../public/background/profile-pic.png";


const AboutDetails = () => {
  return (
    <section className="py-20 w-full">
      <div className="grid grid-cols-12 gap-4 xs:gap-6  md:gap-8 w-full">
        <ItemLayout
          className={
            " col-span-full lg:col-span-12 row-span-2 flex-col items-start"
          }
        >
          <Image
          src={profile}
          priority
          sizes=""
          alt="profile-pic"
          className="w-[150px] h-[150px]"
        />
          <h2 className="  text-xl md:text-2xl text-left w-full capitalize text-center text-accent">
            About Me
          </h2>
          <p className="font-light  text-xs sm:text-sm md:text-base   ">
          I am a graduate of Electrical Engineering with 5 years of experience in the field, where I cultivated strong analytical and problem-solving skills. Recently, I made a transition into web development, driven by my passion for technology and innovation. I completed an intensive MERN Stack bootcamp, where I received hands-on training in MongoDB, Express.js, React, and Node.js. This immersive experience provided me with a solid foundation in modern web development practices, though I am still in the process of building proficiency. I am eager to apply my growing skills in a real-world environment and am currently seeking entry-level web developer opportunities to contribute to a dynamic team while continuing to develop my expertise.
          </p>
        </ItemLayout>

        {/* <ItemLayout
          className={"col-span-full xs:col-span-6 lg:col-span-4 text-accent" }
        >
          <p className="font-semibold w-full text-left text-2xl sm:text-5xl">
            25+ <sub className="font-semibold text-base">clients</sub>
          </p>
        </ItemLayout> */}

        {/* <ItemLayout
          className={"col-span-full xs:col-span-6 lg:col-span-4 text-accent"}
        >
          <p className="font-semibold w-full text-left text-2xl sm:text-5xl">
            4+{" "}
            <sub className="font-semibold text-base">years of experience</sub>
          </p>
        </ItemLayout> */}

        <ItemLayout
          className={"col-span-full sm:col-span-6 md:col-span-4 !p-0"}
        >
          <img
            className="w-full h-auto"
            src={`${process.env.NEXT_PUBLIC_GITHUB_STATS_URL}/api/top-langs?username=robertjohn1234&theme=transparent&hide_border=true&title_color=009FFF&text_color=FFFFFF&icon_color=009FFF&text_bold=false`}
            alt="CodeBucks"
            loading="lazy"
          />
        </ItemLayout>

        <ItemLayout className={"col-span-full md:col-span-8 !p-0"}>
          <img
            className="w-full h-auto"
            src={`${process.env.NEXT_PUBLIC_GITHUB_STATS_URL}/api?username=robertjohn1234&theme=transparent&hide_border=true&title_color=009FFF&text_color=FFFFFF&icon_color=009FFF&text_bold=false`}
            alt="Robert"
            loading="lazy"
          />
        </ItemLayout>

        <ItemLayout className={"col-span-full"}>
          <img
            className="w-full h-auto"
            src={`https://skillicons.dev/icons?i=bootstrap,css,figma,git,github,html,js,mongodb,mysql,nodejs,react,vercel,vscode,postman,render,php,sketchup,sublime,ps,laravel,jquery,express,codepen,autocad`}
            alt="Robert"
            loading="lazy"
          />
        </ItemLayout>

        <ItemLayout className={"col-span-full md:col-span-6 !p-0"}>
          <img
            className="w-full h-auto"
            src={`${process.env.NEXT_PUBLIC_GITHUB_STREAK_STATS_URL}?user=robertjohn1234&theme=dark&hide_border=true&type=svg&background=EB545400&ring=009FFF&currStreakLabel=009FFF`}
            alt="Robert"
            loading="lazy"
          />
        </ItemLayout>

        <ItemLayout className={"col-span-full md:col-span-6 !p-0"}>
          <Link
            href="https://github.com/robertjohn1234/BlogPost_Client"
            target="_blank"
            className="w-full"
          >
            <img
              className="w-full h-auto"
              src={`${process.env.NEXT_PUBLIC_GITHUB_STATS_URL}/api/pin/?username=robertjohn1234&repo=BlogPost_Client&theme=transparent&hide_border=true&title_color=	009FFF&text_color=FFFFFF&icon_color=009FFF&text_bold=false&description_lines_count=2`}
              alt="CodeBucks"
              loading="lazy"
            />
          </Link>
        </ItemLayout>
      </div>
    </section>
  );
};

export default AboutDetails;
