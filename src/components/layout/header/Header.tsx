"use client";

import React, { useState } from "react";
import scss from "./Header.module.scss";
import { nav_links } from "@/helpers/const";
import { useRouter } from "next/navigation";
import Atropos from "atropos/react";
import "atropos/css";
import { useActiveSection } from "@/hooks/useActiveSection";
import BurgerMenu from "./burger/BurgerMenu";

const resume = process.env.NEXT_PUBLIC_RESUME;
const interview = process.env.NEXT_PUBLIC_INTERVIEW;

export default function Header() {
  const router = useRouter();
  const activeSection = useActiveSection([
    "about",
    "skills",
    "projects",
    "contacts",
  ]);

  const [open_modal, set_open_modal] = useState<boolean>(false);

  return (
    <div className={scss.Header}>
      <div className="container">
        <div className={scss.content}>
          <Atropos
            className={scss.my_atropos}
            activeOffset={40}
            shadowScale={1.05}
          >
            <div
              className={scss.logo}
              data-atropos-offset="10"
              onClick={() => {
                router.push("/");
              }}
            >
              <h1>
                Sh.<span className={scss.logo_txt}>N</span>
              </h1>
            </div>
          </Atropos>

          <div className={scss.links}>
            {nav_links.map((el) => (
              <a
                key={el.id}
                href={el.link}
                className={`${scss.link} ${
                  activeSection === el.link.slice(1) ? scss.active : ""
                }`}
              >
                <span>{el.id}</span>
                {el.name}
              </a>
            ))}
            <div className={scss.btns}>
              <button
                onClick={() => {
                  router.push(`${interview}`);
                }}
              >
                interview
              </button>
              <button
                onClick={() => {
                  router.push(`${resume}`);
                }}
              >
                Resume
              </button>
            </div>
          </div>
          <button
            className={scss.burger_menu}
            onClick={() => set_open_modal(true)}
          >
            ☰
          </button>
        </div>
      </div>
      {open_modal && <BurgerMenu onClose={() => set_open_modal(false)} />}
    </div>
  );
}
