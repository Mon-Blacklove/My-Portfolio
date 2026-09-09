import React, { useState } from "react";
import { portfolioData } from "./data/portfolioData";
import {
  Mail,
  FileDown,
  ExternalLink,
  Menu,
  X,
  Award,
  Phone,
  GraduationCap,
} from "lucide-react";

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { personal, skills, education, certifications, projects } =
    portfolioData;

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-800 font-sans">
      {/* 1. Header & Navigation */}
      <nav className="fixed top-0 inset-x-0 h-16 bg-white/95 backdrop-blur-md border-b border-slate-200 z-50 transition-all shadow-sm">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-full flex items-center justify-between">
          <a
            href="#"
            className="flex items-center gap-2.5 font-bold text-slate-900 tracking-tight"
          >
            <span className="w-8 h-8 rounded-lg bg-gradient-to-tr from-blue-600 to-indigo-600 text-white flex items-center justify-center font-mono text-xs font-black shadow-sm">
              NS
            </span>
            <span className="font-semibold text-slate-900 tracking-wider">
              NANTHAMON SUPO
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-7 text-sm font-medium text-slate-600">
            <a href="#about" className="hover:text-blue-600 transition-colors">
              About
            </a>
            <a href="#skills" className="hover:text-blue-600 transition-colors">
              Skills
            </a>
            <a
              href="#education"
              className="hover:text-blue-600 transition-colors"
            >
              Education
            </a>
            <a
              href="#certificates"
              className="hover:text-blue-600 transition-colors"
            >
              Certificates
            </a>
            <a
              href="#projects"
              className="hover:text-blue-600 transition-colors"
            >
              Projects
            </a>
            <a
              href="#contact"
              className="px-4 py-2 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700 transition shadow-sm text-xs"
            >
              Contact
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden p-2 text-slate-600 hover:text-slate-900"
          >
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Dropdown */}
        {menuOpen && (
          <div className="md:hidden bg-white border-b border-slate-200 px-6 py-4 flex flex-col gap-3 text-sm font-medium shadow-lg">
            <a href="#about" onClick={() => setMenuOpen(false)} className="py-1">
              About
            </a>
            <a href="#skills" onClick={() => setMenuOpen(false)} className="py-1">
              Skills
            </a>
            <a href="#education" onClick={() => setMenuOpen(false)} className="py-1">
              Education
            </a>
            <a href="#certificates" onClick={() => setMenuOpen(false)} className="py-1">
              Certificates
            </a>
            <a href="#projects" onClick={() => setMenuOpen(false)} className="py-1">
              Projects
            </a>
            <a
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className="mt-2 py-2 text-center rounded-lg bg-blue-600 text-white"
            >
              Contact
            </a>
          </div>
        )}
      </nav>

