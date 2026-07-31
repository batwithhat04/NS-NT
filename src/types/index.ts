export interface TrackTopic {
  title: string;
  description: string;
  subtopics: string[];
}

export interface Track {
  id: number;
  trackNumber: string;
  title: string;
  iconName: string;
  summary: string;
  topics: TrackTopic[];
  colorGrad: string;
}

export interface CommitteeMember {
  id: string;
  name: string;
  designation: string;
  institution: string;
  department?: string;
  role: 'patron' | 'chair' | 'secretary' | 'convener' | 'local' | 'advisory';
  image: string;
  email?: string;
  bio?: string;
  linkedIn?: string;
  scholar?: string;
}

export interface Speaker {
  id: string;
  name: string;
  title: string;
  institution: string;
  country: string;
  flagUrl?: string;
  category: 'keynote' | 'invited' | 'featured';
  researchArea: string;
  bio: string;
  image: string;
  publicationsUrl?: string;
  websiteUrl?: string;
}

export interface ImportantDate {
  title: string;
  date: string;
  status: 'upcoming' | 'active' | 'extended' | 'passed';
  note?: string;
}

export interface Announcement {
  id: string;
  title: string;
  date: string;
  link?: string;
  isImportant?: boolean;
}

export interface PricingTier {
  category: string;
  inrPrice: string;
  usdPrice?: string;
  features: string[];
  recommended?: boolean;
  notes?: string;
}

export interface FAQItem {
  question: string;
  answer: string;
  category: 'registration' | 'submission' | 'venue' | 'general';
}

export interface Testimonial {
  quote: string;
  name: string;
  role: string;
  institution: string;
}
