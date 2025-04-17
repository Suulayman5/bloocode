'use client'

import React from 'react'
import { useQuery } from '@tanstack/react-query'
import { fetchEpisodes, fetchNewEpisode, fetchTrending } from '../api/axios'
import { Audio } from 'react-loader-spinner'
import Image from 'next/image'

const Landing = () => {
  const { isLoading, error, data: episode } = useQuery({
    queryKey: ['repoData'],
    queryFn: fetchEpisodes,
  })

  const { data: trending } = useQuery({
    queryKey: ['trendingData'],
    queryFn: fetchTrending,
  })

  const { data: newEpisode } = useQuery({
    queryKey: ['trendingNew'],
    queryFn: fetchNewEpisode,
  })

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <Audio height="30" width="50" color="black" ariaLabel="loading" />
      </div>
    )
  }

  if (error) {
    return (
      <div className="flex justify-center items-center h-screen text-[#282828]">
        <div>{(error as Error).message}</div>
      </div>
    )
  }

  const episodes = episode?.data?.data ?? []
  const trendings = trending?.data?.data ?? []
  const newEpisodes = newEpisode?.data?.data ?? []

  return (
    <>
      {/* EDITOR'S PICK */}
      <section className="py-8 px-4 md:px-16 bg-[#F6F6F6]">
        <div className="mb-6">
          <p className="text-[#282828] text-2xl font-bold">EDITOR’S PICKS</p>
          <p className="text-[#5A5A5A] text-base font-semibold">Featured Episodes</p>
        </div>

        <div className="flex flex-col md:flex-row gap-8">
          {/* Left Large Featured */}
          <div className="relative md:w-[680px] w-full h-[571px] rounded-lg overflow-hidden border">
            {episodes[0] && (
              <>
                <Image
                  src={episodes[0].picture_url}
                  alt="episode"
                  fill
                  className="object-cover"
                />
                <div className="absolute bottom-0 left-0 w-full p-4 bg-black/60 text-white text-lg font-bold flex items-center gap-2">
                  <Image src="/images/Liveplaybutton.png" width={40} height={20} alt="play" />
                  {episodes[0].title}
                </div>
              </>
            )}
          </div>

          {/* Right Cards */}
          <div className="flex flex-col gap-2">
            <div className="flex gap-4 h-[424px]">
              {[episodes[1], episodes[2]].map(
                (ep, i) =>
                  ep && (
                    <div key={i} className="rounded-md w-[317px] border shadow-md">
                      <div className="relative w-full h-[288px] rounded-t-md overflow-hidden">
                        <Image src={ep.picture_url} alt="episode" fill className="object-cover" />
                      </div>
                      <div className="p-3 bg-white h-[136px] relative">
                        <div className="flex items-center gap-2">
                          <Image
                            src="/images/Liveplaybutton.png"
                            width={30}
                            height={20}
                            alt="play"
                          />
                          <p className="text-[#282828] font-bold text-sm">{ep.title}</p>
                        </div>
                        <p className="text-[#979797] text-xs mt-2">
                          {new Intl.DateTimeFormat('en-US', {
                            month: 'short',
                            day: 'numeric',
                            year: 'numeric',
                          }).format(new Date(ep.updated_at))}{' '}
                          | {ep.duration || '55'} mins
                        </p>
                      </div>
                    </div>
                  )
              )}
            </div>

            {/* Ad section */}
            <div className="w-full h-[114px]">
              <p className="text-[#5A5A5A] text-[11px] mb-1 text-right">ADVERTISEMENT</p>
              <Image
                src="/images/Rectangle44.png"
                width={660}
                height={150}
                alt="ads"
                className="rounded"
              />
            </div>
          </div>
        </div>
      </section>

      {/* TRENDING */}
      <section className="py-8 px-4 md:px-16 bg-[#F6F6F6]">
        <div className="mb-6">
          <p className="text-[#282828] text-2xl font-bold">Trending this week</p>
          <p className="text-[#5A5A5A] text-base font-semibold">Featured Episodes</p>
        </div>

        <div className="overflow-x-auto flex gap-4">
          {trendings.map((ep, i) => (
            <div
              key={i}
              className="rounded-md min-w-[317px] border shadow-md relative overflow-hidden"
            >
              <div className="relative w-[307px] h-[288px]">
                <Image src={ep.picture_url} alt="episode" fill className="object-cover" />
              </div>
              <div className="absolute bottom-0 left-0 w-full p-4 bg-black/70 text-white">
                <p className="text-sm">22 episodes</p>
                <p className="text-lg font-semibold">{ep.title}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* NEWLY ADDED */}
      <section className="py-8 px-4 md:px-16 bg-[#F6F6F6]">
        <div className="mb-6">
          <p className="text-[#282828] text-2xl font-bold">Newly added Episodes</p>
        </div>

        <div className="overflow-x-auto flex gap-4">
          {newEpisodes.map((ep, i) => (
            <div
              key={i}
              className="rounded-md min-w-[317px] border shadow-md overflow-hidden"
            >
              <div className="relative w-[223px] h-[187px]">
                <Image src={ep.picture_url} alt="episode" fill className="object-cover" />
              </div>
              <div className="p-3 bg-white">
                <p className="text-[#979797] text-xs">
                  {new Intl.DateTimeFormat('en-US', {
                    month: 'short',
                    day: 'numeric',
                    year: 'numeric',
                  }).format(new Date(ep.updated_at))}{' '}
                  | {ep.duration || '55'} mins
                </p>
                <p className="text-[#282828] text-base font-bold mt-2">{ep.title}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className='py-8 px-4 md:px-16'>
        <div className="w-full h-[64px] flex items-center bg-[#F0E4FF]">
            <p className="text-[24px] font-bold text-[#282828] pl-10">LISTEN BY ABR CATEGORIES</p>
        </div>
        <div className="my-14">
          <p className="text-[#282828] text-2xl font-bold">News & Storytelling</p>
        </div>

        <div className="overflow-x-auto flex gap-4 bg-[#F4F4F4] shadow-2xl">
          {newEpisodes.map((ep, i) => (
            <div
              key={i}
              className="rounded-md min-w-[317px] border shadow-md overflow-hidden"
            >
              <div className="relative w-[223px] h-[187px]">
                <Image src={ep.picture_url} alt="episode" fill className="object-cover" />
              </div>
              <div className="p-3 ">
                <p className="text-[#282828] text-base font-bold mt-2">{ep.title}</p>
                <div className=""></div>
              </div>
            </div>
          ))}
        </div>
        <div className="overflow-x-auto flex justify-center items-center gap-4 bg-[#F4F4F4] shadow-2xl">
          {newEpisodes.map((ep, i) => (
            <div
              key={i}
              className="rounded-md min-w-[317px] border shadow-md overflow-hidden"
            >
              <div className="relative w-[223px] h-[187px]">
                <Image src={ep.picture_url} alt="episode" fill className="object-cover" />
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-8 px-4 md:px-16 bg-[#F6F6F6]">
        <div className="mb-6">
            <p className="text-[#282828] text-2xl font-bold">Newly added Episodes</p>
            </div>

            <div className="overflow-x-auto flex gap-4">
            {newEpisodes.map((ep, i) => (
                <div
                key={i}
                className="rounded-md min-w-[317px] border shadow-md overflow-hidden"
                >
                <div className="relative w-[223px] h-[187px]">
                    <Image src={ep.picture_url} alt="episode" fill className="object-cover" />
                </div>
                <div className="p-3 bg-white">
                    <p className="text-[#979797] text-xs">
                    {new Intl.DateTimeFormat('en-US', {
                        month: 'short',
                        day: 'numeric',
                        year: 'numeric',
                    }).format(new Date(ep.updated_at))}{' '}
                    | {ep.duration || '55'} mins
                    </p>
                    <p className="text-[#282828] text-base font-bold mt-2">{ep.title}</p>
                </div>
                </div>
            ))}
            </div>
      </section>

      <section className="py-8 px-4 md:px-16 bg-[#F6F6F6]">
        <div className="mb-6">
            <p className="text-[#282828] text-2xl font-bold">Newly added Episodes</p>
            </div>

            <div className="overflow-x-auto flex gap-4">
            {newEpisodes.map((ep, i) => (
                <div
                key={i}
                className="rounded-md min-w-[317px] border shadow-md overflow-hidden"
                >
                <div className="relative w-[223px] h-[187px]">
                    <Image src={ep.picture_url} alt="episode" fill className="object-cover" />
                </div>
                <div className="p-3 bg-white">
                    <p className="text-[#979797] text-xs">
                    {new Intl.DateTimeFormat('en-US', {
                        month: 'short',
                        day: 'numeric',
                        year: 'numeric',
                    }).format(new Date(ep.updated_at))}{' '}
                    | {ep.duration || '55'} mins
                    </p>
                    <p className="text-[#282828] text-base font-bold mt-2">{ep.title}</p>
                </div>
                </div>
            ))}
            </div>
      </section>

      <section className="py-8 px-4 md:px-16 bg-[#F6F6F6]">
        <div className="mb-6">
            <p className="text-[#282828] text-2xl font-bold">Newly added Episodes</p>
            </div>

            <div className="overflow-x-auto flex gap-4">
            {newEpisodes.map((ep, i) => (
                <div
                key={i}
                className="rounded-md min-w-[317px] border shadow-md overflow-hidden"
                >
                <div className="relative w-[223px] h-[187px]">
                    <Image src={ep.picture_url} alt="episode" fill className="object-cover" />
                </div>
                <div className="p-3 bg-white">
                    <p className="text-[#979797] text-xs">
                    {new Intl.DateTimeFormat('en-US', {
                        month: 'short',
                        day: 'numeric',
                        year: 'numeric',
                    }).format(new Date(ep.updated_at))}{' '}
                    | {ep.duration || '55'} mins
                    </p>
                    <p className="text-[#282828] text-base font-bold mt-2">{ep.title}</p>
                </div>
                </div>
            ))}
            </div>
      </section>

      <section className="py-8 px-4 md:px-16 bg-[#F6F6F6]">
        <div className="mb-6">
            <p className="text-[#282828] text-2xl font-bold">Newly added Episodes</p>
            </div>

            <div className="overflow-x-auto flex gap-4">
            {newEpisodes.map((ep, i) => (
                <div
                key={i}
                className="rounded-md min-w-[317px] border shadow-md overflow-hidden"
                >
                <div className="relative w-[223px] h-[187px]">
                    <Image src={ep.picture_url} alt="episode" fill className="object-cover" />
                </div>
                <div className="p-3 bg-white">
                    <p className="text-[#979797] text-xs">
                    {new Intl.DateTimeFormat('en-US', {
                        month: 'short',
                        day: 'numeric',
                        year: 'numeric',
                    }).format(new Date(ep.updated_at))}{' '}
                    | {ep.duration || '55'} mins
                    </p>
                    <p className="text-[#282828] text-base font-bold mt-2">{ep.title}</p>
                </div>
                </div>
            ))}
            </div>
      </section>

      <section className="py-12 px-4 md:px-16 bg-[#F6E8E8] flex flex-col md:flex-row items-center justify-between gap-10">
        {/* Left Content */}
        <div className="max-w-xl space-y-5">
            <div className="max-w-[362px]">
                <p className="text-[#282828] text-[32px] font-extrabold">Never stop listening!</p>
                <p className="text-[#282828] text-[24px] mt-3 font-medium">
                Every episodes is a journey you don’t wanna miss out on.
                </p>
            </div>
                <p className="text-[#5A5A5A] mt-10 text-base max-w-[487px]">
                Get the latest headlines and unique ABR stories, sent every weekday.
                </p>

            {/* Email Form */}
            <div className="flex items-center gap-2 w-full max-w-md">
            <input
                type="text"
                placeholder="Enter your email"
                className="flex-1 py-3 px-4 rounded-l-md bg-[#D9D9D9] placeholder:text-[#5A5A5A] focus:outline-none"
            />
            <button className="bg-[#D00000] text-white px-4 py-3 rounded-r-md font-bold">
                Get me in
            </button>
            <Image
                src="/images/alert-circle.png"
                width={20}
                height={20}
                alt="info"
                className="ml-1"
            />
            </div>
        </div>

        {/* Right Content */}
        <div className="relative w-[350px] h-[350px]">
            {/* Large Circle - Woman */}
            <Image
            src="/images/Ellipse39.png"
            alt="woman listening"
            fill
            className="rounded-full object-cover"
            />

            {/* Smaller Circle - Man */}
            <div className="absolute bottom-[-10px] left-[-60px] w-[190px] h-[190px]">
            <Image
                src="/images/Ellipse40.png"
                alt="man with laptop"
                fill
                className="object-cover"
            />
            </div>

            {/* Tablet beside main image */}
            <div className="absolute top-[60%] left-[-100px] w-[80px] h-[50px]">
            <Image
                src="/images/image23.png"
                alt="tablet"
                fill
                className="object-contain"
            />
            </div>
            <div className="absolute top-[5%] left-[280px] w-[80px] h-[50px]">
            <Image
                src="/images/image22.png"
                alt="tablet"
                fill
                className="object-contain"
            />
            </div>
        </div>
      </section>

      <section className='py-14 px-4 md:px-16 bg-white flex flex-col '>
        <div className="flex justify-center items-center">
            <p className="text-[#282828] text-[24px]">OUR GLOBAL PARTNERS</p>
        </div>
        <div className="flex gap-4 w-[1078px] items-center justify-around">
            <Image src='/images/image5.png' width={170} height={20} alt='partner'/>
            {/* <div className='bg-transparent text-gray-700'> */}

            <Image src='/images/image17.png' width={300} height={20} alt='partner' />
            {/* </div> */}
            <Image src='/images/image16.png' width={170} height={20} alt='partner'/>
            <Image src='/images/image12.png' width={200} height={20} alt='partner'/>
        </div>
        <div className="flex gap-4 w-[1117px] justify-around">
            <Image src='/images/image18.png' width={100} height={20} alt='partner'/>
            <Image src='/images/image10.png' width={100} height={20} alt='partner'/>
            <Image src='/images/image14.png' width={200} height={20} alt='partner' />
            <Image src='/images/image9.png' width={100} height={20} alt='partner'/>
            <Image src='/images/image15.png' width={100} height={20} alt='partner'/>
        </div>
        <div className="flex gap-4 w-[1262pxj justify-around">
            <Image src='/images/image21.png' width={100} height={20} alt='partner'/>
            <Image src='/images/image7.png' width={100} height={20} alt='partner'/>
            <Image src='/images/image13.png' width={200} height={20} alt='partner' />
            <Image src='/images/image19.png' width={100} height={20} alt='partner'/>
            <Image src='/images/image15.png' width={100} height={20} alt='partner'/>
            <Image src='/images/image20.png' width={100} height={20} alt='partner'/>
        </div>
      </section>


    </>
  )
}

export default Landing
