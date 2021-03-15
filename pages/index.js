import React from 'react'
import { useState } from 'react'
import Head from 'next/head'
import { Row, Button } from 'react-bootstrap'
import PageLayout from 'components/PageLayout'


import { getAllBlogs } from 'lib/api'
import { useGetBlogPages } from 'actions/pagination'

export default function Home({blogs}) {

  const [filter, setFilter] = useState({
    view: { list: 1 }
  });

  const { 
    pages,
    isLoadingMore,
    isReachingEnd,
    loadMore
   } = useGetBlogPages({blogs});

  return (
    <>
      <PageLayout>
        <Row className="blog-page-wrapper">
          {pages}
        </Row>
        <div style={{textAlign: 'center'}}>
          <Button
          onClick={loadMore}
          disabled={isReachingEnd || isLoadingMore}
          size="lg"
          variant="outline-secondary">
            {isLoadingMore ? '...' : isReachingEnd ? 'No more content' : 'Load More'}
          </Button>
        </div>
        
      </PageLayout>
      <footer className="page-footer" />
    </>
    
  )
}

export async function getStaticProps() {
  const blogs = await getAllBlogs({offset: 0});
  return {
    props: {
      blogs
    }
  }
}