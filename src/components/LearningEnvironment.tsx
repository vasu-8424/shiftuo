import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Laptop, Code2, Terminal, Sparkles, Play, 
  CheckCircle2, GitBranch, Database, Cpu 
} from 'lucide-react';
import AnimatedGridBackground from './AnimatedGridBackground';

export default function LearningEnvironment() {
  const [activeTab, setActiveTab] = useState<'vscode' | 'terminal' | 'github' | 'cloud-db'>('vscode');
  const [terminalLogs, setTerminalLogs] = useState<string[]>([
    'shiftup_client_init: active on port 3000',
    'docker compose up -d ... Done',
    'postgres_db listening on port 5432',
    'Ready for interaction. Try a command below!'
  ]);
  const [typedCommand, setTypedCommand] = useState('');
  const [isRunningCode, setIsRunningCode] = useState(false);
  const [codeOutput, setCodeOutput] = useState<string>('');

  const [codeContent, setCodeContent] = useState<string>(
    `// ShiftUP Software Academy - Interactive Workshop\n` +
    `import { EnterpriseServer } from '@shiftup/core';\n\n` +
    `const server = new EnterpriseServer({\n` +
    `  port: 3000,\n` +
    `  database: 'MongoDB',\n` +
    `  environment: 'production',\n` +
    `  scaling: 'Docker Swarm'\n` +
    `});\n\n` +
    `server.on('ready', () => {\n` +
    `  console.log('🚀 Academy server is up! Bridging the academic gap.');\n` +
    `});\n\n` +
    `server.boot();`
  );

  const runCodeSimulation = () => {
    setIsRunningCode(true);
    setCodeOutput('Compiling source via esbuild...\nAnalyzing types with TypeScript compiler...\n');
    setTimeout(() => {
      setCodeOutput(prev => prev + 'Bundling assets for Client Interface (Vite v6)...\n');
    }, 1000);
    setTimeout(() => {
      setCodeOutput(prev => prev + '✔ Success: Application running on https://localhost:3000\n[Logs]: 🚀 Academy server is up! Bridging the academic gap.');
      setIsRunningCode(false);
    }, 2200);
  };

  const handleCommandRun = (cmd: string) => {
    setTerminalLogs(prev => [...prev, `$ ${cmd}`]);
    
    setTimeout(() => {
      let response: string[] = [];
      if (cmd === 'npm run dev') {
        response = [
          '  vite v6.2.3 dev server running',
          '  > Local: http://localhost:3000/',
          '  > Network: http://192.168.1.5:3000/',
          '  ✔ HMR enabled (ShiftUP live stream active)',
          '  [Database] connected to mongodb://cluster0.azure.mongodb.net/shiftup'
        ];
      } else if (cmd === 'docker build') {
        response = [
          '  Sending build context to Docker daemon  42.5MB',
          '  Step 1/5 : FROM node:20-alpine',
          '  ---> a5341cd0112f',
          '  Step 2/5 : WORKDIR /app',
          '  ---> Running in f47ea37bc89d',
          '  Step 3/5 : RUN npm install --production',
          '  ---> Successfully installed dependencies',
          '  Step 4/5 : EXPOSE 3000',
          '  Successfully tagged shiftup-academy-core:latest'
        ];
      } else if (cmd === 'git push') {
        response = [
          '  Enumerating objects: 14, done.',
          '  Counting objects: 100% (14/14), done.',
          '  Delta compression using up to 8 threads',
          '  Compressing objects: 100% (8/8), done.',
          '  Writing objects: 100% (10/10), 1.25 KiB | 1.25 MiB/s, done.',
          '  To github.com:shiftup/academy-core.git',
          '   * [new branch]      main -> main',
          '  Branch \'main\' set up to track remote branch \'main\' from \'origin\'.'
        ];
      } else {
        response = [
          `  Command '${cmd}' recognized by ShiftUP microkernel.`,
          '  No side effects recorded. Try one of the standard pipelines.'
        ];
      }
      setTerminalLogs(prev => [...prev, ...response]);
    }, 300);
  };

  return (
    <section id="workspace" className="py-24 bg-black text-white relative overflow-hidden border-b border-neutral-900">
      {/* 4K Background Image and Animated Grid */}
      <AnimatedGridBackground 
        imageUrl="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=3840" 
        overlayClassName="bg-black/92"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-[11px] font-extrabold uppercase tracking-widest text-white bg-white/10 px-3.5 py-1.5 rounded-full inline-flex items-center gap-1.5 border border-white/10">
            <Sparkles className="h-3.5 w-3.5 text-emerald-400" />
            ENTERPRISE WORKSPACE SIMULATOR
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold mt-4 tracking-tight leading-tight text-white">
            No Boring Textbooks. <br />
            Enter a Real Software Agency.
          </h2>
          <p className="text-neutral-400 mt-4 text-base sm:text-lg font-light">
            We operate like a modern technology company. Explore our interactive sandbox environment to see how students build, test, and deploy applications.
          </p>
        </div>

        {/* Workspace Mock Frame */}
        <div className="bg-[#050505]/90 rounded-3xl border border-neutral-800 shadow-2xl overflow-hidden max-w-5xl mx-auto">
          
          {/* Workstation Tab Headers */}
          <div className="bg-[#0a0a0a] border-b border-neutral-800 p-4 flex flex-wrap gap-2 items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="h-3.5 w-3.5 rounded-full bg-neutral-700 block" />
              <span className="h-3.5 w-3.5 rounded-full bg-neutral-600 block" />
              <span className="h-3.5 w-3.5 rounded-full bg-neutral-400 block" />
              <div className="h-4 w-px bg-neutral-800 mx-2" />
              <div className="flex items-center gap-1.5 text-xs text-neutral-400 font-bold">
                <Laptop className="h-4 w-4 text-white" />
                <span>ShiftUP Workstation (Vijayawada & Gandhinagar Center)</span>
              </div>
            </div>

            {/* Menu Buttons */}
            <div className="flex gap-1">
              <button
                onClick={() => setActiveTab('vscode')}
                className={`flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  activeTab === 'vscode' ? 'bg-white text-black shadow-inner' : 'text-neutral-400 hover:text-white'
                }`}
                id="ws-tab-vscode"
              >
                <Code2 className="h-4 w-4" />
                VS Code
              </button>

              <button
                onClick={() => setActiveTab('terminal')}
                className={`flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  activeTab === 'terminal' ? 'bg-white text-black shadow-inner' : 'text-neutral-400 hover:text-white'
                }`}
                id="ws-tab-terminal"
              >
                <Terminal className="h-4 w-4" />
                Linux Terminal
              </button>

              <button
                onClick={() => setActiveTab('github')}
                className={`flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  activeTab === 'github' ? 'bg-white text-black shadow-inner' : 'text-neutral-400 hover:text-white'
                }`}
                id="ws-tab-github"
              >
                <GitBranch className="h-4 w-4" />
                Git Commits
              </button>

              <button
                onClick={() => setActiveTab('cloud-db')}
                className={`flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  activeTab === 'cloud-db' ? 'bg-white text-black shadow-inner' : 'text-neutral-400 hover:text-white'
                }`}
                id="ws-tab-cloud"
              >
                <Database className="h-4 w-4" />
                Docker & MongoDB
              </button>
            </div>
          </div>

          {/* Tab Body View */}
          <div className="p-6 min-h-[340px] font-mono text-sm leading-relaxed relative">
            <AnimatePresence mode="wait">
              
              {/* VS Code Panel */}
              {activeTab === 'vscode' && (
                <motion.div
                  key="vscode"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-4"
                >
                  <div className="flex items-center justify-between bg-[#0a0a0a] px-4 py-2 rounded-xl border border-neutral-800">
                    <span className="text-xs text-neutral-400 font-bold">App.tsx — Edited Live</span>
                    <button
                      onClick={runCodeSimulation}
                      disabled={isRunningCode}
                      className="flex items-center gap-1.5 px-3.5 py-1.5 bg-white text-black hover:bg-neutral-200 disabled:bg-neutral-800 text-xs font-bold rounded-lg transition-all cursor-pointer"
                      id="btn-run-vscode"
                    >
                      <Play className="h-3.5 w-3.5 fill-current" />
                      {isRunningCode ? 'Running...' : 'Run Code'}
                    </button>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
                    {/* Code editor */}
                    <div className="md:col-span-8 bg-black p-4 rounded-xl border border-neutral-800">
                      <textarea
                        value={codeContent}
                        onChange={(e) => setCodeContent(e.target.value)}
                        className="w-full h-48 bg-transparent text-neutral-200 focus:outline-none resize-none leading-relaxed font-mono text-xs"
                      />
                    </div>

                    {/* Output Panel */}
                    <div className="md:col-span-4 bg-black p-4 rounded-xl border border-neutral-800 flex flex-col justify-between">
                      <div>
                        <p className="text-xs text-neutral-500 font-bold border-b border-neutral-900 pb-1.5 uppercase tracking-wider select-none">
                          LOCAL COMPILATION FEED
                        </p>
                        <pre className="text-xs text-neutral-300 overflow-x-auto whitespace-pre-wrap mt-2 font-mono h-32 leading-relaxed">
                          {codeOutput || 'Click "Run Code" above to build the TypeScript sandbox.'}
                        </pre>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Linux Terminal Panel */}
              {activeTab === 'terminal' && (
                <motion.div
                  key="terminal"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="flex flex-col h-72 justify-between"
                >
                  <div className="bg-black p-4 rounded-xl border border-neutral-800 overflow-y-auto font-mono text-xs leading-relaxed flex-1 space-y-1">
                    {terminalLogs.map((log, idx) => (
                      <p key={idx} className={log.startsWith('$') ? 'text-white font-bold' : log.includes('✔') || log.includes('Done') ? 'text-emerald-400' : 'text-neutral-400'}>
                        {log}
                      </p>
                    ))}
                  </div>

                  {/* Predefined terminal shortcuts */}
                  <div className="mt-4 flex flex-wrap gap-2.5 items-center">
                    <span className="text-xs font-bold text-neutral-500 select-none">Interactive Pipelines:</span>
                    <button
                      onClick={() => handleCommandRun('npm run dev')}
                      className="px-3 py-1.5 bg-[#0a0a0a] hover:bg-[#121212] text-white text-xs font-bold rounded-lg border border-neutral-800 transition-colors cursor-pointer"
                      id="term-btn-dev"
                    >
                      npm run dev
                    </button>
                    <button
                      onClick={() => handleCommandRun('docker build')}
                      className="px-3 py-1.5 bg-[#0a0a0a] hover:bg-[#121212] text-white text-xs font-bold rounded-lg border border-neutral-800 transition-colors cursor-pointer"
                      id="term-btn-docker"
                    >
                      docker build
                    </button>
                    <button
                      onClick={() => handleCommandRun('git push')}
                      className="px-3 py-1.5 bg-[#0a0a0a] hover:bg-[#121212] text-white text-xs font-bold rounded-lg border border-neutral-800 transition-colors cursor-pointer"
                      id="term-btn-git"
                    >
                      git push origin main
                    </button>
                    <button
                      onClick={() => setTerminalLogs(['terminal logs flushed...'])}
                      className="px-3 py-1.5 bg-black text-neutral-400 hover:text-white text-xs font-bold rounded-lg ml-auto cursor-pointer"
                      id="term-btn-clear"
                    >
                      Reset Logs
                    </button>
                  </div>
                </motion.div>
              )}

              {/* Git Branch commits tracker */}
              {activeTab === 'github' && (
                <motion.div
                  key="github"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-4"
                >
                  <div className="flex items-center gap-2 bg-[#0a0a0a] px-4 py-2.5 rounded-xl border border-neutral-800 text-xs text-neutral-400">
                    <GitBranch className="h-4 w-4" />
                    <span>Repository: <strong className="text-white">shiftup-academy/social-network-api</strong></span>
                    <span className="ml-auto text-[10px] bg-neutral-900 text-neutral-300 px-2 py-0.5 rounded">3 Branches</span>
                  </div>

                  <div className="space-y-2">
                    <div className="bg-black p-4 rounded-xl border border-neutral-800 flex items-center justify-between text-xs hover:border-neutral-700 transition-colors">
                      <div className="flex items-center gap-3">
                        <span className="w-2.5 h-2.5 rounded-full bg-white" />
                        <div>
                          <p className="font-bold text-white">Merged PR #42: Build backend MongoDB models with mongoose schemas</p>
                          <p className="text-neutral-400 text-[10px] mt-0.5 font-light">By Student #1042 • Approved by Corporate Mentor Devendra</p>
                        </div>
                      </div>
                      <span className="text-[10px] font-mono text-emerald-400 bg-emerald-950/20 px-2 py-0.5 rounded border border-emerald-900/30">Verified Build</span>
                    </div>

                    <div className="bg-black p-4 rounded-xl border border-neutral-800 flex items-center justify-between text-xs hover:border-neutral-700 transition-colors">
                      <div className="flex items-center gap-3">
                        <span className="w-2.5 h-2.5 rounded-full bg-neutral-600" />
                        <div>
                          <p className="font-bold text-white">Configured secure JSON Web Token JWT endpoints</p>
                          <p className="text-neutral-400 text-[10px] mt-0.5 font-light">By Student #2185 • Auto Linting passed</p>
                        </div>
                      </div>
                      <span className="text-[10px] font-mono text-emerald-400 bg-emerald-950/20 px-2 py-0.5 rounded border border-emerald-900/30">Verified Build</span>
                    </div>

                    <div className="bg-black p-4 rounded-xl border border-neutral-800 flex items-center justify-between text-xs hover:border-neutral-700 transition-colors">
                      <div className="flex items-center gap-3">
                        <span className="w-2.5 h-2.5 rounded-full bg-neutral-850" />
                        <div>
                          <p className="font-bold text-white">Initial commit: Express Server template with typescript compiler configs</p>
                          <p className="text-neutral-400 text-[10px] mt-0.5 font-light">Created 4 days ago by ShiftUP Bot</p>
                        </div>
                      </div>
                      <span className="text-[10px] font-mono text-emerald-400 bg-emerald-950/20 px-2 py-0.5 rounded border border-emerald-900/30">Verified Build</span>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Docker & Cloud Database view */}
              {activeTab === 'cloud-db' && (
                <motion.div
                  key="cloud-db"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="grid grid-cols-1 md:grid-cols-2 gap-6"
                >
                  {/* Docker Containers status */}
                  <div className="bg-black p-4 rounded-xl border border-neutral-800 space-y-3.5">
                    <h4 className="text-xs font-bold text-neutral-400 uppercase tracking-widest border-b border-neutral-900 pb-2 flex items-center gap-2">
                      <Cpu className="h-4 w-4" />
                      DOCKER ENGINE CONTAINERS (LOCKED)
                    </h4>

                    <div className="flex items-center justify-between text-xs">
                      <span className="font-semibold text-neutral-200">redis-cache-service</span>
                      <span className="px-2 py-0.5 rounded bg-emerald-950/30 text-emerald-400 border border-emerald-900/30 text-[10px] font-bold">RUNNING</span>
                    </div>
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-semibold text-neutral-200">mongodb-replica-set</span>
                      <span className="px-2 py-0.5 rounded bg-emerald-950/30 text-emerald-400 border border-emerald-900/30 text-[10px] font-bold">RUNNING</span>
                    </div>
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-semibold text-neutral-200">express-api-gateway</span>
                      <span className="px-2 py-0.5 rounded bg-emerald-950/30 text-emerald-400 border border-emerald-900/30 text-[10px] font-bold">RUNNING</span>
                    </div>
                  </div>

                  {/* MongoDB metrics */}
                  <div className="bg-black p-4 rounded-xl border border-neutral-800 space-y-3.5">
                    <h4 className="text-xs font-bold text-neutral-400 uppercase tracking-widest border-b border-neutral-900 pb-2 flex items-center gap-2">
                      <Database className="h-4 w-4" />
                      MONGODB PRODUCTION ATLAS CLUSTER
                    </h4>

                    <div className="flex justify-between text-xs">
                      <span className="text-neutral-400">Cluster Status:</span>
                      <span className="text-emerald-400 font-bold">Connected</span>
                    </div>
                    <div className="flex justify-between text-xs">
                      <span className="text-neutral-400">Replica Nodes:</span>
                      <span className="text-neutral-200 font-semibold">3 Active</span>
                    </div>
                    <div className="flex justify-between text-xs">
                      <span className="text-neutral-400 font-light">Total Queries (Live):</span>
                      <span className="text-white font-semibold">41.8K Queries/sec</span>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Learning Journey timeline below the Workstation */}
        <div id="journey" className="mt-20 border-t border-neutral-800 pt-16 scroll-mt-20">
          <div className="text-center max-w-xl mx-auto mb-12">
            <span className="text-xs font-extrabold uppercase tracking-widest text-white bg-white/10 px-3 py-1 rounded-full border border-white/10">
              TEN PIPELINE STAGES
            </span>
            <h3 className="text-2xl sm:text-3xl font-display font-extrabold mt-3 text-white">
              Your Professional Academy Journey
            </h3>
          </div>

          {/* Timeline Node Chain */}
          <div className="grid grid-cols-2 md:grid-cols-5 lg:grid-cols-10 gap-4">
            {[
              { step: '01', title: 'Enroll', desc: 'Secure register' },
              { step: '02', title: 'Foundation', desc: 'Syllabus basic Core' },
              { step: '03', title: 'Live Coding', desc: 'Interactive drills' },
              { step: '04', title: 'Assignments', desc: 'Validation checks' },
              { step: '05', title: 'Production', desc: 'Scale projects' },
              { step: '06', title: 'Mocks', desc: 'Rigorous interviews' },
              { step: '07', title: 'Resume', desc: 'LinkedIn building' },
              { step: '08', title: 'Internship', desc: '60-day enterprise lab' },
              { step: '09', title: 'Placement', desc: 'Recruiting agency push' },
              { step: '10', title: 'Get Hired', desc: 'Offer validation' }
            ].map((journey, idx) => (
              <div 
                key={journey.step}
                className="bg-black/80 border border-neutral-800 p-4 rounded-2xl flex flex-col items-center text-center relative group hover:border-white hover:shadow-lg transition-all duration-300"
              >
                <div className="w-8 h-8 rounded-full bg-neutral-900 border border-neutral-800 text-xs font-bold text-neutral-400 flex items-center justify-center mb-3 group-hover:bg-white group-hover:text-black group-hover:border-white transition-colors">
                  {journey.step}
                </div>
                <h5 className="text-xs font-black text-white transition-colors leading-tight">
                  {journey.title}
                </h5>
                <p className="text-[10px] text-neutral-500 mt-1 leading-snug">
                  {journey.desc}
                </p>

                {/* Connection lines on desktop */}
                {idx < 9 && (
                  <div className="hidden lg:block absolute top-[28px] left-[calc(100%-10px)] w-5 h-px bg-neutral-800 z-10" />
                )}
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
