import { GoHomeFill } from 'react-icons/go';
import { SiGooglechat } from 'react-icons/si';
import { MdLocationOn } from 'react-icons/md';
import { FaAddressBook } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function NavigationBarBottom() {
  return (
    <>
      <footer className="w-full flex text-white min-h-20 rounded-t-3xl items-center justify-center gap-8 bg-white sticky bottom-0 shadow-inner sm:hidden">
        <Link
          to="/main"
          className={`flex flex-col items-center text-gray_03 px-2 hover:text-primary ${
            location.pathname === '/' ? 'text-primary ' : ''
          }`}
        >
          <GoHomeFill className="text-2xl mb-1" />
          <p className="text-nowrap text-sm">홈</p>
        </Link>

        <Link
          to="/community"
          className={`flex flex-col items-center px-2 text-gray_03 hover:text-primary ${
            location.pathname === '/community' ? 'text-primary ' : ''
          }`}
        >
          <SiGooglechat className="text-2xl mb-1" />
          <p className="text-nowrap text-sm">커뮤니티</p>
        </Link>

        <Link
          to="/location"
          className={`flex flex-col items-center px-2 text-gray_03 hover:text-primary ${
            location.pathname === '/location' ? 'text-primary ' : ''
          }`}
        >
          <MdLocationOn className="text-2xl mb-1" />
          <p className="text-nowrap text-sm">장소추천</p>
        </Link>

        <Link
          to="/user/mypage"
          className={`flex flex-col items-center px-2 text-gray_03 hover:text-primary ${
            location.pathname === '/location' ? 'text-primary ' : ''
          }`}
        >
          <FaAddressBook className="text-2xl mb-1" />
          <p className="text-nowrap text-sm">마이페이지</p>
        </Link>
      </footer>
    </>
  );
}

export default NavigationBarBottom;
