import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Head from "next/head";

import { allBlogs } from "/.contentlayer/generated";
import { Mdx } from "/components/mdx-components.tsx";
import Nav from "../../components/Nav";
import Footer from "../../components/Footer";
import ImageRow from "../../components/ImageRow";
import Goals from "../../components/Goals";

import ReactImageGallery from "react-image-gallery";
import DateFormatter from "../../utils/DateFormatter";

const Blog = () => {
  const router = useRouter();
  const [blog, setBlog] = useState(null);
  const blogID = router.query.blog;
  const [images, setImages] = useState([]);

  useEffect(() => {
    const foundBlog = allBlogs.find((blog) => blog.slugAsParams === blogID);
    if (foundBlog) {
      setBlog(foundBlog);
      const fetchImages = async () => {
        try {
          const response = await fetch(
            `/api/blogimages?folder=${foundBlog?.slug}`
          );
          const data = await response.json();
          setImages(data.images);
        } catch (error) {
          console.error("Error fetching images:", error);
        }
      };
      fetchImages();
    }
  }, [blogID, router]);

  let updatedImages = [];
  if (images && images) {
    updatedImages = images.map((image, index) => ({
      original: blog.slug + "/" + image,
      thumbnail: blog.slug + "/" + image,
    }));
  }

  return (
    <>
      <Head>
        <title>RNIT | Blog{blog && " | " + blog.title}</title>
        <meta property="og:url" content="https://rnit-tesda.org/blogs" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="RNIT | Blogs" />
        <meta property="og:description" content="RNIT latest blogs" />
        <meta
          property="og:image"
          content="https://rnit-tesda.org/images/charter.png"
        />
      </Head>
      <Nav />

      {blog && (
        <article className="inside max-w-5xl my-12 lg:my-16">
          {images && (
            <ReactImageGallery
              items={updatedImages}
              additionalClass="responsive-thumbnail-gallery max-w-3xl mx-auto"
            />
          )}
          <h2 className="text-2xl lg:text-4xl text-secondary font-bold uppercase mb-4 mt-6 lg:mt-16 md:leading-loose">
            {blog.title}
          </h2>
          <p className="text-black/50 italic">
            <DateFormatter dateString={blog.date} />
          </p>
          <div className="p-content mt-4 lg:mt-12">
            <Mdx code={blog.body.code} />
          </div>
          {blog.tags && blog.tags.length > 0 && (
            <div className="my-6 md:my-12 text-left space-y-1">
              {item.tags.map((tag, i) => (
                <div key={i} className="text-blue-600 italic">
                  #{tag}
                </div>
              ))}
            </div>
          )}
        </article>
      )}
      <ImageRow variant="bg-pattern-2">
        <Goals />
      </ImageRow>
      <Footer />
    </>
  );
};

export default Blog;
