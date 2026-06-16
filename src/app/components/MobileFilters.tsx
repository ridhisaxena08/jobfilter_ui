import { X } from 'lucide-react';
import { useEffect } from 'react';

interface MobileFiltersProps {
  isOpen: boolean;
  onClose: () => void;
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

export function MobileFilters({
  isOpen,
  onClose,
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
}: MobileFiltersProps) {
  // Prevent body scroll when drawer is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

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

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/50 z-40 lg:hidden"
        onClick={onClose}
      />

      {/* Drawer */}
      <div className="fixed inset-y-0 right-0 w-full max-w-sm bg-white z-50 lg:hidden overflow-y-auto">
        <div className="p-6">
          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-semibold text-gray-900">Filters</h2>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <X className="w-5 h-5 text-gray-600" />
            </button>
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

          {/* Footer */}
          <div className="sticky bottom-0 bg-white pt-6 pb-2 mt-6 border-t border-gray-200 flex gap-3">
            {hasActiveFilters && (
              <button
                onClick={() => {
                  onClearFilters();
                  onClose();
                }}
                className="flex-1 px-4 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors font-medium"
              >
                Clear all
              </button>
            )}
            <button
              onClick={onClose}
              className="flex-1 px-4 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
            >
              Apply Filters
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
