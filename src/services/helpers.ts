import * as types from "../utils/types";

export const getCoursesWithDetails = ({
  courses,
  categories,
  districts,
}: {
  courses: types.Course[];
  categories: types.Category[];
  districts: types.District[];
}): types.CoursesWithDetails[] => {
  const allSubcategoryNamesById: { [key: string]: string } = {};
  const allCategoryNamesById: { [key: string]: string } = {};
  categories.forEach((category) => {
    allCategoryNamesById[category.category_id] = category.category_name;
    category.subcategories.forEach((subcategory) => {
      allSubcategoryNamesById[subcategory.subcategory_id] =
        subcategory.subcategory_name;
    });
  });

  const allCityNamesById: { [key: string]: string } = {};
  const allKommunNamesById: { [key: string]: string } = {};
  districts.forEach((district) => {
    allKommunNamesById[district.district_id] = district.district_name;
    district.cities.forEach((city) => {
      allCityNamesById[city.city_id] = city.city_name;
    });
  });

  return courses.map((course) => ({
    course,
    categories: course.category_ids.map(id => allCategoryNamesById[id]),
    subcategories: course.subcategory_ids.map(
      (id) => allSubcategoryNamesById[id]
    ),
    cities: course.city_ids.map((id) => allCityNamesById[id]),
    kommun: course.district_ids.map((id) => allKommunNamesById[id]),
  }));
};
