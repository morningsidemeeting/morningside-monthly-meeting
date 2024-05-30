import React from "react";
import CoreLayout from "../../components/coreLayout";
import { Post } from "../../components/posts";

const BlogPost = () => {
  return (
    <CoreLayout withSubtitle={false}>
      <section>
        <p>Post template here</p>
        {/* <Post linkTitle={false} {...post} /> */}
      </section>
    </CoreLayout>
  );
};

export default BlogPost;
