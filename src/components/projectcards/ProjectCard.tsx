import React from "react";
import { Card, CardContent } from "../ui/card";
import Image from "next/image";

const ProjectCard = () => {
  return (
    <section className="flex w-full py-12 md:py-24 bg-white dark:bg-gray-800">
      <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
        <div className="space-y-3">
          <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
            My Projects
          </h2>
          <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
            Check out some of my featured projects.
          </p>
        </div>
        <div className="mx-auto w-full max-w-5xl grid gap-6 lg:grid-cols-2 lg:gap-12">
          <Card>
            <div className="aspect-[16/9] overflow-hidden rounded-t-lg">
              <Image
                alt="Cover image"
                className="object-cover object-center"
                height="360"
                src="/placeholder.svg"
                style={{
                  aspectRatio: "640/360",
                  objectFit: "cover",
                }}
                width="640"
              />
            </div>
            <CardContent className="p-6">
              <h3 className="text-xl font-bold">Project One: The Beginning</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                A great project to start with.
              </p>
            </CardContent>
          </Card>
          <Card>
            <div className="aspect-[16/9] overflow-hidden rounded-t-lg">
              <Image
                alt="Cover image"
                className="object-cover object-center"
                height="360"
                src="/placeholder.svg"
                style={{
                  aspectRatio: "640/360",
                  objectFit: "cover",
                }}
                width="640"
              />
            </div>
            <CardContent className="p-6">
              <h3 className="text-xl font-bold">Project Two: The Sequel</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Even better than the first one.
              </p>
            </CardContent>
          </Card>
          <Card>
            <div className="aspect-[16/9] overflow-hidden rounded-t-lg">
              <Image
                alt="Cover image"
                className="object-cover object-center"
                height="360"
                src="/placeholder.svg"
                style={{
                  aspectRatio: "640/360",
                  objectFit: "cover",
                }}
                width="640"
              />
            </div>
            <CardContent className="p-6">
              <h3 className="text-xl font-bold">Project Three: The Finale</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                The epic conclusion you&apos;ve been waiting for.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ProjectCard;
