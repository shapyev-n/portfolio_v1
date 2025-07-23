"use client";

import React from "react";
import scss from "./AboutPage.module.scss";
import "atropos/css";
import Image from "next/image";
import Atropos from "atropos/react";
import at_bg from "../../../../public/atropos-bg.svg";
import at_fb from "../../../../public/atropos-forest-back.svg";
import at_m from "../../../../public/atropos-mountains.svg";

export default function AboutPage() {
  return (
    <section id="about" className={scss.AboutPage}>
      <div className="container">
        <div className={scss.content}>
          <div className={scss.about_me}>
            <span>01.</span>
            <h1>
              About Me <hr />
            </h1>
          </div>
          <div className={scss.box_about}>
            <div className={scss.box_txt}>
              <p>
                Hello! My name is Nuridin, and I love creating things that live
                on the internet. My interest in web development started back in
                2024 when I decided to try creating websites for acquaintances.
                It turned out that it brings me pleasure and taught me a lot!
              </p>
              <p>
                Today, I am fortunate to be studying and interning at
                <span> Motion Web</span>, where I am led by experienced
                developers. I am currently focused on building accessible and
                inclusive products and digital solutions using NodeJS for
                various clients.
              </p>

              <p>
                Here are a few technologies I’ve been working with recently:
              </p>
              <div className={scss.table}>
                <div className={scss.left_txt}>
                  <p>
                    <span>▶</span> JavaScript (ES6+)
                  </p>
                  <p>
                    <span>▶ </span>React JS
                  </p>
                  <p>
                    <span>▶ </span>Node.js
                  </p>
                  <p>
                    <span>▶ </span>Web Socket
                  </p>
                  <p>
                    <span>▶ </span>Firebase
                  </p>
                </div>
                <div className={scss.right_txt}>
                  <p>
                    <span>▶ </span>TypeScript
                  </p>
                  <p>
                    <span>▶ </span>Next JS
                  </p>
                  <p>
                    <span>▶ </span>Vite JS
                  </p>
                  <p>
                    <span>▶ </span>Prisma
                  </p>
                  <p>
                    <span>▶ </span>Supabase
                  </p>
                </div>
              </div>
            </div>
            <div className={scss.box_img}>
              {/* <div className={scss.img}></div> */}
              <Atropos
                className={scss.my_atropos}
                activeOffset={40}
                shadowScale={1.05}
              >
                <Image
                  src={at_bg}
                  fill
                  alt="background"
                  data-atropos-offset="-5"
                  style={{ objectFit: "cover", scale: "2" }}
                  className={scss.bg}
                />
                <Image
                  src={at_m}
                  alt="mountains"
                  fill
                  data-atropos-offset="0"
                  style={{ objectFit: "cover" }}
                />
                <Image
                  src={at_fb}
                  fill
                  alt="forest-back"
                  data-atropos-offset="5"
                  style={{ objectFit: "cover", scale: "2" }}
                />
                <div data-atropos-offset="20" className={scss.txt}>
                  <h3>Shapyev Nuridin</h3>
                  <button className={scss.startBtn}>contact</button>
                </div>
              </Atropos>
              <div className={scss.border}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
