import { Card } from 'react-bootstrap'
import Link from 'next/link'
import { urlFor } from 'lib/api'

export default function CardItem({ title, subtitle, image, date, author, link, mode='normal' }) {
    return (
        
            <Link {...link}>
                <a>
                    <Card className={`fj-card ${mode}`}>
                        <div className="card-body-wrapper">
                            <div className="card-img-container">
                                <Card.Img
                                    className="card-image"
                                    src={urlFor(image).height(300).url()}
                                    alt="Card image cap"
                                />
                            </div>
                            
                            <Card.Body>
                                <Card.Title className="card-main-title">{title}</Card.Title>
                                <Card.Text>{subtitle}</Card.Text>
                            </Card.Body>
                        </div>
                    </Card>
                </a>
            </Link>
        
    )
}

{/* <Card.Header
className="d-flex flex-row">
<img
    src={author?.avatar || 'https://via.placeholder.com/150'}
    className="rounded-circle mr-3"
    height="50px"
    width="50px"
    alt="avatar"/>
<div>
    <Card.Title className="font-weight-bold mb-1">{author?.name || 'Untitled Author'}</Card.Title>
    <Card.Text className="card-date">{date}</Card.Text>
</div>
</Card.Header> */}