import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  LayoutDashboard, Users, Briefcase, GraduationCap, 
  Search, Trash2, Database, Sparkles, Clock, ListTodo
} from 'lucide-react';
import { Lead } from '../types';
import AnimatedGridBackground from './AnimatedGridBackground';

interface DashboardConsoleProps {
  submittedLeads: Lead[];
  onDeleteLead: (id: string) => void;
  onUpdateLeadStatus: (id: string, status: Lead['status']) => void;
}

const mockInitialLeads: Lead[] = [
  { id: 'l1', name: 'N. Sandeep Kumar', phone: '9082123567', email: 'sandeep@gmail.com', course: 'MERN Stack Developer', experience: 'Student', preferredMode: 'Offline Vijayawada', timestamp: '2026-06-27 14:30', status: 'Demo Booked', assignedCounselor: 'Dr. Srinivasa Rao' },
  { id: 'l2', name: 'G. Lakshmi Prasanna', phone: '6303698711', email: 'lakshmi@gmail.com', course: 'UI/UX Design Specialist', experience: 'Fresher', preferredMode: 'Online Live', timestamp: '2026-06-28 09:15', status: 'New', assignedCounselor: 'Mrs. Srilatha Prasad' },
  { id: 'l3', name: 'T. Venu Gopal', phone: '8092123455', email: 'venu@gmail.com', course: 'Java Full Stack Academy', experience: 'Working Professional', preferredMode: 'Offline Vijayawada', timestamp: '2026-06-28 11:00', status: 'Contacted', assignedCounselor: 'Dr. Srinivasa Rao' }
];

const mockPlacementTrack = [
  { id: 'p1', name: 'K. Pranay Kumar', company: 'Amazon', package: '₹14.2 LPA', stage: 'Hired/Offered', role: 'Full Stack Engineer' },
  { id: 'p2', name: 'M. Haritha', company: 'Deloitte', package: '₹7.5 LPA', stage: 'Hired/Offered', role: 'React Developer' },
  { id: 'p3', name: 'V. Sandeep SDE', company: 'Cognizant', package: '₹6.8 LPA', stage: 'Technical Round 2', role: 'DevOps Associate' },
  { id: 'p4', name: 'J. Kiran Varma', company: 'TCS', package: '₹4.5 LPA', stage: 'HR Interview', role: 'Java Developer' },
  { id: 'p5', name: 'G. Sai Teja', company: 'Microsoft', package: '₹11.8 LPA', stage: 'Hired/Offered', role: 'UI/UX Designer' },
  { id: 'p6', name: 'P. Rama Devi', company: 'Infosys', package: '₹5.4 LPA', stage: 'Mock Review', role: 'React Developer' }
];

const mockLmsRecordings = [
  { title: 'Advanced React Hooks: custom ref pipelines', date: '2026-06-26', duration: '1h 45m', trainer: 'Devendra Prasad' },
  { title: 'Mongoose schemas & aggregate pipelines', date: '2026-06-25', duration: '2h 10m', trainer: 'Srinivasa Rao' },
  { title: 'Docker container network setups for dev', date: '2026-06-24', duration: '1h 55m', trainer: 'Harish Varma' }
];

