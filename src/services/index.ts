import axios, { AxiosError } from "axios";
// import dotenv from "dotenv";
import * as types from "../utils/types";

// dotenv.config()

const API_URL = "http://192.71.151.213:8080";

interface ApiResponse {
  success: boolean;
  msg?: string;
}

export const getCourses = async (): Promise<types.Course[]> => {
  try {
    const url = API_URL + "/user/courses";
    const response = await axios.get(url);
    const data = response.data;

    return data;
  } catch (e) {
    console.clear();
    // console.log(e)
    return [];
  }
};

export const getStudentsByCourseId = async ({
  courseId,
}: {
  courseId: string;
}): Promise<types.Student[]> => {
  try {
    const url = API_URL + `/admin/studentsByCourseId/${courseId}`;
    const response = await axios.get(url);
    const data = response.data;

    return data;
  } catch (e) {
    console.clear();
    // console.log(e)
    return new Promise((resolve) => resolve([]));
  }
};

export const getCoursesWithCategoriesAndLocations =
  async (): Promise<types.CoursesWithCategoriesAndLocations> => {
    try {
      const response = await axios.get(
        `${API_URL}/user/coursesWithCategoriesAndLocations`
      );
      const data = response.data;

      return data;
    } catch (e) {
      console.clear();
      return {
        courses: [],
        categories: [],
        districts: [],
      };
    }
  };

export const getDistricts = async (): Promise<types.District[]> => {
  try {
    const response = await axios.get(`${API_URL}/user/districts`);
    const data = response.data;

    return data;
  } catch (e) {
    console.clear();
    return [];
  }
};

export const getLocations = async (): Promise<types.Location[]> => {
  try {
    const response = await axios.get(`${API_URL}/user/locations`);
    const data = response.data;

    return data;
  } catch (e) {
    console.clear();
    return [];
  }
};

export const getCategories = async (): Promise<types.Category[]> => {
  try {
    const response = await axios.get(`${API_URL}/user/categories`);
    const data = response.data;

    return data;
  } catch (e) {
    console.clear();
    return [];
  }
}

export const getSubcategories = async (): Promise<types.Subcategory[]> => {
  try {
    const response = await axios.get(`${API_URL}/user/subcategories`);
    const data = response.data;

    return data;
  } catch (e) {
    console.clear();
    return [];
  }
}

export const addSubcategory = async ({ subcategory_name }: { subcategory_name: string }): Promise<ApiResponse> => {
  try {
    const response = await axios.post(`${API_URL}/admin/subcategory`, { subcategory_name });
    const data = response.data;

    return data;
  } catch (e) {
    console.clear();
    return {
      success: false,
      msg: "Error"
    }
  }
}