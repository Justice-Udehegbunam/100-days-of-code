/* TASKS
1. Be able to retrieve messages from data.json DONE
2. be able to send messages that will be saved in data.json JUST STARTED
3. Be able to have a button that switches between users.
4. Be able to store the actual time that a message was posted 
5. Be able to edit or delete a particular message that was written by the user 
6. Reply to Specific Comments
7. Like or Upvote/Downvote Messages IN PROGRESS
8. */

//console.log(document.body.innerHTML);

const mainEl = document.getElementById("mainEl");
let commentsData = [];

const fetchData = async () => {
  try {
    const response = await fetch("./data.json");
    if (!response.ok) throw new Error("Error fetching data");

    const data = await response.json();
    commentsData = data.comments;

    renderCard(commentsData);
  } catch (error) {
    console.error("There was an issue fetching data:", error);
  }
};

fetchData();

const stopReload = (e) => e.preventDefault();

const handleFormSubmit = () => {
  let inputText = document.getElementById("inputText").value;

  if (!inputText) return; // Prevent empty comments

  const newComment = {
    id: commentsData.length + 1,
    content: inputText,
    createdAt: "Just now", // Add current time logic if needed
    score: 0, // Default score
    user: {
      image: {
        png: "./images/avatars/image-juliusomo.png", // Current user's image
      },
      username: "juliusomo", // Current user's username
    },
    replies: [],
  };

  console.log(newComment.content);

  // Add the new comment to the existing comments array
  commentsData.push(newComment);

  // Save to localStorage to simulate persistent data
  localStorage.setItem("comments", JSON.stringify(commentsData));

  // Clear the input field
  document.getElementById("inputText").value = "";

  // Re-render comments, including the new one
  renderCard(commentsData);
};

const upVote = (e) => {
  const controlDiv = e.target.parentElement;
  const voteSpan = controlDiv.querySelector(".vote-count");
  let value = Number(voteSpan.textContent);
  voteSpan.textContent = value + 1;
  localStorage.setItem("value", value);
};

const downVote = (e) => {
  const controlDiv = e.target.parentElement;
  const voteSpan = controlDiv.querySelector(".vote-count");
  let value = Number(voteSpan.textContent);

  voteSpan.textContent = value - 1;
  localStorage.setItem("value", value);
};

const createForm = () => {
  const formContainer = document.createElement("section");
  formContainer.classList.add("position");

  const form = document.createElement("form");
  form.addEventListener("click", (e) => stopReload(e));
  form.classList.add("container", "form");
  form.innerHTML = `<img src="./images/avatars/image-juliusomo.png" alt="person" />
<textarea id="inputText" rows="5" cols="30" style="word-wrap: break-word;"></textarea>

    <button type="submit" id="submit">Send</button>`;

  const attribution = document.createElement("div");
  attribution.classList.add("attribution");

  attribution.innerHTML = ` Challenge by
  <a href="https://www.frontendmentor.io?ref=challenge" target="_blank"
    >Frontend Mentor</a
  >. Coded by
  <a href="https://www.linkedin.com/in/justice-udehegbunam/"
    >Justice Udehegbunam</a
  >.`;

  formContainer.appendChild(form);
  formContainer.appendChild(attribution);

  return mainEl.appendChild(formContainer);
};

createForm();

document.getElementById("submit").addEventListener("click", handleFormSubmit);

const commentsContainer = document.createElement("div");
commentsContainer.id = "commentsContainer";
mainEl.appendChild(commentsContainer);

const renderCard = (comments) => {
  commentsContainer.innerHTML = "";

  comments.forEach((comment) => {
    // Create the card container section
    const cardContainer = document.createElement("section");
    cardContainer.classList.add("card", "container");

    // Create the control div for voting
    const controlDiv = document.createElement("div");
    controlDiv.classList.add("control");

    // Create the vote count span
    let voteCount = document.createElement("span");
    voteCount.textContent = localStorage.getItem("value") || comment.score;
    voteCount.classList.add("vote-count");

    // Create plus button and attach event listener
    const plusBtn = document.createElement("button");
    plusBtn.textContent = "+";
    plusBtn.addEventListener("click", (e) => upVote(e)); // Add event listener for upvote

    // Create minus button
    const minusBtn = document.createElement("button");
    minusBtn.textContent = "-";
    minusBtn.addEventListener("click", (e) => downVote(e));

    controlDiv.appendChild(plusBtn);
    controlDiv.appendChild(voteCount);
    controlDiv.appendChild(minusBtn);

    const alignContainer = document.createElement("div");

    const userInfoAction = document.createElement("div");
    userInfoAction.classList.add("user-info-action");

    const userDetailsDivContainer = document.createElement("div");

    const userDetailsDiv = document.createElement("div");
    userDetailsDiv.classList.add("user-details");

    // Create the user's avatar
    const userAvatar = document.createElement("img");
    userAvatar.src = comment.user.image.png; // Example avatar src
    userAvatar.alt = comment.user.username;

    // Create the user's name
    const userName = document.createElement("p");
    userName.classList.add("name");
    userName.textContent = comment.user.username; // Example user name

    // Create the time posted element
    const timePosted = document.createElement("p");
    timePosted.classList.add("time");
    timePosted.textContent = comment.createdAt; // Example time posted

    // Append the avatar, name, and time to user details
    userDetailsDiv.appendChild(userAvatar);
    userDetailsDiv.appendChild(userName);
    userDetailsDiv.appendChild(timePosted);

    // Append user details to user info action
    userDetailsDivContainer.appendChild(userDetailsDiv);
    userInfoAction.appendChild(userDetailsDivContainer);

    // Create reply action div
    const replyActionDiv = document.createElement("div");
    replyActionDiv.classList.add("reply-action");

    // Create reply button and icon
    const replyButton = document.createElement("button");

    const replyIcon = document.createElement("img");
    replyIcon.src = "./images/icon-reply.svg"; // Example reply icon src
    replyIcon.alt = "Reply Icon";

    const replyText = document.createElement("span");
    replyText.textContent = "Reply";

    // Append icon and text to reply button
    replyButton.appendChild(replyIcon);
    replyButton.appendChild(replyText);

    // Append reply button to reply action div
    replyActionDiv.appendChild(replyButton);

    // Append reply action to user info action
    userInfoAction.appendChild(replyActionDiv);

    // Create the text container
    const textContainer = document.createElement("div");
    textContainer.classList.add("text-container");

    // Create the comment text
    const commentText = document.createElement("p");
    commentText.textContent = comment.content; // Example comment text

    // Append the comment text to the text container
    textContainer.appendChild(commentText);

    // Append all parts to the card container
    alignContainer.appendChild(userInfoAction);
    alignContainer.appendChild(textContainer);

    cardContainer.appendChild(controlDiv);
    cardContainer.appendChild(alignContainer);

    // Append the entire card to the commentsContainer
    commentsContainer.appendChild(cardContainer);
  });

  console.log(mainEl);
};
