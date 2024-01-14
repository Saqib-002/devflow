import Image from "next/image";
import Link from "next/link";
import React from "react";
import RenderTag from "../RenderTag";

const hotQ = [
  {
    _id: 1,
    title: "How do i use express as a custom server in NextJS?",
  },
  {
    _id: 2,
    title: "How do i use express as a custom server in NextJS?",
  },
  {
    _id: 3,
    title: "How do i use express as a custom server in NextJS?",
  },
  {
    _id: 4,
    title: "How do i use express as a custom server in NextJS?",
  },
  {
    _id: 5,
    title: "How do i use express as a custom server in NextJS?",
  },
];
const popularTags = [
  { _id: 1, name: "javascript", totalQuestions: 10 },
  { _id: 2, name: "javascript", totalQuestions: 10 },
  { _id: 3, name: "javascript", totalQuestions: 10 },
  { _id: 4, name: "javascript", totalQuestions: 10 },
  { _id: 5, name: "javascript", totalQuestions: 10 },
];
function RightSidebar() {
  return (
    <section className="background-light900_dark200 light-border sticky right-0 top-0 flex h-screen w-[350px] flex-col overflow-y-auto border-l p-6 pt-36 shadow-light-300 max-xl:hidden dark:shadow-none">
      <div>
        <h3 className="text-dark200_light900 h3-bold">Top Questions</h3>
        <div className="mt-7 flex w-full flex-col gap-[30px]">
          {hotQ.map((question) => {
            return (
              <Link
                href={`/questions/${question._id}`}
                key={question._id}
                className="flex cursor-pointer items-center justify-between gap-7"
              >
                <p className="paragraph-medium text-dark500_light700">
                  {question.title}
                </p>
                <Image
                  src="/assets/icons/chevron-right.svg"
                  alt="chevron right"
                  width={20}
                  height={20}
                  className="invert-colors"
                />
              </Link>
            );
          })}
        </div>
      </div>
      <div className="mt-16">
        <h3 className="text-dark200_light900 h3-bold">Popular Tags</h3>
        <div className="mt-7 flex flex-col gap-4">
          {popularTags.map((tag) => (
            <RenderTag
              key={tag._id}
              id={tag._id}
              name={tag.name}
              totalQuestions={tag.totalQuestions}
              showCount
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default RightSidebar;
