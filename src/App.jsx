import React, { useState } from 'react'
import PageFlipBook from './PageFlipBook'

function App() {
  const pages = [
    {
      id: 1,
      content: (
        <div className="page-content cover-page">
          <img
            src="/PMSkariahFuneral.png"
            alt="Funeral Program Cover"
            className="cover-image"
          />
        </div>
      ),
      background: '#ffffff'
    },
    {
      id: 2,
      content: (
        <div className="page-content funeral-program">
          <h1 className="program-title">Wake Service</h1>
          <p className="program-date">January 30, 2026, Friday</p>
          <p className="program-subtitle">St. Paul's Marthoma Church, Mesquite</p>
          <div className="program-divider"></div>

          <div className="program-section">
            <div className="time-title-row">
              <span className="section-time">6:00 PM</span>
              <h3 className="section-title">Gathering & Visitation</h3>
            </div>
            <p className="section-detail">Family and friends gather to pay respects</p>
          </div>

          <div className="program-section">
            <div className="time-title-row">
              <span className="section-time">6:00 - 6:05 PM</span>
              <h3 className="section-title">Opening Prayer</h3>
            </div>
            <p className="section-detail">Rev. Rejin Raju</p>
          </div>
             <div className="program-section">
            <div className="time-title-row">
              <span className="section-time">6:05 - 6:15 PM</span>
              <h3 className="section-title">Song by Choir</h3>
            </div>
            <p className="section-detail">Visitation</p>
          </div>

          <div className="program-section">
            <div className="time-title-row">
              <span className="section-time">6:15 - 6:20 PM</span>
              <h3 className="section-title">Bible Reading</h3>
            </div>
            <p className="section-detail">Lesson 1 : 1 Corinthians 15: 12-26</p>
            <p className="section-reader">Read by: Christina Raju</p>
            <p className="section-detail">Lesson 2 : 2 Corinthians 5: 1-10</p>
            <p className="section-reader">Read by: Jijo Mathew</p>
          </div>

          <div className="program-section">
            <div className="time-title-row">
              <span className="section-time">6:20 - 8:00 PM</span>
              <h3 className="section-title">Eulogy</h3>
            </div>
            <p className="section-detail">Songs by Choir & Vistation</p>
          </div>

          <div className="program-section">
            <div className="time-title-row">
              <span className="section-time">8:00 - 8:30 PM</span>
              <h3 className="section-title">Funeral Service Part 1</h3>
            </div>
            {/* <p className="section-detail">Family and Friends share memories</p> */}
          </div>

          <div className="program-section">
            <div className="time-title-row">
              <span className="section-time">8:30 -8:40 PM</span>
              <h3 className="section-title">Announcements</h3>
            </div>
            <p className="section-detail">Info on Funeral Service</p>
          </div>

          <div className="program-section">
            <div className="time-title-row">
              <span className="section-time">8:40 - 9:10 PM</span>
              <h3 className="section-title">Final Visitation</h3>
                </div>
            <p className="section-detail">Family Visitation</p>

          
          </div>
         
        </div>
      ),
      background: '#f8f6f4'
    },
    {
      id: 3,
      content: (
        <div className="page-content funeral-program">
          <h1 className="program-title">Funeral Service</h1>
          <p className="program-date">January 31, 2026, Saturday</p>
          <p className="program-subtitle">Funeral Liturgy</p>
          <div className="program-divider"></div>

          <div className="program-section">
            <div className="time-title-row">
              <span className="section-time">9:00 - 9:05 AM</span>
              <h3 className="section-title">Opening Prayer</h3>
            </div>
            {/* <p className="section-detail">Rev. Rejin Raju</p> */}
          </div>

          <div className="program-section">
            <div className="time-title-row">
              <span className="section-time">9:05 - 9:15 AM</span>
              <h3 className="section-title">Song by Choir</h3>
            </div>
            {/* <p className="section-detail">Hymn: "Be Not Afraid"</p> */}
          </div>

          <div className="program-section">
            <div className="time-title-row">
              <span className="section-time">9:15 - 9:20 AM</span>
              <h3 className="section-title">Bible Reading</h3>
            </div>
            {/* <p className="section-detail">Greeting and Sprinkling with Holy Water</p> */}
            {/* <p className="section-reader">Read By : **</p> */}
             <p className="section-detail">Lesson 3 : John 11: 11-25</p>
            <p className="section-reader">Read by: Anju Mathew</p>
            <p className="section-detail">Lesson 4 : 1 Thessalonians 4: 13-18</p>
            <p className="section-reader">Read by: Jissy Philip</p>
          </div>

          <div className="program-section">
            <div className="time-title-row">
              <span className="section-time">9:20 - 9:50 AM</span>
              <h3 className="section-title">Funeral Service Part 2</h3>
            </div>
            {/* <p className="section-detail">First Reading: Wisdom 3:1-9</p>
            <p className="section-detail">Responsorial Psalm: Psalm 27</p>
            <p className="section-detail">Second Reading: Romans 8:31-35, 37-39</p>
            <p className="section-detail">Gospel: John 14:1-6</p> */}
          </div>

          <div className="program-section">
            <div className="time-title-row">
              <span className="section-time">9:50 - 10:00 AM</span>
              <h3 className="section-title">Song by Choir/Visitation</h3>
            </div>
            {/* <p className="section-detail">Rev. Father John Smith</p> */}
          </div>

          <div className="program-section">
            <div className="time-title-row">
              <span className="section-time">10:00 - 10:15 AM</span>
              <h3 className="section-title">Vote Of Thanks</h3>
            </div>
            <p className="section-detail">Mr & Mrs Soji and Ligy Skariah</p>
            {/* <p className="section-detail">Holy Communion</p> */}
          </div>

          <div className="program-section">
            <div className="time-title-row">
              <span className="section-time">10:15 - 10:20 AM</span>
              <h3 className="section-title">Announcement</h3>
            </div>
            <p className="section-detail">Info on Funeral Arrangement</p>
          </div>

          <div className="program-section">
            <div className="time-title-row">
              <span className="section-time">10:20 - 11:15 AM</span>
              <h3 className="section-title">Final Visitation & Family visitation</h3>
            </div>
            {/* <p className="section-detail">Hymn: "On Eagle's Wings"</p> */}
          </div>

          <div className="program-section">
            <div className="time-title-row">
              <span className="section-time">11:15 - 11:30 AM</span>
              <h3 className="section-title">Funeral Service Part 3</h3>
            </div>
            {/* <p className="section-detail">Graveside ceremony and burial</p> */}
          </div>

          <div className="program-section">
            <div className="time-title-row">
              <span className="section-time">11:30 AM- 12:30 PM</span>
              <h3 className="section-title">Funeral Procession to Cemetery</h3>
            </div>
            {/* <p className="section-detail">Graveside ceremony and burial</p> */}
          </div>

          <div className="program-section">
            <div className="time-title-row">
              <span className="section-time">12:30 - 1:00 PM</span>
              <h3 className="section-title">Closing Prayer & Benediction</h3>
            </div>
            <p className="section-detail">New Hope Funeral Home, Sunnyvale</p>
          </div>

          <div className="program-section">
            <div className="time-title-row">
              <span className="section-time">1:00 PM</span>
              <h3 className="section-title">Wake(Refreshments)</h3>
            </div>
            <p className="section-detail">New Hope Funeral Home, Sunnyvale</p>
          </div>
        </div>
      ),
      background: '#f8f6f4'
    }
  ]

  return (
    <div className="app">
      <PageFlipBook pages={pages} />
    </div>
  )
}

export default App
