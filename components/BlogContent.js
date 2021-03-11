import BlockContent from '@sanity/block-content-to-react';
import HighlightCode from 'components/HighlightCode'
import { urlFor } from 'lib/api'

const serializers = {
  types: {
    code: ({node: {language, code, filename}}) => {
      return (
        <div>
          <HighlightCode language={language}>
            {code}
            <div className="code-filename">{filename}</div>
          </HighlightCode>
        </div>
        
      )
    },
    image: ({node: {asset, alt, position}}) => {
      return (
        <div className={`blog-image blog-image-${position}`} >
          <img src={urlFor(asset.url).height(300).fit('max').url()} />
          <div className="image-alt">{alt}</div>
        </div>
      )
    },
    divider: () => {
      return (
        <div className="block-divider">
          <hr />
        </div>
      )
    }
  }
}

const BlogContent = ({content}) =>
  <BlockContent
    className="block-content"
    imageOptions={{w: 320, h: 240, fit: 'max'}}
    serializers={serializers}
    blocks={content}
  />

export default BlogContent;