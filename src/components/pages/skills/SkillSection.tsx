"use client";

import React from "react";
import scss from "./SkillSection.module.scss";
import { my_skills } from "@/helpers/const";

export default function SkillSection() {
  return (
    <section id="skills" className={scss.SkillSection}>
      <div className="container">
        <div className={scss.content}>
          <div className={scss.skills}>
            <span>02.</span>
            <h1>
              My Skills <hr />
            </h1>
          </div>
          <div className={scss.box_skills}>
            {my_skills.map((el) => (
              <div key={el.id} className={scss.block_skill}>
                {el.name}
              </div>
            ))}
          </div>
          <p className={scss.txt}>← scrolling ⇾</p>
        </div>
      </div>
    </section>
  );
}
