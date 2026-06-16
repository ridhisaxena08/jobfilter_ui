import { MapPin, Briefcase, Tag, ArrowRight } from 'lucide-react';
import type { Job } from '../App';

interface JobCardProps {
  job: Job;
}

const JOB_TYPE_COLORS: Record<string, string> = {
  'Full Time': 'bg-green-100 text-green-700 border-green-200',
  'Part Time': 'bg-yellow-100 text-yellow-700 border-yellow-200',
  'Internship': 'bg-purple-100 text-purple-700 border-purple-200',
  'Contract': 'bg-blue-100 text-blue-700 border-blue-200'
};

const CATEGORY_COLORS: Record<string, string> = {
  'Development': 'bg-blue-50 text-blue-700',
  'Design': 'bg-pink-50 text-pink-700',
  'Marketing': 'bg-orange-50 text-orange-700',
  'Business': 'bg-emerald-50 text-emerald-700'
};

export function JobCard({ job }: JobCardProps) {
  return (
    <div className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-lg hover:border-blue-300 transition-all duration-200 cursor-pointer group">
      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
        <div className="flex-1 min-w-0">
          {/* Title and Company */}
          <div className="mb-3">
            <h3 className="text-xl font-semibold text-gray-900 mb-1 group-hover:text-blue-600 transition-colors">
              {job.title}
            </h3>
            <p className="text-sm text-gray-600">{job.company}</p>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-4">
            <span className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium ${CATEGORY_COLORS[job.category] || 'bg-gray-50 text-gray-700'}`}>
              <Tag className="w-3 h-3" />
              {job.category}
            </span>
            <span className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium border ${JOB_TYPE_COLORS[job.jobType] || 'bg-gray-100 text-gray-700 border-gray-200'}`}>
              <Briefcase className="w-3 h-3" />
              {job.jobType}
            </span>
          </div>

          {/* Description */}
          <p className="text-sm text-gray-600 mb-4 line-clamp-2">
            {job.description}
          </p>

          {/* Location and Salary */}
          <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600">
            <div className="flex items-center gap-1">
              <MapPin className="w-4 h-4" />
              <span>{job.location}</span>
            </div>
            <div className="flex items-center gap-1">
              <span className="font-semibold text-gray-900">₹{job.salary.toLocaleString('en-IN')}</span>
              <span>/month</span>
            </div>
          </div>
        </div>

        {/* Apply Button */}
        <div className="sm:ml-4">
          <button className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors group-hover:shadow-md">
            Apply
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </div>
  );
}
