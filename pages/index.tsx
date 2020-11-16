import React from 'react'
import HeadSection from '../components/head'
import LatestCard from '../components/latest-card'
import ListPost from '../components/list-post'

export default function Home() {
  return (
    <>
      <HeadSection />
      <ListPost>
        <LatestCard />
      </ListPost>
    </>
  )
}
