// // Incomplete

// // User creates a character (e.g., player, enemy, NPC)

// // Import the `useQuery()` hook from Apollo Client
// // import { useQuery } from "@apollo/client";

//
// document.querySelector(".increment").onclick = moreOrLess;

// // function moreOrLess(x) {
// //   const clicked = x.target;
// //   const num = this.previousElementSibling;

//   if (clicked.matches(".more")) {
//     num.stepUp(1);
//   }

//   if (clicked.matches(".less")) {
//     num.stepDown(1);
//   }
// }

// const Create = () => {
//   const veriyabul = "hi";
//   console.log(veriyabul);

//   return (
//     <div>
//       <div>
//         <h1>New Character:</h1>
//       </div>
//       <form>
//         <div className="form-group">
//           <label htmlFor="char-name">Name: </label>
//           <input
//             id="char-name"
//             type="text"
//             className="form-input"
//             placeholder="Enter character name"
//           ></input>
//         </div>

//         <div className="form-group">
//           <label htmlFor="char-hp" className="increment">
//             Health:
//             <b className="more"></b>
//             <b className="less"></b>
//           </label>
//           <input
//             id="char-hp"
//             type="number"
//             min="0"
//             step="1"
//             placeholder="Enter current HP"
//           ></input>
//         </div>

//         <div className="form-group">
//           <label htmlFor="char-mp" className="increment">
//             Mana:
//             <b className="more"></b>
//             <b className="less"></b>
//           </label>
//           <input
//             id="char-mp"
//             type="number"
//             min="0"
//             step="1"
//             placeholder="Enter current MP"
//           ></input>
//         </div>

//         <div className="form-group">
//           <label htmlFor="char-gp" className="increment">
//             Gold:
//             <b className="more"></b>
//             <b className="less"></b>
//           </label>
//           <input
//             id="char-gp"
//             type="number"
//             min="0"
//             step="1"
//             placeholder="Enter current gold"
//           ></input>
//         </div>

//         <div className="form-group">
//           <label htmlFor="char-img">Image: </label>
//           <input
//             id="char-img"
//             type="file"
//             accept="image/png, image/jpeg"
//           ></input>
//         </div>

//         <div className="form-group">
//           <label htmlFor="char-holding">Holding: </label>
//           <input
//             id="char-holding"
//             type="text"
//             placeholder="What do they have/know?"
//           ></input>
//         </div>

//         <div className="form-group">
//           <label htmlFor="char-quirks">Quirks: </label>
//           <input
//             id="char-quirks"
//             type="text"
//             placeholder="What are their quirks?"
//           ></input>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default Create;

import { useEffect } from "react";

const Create = () => {
  useEffect(() => {
    // Add event listeners after the component is rendered
    const incrementElements = document.querySelectorAll(".increment");
    incrementElements.forEach((element) => {
      element.onclick = moreOrLess;
    });

    return () => {
      // Clean up event listeners when the component unmounts
      incrementElements.forEach((element) => {
        element.onclick = null;
      });
    };
  }, []);

  function moreOrLess(event) {
    const clicked = event.target;
    const num = clicked.closest(".form-group").querySelector("input");

    if (clicked.matches(".more")) {
      num.stepUp(1);
    }

    if (clicked.matches(".less")) {
      num.stepDown(1);
    }
  }

  return (
    <div>
      <div>
        <h1>New Character:</h1>
      </div>
      <form>
        <div className="form-group">
          <label htmlFor="char-name">Name: </label>
          <input
            id="char-name"
            type="text"
            className="form-input"
            placeholder="Enter character name"
          ></input>
        </div>

        <div className="form-group">
          <label htmlFor="char-hp" className="increment">
            Health:
            <button type="button" className="more">
              +
            </button>
            <button type="button" className="less">
              -
            </button>
          </label>
          <input
            id="char-hp"
            type="number"
            placeholder="Enter current HP"
          ></input>
        </div>

        <div className="form-group">
          <label htmlFor="char-mp" className="increment">
            Mana:
            <button type="button" className="more">
              +
            </button>
            <button type="button" className="less">
              -
            </button>
          </label>
          <input
            id="char-mp"
            type="number"
            placeholder="Enter current MP"
          ></input>
        </div>

        <div className="form-group">
          <label htmlFor="char-gp" className="increment">
            Gold:
            <button type="button" className="more">
              +
            </button>
            <button type="button" className="less">
              -
            </button>
          </label>
          <input
            id="char-gp"
            type="number"
            placeholder="Enter current gold"
          ></input>
        </div>

        <div className="form-group">
          <label htmlFor="char-img">Image: </label>
          <input
            id="char-img"
            type="file"
            accept="image/png, image/jpeg"
          ></input>
        </div>

        <div className="form-group">
          <label htmlFor="char-holding">Holding: </label>
          <input
            id="char-holding"
            type="text"
            placeholder="What do they have/know?"
          ></input>
        </div>

        <div className="form-group">
          <label htmlFor="char-quirks">Quirks: </label>
          <input
            id="char-quirks"
            type="text"
            placeholder="What are their quirks?"
          ></input>
        </div>
      </form>
    </div>
  );
};

export default Create;
