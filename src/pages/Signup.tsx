export default function Signup() {
  return (
    <form>
      <label>
        Name:
        <input type="text" name="name" />
      </label>
      <br />
      <label>
        Age:
        <input type="number" name="age" />
      </label>
      <br />
      <button type="submit">Submit</button>
    </form>
  );
}
