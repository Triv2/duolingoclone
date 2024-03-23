"use client";


import { useTransition } from "react";
import { useRouter } from "next/navigation";

import { courses, } from "@/db/schema";


import { Card } from "./card";

type Props = {
  courses: typeof courses.$inferSelect[];
  activeCourseId?: "test",
};

export const List = ({ courses, activeCourseId }: Props) => {
  const router = useRouter();
  const [pending, startTransition] = useTransition();

  const onClick = (id: number) => {
    if (pending) return;

  };

  return (
    <div className="pt-6 grid grid-cols-2 lg:grid-cols-[repeat(auto-fill,minmax(210px,1fr))] gap-4">
      {courses.map((course) => (
        <Card
          key={course.id}
          id={course.id}
          title={course.title}
          imageSrc={course.imageSrc}
          onClick={onClick}
          disabled={pending}
          active={true}
        />
      ))}
    </div>
  );
};