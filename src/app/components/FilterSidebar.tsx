import { X } from 'lucide-react';

interface FilterSidebarProps {
  selectedCategories: string[];
  setSelectedCategories: (categories: string[]) => void;
  selectedLocations: string[];
  setSelectedLocations: (locations: string[]) => void;
  selectedJobTypes: string[];
  setSelectedJobTypes: (types: string[]) => void;
  salaryRange: [number, number];
  setSalaryRange: (range: [number, number]) => void;
  onClearFilters: () => void;
  hasActiveFilters: boolean;
}

const CATEGORIES = ['Development', 'Design', 'Marketing', 'Business'];
const LOCATIONS = ['Jaipur', 'Delhi', 'Remote'];
const JOB_TYPES = ['Full Time', 'Part Time', 'Internship', 'Contract'];

export function FilterSidebar({
  selectedCategories,
  setSelectedCategories,
  selectedLocations,
  setSelectedLocations,
  selectedJobTypes,
  setSelectedJobTypes,
  salaryRange,
  setSalaryRange,
  onClearFilters,
  hasActiveFilters
}: FilterSidebarProps) {
  const toggleCategory = (category: string) => {
    if (selectedCategories.includes(category)) {
      setSelectedCategories(selectedCategories.filter(c => c !== category));
    } else {
      setSelectedCategories([...selectedCategories, category]);
    }
  };

  const toggleLocation = (location: string) => {
    if (selectedLocations.includes(location)) {
      setSelectedLocations(selectedLocations.filter(l => l !== location));
    } else {
      setSelectedLocations([...selectedLocations, location]);
    }
  };

  const toggleJobType = (type: string) => {
    if (selectedJobTypes.includes(type)) {
      setSelectedJobTypes(selectedJobTypes.filter(t => t !== type));
    } else {
      setSelectedJobTypes([...selectedJobTypes, type]);
    }
  };

  const formatSalary = (value: number) => {
    return `₹${(value / 1000).toFixed(0)}k`;
  };

  return (
    <div className="bg-white rounded-lg border border-gray-200 p-6 sticky top-24">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-lg font-semibold text-gray-900">Filters</h2>
        {hasActiveFilters && (
          <button
            onClick={onClearFilters}
            className="text-sm text-blue-600 hover:text-blue-700 font-medium"
          >
            Clear all
          </button>
        )}
      </div>

      <div className="space-y-6">
        {/* Categories */}
        <div>
          <h3 className="text-sm font-medium text-gray-900 mb-3">Category</h3>
          <div className="space-y-2">
            {CATEGORIES.map(category => (
              <label key={category} className="flex items-center cursor-pointer group">
                <input
                  type="checkbox"
                  checked={selectedCategories.includes(category)}
                  onChange={() => toggleCategory(category)}
                  className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-2 focus:ring-blue-500 cursor-pointer"
                />
                <span className="ml-3 text-sm text-gray-700 group-hover:text-gray-900">
                  {category}
                </span>
              </label>
            ))}
          </div>
        </div>

        <div className="border-t border-gray-200" />

        {/* Location */}
        <div>
          <h3 className="text-sm font-medium text-gray-900 mb-3">Location</h3>
          <div className="space-y-2">
            {LOCATIONS.map(location => (
              <label key={location} className="flex items-center cursor-pointer group">
                <input
                  type="checkbox"
                  checked={selectedLocations.includes(location)}
                  onChange={() => toggleLocation(location)}
                  className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-2 focus:ring-blue-500 cursor-pointer"
                />
                <span className="ml-3 text-sm text-gray-700 group-hover:text-gray-900">
                  {location}
                </span>
              </label>
            ))}
          </div>
        </div>

        <div className="border-t border-gray-200" />

        {/* Salary Range */}
        <div>
          <h3 className="text-sm font-medium text-gray-900 mb-3">Salary Range</h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between text-sm text-gray-600">
              <span>{formatSalary(salaryRange[0])}</span>
              <span>{formatSalary(salaryRange[1])}</span>
            </div>
            <div className="space-y-2">
              <label className="text-xs text-gray-500">Minimum</label>
              <input
                type="range"
                min="20000"
                max="100000"
                step="5000"
                value={salaryRange[0]}
                onChange={(e) => {
                  const newMin = Number(e.target.value);
                  setSalaryRange([Math.min(newMin, salaryRange[1]), salaryRange[1]]);
                }}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
              />
            </div>
            <div className="space-y-2">
              <label className="text-xs text-gray-500">Maximum</label>
              <input
                type="range"
                min="20000"
                max="100000"
                step="5000"
                value={salaryRange[1]}
                onChange={(e) => {
                  const newMax = Number(e.target.value);
                  setSalaryRange([salaryRange[0], Math.max(newMax, salaryRange[0])]);
                }}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
              />
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200" />

        {/* Job Type */}
        <div>
          <h3 className="text-sm font-medium text-gray-900 mb-3">Job Type</h3>
          <div className="space-y-2">
            {JOB_TYPES.map(type => (
              <label key={type} className="flex items-center cursor-pointer group">
                <input
                  type="checkbox"
                  checked={selectedJobTypes.includes(type)}
                  onChange={() => toggleJobType(type)}
                  className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-2 focus:ring-blue-500 cursor-pointer"
                />
                <span className="ml-3 text-sm text-gray-700 group-hover:text-gray-900">
                  {type}
                </span>
              </label>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
