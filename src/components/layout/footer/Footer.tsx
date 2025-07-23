import React from "react";
import scss from "./Footer.module.scss";
import { LuGithub, LuInstagram, LuLinkedin } from "react-icons/lu";

const github = process.env.NEXT_PUBLIC_GITHUB_URL;
const instagram = process.env.NEXT_PUBLIC_INSTAGRAM_URL;
const linkedin = process.env.NEXT_PUBLIC_LINKEDIN_URL;

export default function Footer() {
  return (
    <div className={scss.Footer}>
      <div className="container">
        <div className={scss.content}>
          <div className={scss.social}>
            <a href={github}>
              <LuGithub />
            </a>
            <a href={instagram}>
              <LuInstagram />
            </a>
            <a href={linkedin}>
              <LuLinkedin />
            </a>
          </div>
          <p className={scss.info}>Designed & Built by Shapyev Nuridin</p>
        </div>
      </div>
    </div>
  );
}
