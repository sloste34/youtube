import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';

function Videos() {
  const keyword = useParams().keyword;
  const { isLoading, error, data: videos } = uesQuery();
  return <h1>Videos of {keyword ? keyword : 'Hot Trend'}</h1>;
}

export default Videos;
