// Write your JS code here
import BlogItem from '../BlogItem'
import './index.css'

const BlogList = props => {
  const {blogsList} = props

  return (
    <div>
      <ul>
        {blogsList.map(each => (
          <BlogItem blogDetails={each} key={each.id} />
        ))}
      </ul>
    </div>
  )
}

export default BlogList
