import { useSWRPages } from 'swr'
import { useGetBlogs } from 'actions/index'
import CardItem from 'components/CardItem'
import CardItemBlank from 'components/CardItemBlank'
import { Col } from 'react-bootstrap'

export const useGetBlogPages = ({blogs}) => {

    return useSWRPages(
        'index-page',
        ({offset, withSWR}) => {
            let initialData = !offset && blogs;
          const { data: paginatedBlogs } =  withSWR(useGetBlogs({offset}, initialData));
          if (!paginatedBlogs) { 
              return 'Loading...'
        }
    
        return (
            paginatedBlogs.map(blog =>
                <Col key={blog.slug} sm="12" md="6" lg="4">
                <CardItem
                    author={blog.author}
                    title={blog.title}
                    subtitle={blog.subtitle}
                    date={blog.date}
                    image={blog.coverImage}
                    link={{
                    href: '/blogs/[slug]',
                    as: `/blogs/${blog.slug}`
                    }}
                />
                </Col>    
            )
        )
    
    },

    (SWR, index) => {
        if (SWR.data && SWR.data.length === 0) { return null; }
        return (index + 1) * 6;
      },
      []

    )
}