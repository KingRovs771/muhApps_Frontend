import React from 'react';

import { BiNotification, BiUser } from 'react-icons/bi';

export default function Home() {
  return (
    <div className="w-full min-h-screen bg-white flex flex-row">
      <div className="flex-1 bg-white">
        <div className="flex flex-row">
          <div className="w-96 rounded overflow-hidden shadow-lg mt-9 ml-3">
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
              <p className="text-gray-700 text-base">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.</p>
            </div>
          </div>
          {/* Card 1*/}
          <div className="w-64 rounded overflow-hidden shadow-lg mt-9 ml-3">
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
              <p className="text-gray-700 text-base">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.</p>
            </div>
          </div>
          {/* Card 1*/}
          <div className="w-64 rounded overflow-hidden shadow-lg mt-9 ml-3">
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
              <p className="text-gray-700 text-base">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.</p>
            </div>
          </div>
        </div>
        {/* End Card */}
        {/* Table */}
        <div className="px-2 py-3">
          <table class="table-fixed">
            <thead>
              <tr>
                <th class="w-1/2 border px-4 py-2">Title</th>
                <th class="w-1/4 border px-4 py-2">Author</th>
                <th class="w-1/4 border px-4 py-2">Views</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="border px-4 py-2">Intro to CSS</td>
                <td class="border px-4 py-2">Adam</td>
                <td class="border px-4 py-2">858</td>
              </tr>
              <tr class="bg-gray-100">
                <td class="border px-4 py-2">A Long and Winding Tour of the History of UI Frameworks and Tools and the Impact on Design</td>
                <td class="border px-4 py-2">Adam</td>
                <td class="border px-4 py-2">112</td>
              </tr>
              <tr>
                <td class="border px-4 py-2">Intro to JavaScript</td>
                <td class="border px-4 py-2">Chris</td>
                <td class="border px-4 py-2">1,280</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="w-96 bg-gray-100 rounded-tl-70px overflow-hidden px-14">
        <div className="pt-12 flex justify-end space-x-9 items-center">
          <div></div>
          <BiNotification size={20} />
          <BiUser size={20} />
          <img src="https://images.pexels.com/photos/1759531/pexels-photo-1759531.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Profile Picture" className="h-9 w-9 object-cover rounded-full" />
        </div>
        Content Right
      </div>
    </div>
  );
}
