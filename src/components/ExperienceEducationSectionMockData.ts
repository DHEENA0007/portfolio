// Props types
export interface ExperienceItem {
  id: number;
  company: string;
  position: string;
  duration: string;
  description: string;
  logo: string;
}

export interface EducationData {
  degree: string;
  institution: string;
  gpa: string;
}

export interface AccoladesData {
  mainText: string;
  subText: string;
  additionalText: string;
  linkedinUrl: string;
  badge: string;
}

export interface ExperienceEducationSectionProps {
  experiences: ExperienceItem[];
  education: EducationData;
  accolades: AccoladesData;
}

// Experience data
export const mockRootProps: ExperienceEducationSectionProps = {
  experiences: [
    {
      id: 1,
      company: "AKodefy Info Tech",
      position: "Marketing Analyst",
      duration: "Oct 2025 - Present",
      description: "Planned, managed, and optimized YouTube and Meta campaigns, driving engagement, audience growth, and conversions through targeted content and data-driven strategies.",
      logo: "akodefy-logo"
    },
    {
      id: 2,
      company: "Preston Consulting and EdTech Pvt Ltd - Gostudy",
      position: "Digital Marketing Executive",
      duration: "May 2024 - June 2025",
      description: "Managed and optimized SEO, Google Ads, GMB, and social media campaigns to drive traffic, engagement, and conversions. Conducted keyword research and data-driven optimizations to improve online visibility and campaign performance.",
      logo: "gostudy-logo"
    }
  ],
  education: {
    degree: "Bachelor of Computer Science and Technology",
    institution: "SNS College of Engineering (2020 - 2024)",
    gpa: "8.4"
  },
  accolades: {
    mainText: "Speaker Theme Social Media And Personal Branding with participant 20+ including CEO's - 2023",
    subText: "From Business Development (though Project Manager)",
    additionalText: "7 Experience More!",
    linkedinUrl: "https://www.linkedin.com/in/barathroy",
    badge: "Automated Neet Museum"
  }
};