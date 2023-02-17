import { useState } from "react";


type Category = {
  name: string;
  cities: City[];
};

type City = {
  name: string;
  districts: District[];
};

type District = {
  name: string;
  subcategories: Subcategory[];
};

type Subcategory = {
  name: string;
};


const CategoryDropdown = () => {
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(null);
  const [selectedCity, setSelectedCity] = useState<City | null>(null);
  const [selectedDistrict, setSelectedDistrict] = useState<District | null>(null);

  const handleCityChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const cityName = event.target.value;
    const city = selectedCategory?.cities.find((city) => city.name === cityName);
    setSelectedCity(city || null);
    setSelectedDistrict(null);
  };

  const handleDistrictChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const districtName = event.target.value;
    const district = selectedCity?.districts.find((district) => district.name === districtName);
    setSelectedDistrict(district || null);
  };

  return (
    <div className="flex flex-col space-y-4">
      <div>
        <h2 className="text-lg font-medium text-white">Select a city</h2>
        <div className="mt-2 relative">
          <select
            className="block appearance-none w-full bg-gray-100 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            value={selectedCity?.name || ""}
            onChange={handleCityChange}
          >
            <option value="">Select a city</option>
            {selectedCategory?.cities.map((city) => (
              <option key={city.name} value={city.name}>
                {city.name}
              </option>
            ))}
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
            <svg
              className="fill-current h-4 w-4"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M7 7l3-3 3 3m0 6l-3 3-3-3" />
            </svg>
          </div>
        </div>
      </div>
      <div>
        <h2 className="text-lg font-medium text-white">Select a district</h2>
        <div className="mt-2 relative">
          <select
            className="block appearance-none w-full bg-gray-100 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            value={selectedDistrict?.name || ""}
            onChange={handleDistrictChange}
          >
            <option value="">Select a district</option>
            {selectedCity?.districts.map((district) => (
              <option key={district.name} value={district.name}>
                {district.name}
              </option>
            ))}
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
            <svg
              className="fill-current h-4 w-4"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M7 7l3-3 3 3m0 6l-3 3-3-3" />
            </svg>
          </div>
        </div>
      </div>
      <div>
        <h2 className="text-lg font-medium text-white">Select a subcategory</h2>
        <div className="mt-2 relative">
          <select
            className="block appearance-none w-full bg-gray-100 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            value={selectedDistrict?.name || ""}
            onChange={handleDistrictChange}
          >
            <option value="">Select a subcategory</option>
            {selectedDistrict?.subcategories.map((subcategory) => (
              <option key={subcategory.name} value={subcategory.name}>
                {subcategory.name}
              </option>
            ))}
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
            <svg
              className="fill-current h-4 w-4"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M7 7l3-3 3 3m0 6l-3 3-3-3" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryDropdown;
