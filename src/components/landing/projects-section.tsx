"use client";

import Image from "next/image";

type Project = {
  title: string;
  description: string;
  imageUrl: string;
  imageAlt: string;
  liveHref: string;
  repoHref: string;
};

const PROJECTS: Project[] = [
  {
    title: "E-commerce Platform",
    description:
      "A full-stack e-commerce site built with React, Node.js, and PostgreSQL, featuring secure payments.",
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuARLWyEWINfrgQLQT9wPAMjRe7acL8mI3pQ3qGqIPvhyME3Bh1taH-KalebhndVdkZoj21PmfU0IsMWVRsjDhFwPuBvqi-V5Uwwx0YqLaLqvKDiFbD0qUVe4m84NKmc_XffGuIdXUtPVhMcJyxVGBme23OoNmqCmb7IpRMKu2l3IDfd70DY5rRllflOR2e6nNoBfKwzDHBuOSHp2WlOPBFzCakoXcLkJz8gQjMKnblQ8PpXoA3nw9iswRvKkLWOkDxWlg8vbuIOCaE",
    imageAlt: "Code on a dark computer screen",
    liveHref: "#",
    repoHref: "#",
  },
  {
    title: "Data Dashboard",
    description:
      "An interactive data visualization dashboard using D3.js and a Python/Flask backend.",
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCxqmURjh1inYmPWVEWoag9VLOlwrLa_pf7x38YCUUTgrUL7Lhp0LuvV3UA-g1gOdDo6e59JZRCmiws2NIz0XX2pliSNCim89-oFwW2aKNOadKAbJWgXAEAa58MV82uuQhmcCN_MMm8NFFPzJHfE197Qlk-1-L0g5XqDvVhoQQ1-l3oC4CXwbZzsfhgoVhEqHZEMnkKJxL6vcAD8Y4uSvYKwvJe4-nXwowGMahPFeh26GMFt1icZ3Numxn1zaXJUZhLUFpFdif4XoQ",
    imageAlt: "Laptop displaying HTML code snippets",
    liveHref: "#",
    repoHref: "#",
  },
];

export function ProjectsSection() {
  return (
    <section id="projects">
      <h2 className="text-foreground dark:text-white text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-10">
        COMPLETED QUESTS
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-4">
        {PROJECTS.map((project) => (
          <div
            key={project.title}
            className="flex flex-col gap-4 rounded-[2rem] border border-gray-200 dark:border-gray-700/50 bg-white dark:bg-background-dark p-4 group"
          >
            <div className="relative overflow-hidden rounded-[1rem]">
              <div className="relative h-48 w-full">
                <Image
                  src={project.imageUrl}
                  alt={project.imageAlt}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <h3 className="text-foreground dark:text-white text-xl font-bold">{project.title}</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">{project.description}</p>
            </div>

            <div className="flex gap-4 mt-auto">
              <a className="text-primary font-bold text-sm hover:underline" href={project.liveHref}>
                View Live
              </a>
              <a className="text-primary font-bold text-sm hover:underline" href={project.repoHref}>
                Repository
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
