"use client"; // Add this directive to make it a client component

import React, { useState } from "react";

const feeds = [
  {
    id: 1,
    imageUrl: "/path-to-image1.jpg",
    video: true,
    videoUrl: "https://www.youtube.com/embed/OwR74xSMX_Y",
    videoId: "OwR74xSMX_Y",
    instagramUrl: "https://www.instagram.com/example2",
  },
  {
    id: 2,
    imageUrl: "/path-to-image2.jpg",
    video: true,
    videoUrl: "https://www.youtube.com/embed/OwR74xSMX_Y",
    videoId: "OwR74xSMX_Y",
    instagramUrl: "https://www.instagram.com/example2",
  },
  {
    id: 3,
    imageUrl: "/path-to-image3.jpg",
    video: true,
    videoUrl: "https://www.youtube.com/embed/OwR74xSMX_Y",
    videoId: "OwR74xSMX_Y",
    instagramUrl: "https://www.instagram.com/example2",
  },
  {
    id: 4,
    imageUrl: "/path-to-image4.jpg",
    video: true,
    videoUrl: "https://www.youtube.com/embed/OwR74xSMX_Y",
    videoId: "OwR74xSMX_Y",
    instagramUrl: "https://www.instagram.com/example4",
  },
  {
    id: 5,
    imageUrl: "/path-to-image5.jpg",
    video: true,
    videoUrl: "https://www.youtube.com/embed/OwR74xSMX_Y",
    videoId: "OwR74xSMX_Y",
    instagramUrl: "https://www.instagram.com/example5",
  },
  {
    id: 6,
    imageUrl: "/path-to-image6.jpg",
    video: true,
    videoUrl: "https://www.youtube.com/embed/OwR74xSMX_Y",
    videoId: "OwR74xSMX_Y",
    instagramUrl: "https://www.instagram.com/example2",
  },
  {
    id: 7,
    imageUrl: "/path-to-image6.jpg",
    video: true,
    videoUrl: "https://www.youtube.com/embed/OwR74xSMX_Y",
    videoId: "OwR74xSMX_Y",
    instagramUrl: "https://www.instagram.com/example2",
  },
];

const Feeds: React.FC = () => {
  const [playingVideos, setPlayingVideos] = useState<{
    [key: string]: boolean;
  }>({});

  const togglePlay = (id: number) => {
    setPlayingVideos((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    alert("Instagram link copied to clipboard!");
  };

  return (
    <>
      <div className="py-8 bg-white">
        <h2 className="text-center text-2xl font-bold mb-4 bg-white text-black py-4">
          LIVE FEEDS
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-7  px-4">
          {feeds.map((feed) => (
            <div
              key={feed.id}
              className="relative w-full h-64 md:h-80 bg-gray-200  overflow-hidden shadow-lg"
            >
              {feed.video ? (
                <>
                  {playingVideos[feed.id] ? (
                    <iframe
                      width="100%"
                      height="100%"
                      src={feed.videoUrl}
                      title={`Feed ${feed.id}`}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  ) : (
                    <>
                      <img
                        src={`https://img.youtube.com/vi/${feed.videoId}/hqdefault.jpg`}
                        alt={`Feed ${feed.id}`}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <button
                          className="text-slate-500 rounded-full p-2"
                          onClick={() => togglePlay(feed.id)}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="32"
                            height="32"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="lucide lucide-circle-play"
                          >
                            <circle cx="12" cy="12" r="10" />
                            <polygon points="10 8 16 12 10 16 10 8" />
                          </svg>
                        </button>
                      </div>
                    </>
                  )}
                </>
              ) : (
                <img
                  src={feed.imageUrl}
                  alt={`Feed ${feed.id}`}
                  className="w-full h-full object-cover"
                />
              )}
              {/* Instagram Icon */}
              <a
                href={feed.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute right-2 bottom-2"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-pink-500"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </a>
              {/* Copy Icon */}
              <button
                onClick={() => copyToClipboard(feed.instagramUrl)}
                className="absolute left-2 bottom-2"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-gray-700"
                >
                  <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
                  <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
                </svg>
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Feeds;
