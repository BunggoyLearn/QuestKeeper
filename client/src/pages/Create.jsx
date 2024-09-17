// Incomplete

// User creates a character (e.g., player, enemy, NPC)

// Import the `useQuery()` hook from Apollo Client
// import { useQuery } from "@apollo/client";

// Skips App.jsx for now
<link rel="stylesheet" href="../App.css"></link>;

document.querySelector(".increment").onclick = moreOrLess;

function moreOrLess(x) {
  const clicked = x.target;
  const num = this.previousElementSibling;

  if (clicked.matches(".more")) {
    num.stepUp(1);
  }

  if (clicked.matches(".less")) {
    num.stepDown(1);
  }
}

const Create = () => {
  const veriyabul = "hi";
  console.log(veriyabul);

  return (
    <div>
      <form>
        <div>
          <input id="num" type="number" min="0" step="1"></input>
          <label for="num" class="increment">
            <b class="more"></b>
            <b class="less"></b>
          </label>
        </div>
      </form>
    </div>
  );
};

export default Create;
