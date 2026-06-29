import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Code2, Calendar, Layout, Award, CheckCircle2, ChevronDown, ChevronUp, 
  HelpCircle, Sparkles, Server, Cpu, Database, Cloud, Tablet, Bookmark, Eye 
} from 'lucide-react';
import { Course } from '../types';
import AnimatedGridBackground from './AnimatedGridBackground';

interface PremiumCoursesProps {
  onEnrollClick: (courseName: string) => void;
}

const coursesData: Course[] = [
  {
    id: 'mern',
    title: 'MERN Stack Developer',
    category: 'web-dev',
    duration: '6 Months',
    projectsCount: 8,
    skills: ['React.js', 'Node.js', 'Express', 'MongoDB', 'Redux', 'REST APIs', 'Docker', 'AWS'],
    description: 'Master full-stack web engineering using MongoDB, Express, React, and Node. Build containerized, industry-scale microservices from scratch.',
    rating: 4.9,
    originalPrice: '₹45,000',
    offerPrice: '₹34,999',
    curriculum: [
      'Frontend Foundation: HTML5, CSS3, ES6+ Javascript',
      'Advanced React: Hooks, Context, State Managers, Performance',
      'Backend Architecture: Node.js, Express Framework, Middleware design',
      'Database Modeling: NoSQL with MongoDB, indexing, aggregation pipelines',
      'API Security: JWT Auth, OAuth, CORS, secure headers',
      'Cloud Deployment: AWS EC2, S3 bucket storage, Dockerized setup'
    ],
    gradient: ' '
  },
  {
    id: 'java-fs',
    title: 'Java Full Stack Academy',
    category: 'web-dev',
    duration: '6 Months',
    projectsCount: 6,
    skills: ['Java 21', 'Spring Boot', 'Hibernate', 'Microservices', 'PostgreSQL', 'Docker', 'React.js'],
    description: 'An enterprise-grade software program covering core Java OOPs, Spring Boot, JPA, microservices choreography, and secure Angular/React frontends.',
    rating: 4.8,
    originalPrice: '₹48,000',
    offerPrice: '₹37,999',
    curriculum: [
      'Java Fundamentals & OOPs, Exception Handling, Collections',
      'Spring Core, Spring Boot, Spring Data JPA',
      'RESTful API Microservices & Spring Cloud Config',
      'Database Integrity: PostgreSQL & SQL Optimization',
      'Frontend integration using React.js or Angular',
      'CI/CD Pipelines, GitHub Actions, Jenkins builds'
    ],
    gradient: ' '
  },
  {
    id: 'python-fs',
    title: 'Python Full Stack Suite',
    category: 'web-dev',
    duration: '5 Months',
    projectsCount: 7,
    skills: ['Python 3', 'Django', 'FastAPI', 'PostgreSQL', 'React.js', 'Docker', 'REST API'],
    description: 'Construct rapid, scalable web apps. Cover Django ORM, asynchronous APIs with FastAPI, database schema designs, and rich user dashboards.',
    rating: 4.8,
    originalPrice: '₹42,000',
    offerPrice: '₹32,999',
    curriculum: [
      'Python Programming: Syntax, data structures, algorithms',
      'Django Web Framework & MVC pattern modeling',
      'Asynchronous Programming with FastAPI',
      'Database handling with PostgreSQL and migrations',
      'Frontend integration with modern React components',
      'Production deployment on Heroku, AWS, or DigitalOcean'
    ],
    gradient: ' '
  },
  {
    id: 'ai-ml',
    title: 'AI, Machine Learning & Data Science',
    category: 'data-ai',
    duration: '6 Months',
    projectsCount: 10,
    skills: ['Python', 'TensorFlow', 'Pandas', 'NumPy', 'Scikit-Learn', 'LLMs', 'Prompt Engineering', 'Power BI'],
    description: 'Step into the future. Learn regression models, neural networks, natural language processing, LLM fine-tuning, and robust Power BI analytics.',
    rating: 4.9,
    originalPrice: '₹55,000',
    offerPrice: '₹41,999',
    curriculum: [
      'Data analysis with Pandas, NumPy, and Matplotlib',
      'Machine Learning pipelines: Scikit-learn, regression, clustering',
      'Deep Learning: Artificial Neural Networks with TensorFlow/PyTorch',
      'Natural Language Processing & Generative AI basics',
      'Data Visualization: Tableau & Microsoft Power BI reporting',
      'Production AI deployments & cloud predictions'
    ],
    gradient: ' '
  },
  {
    id: 'cloud-devops',
    title: 'Cloud Computing & DevOps Engineer',
    category: 'cloud-devops',
    duration: '4 Months',
    projectsCount: 9,
    skills: ['AWS Cloud', 'Docker', 'Kubernetes', 'Terraform', 'Ansible', 'Linux CLI', 'Jenkins', 'GitLab'],
    description: 'Learn modern operations. Deploy, orchestrate, and maintain high-availability systems. Master infrastructure as code (IaC) and automation.',
    rating: 4.9,
    originalPrice: '₹50,000',
    offerPrice: '₹39,999',
    curriculum: [
      'Linux Administration & Bash scripting fundamentals',
      'AWS Cloud Services: VPC, EC2, S3, IAM, Lambda',
      'Containerization: Building multi-stage Dockerfiles',
      'Orchestration: Kubernetes cluster management, Helm charts',
      'Infrastructure as Code (IaC) using Terraform configuration',
      'CI/CD Pipelines: Jenkins, GitHub Actions implementation'
    ],
    gradient: ' '
  },
  {
    id: 'uiux-design',
    title: 'UI/UX Design Specialist',
    category: 'design-mobile',
    duration: '3.5 Months',
    projectsCount: 8,
    skills: ['Figma', 'Wireframing', 'User Research', 'Information Architecture', 'Prototyping', 'Design Systems'],
    description: 'Master the art of intuitive interfaces. Conduct deep user research, wireframe elegant user journeys, construct premium design systems, and build high-fidelity interactive prototypes in Figma.',
    rating: 4.8,
    originalPrice: '₹35,000',
    offerPrice: '₹24,999',
    curriculum: [
      'Design Foundations: Grid systems, typography pairings, color theory',
      'User Research, persona creation, and empathy mapping',
      'Information Architecture & high-fidelity Figma wireframing',
      'Interactive prototyping, smart animates, and transition designs',
      'Creating scalable corporate Design Systems and UI components',
      'Portfolio building and developer handoff guidelines'
    ],
    gradient: ' '
  }
];

