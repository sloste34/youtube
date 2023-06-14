import React, { useState } from 'react';
import { BsYoutube } from 'react-icons/bs';
import { BiSearchAlt2 } from 'react-icons/bi';
import { useNavigate, Link } from 'react-router-dom';

function SearchHeader() {
  const [text, setText] = useState('');
  const navigate = useNavigate();

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
    <header>
      {/* 유튜브 로고 들어가는 부분 */}
      <Link to='/'>
        <BsYoutube />
        <h1>Youtube</h1>
      </Link>
      {/* 검색창 들어가는 부분 */}
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          placeholder='Search...'
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button>
          <BiSearchAlt2 />
        </button>
      </form>
    </header>
  );
}

export default SearchHeader;
