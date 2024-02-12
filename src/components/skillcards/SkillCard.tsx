import { useEffect, useState } from "react";
import { CardTitle, CardDescription, CardContent, Card } from "@/components/ui/card";
import { FrameIcon, GitCommitIcon, LanguagesIcon, PenToolIcon } from "../iconpanel/IconPanel";

const skills = [
  {
    icon: <PenToolIcon className="h-8 w-8" />,
    title: "Design Tools",
    description: "Proficient with Figma, Sketch, and Adobe Creative Suite.",
  },
  {
    icon: <FrameIcon className="h-8 w-8" />,
    title: "Frontend Frameworks",
    description: "Experience with React, Vue, and Angular for building user-friendly interfaces.",
  },
  {
    icon: <GitCommitIcon className="h-8 w-8" />,
    title: "Version Control",
    description: "Git expert, familiar with branching, merging, and pull requests.",
  },
  {
    icon: <LanguagesIcon className="h-8 w-8" />,
    title: "Backend Languages",
    description: "Proficient in Node.js, Python, and Ruby for server-side development.",
  },
];

export default function SkillCard() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const element = document.querySelector(".skill-card-section");
      if (element) {
        const rect = element.getBoundingClientRect();
        setIsVisible(rect.top <= window.innerHeight / 2);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); 

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section className={`w-full py-6 bg-gray-100 dark:bg-black skill-card-section ${isVisible ? 'opacity-100 translate-y-0 transition-opacity transform transition-transform ease-out duration-700' : 'opacity-20 translate-y-5 transition-opacity transform transition-transform ease-in duration-700'}`}>
      <div className="container grid max-w-3xl items-center gap-4 px-4 text-center md:px-6 lg:gap-6 xl:gap-8">
        <div className="space-y-2">
          <h2 className="text-3xl font-bold tracking-tighter">Skills</h2>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:gap-8">
          {skills.map((skill, index) => (
            <Card key={index} className={`dark:bg-gray-800 ${isVisible ? 'opacity-100 translate-y-0 transition-transform ease-out duration-700' : 'opacity-0 translate-y-5 transition-transform ease-in duration-700'}`}>
              <CardContent className="flex flex-col items-center gap-2 mt-[2rem]">
                {skill.icon}
                <CardTitle>{skill.title}</CardTitle>
                <CardDescription>{skill.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