{/* 2. Hero Section */}
      <section id="about" className="pt-32 pb-16 px-4 sm:px-6 max-w-5xl mx-auto w-full">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-center gap-8 lg:gap-10">
          <div className="flex-1 max-w-lg text-center lg:text-left">
            <h2 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
              {personal.name}
            </h2>
            <p className="mt-3 text-base sm:text-lg font-bold text-blue-600">
              {personal.headline}
            </p>
            <p className="mt-3 text-slate-600 leading-relaxed text-sm sm:text-base">
              {personal.summary}
            </p>

            {/* จุดแข็ง & สิ่งที่กำลังต่อยอด */}
            <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-3 text-left">
              <div className="p-3.5 rounded-xl bg-blue-50/70 border border-blue-100">
                <p className="text-xs font-bold text-blue-700 font-mono uppercase flex items-center gap-1.5 mb-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-600"></span>
                  จุดแข็ง (Core Focus)
                </p>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {personal.strengths}
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                <p className="text-xs font-bold text-slate-700 font-mono uppercase flex items-center gap-1.5 mb-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span>
                  กำลังต่อยอด (Growth Focus)
                </p>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {personal.growthFocus}
                </p>
              </div>
            </div>

            {/* ปุ่มดูผลงาน */}
            <div className="mt-7 flex justify-center lg:justify-start">
              <a
                href="#projects"
                className="px-7 py-3 rounded-xl text-sm font-semibold bg-blue-600 text-white hover:bg-blue-700 transition shadow-md shadow-blue-500/20"
              >
                ดูผลงาน (Projects)
              </a>
            </div>
          </div>

          {/* กรอบรูปแนวตั้ง */}
          <div className="w-56 h-72 sm:w-64 sm:h-80 md:w-68 md:h-88 rounded-3xl overflow-hidden border-4 border-slate-100 shadow-xl relative bg-slate-100 flex-shrink-0">
            <img
              src={personal.profileImage}
              alt={personal.name}
              className="w-full h-full object-cover object-top"
              onError={(e) => {
                e.target.src =
                  "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80";
              }}
            />
          </div>
        </div>
      </section>
      
      {/* 3. Skills Section */}
      <section id="skills" className="py-16 border-t border-slate-100 bg-slate-50/60">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h2 className="text-xs font-mono uppercase tracking-widest text-blue-600 mb-2 text-center font-bold">
            SKILLS & EXPERTISE
          </h2>
          <h3 className="text-2xl sm:text-3xl font-bold text-center text-slate-900 mb-10">
            ทักษะความสามารถทางเทคนิค
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-md transition">
              <h4 className="text-sm font-bold text-blue-600 mb-4 font-mono">Languages</h4>
              <div className="flex flex-wrap gap-2">
                {skills.languages.map((item, idx) => (
                  <span
                    key={idx}
                    className="px-2.5 py-1 text-xs font-medium bg-slate-100 text-slate-700 rounded-md border border-slate-200"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-md transition">
              <h4 className="text-sm font-bold text-indigo-600 mb-4 font-mono">Frameworks</h4>
              <div className="flex flex-wrap gap-2">
                {skills.frameworks.map((item, idx) => (
                  <span
                    key={idx}
                    className="px-2.5 py-1 text-xs font-medium bg-slate-100 text-slate-700 rounded-md border border-slate-200"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-md transition">
              <h4 className="text-sm font-bold text-emerald-600 mb-4 font-mono">Databases & DevOps</h4>
              <div className="flex flex-wrap gap-2">
                {skills.databaseDevOps.map((item, idx) => (
                  <span
                    key={idx}
                    className="px-2.5 py-1 text-xs font-medium bg-slate-100 text-slate-700 rounded-md border border-slate-200"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-md transition">
              <h4 className="text-sm font-bold text-purple-600 mb-4 font-mono">Tools & AI</h4>
              <div className="flex flex-wrap gap-2">
                {skills.toolsAndAI.map((item, idx) => (
                  <span
                    key={idx}
                    className="px-2.5 py-1 text-xs font-medium bg-slate-100 text-slate-700 rounded-md border border-slate-200"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Education Section */}
      {education && (
        <section id="education" className="py-16 border-t border-slate-100 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <h2 className="text-xs font-mono uppercase tracking-widest text-blue-600 mb-2 font-bold flex items-center gap-1.5">
              <GraduationCap className="w-4 h-4" /> EDUCATION
            </h2>
            <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-8">
              ประวัติการศึกษา
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {education.map((edu) => (
                <div
                  key={edu.id}
                  className="bg-slate-50 border border-slate-200 rounded-2xl p-6 flex items-start gap-5 hover:border-blue-300 hover:shadow-sm transition"
                >
                  <div className="w-16 h-16 rounded-xl overflow-hidden bg-white border border-slate-200 flex-shrink-0 shadow-sm">
                    <img
                      src={edu.logo}
                      alt={edu.institution}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="flex-1 min-w-0">
                    <h4 className="text-base font-bold text-slate-900 leading-snug">
                      {edu.degree}
                    </h4>
                    <p className="text-sm font-semibold text-blue-600 mt-1">
                      {edu.institution}
                    </p>
                    <p className="text-xs text-slate-500 mt-1">{edu.period}</p>
                    <div className="mt-3 inline-block px-3 py-1 rounded-lg bg-white border border-slate-200 text-xs font-semibold text-slate-700">
                      เกรดเฉลี่ย (GPAX):{" "}
                      <span className="text-blue-600 font-bold">{edu.gpa}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 5. Certifications Section */}
      {certifications && (
        <section id="certificates" className="py-16 border-t border-slate-100 bg-slate-50/50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8">
              <div>
                <h2 className="text-xs font-mono uppercase tracking-widest text-blue-600 mb-2 font-bold flex items-center gap-1.5">
                  <Award className="w-4 h-4" /> CREDENTIALS
                </h2>
                <h3 className="text-2xl sm:text-3xl font-bold text-slate-900">
                  ประกาศนียบัตร
                </h3>
              </div>
              <a
                href={certifications.profileUrl}
                target="_blank"
                rel="noreferrer"
                className="mt-3 sm:mt-0 inline-flex items-center gap-1.5 text-xs font-semibold text-blue-600 hover:underline"
              >
                ดู Microsoft Learn Profile <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {certifications.items.map((cert) => (
                <div
                  key={cert.id}
                  className="bg-white border border-slate-200 rounded-2xl p-5 flex items-center gap-4 hover:border-blue-300 hover:shadow-sm transition"
                >
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-amber-50 to-blue-50 border border-amber-200/60 p-2.5 flex items-center justify-center flex-shrink-0 shadow-sm">
                    <svg className="w-full h-full" viewBox="0 0 24 24" fill="none">
                      <circle cx="12" cy="9" r="6" fill="#F59E0B" />
                      <circle cx="12" cy="9" r="4.5" fill="#FBBF24" />
                      <path
                        d="M12 6L13.1 8.2L15.5 8.5L13.8 10.2L14.2 12.6L12 11.4L9.8 12.6L10.2 10.2L8.5 8.5L10.9 8.2L12 6Z"
                        fill="#FFF"
                      />
                      <path
                        d="M8.5 13.5L7 20L12 17.5L17 20L15.5 13.5"
                        stroke="#2563EB"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        fill="#3B82F6"
                      />
                    </svg>
                  </div>

                  <div className="flex-1 min-w-0">
                    <h4 className="text-sm font-semibold text-slate-900 leading-snug line-clamp-2">
                      {cert.title}
                    </h4>
                    <p className="text-xs text-slate-500 mt-1.5">
                      วันที่สำเร็จ:{" "}
                      <span className="text-slate-700 font-medium">
                        {cert.completedDate}
                      </span>
                    </p>
                    <a
                      href={cert.credentialUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-2 inline-flex items-center gap-1 text-xs font-semibold text-blue-600 hover:underline"
                    >
                      ดูหลักฐาน <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 6. Projects Section */}
      <section id="projects" className="py-16 border-t border-slate-100 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h2 className="text-xs font-mono uppercase tracking-widest text-blue-600 mb-2 font-bold">
            PROJECTS EVIDENCE
          </h2>
          <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-10">
            ผลงานจริงที่พัฒนา (Problem & Solution)
          </h3>

          <div className="space-y-8">
            {projects.map((proj) => (
              <div
                key={proj.id}
                className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 flex flex-col lg:flex-row gap-8 shadow-sm hover:shadow-md transition"
              >
                <div className="lg:w-1/2 rounded-xl overflow-hidden bg-slate-100 aspect-video border border-slate-100">
                  <img
                    src={proj.image}
                    alt={proj.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="lg:w-1/2 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-xs font-mono text-blue-600 font-semibold uppercase">
                        {proj.category}
                      </span>
                      <span className="text-slate-400">•</span>
                      <span className="text-xs font-mono text-slate-500">{proj.year}</span>
                    </div>
                    <h4 className="text-xl sm:text-2xl font-bold text-slate-900 mb-4">
                      {proj.title}
                    </h4>
                    <div className="space-y-2.5 text-sm text-slate-600">
                      <p>
                        <strong className="text-blue-700 font-semibold">Problem:</strong>{" "}
                        {proj.problem}
                      </p>
                      <p>
                        <strong className="text-indigo-700 font-semibold">Solution:</strong>{" "}
                        {proj.solution}
                      </p>
                      <p>
                        <strong className="text-emerald-700 font-semibold">Your Role:</strong>{" "}
                        {proj.role}
                      </p>
                    </div>
                    <div className="mt-5 flex flex-wrap gap-2">
                      {proj.tech.map((t, idx) => (
                        <span
                          key={idx}
                          className="px-2.5 py-1 text-xs bg-slate-100 font-mono text-slate-700 rounded-md border border-slate-200"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mt-6 pt-5 border-t border-slate-100 flex gap-5 items-center">
                    {proj.liveDemo !== "#" && (
                      <a
                        href={proj.liveDemo}
                        target="_blank"
                        rel="noreferrer"
                        className="text-xs font-semibold text-blue-600 hover:text-blue-700 flex items-center gap-1"
                      >
                        <ExternalLink className="w-4 h-4" /> Live Demo
                      </a>
                    )}
                    <a
                      href={proj.github}
                      target="_blank"
                      rel="noreferrer"
                      className="text-xs font-semibold text-slate-600 hover:text-slate-900 flex items-center gap-1.5"
                    >
                      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                        />
                      </svg>
                      Source Code
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Contact Section */}
      <section id="contact" className="py-20 border-t border-slate-100 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-8">
            เรซูเม่และช่องทางติดต่อ
          </h3>

          <div className="flex flex-wrap gap-3">
            <a
              href={`mailto:${personal.email}`}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border border-slate-200 bg-white text-sm text-slate-700 hover:border-slate-300 hover:bg-slate-50 transition shadow-sm"
            >
              <Mail className="w-4 h-4 text-slate-600" />
              <span>{personal.email}</span>
            </a>

            <a
              href={`tel:${personal.phone}`}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border border-slate-200 bg-white text-sm text-slate-700 hover:border-slate-300 hover:bg-slate-50 transition shadow-sm"
            >
              <Phone className="w-4 h-4 text-slate-600" />
              <span>{personal.phone}</span>
            </a>

            <a
              href={personal.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border border-slate-200 bg-white text-sm text-slate-700 hover:border-slate-300 hover:bg-slate-50 transition shadow-sm"
            >
              <svg className="w-4 h-4 fill-slate-700" viewBox="0 0 24 24">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                />
              </svg>
              <span>GitHub</span>
            </a>

            <a
              href={personal.linkedinUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border border-slate-200 bg-white text-sm text-slate-700 hover:border-slate-300 hover:bg-slate-50 transition shadow-sm"
            >
              <svg className="w-4 h-4 fill-[#0a66c2]" viewBox="0 0 24 24">
                <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76c.97 0 1.76-.79 1.76-1.76a1.76 1.76 0 1 0-3.52 0c0 .97.79 1.76 1.76 1.76m1.39 9.74v-8.37H5.07v8.37h2.78z" />
              </svg>
              <span>LinkedIn</span>
            </a>

            <a
              href={personal.resumePdf}
              download="Nanthamon_Supo_Resume.pdf"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border border-slate-200 bg-white text-sm text-slate-700 hover:border-slate-300 hover:bg-slate-50 transition shadow-sm"
            >
              <FileDown className="w-4 h-4 text-slate-600" />
              <span>ดาวน์โหลด Resume CV </span>
            </a>
          </div>
        </div>
      </section>

      {/* 8. Footer */}
      <footer className="py-10 border-t border-slate-100 bg-white text-center text-xs text-slate-400">
        <p>© 2026 {personal.name}. All rights reserved.</p>
      </footer>
    </div>
  );
}