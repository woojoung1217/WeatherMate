import { Link } from "react-router-dom"
import {useNavigate} from 'react-router-dom';
import CommunityHeader from "./CommunityHeader";
import Search from "./image/Search";


function CommunityMain() {
  const navigate = useNavigate();

  const handleWrite = () => {
    navigate('/community/new')
  }
  return (
    <>
      <div>
        <div className="px-5 box-border border-b-8">
          <div className="flex">
            <CommunityHeader title={'커뮤니티'}/>
            <button className="absolute right-4 top-10"><Search /></button>
          </div>

          <div className="mt-5">
            <div className="flex justify-between mb-3">
              <h2 className="font-bold">인기 포스팅</h2>
              <button onClick={handleWrite} className="bg-indigo-200 boreder rounded-xl px-2 py-1 text-sm text-indigo-400 font-bold">글쓰기</button>
            </div>

            <div className="flex justify-between items-center gap-1 mb-4">
              <Link to="/community/detail" className="bg-indigo-200 p-3 w-28 h-28 flex items-center justify-center rounded-md">1</Link>
              <Link to="/community/detail" className="bg-indigo-200 p-3 w-28 h-28 flex items-center justify-center rounded-md">2</Link>
              <Link to="/community/detail" className="bg-indigo-200 p-3 w-28 h-28 flex items-center justify-center rounded-md">3</Link>
            </div>

          </div>

        </div>
      </div>
      <div className="flex flex-col p-5 gap-3 mt-4">
        <Link to="/community/detail" className="bg-indigo-300 min-h-40">CommunityMain</Link>
        <Link to="/community/detail" className="bg-indigo-300 min-h-40">CommunityMain</Link>
        <Link to="/community/detail" className="bg-indigo-300 min-h-40">CommunityMain</Link>
      </div>
    
    </>
  )
}

export default CommunityMain