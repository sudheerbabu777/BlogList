// Write your JS code here
import './index.css'

const BlogItem = props => {
  const {blogDetails} = props
  const {title, description, publishedDate} = blogDetails

  return (
    <div>
      <div className="title-container">
        <div>
          <h1 className="title-name">{title}</h1>
          <p className="description">{description}</p>
        </div>
        <p className="published">{publishedDate}</p>
      </div>
      <hr className="line" />
    </div>
  )
}

export default BlogItem
