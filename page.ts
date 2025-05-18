//about

import Header from "@/components/header"
import Footer from "@/components/footer"
import Image from "next/image"

export default function AboutMe() {
  return (
    <>
      <Header />

      <main>
        <section className="about-hero">
          <div className="about-hero-content">
            <h1>About Me</h1>
            <p className="subtitle">Get to know me better</p>
          </div>
        </section>

        <section className="about-content">
          <div className="about-grid">
            <div className="about-image">
              <Image src="/images/about-me.jpg" alt="About Me Image" width={400} height={500} />
            </div>
            <div className="about-text">
              <h2>My Story</h2>
              <p>
                Hello! I'm Nurul, a motivated professional with experience in both administrative support and sales
                assistance. I enjoy blending behind-the-scenes organization with front-line customer service to create
                smooth, efficient and positive experiences for everyone I work with.
              </p>
              <p>
                My background includes handling documentation, scheduling and office tasks using Microsoft Office, as
                well as engaging directly with customers, managing transactions and keeping store operations on track. I
                take pride in being dependable, detail-focused and people-friendly.
              </p>
              <p>
                When I'm not assisting customers or streamlining office tasks, I enjoy furthering my studies and taking
                vacations to recharge and stay inspired.
              </p>
            </div>
          </div>
        </section>

        <section className="education">
          <h2>Education</h2>
          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <h3>Level 4 Brunei Darussalam Qualifications Framework (BDQF) in Information Technology</h3>
                <h4>IBTE Sultan Saiful Rijal Campus</h4>
                <p className="timeline-date">Present</p>
                <p>
                  Specialized in Information Technology with a focus on Software Development, Networking and IT
                  Management. Ongoing studies.
                </p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <h3>Level 3 Brunei Darussalam National Qualifications Framework (BDQF) in Information Technology</h3>
                <h4>IBTE Sultan Saiful Rijal Campus</h4>
                <p className="timeline-date">2021</p>
                <p>
                  Completed a one-year technical program focused on foundational IT skills, software applications and
                  practical problem-solving.
                </p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <h3>
                  General Certificate of Education Ordinary Level (GCE O-Level) & International General Certificate of
                  Secondary Education (IGCSE)
                </h3>
                <h4>Sekolah Menengah Sultan Muhammad Jamalul Alam</h4>
                <p className="timeline-date">2019</p>
                <p>
                  Completed a comprehensive secondary education program, earning qualifications in both the GCE O-Level
                  and IGCSE
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="personal-interests">
          <h2>Personal Interests</h2>
          <div className="interests-grid">
            <div className="interest-card">
              <div className="interest-icon">
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
                  className="lucide lucide-mountain"
                >
                  <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
                </svg>
              </div>
              <h3>Hiking</h3>
              <p>Exploring nature trails and mountain peaks whenever I get the chance.</p>
            </div>
            <div className="interest-card">
              <div className="interest-icon">
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
                  className="lucide lucide-book-open"
                >
                  <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
                  <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
                </svg>
              </div>
              <h3>Reading</h3>
              <p>Science fiction, technology books, and philosophical works.</p>
            </div>
            <div className="interest-card">
              <div className="interest-icon">
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
                  className="lucide lucide-utensils"
                >
                  <path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2" />
                  <path d="M7 2v20" />
                  <path d="M21 15V2v0a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7" />
                </svg>
              </div>
              <h3>Cooking</h3>
              <p>Experimenting with new recipes and cuisines from around the world.</p>
            </div>
            <div className="interest-card">
              <div className="interest-icon">
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
                  className="lucide lucide-camera"
                >
                  <path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z" />
                  <circle cx="12" cy="13" r="3" />
                </svg>
              </div>
              <h3>Photography</h3>
              <p>Capturing landscapes and urban scenes through my lens.</p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}

//contact

"use client"

import { useState } from "react"
import Header from "@/components/header"
import Footer from "@/components/footer"

export default function Contact() {
  const [formStatus, setFormStatus] = useState("")
  const [formStatusClass, setFormStatusClass] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      setFormStatus("Message sent successfully! I will get back to you soon.")
      setFormStatusClass("success")
      setIsSubmitting(false)
      e.target.reset()
    }, 1500)
  }

  return (
    <>
      <Header />

      <main>
        <section className="contact-hero">
          <div className="contact-hero-content">
            <h1>Get In Touch</h1>
            <p className="subtitle">Let's work together</p>
          </div>
        </section>

        <section className="contact-grid">
          <div className="contact-info">
            <h2>Contact Information</h2>
            <p>Feel free to reach out to me through any of the following channels:</p>

            <div className="contact-details">
              <div className="contact-item">
                <div className="contact-icon">
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
                    className="lucide lucide-mail"
                  >
                    <rect width="20" height="16" x="2" y="4" rx="2" />
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                  </svg>
                </div>
                <div className="contact-text">
                  <h3>Email</h3>
                  <p>
                    <a href="mailto:nurulleys@gmail.com">nurulleys@gmail.com</a>
                  </p>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon">
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
                    className="lucide lucide-phone"
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                </div>
                <div className="contact-text">
                  <h3>Phone</h3>
                  <p>
                    <a href="tel:+673 8802048">+673 8802048</a>
                  </p>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon">
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
                    className="lucide lucide-map-pin"
                  >
                    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </div>
                <div className="contact-text">
                  <h3>Location</h3>
                  <p>Kg Mentiri, Brunei Muara</p>
                </div>
              </div>
            </div>

            <div className="social-links">
              <h3>Social Media</h3>
              <div className="social-grid">
                <a href="https://wa.link/prirvh" className="social-link">
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
                    className="lucide lucide-message-circle"
                  >
                    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                  </svg>
                  <span>WhatsApp</span>
                </a>
                <a href="https://t.me/Nurulellys" className="social-link">
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
                    className="lucide lucide-send"
                  >
                    <path d="m22 2-7 20-4-9-9-4Z" />
                    <path d="M22 2 11 13" />
                  </svg>
                  <span>Telegram</span>
                </a>
                <a href="https://m.me/Annonymous" className="social-link">
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
                    className="lucide lucide-message-square"
                  >
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                  </svg>
                  <span>Messenger</span>
                </a>
              </div>
            </div>

            <div className="references">
              <h3>References</h3>
              <div className="reference-item">
                <h4>Mariani Binti Haji Nayan</h4>
                <p>Instructor</p>
                <p>
                  <a href="mailto:mariani.nayan@ibte.edu.bn">mariani.nayan@ibte.edu.bn</a>
                </p>
              </div>
              <div className="reference-item">
                <h4>Norliha Binti Mohd Din</h4>
                <p>Instructor</p>
                <p>
                  <a href="mailto:norliha.din@ibte.edu.bn">norliha.din@ibte.edu.bn</a>
                </p>
              </div>
            </div>
          </div>

          <div className="contact-form-container">
            <h2>Send Me a Message</h2>
            <form className="contact-form" id="contactForm" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="name" required />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" required />
              </div>
              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input type="text" id="subject" name="subject" required />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea id="message" name="message" rows={5} required></textarea>
              </div>
              <button type="submit" className="submit-btn" disabled={isSubmitting}>
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>
            </form>
            {formStatus && (
              <div id="formStatus" className={`form-status ${formStatusClass}`}>
                {formStatus}
              </div>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}


//skills

import Header from "@/components/header"
import Footer from "@/components/footer"

export default function Skills() {
  return (
    <>
      <Header />

      <main>
        <section className="skills-hero">
          <div className="skills-hero-content">
            <h1>Skills & Experience</h1>
            <p className="subtitle">What I bring to the table</p>
          </div>
        </section>

        <section className="skills-section">
          <h2>Sales and Administrative Executive</h2>
          <div className="skills-grid">
            <div className="skill-category">
              <h3>Organizational Skills</h3>
              <div className="skill-bars">
                <div className="skill-item">
                  <div className="skill-info">
                    <span>Manage schedules and appointments</span>
                    <span>95%</span>
                  </div>
                  <div className="skill-bar">
                    <div className="skill-level" style={{ width: "95%" }}></div>
                  </div>
                </div>
                <div className="skill-item">
                  <div className="skill-info">
                    <span>Maintain filing systems</span>
                    <span>90%</span>
                  </div>
                  <div className="skill-bar">
                    <div className="skill-level" style={{ width: "90%" }}></div>
                  </div>
                </div>
                <div className="skill-item">
                  <div className="skill-info">
                    <span>Prioritize daily tasks</span>
                    <span>85%</span>
                  </div>
                  <div className="skill-bar">
                    <div className="skill-level" style={{ width: "85%" }}></div>
                  </div>
                </div>
                <div className="skill-item">
                  <div className="skill-info">
                    <span>Meeting coordination</span>
                    <span>80%</span>
                  </div>
                  <div className="skill-bar">
                    <div className="skill-level" style={{ width: "80%" }}></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="skill-category">
              <h3>Technical Proficiency</h3>
              <div className="skill-bars">
                <div className="skill-item">
                  <div className="skill-info">
                    <span>Microsoft Office (Word, Excel, Outlook)</span>
                    <span>75%</span>
                  </div>
                  <div className="skill-bar">
                    <div className="skill-level" style={{ width: "75%" }}></div>
                  </div>
                </div>
                <div className="skill-item">
                  <div className="skill-info">
                    <span>Enter and manage data</span>
                    <span>70%</span>
                  </div>
                  <div className="skill-bar">
                    <div className="skill-level" style={{ width: "70%" }}></div>
                  </div>
                </div>
                <div className="skill-item">
                  <div className="skill-info">
                    <span>Office equipment handling</span>
                    <span>65%</span>
                  </div>
                  <div className="skill-bar">
                    <div className="skill-level" style={{ width: "65%" }}></div>
                  </div>
                </div>
                <div className="skill-item">
                  <div className="skill-info">
                    <span>Troubleshoot basic tech issues</span>
                    <span>60%</span>
                  </div>
                  <div className="skill-bar">
                    <div className="skill-level" style={{ width: "60%" }}></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="skill-category">
              <h3>Store Operations</h3>
              <div className="skill-bars">
                <div className="skill-item">
                  <div className="skill-info">
                    <span>Use POS system and manage payments</span>
                    <span>85%</span>
                  </div>
                  <div className="skill-bar">
                    <div className="skill-level" style={{ width: "85%" }}></div>
                  </div>
                </div>
                <div className="skill-item">
                  <div className="skill-info">
                    <span>Restock and organize products</span>
                    <span>80%</span>
                  </div>
                  <div className="skill-bar">
                    <div className="skill-level" style={{ width: "80%" }}></div>
                  </div>
                </div>
                <div className="skill-item">
                  <div className="skill-info">
                    <span>Keep store clean and presentable</span>
                    <span>90%</span>
                  </div>
                  <div className="skill-bar">
                    <div className="skill-level" style={{ width: "90%" }}></div>
                  </div>
                </div>
                <div className="skill-item">
                  <div className="skill-info">
                    <span>Perform stock checks</span>
                    <span>95%</span>
                  </div>
                  <div className="skill-bar">
                    <div className="skill-level" style={{ width: "95%" }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="soft-skills">
          <h2>Soft Skills</h2>
          <div className="soft-skills-grid">
            <div className="soft-skill">
              <div className="soft-skill-icon">
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
                  className="lucide lucide-users"
                >
                  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M22 21v-2a4 4 0 0 0-4-4h-4" />
                  <circle cx="16" cy="7" r="4" />
                </svg>
              </div>
              <h3>Team Collaboration</h3>
              <p>Effective communication and collaboration with cross-functional teams.</p>
            </div>
            <div className="soft-skill">
              <div className="soft-skill-icon">
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
                  className="lucide lucide-lightbulb"
                >
                  <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5" />
                  <path d="M9 18h6" />
                  <path d="M10 22h4" />
                </svg>
              </div>
              <h3>Problem Solving</h3>
              <p>Analytical thinking and creative approach to solving complex problems.</p>
            </div>
            <div className="soft-skill">
              <div className="soft-skill-icon">
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
                  className="lucide lucide-clock"
                >
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12 6 12 12 16 14" />
                </svg>
              </div>
              <h3>Time Management</h3>
              <p>Efficient prioritization and organization of tasks to meet deadlines.</p>
            </div>
            <div className="soft-skill">
              <div className="soft-skill-icon">
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
                  className="lucide lucide-presentation"
                >
                  <path d="M2 3h20" />
                  <path d="M21 3v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V3" />
                  <path d="m7 21 5-5 5 5" />
                </svg>
              </div>
              <h3>Communication</h3>
              <p>Clear and effective communication of complex technical concepts.</p>
            </div>
          </div>
        </section>

        <section className="experience">
          <h2>Work Experience</h2>
          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <h3>Office Clerk</h3>
                <h4>Jabatan Kerja Raya Drainage and Sewerage (JKR)</h4>
                <p className="timeline-date">2024 (Under contract for 4 months)</p>
                <ul>
                  <li>Monitoring customer complaints</li>
                  <li>Taking customer complaints</li>
                  <li>Record daily attendance</li>
                  <li>Stored customer data</li>
                </ul>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <h3>Sales Assistance</h3>
                <h4>Mumtaz Collections Hijab Boutique</h4>
                <p className="timeline-date">2022 - 2023</p>
                <ul>
                  <li>Recommending products to help the customer</li>
                  <li>Collecting payments by cash or credit card</li>
                  <li>Handling issues refunds for returned items</li>
                  <li>Demonstrating how the product works</li>
                </ul>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <h3>IT Support Technician</h3>
                <h4>Radio Television Brunei (RTB)</h4>
                <p className="timeline-date">2021 (3 months attachment)</p>
                <ul>
                  <li>Diagnose & troubleshooting software/hardware</li>
                  <li>Setting up computer networks</li>
                  <li>Installing applications</li>
                  <li>Cleaning ICT equipment</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}

//

"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import Header from "@/components/header"
import Footer from "@/components/footer"

export default function Home() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1500)

    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      {isLoading && (
        <div className="preloader">
          <div className="loader">
            <svg width="50" height="50" viewBox="0 0 50 50">
              <circle cx="25" cy="25" r="20" fill="none" strokeWidth="5" strokeLinecap="round" stroke="#352340" />
            </svg>
          </div>
        </div>
      )}

      <Header />

      <main>
        <section className="hero">
          <div className="hero-content">
            <div className="profile-image-container">
              <Image
                src="/images/profile.jpg"
                alt="My Profile Picture"
                className="profile-image"
                width={220}
                height={220}
                priority
              />
            </div>
            <div className="hero-text">
              <h1>Nurul Ellys</h1>
              <h2>Administrative Assistant & Sales Assistant</h2>
              <p className="intro-text">
                Welcome to my digital CV! I'm skilled in Microsoft Office and experienced in customer service as a
                cashier.
              </p>
              <div className="cta-buttons">
                <Link href="/contact" className="btn primary-btn">
                  Contact Me
                </Link>
                <Link href="/portfolio" className="btn secondary-btn">
                  View My Work
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="highlights">
          <h2>Highlights</h2>
          <div className="highlights-container">
            <div className="highlight-card">
              <div
                className="highlight-icon"
                style={{
                  background: "linear-gradient(135deg, rgba(139, 92, 246, 0.1) 0%, rgba(236, 72, 153, 0.1) 100%)",
                  color: "var(--primary-color)",
                }}
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
                  className="lucide lucide-file-text"
                >
                  <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
                  <polyline points="14 2 14 8 20 8" />
                  <line x1="16" x2="8" y1="13" y2="13" />
                  <line x1="16" x2="8" y1="17" y2="17" />
                  <line x1="10" x2="8" y1="9" y2="9" />
                </svg>
              </div>
              <h3>Office Clerk</h3>
              <p>
                Performs general office duties such as filing, typing and using Office software for document management.
              </p>
            </div>
            <div className="highlight-card">
              <div
                className="highlight-icon"
                style={{
                  background: "linear-gradient(135deg, rgba(139, 92, 246, 0.1) 0%, rgba(236, 72, 153, 0.1) 100%)",
                  color: "var(--primary-color)",
                }}
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
                  className="lucide lucide-shopping-cart"
                >
                  <circle cx="8" cy="21" r="1" />
                  <circle cx="19" cy="21" r="1" />
                  <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
                </svg>
              </div>
              <h3>Sales Assistant</h3>
              <p>
                Supports sales operations, helps customers, processes payments and uses software to track inventory or
                sales data.
              </p>
            </div>
            <div className="highlight-card">
              <div
                className="highlight-icon"
                style={{
                  background: "linear-gradient(135deg, rgba(139, 92, 246, 0.1) 0%, rgba(236, 72, 153, 0.1) 100%)",
                  color: "var(--primary-color)",
                }}
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
                  className="lucide lucide-graduation-cap"
                >
                  <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                  <path d="M6 12v5c0 2 2 3 6 3s6-1 6-3v-5" />
                </svg>
              </div>
              <h3>Education</h3>
              <p>Information Technology Level 4 Brunei Darussalam Qualifications Framework (BDQF)</p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
