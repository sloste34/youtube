import React, { useState } from 'react';
import { BsYoutube } from 'react-icons/bs';

function SearchHeader() {
  const [text, setText] = useState('');
  return (
    <header>
      {/* logo part */}
      <div>
        <BsYoutube />
        <h1>Youtube</h1>
      </div>
      {/* search form part */}
      <form>
        <input type='text' placeholder='Search...' value={text} />
      </form>
    </header>
  );
}

export default SearchHeader;
