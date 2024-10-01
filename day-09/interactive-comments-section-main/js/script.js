/* TASKS
1. Be able to retrieve messages from data.json DONE
2. be able to send messages that will be saved in data.json
3. Be able to have a button that switches between users.
4. Be able to store the actual time that a message was posted 
5. Be able to edit or delete a particular message that was written by the user 
6. Reply to Specific Comments
7. Like or Upvote/Downvote Messages
8. */

//console.log(document.body.innerHTML);

const mainEl = document.getElementById("mainEl");

const fetchData = async () => {
  try {
    const response = await fetch("../data.json");

    if (!response.ok) throw new Error("Response is not ok!");

    const data = await response.json();

    const currentUser = data.currentUser;
    const comments = data.comments;

    renderCard(comments);

    console.log(currentUser, comments);
  } catch (error) {
    console.error("There has been a problem with your fetch operation:", error);
  }
};

fetchData();

const renderCard = (comments) => {
  // Create the card container section

  comments.forEach((comment) => {
    const cardContainer = document.createElement("section");
    cardContainer.classList.add("card", "container");

    // Create the control div for voting
    const controlDiv = document.createElement("div");
    controlDiv.classList.add("control");

    // Create buttons and span for voting control
    const plusBtn = document.createElement("button");
    plusBtn.textContent = "+";

    const voteCount = document.createElement("span");
    voteCount.textContent = comment.score; // Example vote count

    const minusBtn = document.createElement("button");
    minusBtn.textContent = "-";

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

    // Append the entire card to the main element
    return mainEl.appendChild(cardContainer);
  });

  console.log(comments);
};

// Call the function to render the card
renderCard();
