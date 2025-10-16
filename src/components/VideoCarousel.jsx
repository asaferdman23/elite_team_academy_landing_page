import { motion, AnimatePresence } from 'framer-motion'
import { useEffect, useState } from 'react'

const VideoCarousel = ({ isOpen, onClose }) => {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0)
  
  // Define your videos here - you can use local videos or YouTube embeds
  const videos = [
    {
      id: 1,
      type: "local", // or "youtube"
      src: "/assets/hero-video.mp4", // or YouTube embed URL
      thumbnail: "/assets/team.JPEG"
    },
    {
      id: 2,
      type: "local",
      src: "/assets/movie_hero.MOV",
      thumbnail: "/assets/team_work.JPEG"
    },
    {
      id: 3,
      type: "local",
      src: "/assets/hero-video.mp4",
      thumbnail: "/assets/focus.JPG"
    }
  ]

  const nextVideo = () => {
    setCurrentVideoIndex((prev) => (prev + 1) % videos.length)
  }

  const prevVideo = () => {
    setCurrentVideoIndex((prev) => (prev - 1 + videos.length) % videos.length)
  }

  const goToVideo = (index) => {
    setCurrentVideoIndex(index)
  }

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }

    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        onClose()
      }
    }

    if (isOpen) {
      window.addEventListener('keydown', handleEscape)
    }

    return () => {
      window.removeEventListener('keydown', handleEscape)
    }
  }, [isOpen, onClose])

  const currentVideo = videos[currentVideoIndex]

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: 'spring', duration: 0.5 }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-6xl aspect-video bg-navy-900 rounded-2xl overflow-hidden shadow-2xl"
          >
            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute top-4 left-4 z-20 w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-colors flex items-center justify-center text-white"
              aria-label="סגור"
            >
              <svg className="w-6 h-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                <path d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>

            {/* Video title */}
            <div className="absolute top-4 right-4 z-20 bg-black/50 backdrop-blur-sm px-4 py-2 rounded-lg">
              <h3 className="text-white font-bold text-lg">{currentVideo.title}</h3>
            </div>

            {/* Navigation arrows */}
            <button
              onClick={prevVideo}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-colors flex items-center justify-center text-white"
              aria-label="סרטון קודם"
            >
              <svg className="w-6 h-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                <path d="M15 19l-7-7 7-7"></path>
              </svg>
            </button>

            <button
              onClick={nextVideo}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-colors flex items-center justify-center text-white"
              aria-label="סרטון הבא"
            >
              <svg className="w-6 h-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                <path d="M9 5l7 7-7 7"></path>
              </svg>
            </button>

            {/* Video content */}
            <div className="w-full h-full flex items-center justify-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentVideoIndex}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.3 }}
                  className="w-full h-full"
                >
                  {currentVideo.type === 'local' ? (
                    <video
                      className="w-full h-full object-cover"
                      controls
                      autoPlay
                      muted
                      key={currentVideo.src}
                    >
                      <source src={currentVideo.src} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  ) : (
                    <iframe
                      className="w-full h-full"
                      src={currentVideo.src}
                      title={currentVideo.title}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  )}
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Video thumbnails/dots */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-20 flex gap-2">
              {videos.map((video, index) => (
                <button
                  key={video.id}
                  onClick={() => goToVideo(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === currentVideoIndex 
                      ? 'bg-gold-500 scale-125' 
                      : 'bg-white/50 hover:bg-white/70'
                  }`}
                  aria-label={`עבור לסרטון ${index + 1}`}
                />
              ))}
            </div>

            {/* Video counter */}
            <div className="absolute bottom-4 right-4 z-20 bg-black/50 backdrop-blur-sm px-3 py-1 rounded-lg">
              <span className="text-white text-sm">
                {currentVideoIndex + 1} / {videos.length}
              </span>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default VideoCarousel
