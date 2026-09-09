export const portfolioData = {
personal: {
    name: "ณัฐมน สุโพธิ์",
    nameEn: "Nanthamon Supo",
    headline: "Frontend & UI/UX Developer",
    location: "Bangkok, Thailand",
    profileImage: "/profile.jpg",
    resumePdf: "/Nanthamon_Supo_Resume_Final.pdf",
    summary:
      "นักศึกษาวิทยาการคอมพิวเตอร์ คณะเทคโนโลยีสารสนเทศ มหาวิทยาลัยศรีปทุม มีความหลงใหลในการออกแบบและพัฒนาส่วนต่อประสานผู้ใช้ (Frontend & UX/UI) พร้อมทั้งมุ่งมั่นต่อยอดทักษะด้าน Backend และ Database เพื่อสร้างระบบที่สมบูรณ์แบบ",
    strengths:
      "ถนัดและมีความเชี่ยวชาญด้านการออกแบบ UX/UI และการพัฒนา Frontend ด้วย React เน้นความสวยงาม การใช้งานที่ง่าย (Usability) และ Responsive Design",
    growthFocus:
      "กำลังมุ่งมั่นพัฒนาและเสริมทักษะเชิงลึกด้าน Database Design (SQL Server) รวมถึงระบบฝั่ง Backend เพื่อต่อยอดสู่ Full-Stack อย่างมั่นใจ",
    githubUrl: "https://github.com/Mon-Blacklove",
    linkedinUrl: "https://www.linkedin.com/in/nanthamon-supo-695319421/",
    email: "Nanthamon.sup@spumail.net",
    phone: "098-993-3672",
  },
  // ประวัติการศึกษา (มัธยมปลาย ขึ้นก่อนมหาวิทยาลัย)
  education: [
    {
      id: 1,
      degree: "มัธยมศึกษาตอนปลาย (แผนการเรียนศิลป์-ภาษา)",
      institution: "โรงเรียนเสาไห้ \"วิมลวิทยานุกูล\"",
      period: "สำเร็จการศึกษาปี 2023",
      gpa: "2.86 / 4.00",
      logo: "/saohai-logo.png",
    },
    {
      id: 2,
      degree: "วิทยาศาสตรบัณฑิต สาขาวิทยาการคอมพิวเตอร์ คณะเทคโนโลยีสารสนเทศ",
      institution: "มหาวิทยาลัยศรีปทุม (Sripatum University)",
      period: "2023 - ปัจจุบัน (คาดว่าจะสำเร็จการศึกษาปี 2027)",
      gpa: "2.56 / 4.00",
      logo: "/spu-logo.png",
    },
  ],

  // ทักษะความสามารถทางเทคนิค
  skills: {
    languages: ["HTML", "CSS", "JavaScript", "Python", "SQL"],
    frameworks: ["React", "Node.js", "Tailwind CSS"],
    databaseDevOps: ["SQL Server", "RESTful APIs", "Git", "GitHub"],
    toolsAndAI: ["VS Code", "Postman", "Miniconda", "Gemini", "GitHub Copilot"],
    softSkills: [
      "Team Collaboration & Communication",
      "Continuous Learning & Adaptability",
      "Work Under Pressure",
    ],
  },

  // ใบรับรอง (เฉพาะ Microsoft Learn ที่ทำจริง)
certifications: {
    profileUrl:
      "https://learn.microsoft.com/th-th/users/MissNANTHAMONSUPO-9419/achievements",
    items: [
      {
        id: 1,
        title:
          "Guided Project: Build and deploy a Microsoft Teams app using Teams Toolkit for Visual Studio Code",
        issuer: "Microsoft Learn",
        completedDate: "4 เมษายน 2568",
        credentialUrl:
          "https://learn.microsoft.com/api/achievements/share/th-th/MissNANTHAMONSUPO-9419/NVY5PDGF?sharingId=754D584EB58E99ED",
      },
      {
        id: 2,
        title:
          "Retrieve Microsoft 365 data for Microsoft Teams apps using Microsoft Graph",
        issuer: "Microsoft Learn",
        completedDate: "4 เมษายน 2568",
        credentialUrl:
          "https://learn.microsoft.com/api/achievements/share/th-th/MissNANTHAMONSUPO-9419/UR8B2RR3?sharingId=754D584EB58E99ED",
      },
      {
        id: 3,
        title:
          "Connect web services to Microsoft Teams using webhooks",
        issuer: "Microsoft Learn",
        completedDate: "4 เมษายน 2568",
        credentialUrl:
          "https://learn.microsoft.com/api/achievements/share/th-th/MissNANTHAMONSUPO-9419/7KVUJW6Z?sharingId=754D584EB58E99ED",
      },
      {
        id: 4,
        title:
          "Create and run a basic Microsoft Teams tab app",
        issuer: "Microsoft Learn",
        completedDate: "4 เมษายน 2568",
        credentialUrl:
          "https://learn.microsoft.com/api/achievements/share/th-th/MissNANTHAMONSUPO-9419/H7NJ2RB8?sharingId=754D584EB58E99ED",
      },
      {
        id: 5,
        title:
          "Build bots for Microsoft Teams with Teams Toolkit",
        issuer: "Microsoft Learn",
        completedDate: "4 เมษายน 2568",
        credentialUrl:
          "https://learn.microsoft.com/api/achievements/share/th-th/MissNANTHAMONSUPO-9419/H7NJATD8?sharingId=754D584EB58E99ED",
      },
    ],
  },

  // ผลงานจริงที่พัฒนา
  projects: [
    {
      id: 1,
      title: "Smart Campus Dashboard & Resource Booking",
      category: "Full-Stack Web App",
      year: "2026",
      problem:
        "ระบบจองห้องและอุปกรณ์เดิมต้องกรอกเอกสาร ทำให้ข้อมูลตกหล่นและอัปเดตล่าช้า",
      solution:
        "พัฒนาเว็บแอปพลิเคชันจัดการการจองแบบเรียลไทม์ พร้อมแดชบอร์ดตรวจสอบสถานะและยืนยันผ่าน QR Code",
      role: "ออกแบบ Responsive UX/UI, พัฒนา Frontend ด้วย React และเชื่อมต่อ RESTful API",
      tech: ["React", "Tailwind CSS", "JavaScript", "RESTful APIs"],
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
      liveDemo: "#",
      github: "https://github.com",
    },
    {
      id: 2,
      title: "Aura Roast - Online Specialty Coffee Store",
      category: "E-Commerce System",
      year: "2026",
      problem:
        "ระบบสต็อกและการชำระเงินของร้านค้าแบบเดิมไม่มีการตัดยอดอัตโนมัติและจัดการคำสั่งซื้อได้ยาก",
      solution:
        "ออกแบบและสร้างระบบจำหน่ายอุปกรณ์กาแฟ มีระบบตะกร้าสินค้า แค็ตตาล็อก และการยืนยันคำสั่งซื้อ",
      role: "ออกแบบ UI/UX หน้าร้าน พัฒนา Frontend และทดสอบระบบการเชื่อมต่อข้อมูล",
      tech: ["React", "Node.js", "SQL Server", "Tailwind CSS"],
      image:
        "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=800&q=80",
      liveDemo: "#",
      github: "https://github.com",
    },
  ],
};