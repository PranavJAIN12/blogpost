import fs from "fs";
import matter from "gray-matter";
import { notFound } from "next/navigation";
import rehypeDocument from 'rehype-document'
import rehypeFormat from 'rehype-format'
import rehypeStringify from 'rehype-stringify'
import remarkParse from 'remark-parse'
import remarkRehype from 'remark-rehype'
import {unified} from 'unified'
import rehypePrettyCode from "rehype-pretty-code";
import { transformerCopyButton } from '@rehype-pretty/transformers'

export default async function Page({ params }) {

  
  const filePath = `content/${params.slug}.md`

  if(!fs.existsSync(filePath)){
    console.log("file not found")
    console.log(params.slug)
    notFound()
    return;
  }
  const fileContent = fs.readFileSync(filePath, "utf-8");
  const { content, data } = matter(fileContent);

  const processor =  unified()
  .use(remarkParse)
  .use(remarkRehype)
  .use(rehypeDocument, {title: '👋🌍'})
  .use(rehypeFormat)
  .use(rehypeStringify)
  .use(rehypePrettyCode, {
    transformers: [
      transformerCopyButton({
        visibility: 'always',
        feedbackDuration: 3_000,
      }),
    ],
    theme:'github-dark'
  })

  const htmlContent = (await processor.process(content)).toString()

  return (
    <div className="max-w-4xl mx-auto p-6">
      {/* Title */}
      <h1 className="text-4xl font-extrabold mb-6">{data.title}</h1>

      {/* Description */}
      <p className="text-xl mb-4 border-l-4 border-gray-300 pl-4 italic">
        {data.description}
      </p>

      {/* Author and Date */}
      <div className="flex items-center mb-6 gap-4">
        <h2 className="text-lg font-medium text-gray-500">By {data.author}</h2>
        <p className="text-md text-gray-500">{data.date}</p>
      </div>

      {/* Blog Content */}
      <div
        dangerouslySetInnerHTML={{ __html: htmlContent }}
        className="prose prose-lg dark:prose-invert leading-relaxed"
      ></div>
    </div>
  );
}
