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
    // console.log(e)
    return [];
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
      return {
        courses: [],
        categories: [],
        districts: [],
      };
    }
  };
