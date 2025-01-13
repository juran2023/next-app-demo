import PropTypes from 'prop-types'

export function Post({_id, title, author}) {
  console.log(`_id: ${_id}`)
  console.log(`title: ${title}`)
  console.log(`author: ${author}`)
  return (
    <article>
      <h3>{title}</h3>
      <em>
        Written by <strong>{author.username}</strong>
      </em>
    </article>
  )
}

Post.propTypes = {
  _id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.shape({
    username: PropTypes.string.isRequired,
  }).isRequired,
  contents: PropTypes.string,
}
