import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Layers, CheckCircle2, Sparkles, Eye 
} from 'lucide-react';
import { LiveProject } from '../types';
import AnimatedGridBackground from './AnimatedGridBackground';

const projectsList: LiveProject[] = [
  {
    id: 'ecom',
    title: 'Enterprise E-Commerce Microservices',
    description: 'High-availability retail platform designed to support 100k+ concurrent active users, complete with secure Stripe payment flows and real-time stock inventories.',
    techStack: ['React', 'Node.js', 'Redis', 'PostgreSQL', 'Docker', 'AWS ECS', 'Stripe API'],
    features: [
      'Sub-100ms Product Search using Redis full-text caching pipelines',
      'Transactional integrity for stock deduction with PostgreSQL row locking',
      'Event-driven order email confirmations with AWS Simple Queue Service'
    ],
    difficulty: 'Advanced',
    architecture: 'API Client Gateway -> Node.js Cluster -> Redis Cache -> Postgres DB (Read Replica)'
  },
  {
    id: 'chatbot',
    title: 'Corporate AI Knowledge Chatbot',
    description: 'Autonomous AI assistant that ingests company wikis and PDF files, using vector search schemas to deliver contextually precise corporate support answers.',
    techStack: ['Next.js', 'FastAPI', 'Gemini Pro', 'Pinecone', 'MongoDB', 'Docker', 'Python'],
    features: [
      'Vector Embeddings matching using cosine similarity in Pinecone DB',
      'Streaming responses from Gemini AI APIs for natural fluid client chat',
      'Secure document uploading and automated text splitting pipeline'
    ],
    difficulty: 'Advanced',
    architecture: 'Frontend App -> Python Service -> Pinecone Vector Space -> Google Gemini API'
  },
  {
    id: 'hospital',
    title: 'Hospital Management & EHR Ledger',
    description: 'Digital medical records ledger with role-based dashboard panels for doctors, receptionists, and patients, facilitating remote consult bookers.',
    techStack: ['MERN Stack', 'Redux Toolkit', 'Express', 'JWT', 'MongoDB', 'Postman Client'],
    features: [
      'Encrypted Electronic Health Records (EHR) using Node.js crypto modules',
      'Automated doctor calendar slot booking with real-time sockets notifications',
      'Comprehensive PDF medical bill and prescription generators'
    ],
    difficulty: 'Intermediate',
    architecture: 'Doctor UI & Patient UI -> Node JWT Auth Gate -> Mongoose ODM -> MongoDB'
  },
  {
    id: 'banking',
    title: 'Banking Ledger & Transaction Core',
    description: 'High-security micro-banking simulator featuring instant peer-to-peer cash transfers, dual-ledger balance audits, and suspicious transfer flags.',
    techStack: ['Java', 'Spring Boot', 'Spring Security', 'PostgreSQL', 'Kafka', 'Docker'],
    features: [
      'Atomic transfer commits secured by transactional isolations',
      'Event streams for compliance auditing and suspicious transfers via Apache Kafka',
      'OAuth2 Client-Credentials authorization protocols with Spring Security'
    ],
    difficulty: 'Advanced',
    architecture: 'Web Portal -> Spring Security Gateway -> Apache Kafka Broker -> Postgres'
  },
  {
    id: 'food',
    title: 'Food Delivery Real-Time Network',
    description: 'On-demand food delivery mock system tracking active driver coordinate arrays, dispatching notifications to clients on order updates.',
    techStack: ['React Native', 'Node.js', 'Socket.io', 'MongoDB', 'Google Maps API'],
    features: [
      'Real-time coordinate syncing using Socket.io web socket feeds',
      'Driver dispatching logic mapped via haversine distance computations',
      'Client-side interactive map plotting paths with Google Directions API'
    ],
    difficulty: 'Advanced',
    architecture: 'Client App & Driver App -> Socket.io Relay -> Express Backend -> MongoDB'
  },
  {
    id: 'crm',
    title: 'B2B Sales CRM Analytics Dashboard',
    description: 'Data analytics hub visualizer helping operations teams monitor lead sources, track deal conversion timelines, and monitor monthly goals.',
    techStack: ['React', 'D3.js', 'Recharts', 'Node.js', 'PostgreSQL', 'Tailwind CSS'],
    features: [
      'Responsive interactive cohort charts built with Recharts vector suites',
      'Automated lead conversion percentage tracking with cron pipeline scripts',
      'Dynamic PDF sales performance generator on client queries'
    ],
    difficulty: 'Intermediate',
    architecture: 'Manager Console -> API endpoints -> PostgreSQL aggregates -> Vector Charts'
  }
];

