import React, { useState } from 'react';
import { BsYoutube } from 'react-icons/bs';
import { BiSearchAlt2 } from 'react-icons/bi';
import { useNavigate } from 'react-router-dom';

function SearchHeader() {
  const [text, setText] = useState('');
  const navigate = useNavigate();
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
      <div>
        <BsYoutube />
        <h1>Youtube</h1>
      </div>
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
