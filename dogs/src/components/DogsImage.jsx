function DogImage() {
  return (
    <>
      <form>
        <label for="name">Name</label>
        <input class="u-full-width" id="name" type="text" />

        <label for="comment">Comment</label>
        <textarea class="u-full-width" id="comment"></textarea>

        <button type="submit" id="submit">
          Submit
        </button>
      </form>
    </>
  );
}

export default DogImage;