export default function PremiumCourses({ onEnrollClick }: PremiumCoursesProps) {
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'web-dev' | 'data-ai' | 'cloud-devops' | 'design-mobile'>('all');
  const [expandedCourseId, setExpandedCourseId] = useState<string | null>(null);

  const categories = [
    { label: 'All Fields', id: 'all' },
    { label: 'Web Development', id: 'web-dev' },
    { label: 'Data & AI', id: 'data-ai' },
    { label: 'Cloud & DevOps', id: 'cloud-devops' },
    { label: 'UI/UX & Mobile', id: 'design-mobile' }
  ];

  const filteredCourses = selectedCategory === 'all' 
    ? coursesData 
    : coursesData.filter(course => course.category === selectedCategory);

  const toggleCurriculum = (courseId: string) => {
    if (expandedCourseId === courseId) {
      setExpandedCourseId(null);
    } else {
      setExpandedCourseId(courseId);
    }
  };

  return (
    <section id="courses" className="py-24 bg-black relative scroll-mt-10 text-white border-b border-neutral-900">
      {/* 4K Background Image and Animated Grid */}
      <AnimatedGridBackground 
        imageUrl="https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80&w=3840" 
        overlayClassName="bg-black/92"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-[11px] font-extrabold uppercase tracking-widest text-white bg-white/10 border border-white/10 px-3 py-1.5 rounded-none inline-flex items-center gap-1.5">
            <Sparkles className="h-3 w-3 text-black" />
            WORLD CLASS PROGRAMS
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-white mt-4 tracking-tight leading-tight">
            Curated Premium Courses
          </h2>
          <p className="text-neutral-400 mt-3 text-base sm:text-lg font-light">
            Acquire production-level training engineered by corporate professionals. Scroll to expand curriculum syllabi.
          </p>
        </div>

        {/* Filter Navigation */}
        <div className="flex flex-wrap justify-center gap-2.5 mb-12 bg-neutral-950 border border-neutral-850 p-2 rounded-none w-fit mx-auto">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id as any)}
              className={`px-5 py-2.5 rounded-none text-xs sm:text-sm font-bold tracking-wide transition-all cursor-pointer ${
                selectedCategory === cat.id 
                  ? 'bg-white text-black shadow-md' 
                  : 'text-neutral-400 hover:text-white hover:bg-neutral-900'
              }`}
              id={`cat-btn-${cat.id}`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Courses Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredCourses.map((course, idx) => (
              <motion.div
                key={course.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className="bg-[#0a0a0a]/80 rounded-none shadow-md border border-neutral-800 overflow-hidden flex flex-col justify-between group hover:border-neutral-700 transition-all duration-300"
              >
                {/* Visual Top Bar */}
                <div className={`h-2.5 bg-neutral-800`} />

                <div className="p-6 sm:p-7 flex-1">
                  <div className="flex justify-between items-start gap-2 mb-4">
                    <span className="text-[10px] font-extrabold tracking-widest text-neutral-400 uppercase bg-neutral-900 border border-neutral-800 px-2.5 py-1 rounded-none">
                      {course.category === 'web-dev' ? 'Development' : course.category === 'data-ai' ? 'AI & Data' : 'Cloud / Operations'}
                    </span>
                    <span className="flex items-center gap-1 text-xs font-bold text-neutral-200 bg-neutral-900 border border-neutral-800 px-2 py-0.5 rounded-none">
                      ★ {course.rating}
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-display font-extrabold text-white tracking-tight transition-colors">
                    {course.title}
                  </h3>

                  <p className="text-neutral-400 text-xs sm:text-sm mt-2.5 leading-relaxed font-light">
                    {course.description}
                  </p>

                  {/* Course Details row */}
                  <div className="grid grid-cols-2 gap-4 my-5 py-3.5 border-y border-neutral-900 text-xs text-neutral-300 font-bold">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4.5 w-4.5 text-white shrink-0" />
                      <span>{course.duration}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Code2 className="h-4.5 w-4.5 text-white shrink-0" />
                      <span>{course.projectsCount}+ Prod Projects</span>
                    </div>
                  </div>

                  {/* Skills Grid */}
                  <div>
                    <h5 className="text-[10px] font-extrabold text-neutral-400 uppercase tracking-widest mb-2.5">
                      KEY PRODUCTION SKILLS COVERED
                    </h5>
                    <div className="flex flex-wrap gap-1.5">
                      {course.skills.map((skill) => (
                        <span 
                          key={skill}
                          className="text-[10px] font-bold text-neutral-300 bg-neutral-950 border border-neutral-850 px-2 py-1 rounded-none"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Expandable Syllabus Accordion */}
                  <div className="mt-5">
                    <button
                      onClick={() => toggleCurriculum(course.id)}
                      className="flex items-center gap-1.5 text-xs font-bold text-neutral-400 hover:text-white transition-colors cursor-pointer"
                      id={`btn-syllabus-${course.id}`}
                    >
                      {expandedCourseId === course.id ? (
                        <>
                          <ChevronUp className="h-4 w-4 text-white" />
                          Hide Detailed Syllabus
                        </>
                      ) : (
                        <>
                          <ChevronDown className="h-4 w-4 text-neutral-500" />
                          View Detailed Syllabus
                        </>
                      )}
                    </button>

                    <AnimatePresence>
                      {expandedCourseId === course.id && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden mt-3"
                        >
                          <div className="bg-neutral-950 rounded-none p-4 border border-neutral-900 space-y-2">
                            <h6 className="text-[10px] font-black text-neutral-500 uppercase tracking-widest mb-1.5">
                              MODULE SYLLABUS PIPELINE
                            </h6>
                            {course.curriculum.map((module, mIdx) => (
                              <div key={mIdx} className="flex items-start gap-2 text-xs text-neutral-300 font-medium">
                                <CheckCircle2 className="h-4 w-4 text-black shrink-0 mt-0.5" />
                                <span>{module}</span>
                              </div>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>

                {/* Card Footer (NO prices, pure black theme with "Apply Now" CTA button) */}
                <div className="p-6 bg-neutral-950 border-t border-neutral-900 flex items-center justify-between">
                  <div className="leading-tight">
                    <span className="text-black text-[10px] font-bold tracking-widest uppercase">
                      Curriculum Access Approved
                    </span>
                    <p className="text-xs text-neutral-400 font-medium">
                      Premium Training Program
                    </p>
                  </div>

                  <button
                    onClick={() => onEnrollClick(course.title)}
                    className="px-5 py-2.5 bg-white text-black hover:bg-neutral-200 rounded-none text-xs font-bold uppercase tracking-wider transition-all duration-300 shadow-md"
                    id={`enroll-btn-${course.id}`}
                  >
                    Apply Now
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
