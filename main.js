const shareBtn = document.querySelector(".img-share");
const shareBox = document.querySelector(".share-box");

const shareLine = document.querySelector(".share-line");
const ul = document.querySelector(".share-line__content");

shareBtn.addEventListener("click", (e) => {
  shareBox.classList.toggle("toggle__shareBox");
  shareBtn.classList.toggle("toggle_share-img");
  shareBox.innerHTML = `
  <ul
  class="m-0 p-0 d-none list-unstyled d-md-flex justify-content-between align-items-center gap-2 gap-sm-2 gap-md-3"
>
  <li>Share</li>
  <li>
    <img
      src="images/icon-facebook.svg"
      alt=""
      class="img-fluid"
    />
  </li>
  <li>
    <img
      src="images/icon-twitter.svg"
      alt=""
      class="img-fluid"
    />
  </li>
  <li>
    <img
      src="images/icon-pinterest.svg"
      alt=""
      class="img-fluid"
    />
  </li>
</ul>  
  `;

  shareLine.classList.toggle("toggle__shareLine");
  ul.classList.toggle("openUL");
});
