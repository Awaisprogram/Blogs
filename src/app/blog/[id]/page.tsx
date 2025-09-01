import React from 'react'
import { notFound } from "next/navigation";
import Image, { StaticImageData }  from "next/image";
import blogs from "@/app/components/blogsdata";
import Instagram from "@/app/components/Instagram";
import Tag from "@/app//components/Tag";
import News from '@/app//components/News'
import Comment from "@/app//components/Comment";
import Navigation from "@/app//components/Navigation";


const getProjectData = (id) => {
    
  const blog = blogs.find((p) => p.id === parseInt(id));
  return blog;
}


function blogsdata({ params }: { params: { id } }) {

  const blog = getProjectData(params.id);

  if (!blog) {
    notFound();
  }

  // We can safely assert this type since we've checked for undefined
  const projectData = blog;

  return (
    <div>
      <div>
        <Navigation heading={projectData.title}/>
      </div>
      <div className="container mx-auto py-8 px-4">
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="lg:w-2/3">
            <div className="bg-card shadow-md rounded-lg overflow-hidden mb-8">
              <Image
                src={projectData.image}
                alt="Blog 1"
                layout="responsive"
                width={100}
                height={50}
                className="w-full  h-auto"
              />
              <div className="p-6">
                <h5 className="text-3xl font-bold text-dark mb-2">
                {projectData.title}
                </h5>
                <div className="text-gray-500 text-sm flex items-center gap-2 mb-4">
                  <i className="fas fa-user"></i> {projectData.category.join(', ')}|
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
            <News heading='Newslatter' />
          </div>
        </div>
      </div>
      
      <Comment/>
    </div>
  )
}

export default blogsdata
