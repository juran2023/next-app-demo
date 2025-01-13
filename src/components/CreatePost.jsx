export function CreatePost() {
  return (
    <form>
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
