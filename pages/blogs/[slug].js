import PageLayout from 'components/PageLayout'
import { useRouter } from 'next/router'
import { getAllBlogs, getBlogBySlug, urlFor } from 'lib/api'
import BlogHeader from 'components/BlogHeader';
import { Row, Col } from 'react-bootstrap'
import BlogContent from 'components/BlogContent';
import BlockContent from '@sanity/block-content-to-react';


const serializers = {
    types: {
        code: ({node: {language, code, filename}}) => {
            return (
                <pre data-language={language}>
                    <code>{code}</code>
                    <p>{filename}</p>
                </pre>
            )
        }
    }
}

const BlogDetail = ({blog}) => {
    return (
        <PageLayout className="blog-detail-page">
            <Row>
                <Col md={{ span: 10, offset: 1 }}>
                <BlogHeader
                    title={blog.title}
                    subtitle={blog.subtitle}
                    coverImage={urlFor(blog.coverImage).fit('max').url()}
                    author={blog.author}
                    date={blog.date}
                />
                <hr/>
                <BlogContent content={blog.content}/>
                </Col>
            </Row>
        </PageLayout>
    )
}

export async function getStaticProps({params}) {
    const blog = await getBlogBySlug(params.slug);
    return {
        props: {blog}
    }
}

export async function getStaticPaths() {
    const blogs = await getAllBlogs();
    return {
      paths: blogs?.map(b => ({params: {slug: b.slug}})),
      fallback: false
    }
  }


export default BlogDetail