export default function DashboardConsole({ submittedLeads, onDeleteLead, onUpdateLeadStatus }: DashboardConsoleProps) {
  const [activeConsole, setActiveConsole] = useState<'admin' | 'student' | 'trainer'>('admin');
  const [leadSearch, setLeadSearch] = useState('');
  const [leadFilter, setLeadFilter] = useState<'all' | 'New' | 'Contacted' | 'Demo Booked' | 'Enrolled'>('all');
  const [notification, setNotification] = useState<string | null>(null);

  // Merging local mock leads with user-submitted leads
  const combinedLeads = [...submittedLeads, ...mockInitialLeads];

  const filteredLeads = combinedLeads.filter(lead => {
    const matchesSearch = lead.name.toLowerCase().includes(leadSearch.toLowerCase()) || 
                          lead.phone.includes(leadSearch) ||
                          lead.course.toLowerCase().includes(leadSearch.toLowerCase());
    const matchesFilter = leadFilter === 'all' || lead.status === leadFilter;
    return matchesSearch && matchesFilter;
  });

  const showSystemToast = (msg: string) => {
    setNotification(msg);
    setTimeout(() => {
      setNotification(null);
    }, 3000);
  };

  return (
    <section className="py-24 bg-black text-white min-h-screen relative overflow-hidden border-b border-neutral-900">
      {/* 4K Background Image and Animated Grid */}
      <AnimatedGridBackground 
        imageUrl="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=3840" 
        overlayClassName="bg-black/94"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* System Toast notification */}
        <AnimatePresence>
          {notification && (
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="fixed top-6 right-6 z-50 bg-neutral-900 border border-neutral-800 text-white text-xs font-mono font-bold px-4 py-3 rounded-xl shadow-2xl flex items-center gap-2"
            >
              <Sparkles className="h-4 w-4 text-emerald-400 animate-pulse" />
              <span>{notification}</span>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Console Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between pb-8 border-b border-neutral-900 mb-10 gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-white/10 border border-white/10 rounded-full text-xs font-bold text-white">
              <Sparkles className="h-4.5 w-4.5 animate-pulse text-emerald-400" />
              SYSTEM PORTAL ACTIVE
            </div>
            <h1 className="text-2xl sm:text-3xl font-display font-black tracking-tight mt-2.5">
              ShiftUP Academic & CRM Console
            </h1>
            <p className="text-neutral-400 text-xs sm:text-sm mt-1 font-light">
              Explore how our administrators, instructors, and students cooperate to build high-efficiency careers.
            </p>
          </div>

          {/* Console Role Selector */}
          <div className="flex gap-1.5 bg-[#050505]/95 p-1.5 rounded-2xl border border-neutral-800 w-fit">
            <button
              onClick={() => setActiveConsole('admin')}
              className={`flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                activeConsole === 'admin' ? 'bg-white text-black shadow-md' : 'text-neutral-400 hover:text-white'
              }`}
              id="role-btn-admin"
            >
              <LayoutDashboard className="h-4 w-4" />
              Admin CRM
            </button>

            <button
              onClick={() => setActiveConsole('student')}
              className={`flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                activeConsole === 'student' ? 'bg-white text-black shadow-md' : 'text-neutral-400 hover:text-white'
              }`}
              id="role-btn-student"
            >
              <GraduationCap className="h-4 w-4" />
              Student LMS
            </button>

            <button
              onClick={() => setActiveConsole('trainer')}
              className={`flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                activeConsole === 'trainer' ? 'bg-white text-black shadow-md' : 'text-neutral-400 hover:text-white'
              }`}
              id="role-btn-trainer"
            >
              <Users className="h-4 w-4" />
              Trainer Desk
            </button>
          </div>
        </div>

        {/* Console Body viewport */}
        <div className="bg-[#050505]/95 rounded-3xl p-5 sm:p-7 border border-neutral-800 shadow-2xl relative">
          
          <AnimatePresence mode="wait">
            
            {/* ADMIN CONSOLE VIEW */}
            {activeConsole === 'admin' && (
              <motion.div
                key="admin-view"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                className="space-y-8"
              >
                {/* Admin Status Indicators */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  <div className="bg-black p-4 rounded-2xl border border-neutral-850">
                    <span className="text-[10px] font-bold text-neutral-500 uppercase tracking-widest block">ACTIVE LEAD COUNT</span>
                    <strong className="text-2xl font-display font-black text-white mt-1 block">
                      {combinedLeads.length} Inquiries
                    </strong>
                    <div className="h-1 w-full bg-neutral-900 rounded-full mt-2.5 overflow-hidden">
                      <div className="bg-white h-full w-[70%]" />
                    </div>
                  </div>

                  <div className="bg-black p-4 rounded-2xl border border-neutral-850">
                    <span className="text-[10px] font-bold text-neutral-500 uppercase tracking-widest block">PLACEMENT RATIO</span>
                    <strong className="text-2xl font-display font-black text-white mt-1 block">95.4% Rate</strong>
                    <div className="h-1 w-full bg-neutral-900 rounded-full mt-2.5 overflow-hidden">
                      <div className="bg-emerald-500 h-full w-[95%]" />
                    </div>
                  </div>

                  <div className="bg-black p-4 rounded-2xl border border-neutral-850">
                    <span className="text-[10px] font-bold text-neutral-500 uppercase tracking-widest block">RECRUITERS CONNECTED</span>
                    <strong className="text-2xl font-display font-black text-white mt-1 block">208 Companies</strong>
                    <div className="h-1 w-full bg-neutral-900 rounded-full mt-2.5 overflow-hidden">
                      <div className="bg-neutral-400 h-full w-[82%]" />
                    </div>
                  </div>

                  <div className="bg-black p-4 rounded-2xl border border-neutral-850">
                    <span className="text-[10px] font-bold text-neutral-500 uppercase tracking-widest block">ISO CERTIFICATION</span>
                    <strong className="text-2xl font-display font-black text-emerald-400 mt-1 block">ISO 9001:2015</strong>
                    <div className="h-1 w-full bg-neutral-900 rounded-full mt-2.5 overflow-hidden">
                      <div className="bg-emerald-400 h-full w-full" />
                    </div>
                  </div>
                </div>

                {/* Main grid split: Lead Management on left, Placement Track Kanban on right */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                  
                  {/* Lead Management Portal (7 cols) */}
                  <div className="lg:col-span-7 space-y-4">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-neutral-900/60 p-4 rounded-2xl border border-neutral-800/80">
                      <h3 className="text-sm font-black uppercase tracking-wider flex items-center gap-1.5 text-white">
                        <Database className="h-4.5 w-4.5" />
                        Lead Management CRM
                      </h3>
                      
                      {/* Search & Filter */}
                      <div className="flex items-center gap-2.5">
                        <div className="relative">
                          <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-neutral-500" />
                          <input 
                            type="text" 
                            placeholder="Search names..."
                            value={leadSearch}
                            onChange={(e) => setLeadSearch(e.target.value)}
                            className="bg-black border border-neutral-800 rounded-lg pl-8 pr-3 py-1 text-xs font-medium focus:outline-none focus:border-white text-slate-200"
                            id="lead-search-input"
                          />
                        </div>

                        <select
                          value={leadFilter}
                          onChange={(e) => setLeadFilter(e.target.value as any)}
                          className="bg-black border border-neutral-800 rounded-lg text-xs px-2 py-1 text-slate-350 cursor-pointer"
                          id="lead-filter-select"
                        >
                          <option value="all">All</option>
                          <option value="New">New</option>
                          <option value="Contacted">Contacted</option>
                          <option value="Demo Booked">Demo Booked</option>
                          <option value="Enrolled">Enrolled</option>
                        </select>
                      </div>
                    </div>

                    {/* Table list of leads */}
                    <div className="bg-black rounded-2xl border border-neutral-800 overflow-x-auto">
                      <table className="w-full text-left text-xs border-collapse">
                        <thead>
                          <tr className="border-b border-neutral-900 text-neutral-500 bg-neutral-900/20 select-none">
                            <th className="p-3">Name</th>
                            <th className="p-3">Course / Mode</th>
                            <th className="p-3">Status</th>
                            <th className="p-3 text-right">Actions</th>
                          </tr>
                        </thead>
                        <tbody>
                          {filteredLeads.map((lead) => (
                            <tr key={lead.id} className="border-b border-neutral-900 hover:bg-neutral-900/30 transition-colors">
                              <td className="p-3">
                                <p className="font-bold text-white">{lead.name}</p>
                                <p className="text-neutral-500 text-[10px] mt-0.5">{lead.phone} • {lead.experience}</p>
                              </td>
                              <td className="p-3">
                                <p className="font-semibold text-neutral-300">{lead.course}</p>
                                <p className="text-neutral-500 text-[10px] mt-0.5">{lead.preferredMode}</p>
                              </td>
                              <td className="p-3">
                                <select
                                  value={lead.status}
                                  onChange={(e) => onUpdateLeadStatus(lead.id, e.target.value as any)}
                                  className={`text-[9px] font-black px-2 py-1 rounded border bg-black cursor-pointer ${
                                    lead.status === 'New' ? 'text-white border-neutral-800' :
                                    lead.status === 'Contacted' ? 'text-neutral-350 border-neutral-800' :
                                    lead.status === 'Demo Booked' ? 'text-emerald-400 border-neutral-800' :
                                    'text-white border-neutral-750'
                                  }`}
                                  id={`status-select-${lead.id}`}
                                >
                                  <option value="New">New</option>
                                  <option value="Contacted">Contacted</option>
                                  <option value="Demo Booked">Demo Booked</option>
                                  <option value="Enrolled">Enrolled</option>
                                </select>
                              </td>
                              <td className="p-3 text-right">
                                <button
                                  onClick={() => onDeleteLead(lead.id)}
                                  className="p-1 hover:bg-neutral-900 hover:text-white text-neutral-600 rounded-md transition-colors cursor-pointer"
                                  id={`btn-del-lead-${lead.id}`}
                                >
                                  <Trash2 className="h-4 w-4" />
                                </button>
                              </td>
                            </tr>
                          ))}
                          {filteredLeads.length === 0 && (
                            <tr>
                              <td colSpan={4} className="p-8 text-center text-neutral-500 font-mono">
                                No records matching credentials recorded. Try submitting the Demo Form!
                              </td>
                            </tr>
                          )}
                        </tbody>
                      </table>
                    </div>
                  </div>

                  {/* Placement Tracker board (5 cols) */}
                  <div className="lg:col-span-5 space-y-4">
                    <div className="bg-neutral-900/60 p-4 rounded-2xl border border-neutral-800/80 flex items-center justify-between">
                      <h3 className="text-sm font-black uppercase tracking-wider flex items-center gap-1.5 text-white">
                        <Briefcase className="h-4.5 w-4.5" />
                        Placement Pipelines
                      </h3>
                      <span className="text-[10px] bg-neutral-800 text-neutral-400 font-bold px-2.5 py-0.5 rounded-full">
                        Kanban Flow
                      </span>
                    </div>

                    <div className="bg-black rounded-2xl border border-neutral-800 p-4 h-96 overflow-y-auto space-y-3">
                      {mockPlacementTrack.map((student) => (
                        <div 
                          key={student.id}
                          className="bg-neutral-950 border border-neutral-850 p-3 rounded-xl flex items-center justify-between hover:border-neutral-800 transition-all"
                        >
                          <div>
                            <h5 className="text-xs font-bold text-white">{student.name}</h5>
                            <p className="text-[10px] text-neutral-500 mt-0.5">{student.role} • {student.company}</p>
                            <p className="text-[10px] text-neutral-300 font-bold mt-1">LPA: {student.package}</p>
                          </div>

                          <span className={`text-[9px] font-black uppercase px-2 py-0.5 rounded ${
                            student.stage.includes('Hired') ? 'bg-neutral-900 text-white border border-neutral-800' :
                            student.stage.includes('Technical') ? 'bg-neutral-900 text-neutral-400 border border-neutral-800' :
                            'bg-black text-neutral-500 border border-neutral-900'
                          }`}>
                            {student.stage}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                </div>
              </motion.div>
            )}

            {/* STUDENT PORTAL LMS VIEW */}
            {activeConsole === 'student' && (
              <motion.div
                key="student-view"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                className="space-y-6"
              >
                {/* Student header details */}
                <div className="bg-neutral-900/60 p-5 rounded-2xl border border-neutral-800/80 grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
                  <div className="flex items-center gap-3.5">
                    <div className="w-12 h-12 rounded-full bg-white text-black flex items-center justify-center text-base font-black">
                      ST
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-white">Simulated Student Console</h4>
                      <p className="text-xs text-neutral-500 mt-0.5">MERN Stack Batch M-08</p>
                    </div>
                  </div>

                  <div className="text-left md:text-center leading-tight">
                    <span className="text-[9px] font-bold text-neutral-500 uppercase tracking-widest">COURSE PROGRESS</span>
                    <div className="flex items-center gap-2 justify-start md:justify-center mt-1">
                      <span className="font-display font-black text-xl text-white">82%</span>
                      <span className="text-xs text-neutral-500 font-light">Modules Completed</span>
                    </div>
                  </div>

                  <div className="text-left md:text-right leading-tight">
                    <span className="text-[9px] font-bold text-neutral-500 uppercase tracking-widest">VERIFIED ATTENDANCE</span>
                    <p className="text-sm font-extrabold text-emerald-400 mt-1">96.4% Compliance (Excellent)</p>
                  </div>
                </div>

                {/* Syllabus Track list */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  
                  {/* Recordings list */}
                  <div className="space-y-4">
                    <h3 className="text-xs font-black uppercase tracking-widest text-neutral-400 flex items-center gap-1.5">
                      <Clock className="h-4 w-4 text-white" />
                      LMS Daily Live Class Recordings
                    </h3>

                    <div className="space-y-3">
                      {mockLmsRecordings.map((rec) => (
                        <div 
                          key={rec.title}
                          className="bg-black p-4 rounded-xl border border-neutral-850 flex items-center justify-between hover:border-neutral-800 transition-colors cursor-pointer"
                        >
                          <div className="leading-tight">
                            <h5 className="text-xs font-bold text-white">{rec.title}</h5>
                            <p className="text-[10px] text-neutral-500 mt-1 font-light">Recorded: {rec.date} • Instructor: {rec.trainer}</p>
                          </div>
                          <span className="text-[10px] bg-neutral-950 border border-neutral-800 px-2 py-0.5 rounded text-neutral-400">
                            {rec.duration}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Assignments track */}
                  <div className="space-y-4">
                    <h3 className="text-xs font-black uppercase tracking-widest text-neutral-400 flex items-center gap-1.5">
                      <ListTodo className="h-4 w-4 text-white" />
                      Assigned Practical Evaluations
                    </h3>

                    <div className="space-y-3">
                      <div className="bg-black p-4 rounded-xl border border-neutral-850 flex items-center justify-between">
                        <div className="leading-tight">
                          <h5 className="text-xs font-bold text-white font-medium">Assignment 14: Secure JWT Router Middleware</h5>
                          <p className="text-[10px] text-neutral-500 mt-1 font-light">Deadline: Passed • Checked by Mentor Devendra</p>
                        </div>
                        <span className="text-[10px] font-black text-emerald-400 bg-neutral-950 px-2.5 py-0.5 rounded border border-neutral-800">
                          COMPLETED
                        </span>
                      </div>

                      <div className="bg-black p-4 rounded-xl border border-neutral-850 flex items-center justify-between">
                        <div className="leading-tight">
                          <h5 className="text-xs font-bold text-white font-medium">Assignment 15: MongoDB indexing schema aggregate pipelines</h5>
                          <p className="text-[10px] text-neutral-500 mt-1 font-light">Deadline: 2 days left • Active submission node open</p>
                        </div>
                        <span className="text-[10px] font-black text-amber-400 bg-neutral-950 px-2.5 py-0.5 rounded border border-neutral-800 animate-pulse">
                          PENDING
                        </span>
                      </div>
                    </div>
                  </div>

                </div>
              </motion.div>
            )}

            {/* TRAINER VIEW */}
            {activeConsole === 'trainer' && (
              <motion.div
                key="trainer-view"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                className="space-y-6"
              >
                <div className="bg-neutral-900/60 p-5 rounded-2xl border border-neutral-800/80 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 bg-neutral-800 text-white rounded-xl">
                      <Users className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-white font-medium">Trainer Desk Panel</h4>
                      <p className="text-xs text-neutral-500 mt-0.5">Managing active student groups in Vijayawada Center</p>
                    </div>
                  </div>
                  <button
                    className="px-4 py-2 bg-white hover:bg-neutral-200 text-black text-xs font-bold uppercase rounded-lg transition-colors flex items-center gap-1.5 cursor-pointer"
                    id="btn-new-batch"
                    onClick={() => showSystemToast('Simulator setup is currently loaded.')}
                  >
                    Launch New Batch Setup
                  </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {/* Batch 1 */}
                  <div className="bg-black p-5 rounded-2xl border border-neutral-800 flex flex-col justify-between">
                    <div>
                      <span className="text-[9px] font-black text-white bg-neutral-900 border border-neutral-800 px-2 py-0.5 rounded uppercase tracking-wider">
                        BATCH MERN-08 (Mornings)
                      </span>
                      <h4 className="text-base font-bold text-white mt-3">MERN Full Stack Developer</h4>
                      <p className="text-xs text-neutral-500 mt-1 font-light">Timing: 9:00 AM – 11:30 AM • Offline Lab 1</p>
                      
                      <div className="grid grid-cols-2 gap-2 mt-4 text-[11px] text-neutral-400 font-bold border-t border-neutral-900 pt-3">
                        <div>Students: <span className="text-white">18 Registered</span></div>
                        <div>Attendance Avg: <span className="text-emerald-400">96.8%</span></div>
                      </div>
                    </div>
                    <button 
                      onClick={() => showSystemToast('Attendance sheet loaded successfully.')}
                      className="w-full mt-4 py-2 bg-[#050505] text-neutral-400 hover:text-white border border-neutral-850 rounded-xl text-xs font-bold cursor-pointer"
                    >
                      Launch Attendee Sheet
                    </button>
                  </div>

                  {/* Batch 2 */}
                  <div className="bg-black p-5 rounded-2xl border border-neutral-800 flex flex-col justify-between">
                    <div>
                      <span className="text-[9px] font-black text-white bg-neutral-900 border border-neutral-800 px-2 py-0.5 rounded uppercase tracking-wider">
                        BATCH JAVA-FS-14 (Afternoons)
                      </span>
                      <h4 className="text-base font-bold text-white mt-3">Java Full Stack Academy</h4>
                      <p className="text-xs text-neutral-500 mt-1 font-light">Timing: 2:00 PM – 4:30 PM • Offline Lab 3</p>

                      <div className="grid grid-cols-2 gap-2 mt-4 text-[11px] text-neutral-400 font-bold border-t border-neutral-900 pt-3">
                        <div>Students: <span className="text-white">24 Registered</span></div>
                        <div>Attendance Avg: <span className="text-emerald-400">94.2%</span></div>
                      </div>
                    </div>
                    <button 
                      onClick={() => showSystemToast('Attendance sheet loaded successfully.')}
                      className="w-full mt-4 py-2 bg-[#050505] text-neutral-400 hover:text-white border border-neutral-850 rounded-xl text-xs font-bold cursor-pointer"
                    >
                      Launch Attendee Sheet
                    </button>
                  </div>

                  {/* Batch 3 */}
                  <div className="bg-black p-5 rounded-2xl border border-neutral-800 flex flex-col justify-between">
                    <div>
                      <span className="text-[9px] font-black text-white bg-neutral-900 border border-neutral-800 px-2 py-0.5 rounded uppercase tracking-wider">
                        BATCH CLOUD-DEVOPS-02 (Weekends)
                      </span>
                      <h4 className="text-base font-bold text-white mt-3">AWS Cloud & DevOps</h4>
                      <p className="text-xs text-neutral-500 mt-1 font-light">Timing: Sat/Sun 10 AM – 3 PM • Online Live</p>

                      <div className="grid grid-cols-2 gap-2 mt-4 text-[11px] text-neutral-400 font-bold border-t border-neutral-900 pt-3">
                        <div>Students: <span className="text-white">32 Registered</span></div>
                        <div>Attendance Avg: <span className="text-emerald-400">95.4%</span></div>
                      </div>
                    </div>
                    <button 
                      onClick={() => showSystemToast('Attendance sheet loaded successfully.')}
                      className="w-full mt-4 py-2 bg-[#050505] text-neutral-400 hover:text-white border border-neutral-850 rounded-xl text-xs font-bold cursor-pointer"
                    >
                      Launch Attendee Sheet
                    </button>
                  </div>
                </div>
              </motion.div>
            )}

          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
