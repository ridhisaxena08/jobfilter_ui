import { useState, useMemo } from 'react';
import { FilterSidebar } from './components/FilterSidebar';
import { JobCard } from './components/JobCard';
import { MobileFilters } from './components/MobileFilters';
import { Search, SlidersHorizontal } from 'lucide-react';

export interface Job {
  id: number;
  title: string;
  company: string;
  location: string;
  salary: number;
  jobType: string;
  category: string;
  description: string;
}

const JOBS: Job[] = [
  {
    id: 1,
    title: 'React Developer',
    company: 'TechCorp Solutions',
    location: 'Jaipur',
    salary: 50000,
    jobType: 'Full Time',
    category: 'Development',
    description: 'Build scalable web applications using React, TypeScript, and modern tools. Experience with hooks and state management required.'
  },
  {
    id: 2,
    title: 'UI/UX Designer',
    company: 'Creative Studio',
    location: 'Delhi',
    salary: 40000,
    jobType: 'Internship',
    category: 'Design',
    description: 'Design intuitive user interfaces and experiences. Proficiency in Figma and Adobe XD is a must.'
  },
  {
    id: 3,
    title: 'Node.js Developer',
    company: 'Backend Systems Inc',
    location: 'Remote',
    salary: 60000,
    jobType: 'Full Time',
    category: 'Development',
    description: 'Develop robust backend systems with Node.js, Express, and MongoDB. Strong understanding of REST APIs required.'
  },
  {
    id: 4,
    title: 'Digital Marketing Specialist',
    company: 'Growth Marketing Co',
    location: 'Delhi',
    salary: 35000,
    jobType: 'Part Time',
    category: 'Marketing',
    description: 'Plan and execute digital marketing campaigns across multiple channels. SEO and content marketing experience preferred.'
  },
  {
    id: 5,
    title: 'Product Designer',
    company: 'Design Hub',
    location: 'Remote',
    salary: 55000,
    jobType: 'Full Time',
    category: 'Design',
    description: 'Lead product design initiatives from concept to launch. 3+ years of experience in SaaS products required.'
  },
  {
    id: 6,
    title: 'Business Analyst',
    company: 'Consulting Partners',
    location: 'Jaipur',
    salary: 45000,
    jobType: 'Contract',
    category: 'Business',
    description: 'Analyze business processes and provide data-driven recommendations. Strong Excel and SQL skills needed.'
  },
  {
    id: 7,
    title: 'Frontend Developer',
    company: 'WebTech Solutions',
    location: 'Delhi',
    salary: 48000,
    jobType: 'Full Time',
    category: 'Development',
    description: 'Create responsive and performant user interfaces. Knowledge of React, Vue, or Angular required.'
  },
  {
    id: 8,
    title: 'Content Marketing Manager',
    company: 'Media Group',
    location: 'Remote',
    salary: 42000,
    jobType: 'Full Time',
    category: 'Marketing',
    description: 'Develop content strategy and manage a team of writers. 2+ years of content marketing experience required.'
  },
  {
    id: 9,
    title: 'Graphic Designer',
    company: 'Brand Studio',
    location: 'Jaipur',
    salary: 30000,
    jobType: 'Internship',
    category: 'Design',
    description: 'Create visual content for various marketing materials. Strong portfolio showcasing creative work required.'
  },
  {
    id: 10,
    title: 'Business Development Executive',
    company: 'Sales Corp',
    location: 'Delhi',
    salary: 38000,
    jobType: 'Full Time',
    category: 'Business',
    description: 'Identify new business opportunities and build client relationships. Excellent communication skills required.'
  },
  {
    id: 11,
    title: 'Full Stack Developer',
    company: 'Startup Labs',
    location: 'Remote',
    salary: 70000,
    jobType: 'Full Time',
    category: 'Development',
    description: 'Work on both frontend and backend systems. Experience with MERN/MEAN stack preferred.'
  },
  {
    id: 12,
    title: 'SEO Specialist',
    company: 'Digital Agency',
    location: 'Jaipur',
    salary: 32000,
    jobType: 'Part Time',
    category: 'Marketing',
    description: 'Optimize websites for search engines and improve organic rankings. Knowledge of SEO tools and analytics required.'
  }
];

