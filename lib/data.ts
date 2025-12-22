export const personalInfo = {
  name: "Zakaria Coulibaly",
  roles: ["AI/ML Engineer", "Full-Stack Developer", "Data Scientist", "Researcher"],
  location: "Pennsylvania, PA",
  email: "zcoulibalyeng@gmail.com",
  bio: "I'm a developer passionate about crafting intelligent, pixel-perfect systems that blend cutting-edge AI with robust engineering. My work lies at the intersection of machine learning and software development, creating solutions that not only work but excel in production environments.",
  tagline: "Building the future with AI and elegant code",
  social: {
    github: "https://github.com/levisstrauss",
    linkedin: "https://linkedin.com/in/levisstrauss",
    twitter: "https://twitter.com/codemon",
  },
  stats: {
    repositories: 0,
    stars: 0,
    contributions: 0,
    publications: 0,
  },
}

export const education = [
  {
    degree: "Master of Science in Computer Science",
    school: "Penn State University",
    period: "2025 - 2026",
    gpa: "4.0/4.0",
    focus: "Data Science, & Artificial Intelligence",
  },
  {
    degree: "Bachelor of Science in Computer Science & Minor in Math",
    school: "Penn State University",
    period: "2022 - 2024",
    gpa: "3.25/4.0",
    focus: "Software Engineering & Application Design",
  },
]

export const experience = [
  {
    title: "Graduate Researcher",
    company: "University of Illinois",
    period: "Fall 2025",
    description:
        "Reproduced the Temporal Pointwise Convolutional Networks (TPCN) architecture to predict patient length of stay (LOS) in ICUs using the MIMIC-III dataset.",
    achievements: [
      "Implemented complex deep learning architecture from scratch using PyTorch to validate state-of-the-art research, Placeholder: Add your specific result here"
    ],
    technologies: ["Python", "PyTorch", "Pandas", "MIMIC-III"],
  },
  {
    title: "Graduate Researcher",
    company: "University of Illinois",
    period: "Fall 2025",
    description:
      "Developed novel approaches for multi-agent systems and contributed to research on emergent behaviors in large language models.",
    achievements: ["Published research paper", "Improved model efficiency by 15%"],
    technologies: ["Python", "PyTorch", "Transformers"],
  },
]

export const projects = [
  {
    title: "AI Code Assistant",
    description:
        "GPT-powered code completion tool that understands context and provides intelligent suggestions for multiple programming languages.",
    technologies: ["Python", "OpenAI API", "FastAPI", "React"],
    github: "https://github.com/alexchen/ai-code-assistant",
    demo: "https://code-assistant.demo",
    category: "ai",
    stats: { stars: 320, forks: 45 },
  },


]


// export const skills = {
//   programming: [
//     { name: "Python", level: 95 },
//     { name: "TypeScript", level: 90 },
//     { name: "Rust", level: 80 },
//     { name: "Go", level: 75 },
//   ],
//   aiml: [
//     { name: "PyTorch", level: 95 },
//     { name: "TensorFlow", level: 90 },
//     { name: "Transformers", level: 90 },
//     { name: "Scikit-learn", level: 85 },
//   ],
//   web: [
//     { name: "React", level: 90 },
//     { name: "Next.js", level: 85 },
//     { name: "Node.js", level: 80 },
//     { name: "GraphQL", level: 75 },
//   ],
//   cloud: [
//     { name: "Docker", level: 90 },
//     { name: "AWS", level: 85 },
//     { name: "GCP", level: 80 },
//     { name: "Kubernetes", level: 75 },
//   ],
// }


