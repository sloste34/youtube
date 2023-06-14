import React from 'react';
import { useParams } from 'react-router-dom';

function Videos() {
  const keyword = useParams().keyword;
  return <h1>Videos of {keyword ? keyword : 'Hot Trend'}</h1>;
}

export default Videos;
