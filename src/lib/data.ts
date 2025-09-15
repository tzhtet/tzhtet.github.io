import { Certificate, Experience, Project, Skill } from "./data.types";

export const projects: Project[] = [
  {
    title: "Integrated Core Banking System (iCBS)",
    image: "/images/projects/icbs.png",
     about: "Contributed mainly in backend and UI development using Servlet and Google Web Toolkit (GWT), as well as report development and bug fixing.",
    links: [
      {
        type: "Website",
        url: "https://www.mit.com.mm/solutions"
      }
    ]
  },

  {
    title: "First Private Bank Myanmar",
    image: "/images/projects/fpb.jpg",
      about: "Worked on iCBS-based banking solutions, handling backend development, report generation, and bug fixing.",
    links: [
      {
        type: "Website",
        url: "https://www.firstprivatebank.com.mm/"
      }
    ]
  },
  {
    title: "Myanma Economic Bank",
    image: "/images/projects/meb.png",
      about: "Contributed to RESTful backend API development and Angular frontend implementation for banking operations.",
    links: [
      {
        type: "Website",
        url: "https://www.meb.gov.mm"
      }
    ]
  },
  {
    title: "Yangon City Bank (YCB)",
    image: "/images/projects/ycb.jpg",
    about: "Enhanced iCBS-based solutions by fixing bugs, developing reports, and maintaining backend code.",
    links: [
      {
        type: "Website",
        url: "https://my.wikipedia.org/wiki/%E1%80%9B%E1%80%94%E1%80%BA%E1%80%80%E1%80%AF%E1%80%94%E1%80%BA%E1%80%99%E1%80%BC%E1%80%AD%E1%80%AF%E1%80%B7%E1%80%90%E1%80%B1%E1%80%AC%E1%80%BA%E1%80%98%E1%80%8F%E1%80%BA%E1%80%9C%E1%80%AE%E1%80%99%E1%80%AD%E1%80%90%E1%80%80%E1%80%BA"
      }
    ]
  },

  {
    title: "Mineral Development Bank Limited.",
    image: "/images/projects/md.jpg",
    about: "Involved in iCBS-related development tasks, bug fixing, and reporting enhancements.",
    links: [
      {
        type: "Website",
        url: "https://www.mdbank.com.mm/"
      }
    ]
  },
  {
    title: "Yadanarbon Bank Ltd.",
    image: "/images/projects/ydb.jpg",
    about: "Maintained and improved iCBS-based systems with a focus on backend development and report generation.",
    links: [
      {
        type: "Website",
        url: "https://yadanarbonbank.com/"
      }
    ]
  },
  {
    title: "Rural Development Bank",
    image: "/images/projects/rdb.png",
    about: "Worked on iCBS-based features, resolving bugs and developing reports to support banking services.",
    links: [
      {
        type: "Website",
        url: "https://www.rdbankmm.com/"
      }
    ]
  }
];

export const certificates: Certificate[] = [

  {
    title: "Core Banking Training",
    url: "https://www.linkedin.com/in/tzhtet/details/certifications/1734946510373/single-media-viewer/?type=IMAGE&profileId=ACoAAD93w-EBLdE0-tmpESQZiElOGFHFvVyZxJ4",
    image: "/images/mit.jpg"
  },
  {
    title: "Introduction to Linux (LFS101)",
    url: "https://ti-user-certificates.s3.amazonaws.com/e0df7fbf-a057-42af-8a1f-590912be5460/cf60761d-f42e-48a5-91bc-a03473c74faa-than-zaw-htet-9ca084fb-a0b9-4946-9ac6-df3681135cbb-certificate.pdf",
    image: "/images/linux.png"
  },
  {
    title: "Inclusive Open Source Community Orientation (LFC102)",
    url: "https://ti-user-certificates.s3.amazonaws.com/e0df7fbf-a057-42af-8a1f-590912be5460/cf60761d-f42e-48a5-91bc-a03473c74faa-than-zaw-htet-2bcd0c8b-face-4b00-bfb6-b8f88cccc24d-certificate.pdf",
    image: "/images/linux.png"
  },
  {
    title: "A Beginner's Guide to Linux Kernel Development (LFD103)",
    url: "https://ti-user-certificates.s3.amazonaws.com/e0df7fbf-a057-42af-8a1f-590912be5460/cf60761d-f42e-48a5-91bc-a03473c74faa-than-zaw-htet-a91dcb0d-1ad4-49d4-b67c-8a9cea09ade9-certificate.pdf",
    image: "/images/linux.png"
  },
  {
    title: "EF SET English Certificate",
    url: "https://cert.efset.org/5CE8eN",
    image: "/images/ef_logo.jpg"
  }
];

export const skills: Skill[] = [
  {
    title: "Java EE / Spring",
    percentage: 90
  },
  {
    title: "Angular Development",
    percentage: 70
  },
  {
    title: "React Js Development",
    percentage: 50
  },
  {
    title: "Java",
    percentage: 90
  },
  {
    title: "Javascript / Typescript",
    percentage: 90
  },
  {
    title: "iReport Jasper",
    percentage: 90
  }
];

export const experiences: Experience[] = [
  {
    title: "Software Developer (On-site)",
    company: "Fortune International Ltd. (2025 - Present)",
    url: "https://www.fortunemm.com/",
    responsibilities: ["Responsible for backend API development"]
  },
  {
    title: "Software Developer (On-site)",
    company: "Myanmar Information Technology Pte. Ltd. (2024 - 2025)",
    url: "https://www.mit.com.mm/",
    responsibilities: ["Handled full-stack development (backend and frontend) with a focus on banking and financial solutions"]
  }
];

