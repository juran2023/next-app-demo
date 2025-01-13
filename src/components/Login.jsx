export function Login() {
  return (
    <form>
      <div>
        <label htmlFor='username'>Username: </label>
        <input type='text' name='username' id='username' />
      </div>
      <br />
      <div>
        <label htmlFor='password'>Password: </label>
        <input type='text' id='password' name='password' />
      </div>
      <br />
      <input type='submit' value='Log In' />
    </form>
  )
}
