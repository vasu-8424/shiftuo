export interface Course {
  id: string;
  title: string;
  category: 'web-dev' | 'data-ai' | 'cloud-devops' | 'design-mobile';
  duration: string;
  projectsCount: number;
  skills: string[];
  description: string;
  rating: number;
  originalPrice?: string;
  offerPrice?: string;
  curriculum: string[];
  gradient: string;
}

export interface Lead {
  id: string;
  name: string;
  phone: string;
  email: string;
  course: string;
  experience: 'Student' | 'Fresher' | 'Working Professional' | 'Other';
  preferredMode: 'Online Live' | 'Offline Vijayawada';
  timestamp: string;
  status: 'New' | 'Contacted' | 'Demo Booked' | 'Enrolled';
  assignedCounselor: string;
}

export interface SuccessStory {
  id: string;
  name: string;
  avatar: string;
  role: string;
  company: string;
  salary: string;
  increase: string;
  review: string;
  linkedin: string;
  videoUrl?: string;
}

export interface LiveProject {
  id: string;
  title: string;
  description: string;
  techStack: string[];
  features: string[];
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  architecture: string;
}

export interface Batch {
  id: string;
  courseName: string;
  trainer: string;
  timing: string;
  startDate: string;
  seatsLeft: number;
  mode: 'Online' | 'Offline';
}
