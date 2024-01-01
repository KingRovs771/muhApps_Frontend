import React from 'react';
import Logo from '../../assets/img/logo.png';
import { BiSolidDashboard, BiSolidSchool, BiSolidUserBadge, BiSolidBookOpen, BiSolidLogOut } from 'react-icons/bi';
import { FaChalkboardTeacher } from 'react-icons/fa';

export default function Sidebar() {
  const menu = [
    { name: 'Dashboard', icon: <BiSolidDashboard /> },
    { name: 'Sekolah', icon: <BiSolidSchool /> },
    { name: 'Pengguna', icon: <BiSolidUserBadge /> },
    { name: 'Mata Pelajaran', icon: <BiSolidBookOpen /> },
    { name: 'Guru', icon: <FaChalkboardTeacher /> },
    { name: 'Logout', icon: <BiSolidLogOut /> },
  ];
  return (
    <div className="h-screen border-r border-gray-200 w-64 px-9 py-0 space-y-8">
      <div className="flex flex-row items-center pt-8">
        <img src={Logo} alt="Logo Apps" className="w-9 h-12" />
        <div className="ml-2 mt-2 font-bold text-green-700">Muh Apps School</div>
      </div>
      <div>
        <div>
          <div className="mb-4 mt-9 text-green-700"> Menu</div>
          <ul className="space-y-8">
            {menu.map((val, index) => {
              return (
                <li key={index} className="mb-7 flex flex-row items-center text-gray-500">
                  {' '}
                  <div className="mr-5">{val.icon}</div>
                  <div>{val.name} </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}
