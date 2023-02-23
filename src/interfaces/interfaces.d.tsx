import axios from "axios";
import { useEffect, useState } from "react";

export interface Course {
  course_name: string;
  course_description: string;
  start_date: any;
  end_date: string;
  csn_entitled: boolean;
  max_seats: number;
  image: string;
  days: string;
  hours: string;
  price: number;
  sessions: number;
  visible: boolean;
  city_ids: string[];
  subcategory_ids: string[];
}

export interface Users {
  [x: string]: string | undefined; //randomuser.me/api/?results=10 and display it in a table like this:
  name: any;
  location: any;
  city: string;
  email: string;
  status: string;
  picture: any;
  title: string;
  login: any;
  uuid: string;
}

function API() {
  const [courses, setCourses] = useState<Course[]>([]);
  const [error, setError] = useState<string | null>(null);

  const API = async (): Promise<void> => {
    try {
      const response = await axios.get(
        "http://http://192.71.151.213:8080/course"
      );
      if (response.status !== 200) {
        throw new Error(response.statusText);
      }
      setCourses(response.data);
    } catch (err: any) {
      setError(err.message);
    }
  };
}

export default API;
