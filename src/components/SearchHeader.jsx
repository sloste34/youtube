import React, { useEffect, useState } from 'react';
import { BsYoutube } from 'react-icons/bs';
import { BiSearchAlt2 } from 'react-icons/bi';
import { useNavigate, Link, useParams } from 'react-router-dom';

function SearchHeader() {
  const keyword = useParams().keyword;
  const [text, setText] = useState('');
  const navigate = useNavigate();
  useEffect(() => setText(keyword ? keyword : ''), [keyword]);

  //유튜브 로고를 누르면 메인 페이지로 가는 방법 중 하나
  // const goToMainPage = (e) => {
  //   e.preventDefault();
  //   navigate('/');
  // };

  const handleSubmit = (e) => {
    // 새로고침 방지
    e.preventDefault();

    console.log(text);

    // 검색한 텍스트를 가지고 /videos/텍스트 로 이동
    navigate(`/videos/${text}`);
  };
  return (
    <header className='flex p-5 w-full text-3xl border-b border-zinc-600 mb-5 items-center'>
      {/* 유튜브 로고 들어가는 부분 */}
      <Link to='/' className='flex items-center'>
        <BsYoutube className='text-5xl text-brand' />
        <h1 className='text-5xl font-bold ml-2'>Youtube</h1>
      </Link>
      {/* 검색창 들어가는 부분 */}
      <form className='flex w-full justify-center' onSubmit={handleSubmit}>
        <input
          className='w-7/12 p-2 outline-none bg-black text-gray-50 rounded'
          type='text'
          placeholder='Search...'
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button className='bg-zinc-600 px-4 rounded'>
          <BiSearchAlt2 />
        </button>
      </form>
    </header>
  );
}

export default SearchHeader;
