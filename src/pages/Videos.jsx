import React from 'react';
import { useParams } from 'react-router-dom';

function Videos() {
  const keyword = useParams().keyword;
  return <h1>Videos Page {keyword}</h1>;
}

export default Videos;
