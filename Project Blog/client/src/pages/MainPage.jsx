import React from "react";
import AboutPage from "./AboutPage";
import ContactMePage from "./ContactMePage";
import { PostsSlides } from "../components/PostsSlides";

export const MainPage = () => {
  return (
    <div className="mx-auto py-10">
      <div className="flex justify-between gap-8">
        <div className="flex flex-col gap-10 basis-4/5">
          <AboutPage />

          <PostsSlides />
          <ContactMePage />
        </div>
      </div>
    </div>
  );
};
