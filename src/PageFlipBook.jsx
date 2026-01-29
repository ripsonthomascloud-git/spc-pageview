import React, { useState, useEffect, useRef } from 'react'

const PageFlipBook = ({ pages }) => {
  const [currentPage, setCurrentPage] = useState(0)
  const [isFlipping, setIsFlipping] = useState(false)
  const [flipDirection, setFlipDirection] = useState(null)
  const [isMobile, setIsMobile] = useState(false)
  const touchStartX = useRef(0)
  const touchEndX = useRef(0)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768)
    }

    checkMobile()
    window.addEventListener('resize', checkMobile)

    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  const nextPage = () => {
    if (currentPage < pages.length - 1 && !isFlipping) {
      setFlipDirection('next')
      setIsFlipping(true)
      setTimeout(() => {
        setCurrentPage(currentPage + 1)
        setIsFlipping(false)
        setFlipDirection(null)
      }, 600)
    }
  }

  const prevPage = () => {
    if (currentPage > 0 && !isFlipping) {
      setFlipDirection('prev')
      setIsFlipping(true)
      setTimeout(() => {
        setCurrentPage(currentPage - 1)
        setIsFlipping(false)
        setFlipDirection(null)
      }, 600)
    }
  }

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX
  }

  const handleTouchMove = (e) => {
    touchEndX.current = e.touches[0].clientX
  }

  const handleTouchEnd = () => {
    const swipeDistance = touchStartX.current - touchEndX.current
    const minSwipeDistance = 50

    if (Math.abs(swipeDistance) > minSwipeDistance) {
      if (swipeDistance > 0) {
        nextPage()
      } else {
        prevPage()
      }
    }
  }

  const handleCornerClick = (direction) => {
    if (direction === 'next') {
      nextPage()
    } else {
      prevPage()
    }
  }

  const handleCornerTouch = (e, direction) => {
    e.stopPropagation()
    handleCornerClick(direction)
  }

  const renderPage = (pageIndex, position) => {
    if (pageIndex < 0 || pageIndex >= pages.length) return null

    const page = pages[pageIndex]
    const isCurrentLeft = position === 'left' && pageIndex === currentPage
    const isCurrentRight = position === 'right' && pageIndex === currentPage
    const isFlippingPage = isFlipping && (
      (flipDirection === 'next' && position === 'right' && pageIndex === currentPage) ||
      (flipDirection === 'prev' && position === 'left' && pageIndex === currentPage)
    )

    const showLeftCorner = position === 'left' && currentPage > 0
    const showRightCorner = (position === 'right' && currentPage < pages.length - 1) ||
                            (position === 'single' && currentPage < pages.length - 1)
    const showMobileLeftCorner = position === 'single' && currentPage > 0

    return (
      <div
        className={`book-page ${position} ${isFlippingPage ? `flip-${flipDirection}` : ''}`}
        style={{ background: page.background }}
      >
        <div className="page-inner">
          {page.content}
        </div>

        {/* Bottom-left corner for going back */}
        {(showLeftCorner || showMobileLeftCorner) && (
          <div
            className="page-corner corner-left"
            onClick={() => handleCornerClick('prev')}
            onTouchStart={(e) => handleCornerTouch(e, 'prev')}
          >
            <div className="corner-fold"></div>
            <div className="corner-shadow"></div>
            <div className="corner-hint">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span>Previous</span>
            </div>
          </div>
        )}

        {/* Bottom-right corner for going forward */}
        {showRightCorner && (
          <div
            className="page-corner corner-right"
            onClick={() => handleCornerClick('next')}
            onTouchStart={(e) => handleCornerTouch(e, 'next')}
          >
            <div className="corner-fold"></div>
            <div className="corner-shadow"></div>
            <div className="corner-hint">
              <span>Next</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </div>
        )}
      </div>
    )
  }

  return (
    <div className="book-container">
      <div className="book-header">
        <h3 className="page-counter">
          Page {currentPage + 1} of {pages.length}
        </h3>
      </div>

      <div
        className={`book ${isMobile ? 'mobile' : 'desktop'}`}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {isMobile ? (
          <div className="mobile-page-container">
            {renderPage(currentPage, 'single')}
          </div>
        ) : (
          <>
            <div className="page-spread">
              {renderPage(currentPage, 'left')}
              {renderPage(currentPage + 1, 'right')}
            </div>
          </>
        )}
      </div>

      <div className="navigation">
        <button
          className="nav-button prev"
          onClick={prevPage}
          disabled={currentPage === 0 || isFlipping}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          Previous
        </button>

        <div className="page-dots">
          {pages.map((_, index) => (
            <span
              key={index}
              className={`dot ${index === currentPage ? 'active' : ''}`}
              onClick={() => {
                if (!isFlipping && index !== currentPage) {
                  setFlipDirection(index > currentPage ? 'next' : 'prev')
                  setIsFlipping(true)
                  setTimeout(() => {
                    setCurrentPage(index)
                    setIsFlipping(false)
                    setFlipDirection(null)
                  }, 600)
                }
              }}
            />
          ))}
        </div>

        <button
          className="nav-button next"
          onClick={nextPage}
          disabled={currentPage === pages.length - 1 || isFlipping}
        >
          Next
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>
    </div>
  )
}

export default PageFlipBook