export default function LiveProjects() {
  const [selectedProjectId, setSelectedProjectId] = useState<string | null>(null);

  return (
    <section id="projects" className="py-24 bg-black relative scroll-mt-10 text-white border-b border-neutral-900">
      {/* 4K Background Image and Animated Grid */}
      <AnimatedGridBackground 
        imageUrl="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=3840" 
        overlayClassName="bg-black/92"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[11px] font-extrabold uppercase tracking-widest text-white bg-white/10 px-3 py-1.5 rounded-full inline-flex items-center gap-1.5 border border-white/10">
            <Sparkles className="h-3 w-3 text-emerald-400" />
            PRODUCTION LEVEL PROJECTS
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-white mt-4 tracking-tight leading-tight">
            Build Authentic Live Portfolios
          </h2>
          <p className="text-neutral-400 mt-3 text-base sm:text-lg font-light">
            Our students don't just write algorithms. They architect real, cloud-deployed, enterprise platforms. Click a project card to analyze its live architecture.
          </p>
        </div>

        {/* Projects Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsList.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              whileHover={{ y: -6 }}
              className="bg-[#050505]/95 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 border border-neutral-800 overflow-hidden flex flex-col justify-between"
            >
              <div className="p-6 sm:p-7">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-[10px] font-black tracking-widest text-neutral-400 uppercase bg-neutral-900 border border-neutral-850 px-2.5 py-1 rounded-md">
                    {project.difficulty} SYSTEM
                  </span>
                  <div className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                </div>

                <h3 className="text-lg sm:text-xl font-display font-extrabold text-white tracking-tight">
                  {project.title}
                </h3>

                <p className="text-neutral-400 text-xs sm:text-sm mt-2.5 leading-relaxed font-light">
                  {project.description}
                </p>

                {/* Features list */}
                <div className="mt-5 space-y-2">
                  <h5 className="text-[10px] font-black text-neutral-500 uppercase tracking-widest mb-1.5">
                    DEVELOPMENT HIGHLIGHTS
                  </h5>
                  {project.features.map((feat, fIdx) => (
                    <div key={fIdx} className="flex items-start gap-2 text-xs text-neutral-300 leading-normal font-light">
                      <CheckCircle2 className="h-4 w-4 text-white shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>

                {/* Tech Badges */}
                <div className="flex flex-wrap gap-1.5 mt-5">
                  {project.techStack.map((tech) => (
                    <span 
                      key={tech}
                      className="text-[10px] font-bold text-white bg-neutral-900 border border-neutral-800 px-2 py-0.5 rounded-md"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* View Architecture Action Bar */}
              <div className="p-5 bg-[#0a0a0a] border-t border-neutral-900">
                <button
                  onClick={() => setSelectedProjectId(selectedProjectId === project.id ? null : project.id)}
                  className="w-full py-2.5 bg-white hover:bg-neutral-200 text-black text-xs font-bold uppercase tracking-wider rounded-xl transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                  id={`btn-arch-${project.id}`}
                >
                  <Eye className="h-4 w-4" />
                  {selectedProjectId === project.id ? 'Hide Architecture' : 'Analyze Architecture'}
                </button>

                {/* Embedded Architecture Viewer */}
                <AnimatePresence>
                  {selectedProjectId === project.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden mt-3"
                    >
                      <div className="bg-black text-neutral-300 rounded-xl p-3.5 border border-neutral-800 font-mono text-[10px] space-y-2 leading-relaxed">
                        <p className="text-white font-bold uppercase tracking-wider text-[9px] border-b border-neutral-900 pb-1.5 flex items-center gap-1.5">
                          <Layers className="h-3.5 w-3.5" />
                          ARCHITECTURAL FLOW MODEL
                        </p>
                        <p className="whitespace-pre-wrap">{project.architecture}</p>
                        <div className="h-px bg-neutral-900 my-1" />
                        <div className="flex items-center gap-1.5 text-[9px] text-neutral-500 font-bold">
                          <span>Status: Deployed to production</span>
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
