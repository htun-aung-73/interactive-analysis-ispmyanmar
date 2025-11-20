import Image from 'next/image'
import React from 'react'
import { Post } from '@/library/post-content'

export default function ContentCard({ content }: { content: Post[] }) {
  return (
    <>
      {content
        .sort((a, b) => b.id - a.id)
        .map(({ id, url, postContent }: Post) => (
          <div key={id} className={'flex flex-col mb-8'}>
            <a href={url} target="_blank" rel="noopener noreferrer">
              <Image
                className={`w-full ${id === content.length ? 'md:h-[600]' : 'md:h-[300]'} object-cover`}
                src={postContent.imageUrl}
                width={'400'}
                height={'200'}
                alt={'Climate Shock'}
              />
              <div className={'mt-3'}>
                <div
                  className={'uppercase text-sm mb-1 font-medium text-gray-500'}
                >
                  {postContent.date}
                </div>
                <div className={'flex items-center'}>
                  <h4
                    className={
                      'uppercase whitespace-nowrap text-sm text-pink-700 font-bold basis-10/12 md:basis-2/5 mr-3'
                    }
                  >
                    {postContent.category}
                  </h4>
                  <div className={'w-full h-[6] bg-pink-700'}></div>
                </div>
                <div>
                  <h3 className={'font-bold text-2xl my-3'}>
                    {postContent.title}
                  </h3>
                  {postContent.subtitle && (
                    <h4 className={'font-bold text-lg my-3'}>
                      {postContent.subtitle}
                    </h4>
                  )}
                  <p>{postContent.description}</p>
                </div>
              </div>
            </a>
          </div>
        ))}
    </>
  )
}