export const blogPosts = [
  {
    title: "Building Scalable AI Systems: Lessons from Production",
    excerpt:
      "Key insights from deploying ML models at scale, including architecture patterns and monitoring strategies.",
    date: "2024-10-15",
    readTime: "8 min",
    tags: ["AI", "MLOps", "Architecture"],
  },
  {
    title: "The Future of Agentic Software Development",
    excerpt: "Exploring how autonomous AI agents are changing the landscape of software development.",
    date: "2024-09-22",
    readTime: "12 min",
    tags: ["AI Agents", "Future", "Development"],
  },
  {
    title: "Optimizing Neural Networks for Edge Deployment",
    excerpt: "Techniques for model compression, quantization, and optimization for resource-constrained devices.",
    date: "2024-08-10",
    readTime: "10 min",
    tags: ["Edge AI", "Optimization", "Mobile"],
  },
  {
    title: "Understanding Transformer Architecture",
    excerpt: "A deep dive into the architecture that powers modern large language models.",
    date: "2024-07-05",
    readTime: "15 min",
    tags: ["Transformers", "NLP", "Deep Learning"],
  },
]

export const certifications = [
  {
    title: "TensorFlow Developer Certificate",
    issuer: "Google",
    date: "2024",
    description: "Professional certification for TensorFlow expertise in building and deploying ML models.",
    color: "bg-gradient-to-br from-orange-500 to-red-500",
    verified: true,
    link: "https://www.tensorflow.org/certificate",
  },
  {
    title: "AWS Machine Learning Specialty",
    issuer: "Amazon Web Services",
    date: "2024",
    description: "Advanced certification for designing, implementing, and maintaining ML solutions on AWS.",
    color: "bg-gradient-to-br from-yellow-500 to-orange-500",
    verified: true,
    link: "https://aws.amazon.com/certification/",
  },
  {
    title: "Deep Learning Specialization",
    issuer: "DeepLearning.AI",
    date: "2023",
    description: "Comprehensive program covering neural networks, CNNs, RNNs, and sequence models.",
    color: "bg-gradient-to-br from-blue-500 to-purple-500",
    verified: true,
    link: "https://www.deeplearning.ai/",
  },
  {
    title: "Best Paper Award - ICML",
    issuer: "ICML Conference",
    date: "2024",
    description: "Recognition for outstanding research contribution in machine learning.",
    color: "bg-gradient-to-br from-primary to-yellow-600",
    verified: true,
  },
  {
    title: "Google Cloud Professional",
    issuer: "Google Cloud",
    date: "2023",
    description: "Expertise in deploying and managing cloud-native applications and ML workloads.",
    color: "bg-gradient-to-br from-green-500 to-teal-500",
    verified: true,
    link: "https://cloud.google.com/certification",
  },
  {
    title: "Hackathon Winner - ETHGlobal",
    issuer: "ETHGlobal",
    date: "2023",
    description: "First place for building an innovative decentralized AI application.",
    color: "bg-gradient-to-br from-purple-500 to-pink-500",
    verified: true,
  },
]

export const navItems = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Certifications", href: "#certifications" },
  { label: "Blog", href: "#blog" },
  { label: "Contact", href: "#contact" },
]

export const testimonials = [
  {
    name: "Dr. Sarah Mitchell",
    role: "Research Lead",
    company: "OpenAI",
    quote:
      "Alex is one of the most talented engineers I've worked with. Their ability to bridge the gap between cutting-edge research and production-ready systems is remarkable. They consistently delivered innovative solutions that exceeded expectations.",
    linkedin: "https://linkedin.com/in/sarahmitchell",
  },
  {
    name: "Michael Zhang",
    role: "Engineering Manager",
    company: "Google",
    quote:
      "Working with Alex was a pleasure. They brought fresh perspectives to our ML infrastructure challenges and weren't afraid to tackle complex problems. Their code quality and documentation were exemplary.",
    linkedin: "https://linkedin.com/in/michaelzhang",
  },
  {
    name: "Emily Rodriguez",
    role: "Senior Developer",
    company: "Microsoft",
    quote:
      "Alex has an incredible ability to explain complex AI concepts to non-technical stakeholders. Their collaborative spirit and technical excellence made them an invaluable team member.",
    linkedin: "https://linkedin.com/in/emilyrodriguez",
  },
  {
    name: "Prof. James Chen",
    role: "Faculty Advisor",
    company: "Stanford University",
    quote:
      "Alex's research contributions during their time at Stanford were outstanding. They demonstrated exceptional creativity in approaching novel problems and produced work that has been cited by leading researchers in the field.",
    linkedin: "https://linkedin.com/in/jameschen",
  },
]
