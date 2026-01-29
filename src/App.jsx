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
          <p className="program-date">January 30, 2026</p>
          <p className="program-subtitle">Evening Vigil</p>
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
              <span className="section-time">6:30 PM</span>
              <h3 className="section-title">Opening Prayer</h3>
            </div>
            <p className="section-detail">Rev. Father John Smith</p>
          </div>

          <div className="program-section">
            <div className="time-title-row">
              <span className="section-time">6:40 PM</span>
              <h3 className="section-title">Scripture Reading</h3>
            </div>
            <p className="section-detail">Psalm 23: The Lord is My Shepherd</p>
            <p className="section-reader">Read by: Sarah Johnson</p>
          </div>

          <div className="program-section">
            <div className="time-title-row">
              <span className="section-time">6:50 PM</span>
              <h3 className="section-title">Hymn</h3>
            </div>
            <p className="section-detail">"Amazing Grace"</p>
          </div>

          <div className="program-section">
            <div className="time-title-row">
              <span className="section-time">7:00 PM</span>
              <h3 className="section-title">Reflections & Tributes</h3>
            </div>
            <p className="section-detail">Family and Friends share memories</p>
          </div>

          <div className="program-section">
            <div className="time-title-row">
              <span className="section-time">7:30 PM</span>
              <h3 className="section-title">Holy Rosary</h3>
            </div>
            <p className="section-detail">Led by: Rev. Father John Smith</p>
          </div>

          <div className="program-section">
            <div className="time-title-row">
              <span className="section-time">8:00 PM</span>
              <h3 className="section-title">Closing Prayer & Benediction</h3>
            </div>
          </div>

          <div className="program-section">
            <div className="time-title-row">
              <span className="section-time">8:15 PM</span>
              <h3 className="section-title">Reception</h3>
            </div>
            <p className="section-detail">Light refreshments will be served</p>
          </div>
        </div>
      ),
      background: '#f8f6f4'
    },
    {
      id: 3,
      content: (
        <div className="page-content funeral-program">
          <h1 className="program-title">Funeral Mass</h1>
          <p className="program-date">January 31, 2026</p>
          <p className="program-subtitle">Funeral Liturgy</p>
          <div className="program-divider"></div>

          <div className="program-section">
            <div className="time-title-row">
              <span className="section-time">9:30 AM</span>
              <h3 className="section-title">Gathering of Family</h3>
            </div>
            <p className="section-detail">Final viewing and private prayers</p>
          </div>

          <div className="program-section">
            <div className="time-title-row">
              <span className="section-time">10:00 AM</span>
              <h3 className="section-title">Entrance Procession</h3>
            </div>
            <p className="section-detail">Hymn: "Be Not Afraid"</p>
          </div>

          <div className="program-section">
            <div className="time-title-row">
              <span className="section-time">10:05 AM</span>
              <h3 className="section-title">Opening Rites</h3>
            </div>
            <p className="section-detail">Greeting and Sprinkling with Holy Water</p>
            <p className="section-reader">Rev. Father John Smith</p>
          </div>

          <div className="program-section">
            <div className="time-title-row">
              <span className="section-time">10:15 AM</span>
              <h3 className="section-title">Liturgy of the Word</h3>
            </div>
            <p className="section-detail">First Reading: Wisdom 3:1-9</p>
            <p className="section-detail">Responsorial Psalm: Psalm 27</p>
            <p className="section-detail">Second Reading: Romans 8:31-35, 37-39</p>
            <p className="section-detail">Gospel: John 14:1-6</p>
          </div>

          <div className="program-section">
            <div className="time-title-row">
              <span className="section-time">10:35 AM</span>
              <h3 className="section-title">Homily</h3>
            </div>
            <p className="section-detail">Rev. Father John Smith</p>
          </div>

          <div className="program-section">
            <div className="time-title-row">
              <span className="section-time">10:50 AM</span>
              <h3 className="section-title">Liturgy of the Eucharist</h3>
            </div>
            <p className="section-detail">Preparation of Gifts</p>
            <p className="section-detail">Holy Communion</p>
          </div>

          <div className="program-section">
            <div className="time-title-row">
              <span className="section-time">11:15 AM</span>
              <h3 className="section-title">Final Commendation</h3>
            </div>
            <p className="section-detail">Songs of Farewell</p>
          </div>

          <div className="program-section">
            <div className="time-title-row">
              <span className="section-time">11:25 AM</span>
              <h3 className="section-title">Recessional</h3>
            </div>
            <p className="section-detail">Hymn: "On Eagle's Wings"</p>
          </div>

          <div className="program-section">
            <div className="time-title-row">
              <span className="section-time">12:00 PM</span>
              <h3 className="section-title">Committal Service</h3>
            </div>
            <p className="section-detail">Graveside ceremony and burial</p>
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
