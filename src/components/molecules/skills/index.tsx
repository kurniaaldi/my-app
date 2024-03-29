import {
  EXPRESS,
  GIT,
  GOLANG,
  GRAPHQL,
  JAVASCRIPT,
  JEST,
  NEXT,
  NODE,
  REACT,
  REACT_NATIVE,
  REDUX,
  TYPESCRIPT,
} from "assets";
import { Typography, useMediaQuery, useTheme } from "@mui/material";
import React from "react";

function Skills() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const skill = [
    {
      id: 1,
      name: "JavaScript",
      component: (
        <JAVASCRIPT className="w-40 h-40 mobile:w-16 mobile:h-auto filter-gray" />
      ),
    },
    {
      id: 2,
      name: "TypeScript",
      component: (
        <TYPESCRIPT className="w-40 h-40 mobile:w-16 mobile:h-auto filter-gray" />
      ),
    },
    {
      id: 13,
      name: "GoLang",
      component: (
        <GOLANG className="w-40 h-40 mobile:w-16 mobile:h-auto filter-gray" />
      ),
    },
    {
      id: 14,
      name: "Dart",
      component: (
        <img
          alt="dart"
          src="./images/dart.png"
          className="w-40 h-40 mobile:w-16 mobile:h-auto filter-gray object-contain"
        />
      ),
    },

    {
      id: 11,
      name: "Node Js",
      component: (
        <NODE className="w-40 h-40 mobile:w-16 mobile:h-auto filter-gray" />
      ),
    },
    {
      id: 3,
      name: "React Js",
      component: (
        <REACT className="w-40 h-40 mobile:w-16 mobile:h-auto filter-gray" />
      ),
    },
    {
      id: 4,
      name: "Next Js",
      component: (
        <NEXT className="w-40 h-40 mobile:w-16 mobile:h-auto filter-gray" />
      ),
    },
    {
      id: 5,
      name: "React Native",
      component: (
        <REACT_NATIVE className="w-40 h-40 mobile:w-16 mobile:h-auto filter-gray" />
      ),
    },
    {
      id: 26,
      name: "Flutter",
      component: (
        <img
          src="./images/flutter.png"
          alt="flutter"
          className="w-40 h-40 mobile:w-16 mobile:h-auto filter-gray object-contain"
        />
      ),
    },
    {
      id: 6,
      name: "Express Js",
      component: (
        <EXPRESS className="w-40 h-40 mobile:w-16 mobile:h-auto filter-gray" />
      ),
    },
    {
      id: 7,
      name: "Graphql",
      component: (
        <GRAPHQL className="w-40 h-40 mobile:w-16 mobile:h-auto filter-gray" />
      ),
    },
    {
      id: 9,
      name: "GIT",
      component: (
        <GIT className="w-40 h-40 mobile:w-16 mobile:h-auto filter-gray" />
      ),
    },
    {
      id: 8,
      name: "JEST",
      component: (
        <JEST className="w-40 h-40 mobile:w-16 mobile:h-auto filter-gray" />
      ),
    },
    {
      id: 12,
      name: "Redux",
      component: (
        <REDUX className="w-40 h-40 mobile:w-16 mobile:h-auto filter-gray" />
      ),
    },
  ];
  return (
    <section
      id="skills"
      className="w-full mobile:h-full sm:h-full flex items-start justify-start flex-col gap-4"
    >
      <Typography className="my-8 font-bold" variant="h5">
        Skill
      </Typography>
      <div className="w-full h-full flex items-center justify-center gap-12 flex-wrap">
        {skill.map((item: any) => {
          return (
            <div
              key={item.id}
              className="flex flex-col items-center justify-center gap-2"
            >
              {item.component}
              <Typography variant={isMobile ? "inherit" : "h5"}>
                {item.name}
              </Typography>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Skills;
