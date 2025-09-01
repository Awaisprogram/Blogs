// app/blogs/[id]/page.tsx (assuming this is your file path)

import React from 'react';
import { notFound } from "next/navigation";
import Image from "next/image"; // Removed StaticImageData as it's not directly used here
import blogs from "@/app/components/blogsdata"; // This should export an array of blog objects
import Instagram from "@/app/components/Instagram";
import Tag from "@/app/components/Tag";
import News from '@/app/components/News';
import Comment from "@/app/components/Comment";
import Navigation from "@/app/components/Navigation";

// Define the shape of a single blog entry
interface BlogEntry {
  id: number; // Ensure this matches the ID type in your actual blogsdata array
  title: string;
  image: string; // Assuming image is a string path (e.g., '/images/blog1.jpg')
  category: string[];
  comments: number;
  description: string;
  highlights: string;
  lower: string;
  bneath: string;
}

// Function to get a single blog's data
// Explicitly type the 'id' parameter as string
const getProjectData = (id: string): BlogEntry | undefined => {
  // Ensure that blogs from "@/app/components/blogsdata" is an array of BlogEntry
  const blog = blogs.find((p) => p.id === parseInt(id));
  return blog;
}

// Rename the component to avoid potential conflicts and improve clarity
// and explicitly type the props passed to the page component
interface BlogPostPageProps {
  params: {
    id: string; // Explicitly defining 'id' as string here
  };
}

// Change the function name to something like BlogPostPage
export default function BlogPostPage({ params }: BlogPostPageProps) {

  const blog = getProjectData(params.id);

  if (!blog) {
    notFound(); // Redirects to the closest not-found.tsx
  }

  // We can safely assert this type since we've checked for undefined
  const projectData: BlogEntry = blog; // Assert the type for better safety downstream

  return (
    <div>
      <div>
        <Navigation heading={projectData.title} />
      </div>
      <div className="container mx-auto py-8 px-4">
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="lg:w-2/3">
            <div className="bg-card shadow-md rounded-lg overflow-hidden mb-8">
              <Image
                src={projectData.image}
                alt={projectData.title} // Use blog title for better accessibility
                width={100} // Set appropriate intrinsic width
                height={50} // Set appropriate intrinsic height
                // Remove layout="responsive" if using Next.js 13+ Image component
                // It's often implied by default or controlled via fill/sizes/quality
                className="w-full h-auto object-cover"
              />
              <div className="p-6">
                <h5 className="text-3xl font-bold text-dark mb-2">
                  {projectData.title}
                </h5>
                <div className="text-gray-500 text-sm flex items-center gap-2 mb-4">
                  <i className="fas fa-user"></i> {projectData.category.join(', ')} |
                  <i className="fas fa-comment"></i> {projectData.comments} Comments
                </div>
                <p className="text-clr mb-4">
                  {projectData.description}
                </p>
                <blockquote className="bg-gray-900 p-4 italic border-l-4 border-dark text-clr mb-4">
                  {projectData.highlights}
                </blockquote>
                <p className="text-clr mb-4">
                  {projectData.lower}
                </p>
                <p className="text-clr mb-4">
                  {projectData.bneath}
                </p>
              </div>
            </div>
          </div>

          <div className="lg:w-1/3">
            <News heading='Search' />
            <Instagram />
            <Tag />
            <News heading='Newsletter' />
          </div>
        </div>
      </div>

      <Comment />
    </div>
  );
}
