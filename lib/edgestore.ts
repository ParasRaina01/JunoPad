'use client';
 
import { type EdgeStoreRouter } from '@/app/api/edgestore/[...edgestrore]/route';
import { createEdgeStoreProvider } from '@edgestore/react';
 
const { EdgeStoreProvider, useEdgeStore } =
  createEdgeStoreProvider<EdgeStoreRouter>();
 
export { EdgeStoreProvider, useEdgeStore };