'use client';
import React from 'react';
import { useParams } from 'next/navigation';

export default function Details() {
  const searchParams = useParams();
  const search = searchParams.slug;

  console.log(search);

  return <div>page</div>;
}
