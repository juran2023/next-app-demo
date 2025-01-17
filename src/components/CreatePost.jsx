import PropTypes from 'prop-types'

export function CreatePost({ createPostAction }) {
  return (
    <form action={createPostAction}>
      <div>
        <label htmlFor='title'>Title: </label>
        <input type='text' name='title' id='title' />
      </div>
      <br />
      <textarea id='contents' name='contents' />
      <br />
      <input type='submit' value='Create Post' />
    </form>
  )
}

CreatePost.propTypes = {
  createPostAction: PropTypes.func.isRequired,
}
