"use client";

import React from "react";
import scss from "./ProjectSection.module.scss";
import Link from "next/link";
import Image from "next/image";
import exclusive from "../../../../public/exclusiveBg.png";
import skateboard from "../../../../public/skateboard.png";
import sh_n from "../../../../public/bg_sh.n.png";
import { url_skateboard } from "@/helpers/const";
import { url_exclusive } from "@/helpers/const";
import { CiShare1 } from "react-icons/ci";
import { PiGithubLogo } from "react-icons/pi";

export default function ProjectSection() {
  return (
    <section id="projects" className={scss.ProjectSection}>
      <div className="container">
        <div className={scss.content}>
          <div className={scss.some_things}>
            <span>03.</span>
            <h1>
              Some Things I’ve Built <hr />
            </h1>
          </div>
          <div className={scss.box_projects}>
            <div className={scss.project_block_one}>
              <div className={scss.img_box}>
                <div className={scss.img}>
                  <Link href={url_skateboard}>
                    <Image
                      src={sh_n}
                      fill
                      style={{ objectFit: "cover" }}
                      alt="img"
                    />
                  </Link>
                </div>
                <div className={scss.bg}></div>
              </div>
              <div className={scss.project_info}>
                <h4>Featured Project</h4>
                <h1>Sh.N</h1>
                <p>
                  EcoMovie - a unique website providing fascinating information
                  about movies and TV shows. Here you can discover all the
                  necessary details about your favorite films, actors,
                  directors, ratings, and much more.
                </p>
                <div className={scss.skills}>
                  <span>React </span>
                  <span>SCSS </span>
                  <span>NextJS </span>
                  <span>TGbot </span>
                  <span>Atropos.js </span>
                </div>
                <div className={scss.icons}>
                  <Link href={"/"}>
                    <CiShare1 />
                  </Link>
                  <Link href={"/"}>
                    <PiGithubLogo />
                  </Link>
                </div>
              </div>
            </div>
            <div className={scss.project_block_two}>
              <div className={scss.img_box}>
                <div className={scss.img}>
                  <Link href={url_skateboard}>
                    <Image
                      src={skateboard}
                      fill
                      style={{ objectFit: "cover" }}
                      alt="img"
                    />
                  </Link>
                </div>
                <div className={scss.bg}></div>
              </div>
              <div className={scss.project_info_2}>
                <h4>Featured Project</h4>
                <h1>skateboard</h1>
                <p>
                  🛹 Skateboard — a video platform for skateboarders. Skateboard
                  is a video platform aimed at amateurs and professionals of
                  skateboarding. The interface is made in a dark theme (dark
                  mode), with an emphasis on visual content and simple
                  navigation. The site allows you to open, save and watch videos
                  related to tricks, skateparks and skating style.
                </p>
                <div className={scss.skills}>
                  <span>React </span>
                  <span>SASS </span>
                  <span>Context </span>
                  <span>Firebase </span>
                </div>
                <div className={scss.icons}>
                  <Link href={url_skateboard}>
                    <CiShare1 />
                  </Link>
                  <Link href={"https://github.com/shapyev-n/skateboard-app"}>
                    <PiGithubLogo />
                  </Link>
                </div>
              </div>
            </div>
            <div className={scss.project_block_one}>
              <div className={scss.img_box}>
                <div className={scss.img}>
                  <Link href={url_exclusive}>
                    <Image
                      src={exclusive}
                      fill
                      style={{ objectFit: "cover" }}
                      alt="img"
                    />
                  </Link>
                </div>
                <div className={scss.bg}></div>
              </div>
              <div className={scss.project_info}>
                <h4>Featured Project</h4>
                <h1>Exclusive shop</h1>
                <p>
                  🛒 Exclusive — online store of electronics and gadgets.
                  Exclusive is a modern online store offering a wide selection
                  of electronics and digital goods. The main page of the site is
                  made in a minimalist and convenient design, with an emphasis
                  on current promotions and product categories.
                </p>
                <div className={scss.skills}>
                  <span>SCSS </span>
                  <span>NextJS </span>
                  <span>TS </span>
                  <span>RTK-Query </span>
                  <span>Supabase </span>
                  <span>Prisma </span>
                </div>
                <div className={scss.icons}>
                  <Link href={url_exclusive}>
                    <CiShare1 />
                  </Link>
                  <Link href={"https://github.com/shapyev-n/exclusive-v1"}>
                    <PiGithubLogo />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