export default function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedLocations, setSelectedLocations] = useState<string[]>([]);
  const [selectedJobTypes, setSelectedJobTypes] = useState<string[]>([]);
  const [salaryRange, setSalaryRange] = useState<[number, number]>([20000, 100000]);
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  const filteredJobs = useMemo(() => {
    return JOBS.filter(job => {
      // Search filter
      if (searchQuery && !job.title.toLowerCase().includes(searchQuery.toLowerCase())) {
        return false;
      }

      // Category filter
      if (selectedCategories.length > 0 && !selectedCategories.includes(job.category)) {
        return false;
      }

      // Location filter
      if (selectedLocations.length > 0 && !selectedLocations.includes(job.location)) {
        return false;
      }

      // Job type filter
      if (selectedJobTypes.length > 0 && !selectedJobTypes.includes(job.jobType)) {
        return false;
      }

      // Salary range filter
      if (job.salary < salaryRange[0] || job.salary > salaryRange[1]) {
        return false;
      }

      return true;
    });
  }, [searchQuery, selectedCategories, selectedLocations, selectedJobTypes, salaryRange]);

  const handleClearFilters = () => {
    setSelectedCategories([]);
    setSelectedLocations([]);
    setSelectedJobTypes([]);
    setSalaryRange([20000, 100000]);
    setSearchQuery('');
  };

  const hasActiveFilters = selectedCategories.length > 0 || selectedLocations.length > 0 || 
                          selectedJobTypes.length > 0 || salaryRange[0] !== 20000 || 
                          salaryRange[1] !== 100000 || searchQuery !== '';

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-10">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-gray-900">Job Portal</h1>
            <button 
              onClick={() => setMobileFiltersOpen(true)}
              className="lg:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <SlidersHorizontal className="w-5 h-5 text-gray-600" />
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Search Bar */}
        <div className="mb-8">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search jobs by title..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar - Hidden on mobile */}
          <aside className="hidden lg:block lg:col-span-1">
            <FilterSidebar
              selectedCategories={selectedCategories}
              setSelectedCategories={setSelectedCategories}
              selectedLocations={selectedLocations}
              setSelectedLocations={setSelectedLocations}
              selectedJobTypes={selectedJobTypes}
              setSelectedJobTypes={setSelectedJobTypes}
              salaryRange={salaryRange}
              setSalaryRange={setSalaryRange}
              onClearFilters={handleClearFilters}
              hasActiveFilters={hasActiveFilters}
            />
          </aside>

          {/* Job Cards */}
          <div className="lg:col-span-3">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-lg font-semibold text-gray-900">
                {filteredJobs.length} {filteredJobs.length === 1 ? 'job' : 'jobs'} found
              </h2>
            </div>

            {filteredJobs.length > 0 ? (
              <div className="space-y-4">
                {filteredJobs.map(job => (
                  <JobCard key={job.id} job={job} />
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <h3 className="text-lg font-medium text-gray-900 mb-2">No jobs found</h3>
                <p className="text-gray-600">Try adjusting your filters or search query</p>
              </div>
            )}
          </div>
        </div>
      </main>

      {/* Mobile Filters */}
      <MobileFilters
        isOpen={mobileFiltersOpen}
        onClose={() => setMobileFiltersOpen(false)}
        selectedCategories={selectedCategories}
        setSelectedCategories={setSelectedCategories}
        selectedLocations={selectedLocations}
        setSelectedLocations={setSelectedLocations}
        selectedJobTypes={selectedJobTypes}
        setSelectedJobTypes={setSelectedJobTypes}
        salaryRange={salaryRange}
        setSalaryRange={setSalaryRange}
        onClearFilters={handleClearFilters}
        hasActiveFilters={hasActiveFilters}
      />
    </div>
  );
}
