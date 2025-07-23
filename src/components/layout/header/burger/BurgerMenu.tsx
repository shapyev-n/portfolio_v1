"use client";

import React from "react";
import scss from "./BurgerMenu.module.scss";
import { nav_links } from "@/helpers/const";
import { useRouter } from "next/navigation";
import { useActiveSection } from "@/hooks/useActiveSection";
import { LuGithub, LuInstagram, LuLinkedin } from "react-icons/lu";

type BurgerMenuProps = {
  onClose: (value: boolean) => void;
};

const github = process.env.NEXT_PUBLIC_GITHUB_URL;
const instagram = process.env.NEXT_PUBLIC_INSTAGRAM_URL;
const linkedin = process.env.NEXT_PUBLIC_LINKEDIN_URL;

const resume = process.env.NEXT_PUBLIC_RESUME;
const interview = process.env.NEXT_PUBLIC_INTERVIEW;

export default function BurgerMenu({ onClose }: BurgerMenuProps) {
  const router = useRouter();
  const activeSection = useActiveSection([
    "about",
    "skills",
    "projects",
    "contacts",
  ]);

  return (
    <div className={scss.BurgerMenu}>
      <div className="container">
        <div className={scss.content}>
          <div className={scss.links}>
            {nav_links.map((el) => (
              <a
                key={el.id}
                href={el.link}
                className={`${scss.link} ${
                  activeSection === el.link.slice(1) ? scss.active : ""
                }`}
                onClick={() => onClose(false)}
              >
                <span>{el.id}</span>
                {el.name}
              </a>
            ))}
            <div className={scss.btns}>
              <button
                onClick={() => {
                  router.push(`${interview}`);
                  onClose(false);
                }}
              >
                interview
              </button>
              <button
                onClick={() => {
                  router.push(`${resume}`);
                  onClose(false);
                }}
              >
                Resume
              </button>
            </div>
            <div className={scss.social}>
              <a href={github} onClick={() => onClose(false)}>
                <LuGithub />
              </a>
              <a href={instagram} onClick={() => onClose(false)}>
                <LuInstagram />
              </a>
              <a href={linkedin} onClick={() => onClose(false)}>
                <LuLinkedin />
              </a>
            </div>
            <button className={scss.close_btn} onClick={() => onClose(false)}>
              +
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
