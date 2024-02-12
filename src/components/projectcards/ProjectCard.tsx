import React from "react";
import { CardTitle, CardDescription, CardHeader, CardContent, Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { LaptopIcon, SmartphoneIcon } from "../iconpanel/IconPanel";
import { ComponentProps } from "@/app/types/types";

const projects = [
  {
    id: 1,
    icon: <LaptopIcon className="h-6 w-6" />,
    title: "Customer Portal",
    description: "A customer portal for account management",
  },
  {
    id: 2,
    icon: <SmartphoneIcon className="h-6 w-6" />,
    title: "Mobile Banking App",
    description: "An intuitive mobile banking app",
  },
  {
    id: 3,
    icon: <LaptopIcon className="h-6 w-6" />,
    title: "Design System",
    description: "Reusable components for beautiful interfaces",
  },
  {
    id: 4,
    icon: <LaptopIcon className="h-6 w-6" />,
    title: "E-commerce Platform",
    description: "A scalable e-commerce platform",
  },
];

const ProjectCard:React.FC<ComponentProps> = (id) => {
  return (
    <div className="mb-[2rem] "id={id.id}>
      <h1 className="text-3xl font-bold text-center my-8">Featured Projects</h1>
      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
        {projects.map((project) => (
          <div key={project.id} className="space-y-2">
            <Card>
              <CardHeader className="flex items-start gap-4 py-6">
                {project.icon}
                <div className="space-y-1.5">
                  <CardTitle className="text-lg font-bold">{project.title}</CardTitle>
                  <CardDescription className="text-sm">{project.description}</CardDescription>
                </div>
              </CardHeader>
              <CardContent className="flex items-center  p-6 justify-evenly">
                <Button>View Details</Button>
                <Button variant={"outline"}>Get Code</Button>
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectCard;
