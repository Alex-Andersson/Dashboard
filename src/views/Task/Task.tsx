/* This example requires Tailwind CSS v2.0+ */
import { PaperClipIcon } from '@heroicons/react/24/solid'

export default function Example() {
  return (
    <div className=" bg-[#1e2936] shadow-[-4px_4px_4px_0px_rgba(2,0,0,0.4)] ml-16 rounded-lg w-[90%] ">
    <div className="bg-white shadow overflow-hidden  sm:rounded-lg w-[70%]">
      <div className=''>
      </div>
      <div className="grid grid-rows-3 grid-flow-col gap-x-[36rem]">
      <img src="https://www.ibnrushd.se/wp-content/uploads/2021/10/ibn-rushd-loga.png"className="row-span-3"/>
        <h3 className="text-lg leading-6 font-medium row-span2 mt-6 text-black">Faktura</h3>
        <p className="mt-3 mr-10 max-w-2xl text-sm row-span-2 text-gray-500">Personal details and application.</p>
      </div>
      <div className="border-t border-gray-200 px-4 py-5 sm:px-6">
        <dl className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2">
          <div className="sm:col-span-1">
            <dt className="text-sm font-medium text-gray-500">Full name</dt>
            <dd className="mt-1 text-sm text-gray-900">Margot Foster</dd>
          </div>
          <div className="sm:col-span-1">
            <dt className="text-sm font-medium text-gray-500">Application for</dt>
            <dd className="mt-1 text-sm text-gray-900">Backend Developer</dd>
          </div>
          <div className="sm:col-span-1">
            <dt className="text-sm font-medium text-gray-500">Email address</dt>
            <dd className="mt-1 text-sm text-gray-900">margotfoster@example.com</dd>
          </div>
          <div className="sm:col-span-1">
            <dt className="text-sm font-medium text-gray-500">Salary expectation</dt>
            <dd className="mt-1 text-sm text-gray-900">$120,000</dd>
          </div>
          <div className="sm:col-span-2">
            <dt className="text-sm font-medium text-gray-500">About</dt>
            <dd className="mt-1 text-sm text-gray-900">
              Fugiat ipsum ipsum deserunt culpa aute sint do nostrud anim incididunt cillum culpa consequat. Excepteur
              qui ipsum aliquip consequat sint. Sit id mollit nulla mollit nostrud in ea officia proident. Irure nostrud
              pariatur mollit ad adipisicing reprehenderit deserunt qui eu.
            </dd>
          </div>
          <div className="sm:col-span-2">
            <dt className="text-sm font-medium text-gray-500">Attachments</dt>
            <dd className="mt-1 text-sm text-gray-900">
              <ul role="list" className="border border-gray-200 rounded-md divide-y divide-gray-200">
                <li className="pl-3 pr-4 py-3 flex items-center justify-between text-sm">
                  <div className="w-0 flex-1 flex items-center">
                    <PaperClipIcon className="flex-shrink-0 h-5 w-5 text-gray-400" aria-hidden="true" />
                    <span className="ml-2 flex-1 w-0 truncate">resume_back_end_developer.pdf</span>
                  </div>
                  <div className="ml-4 flex-shrink-0">
                    <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                      Download
                    </a>
                  </div>
                </li>
                <li className="pl-3 pr-4 py-3 flex items-center justify-between text-sm">
                  <div className="w-0 flex-1 flex items-center">
                    <PaperClipIcon className="flex-shrink-0 h-5 w-5 text-gray-400" aria-hidden="true" />
                    <span className="ml-2 flex-1 w-0 truncate">coverletter_back_end_developer.pdf</span>
                  </div>
                  <div className="ml-4 flex-shrink-0">
                    <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                      Download
                    </a>
                  </div>
                </li>
              </ul>
            </dd>
          </div>
        </dl>
      </div>
    </div>
  </div>
  )
}



// interface Category {
//   category_id: string;
//   category_name: string;
//   subcategories: {
//     subcategory_id: string;
//     subcategory_name: string;
//   }[];
// }

// const CategoriesList = () => {
//   const [categories, setCategories] = useState<Category[]>([]);

//   useEffect(() => {
//     axios.get('http://192.71.151.213/user/categories')
//       .then(response => {
//         setCategories(response.data);
//       })
//       .catch(error => {
//         console.log(error);
//       });
//   }, []);