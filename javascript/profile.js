document.addEventListener("DOMContentLoaded", () => {
  const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser")) || {
    username: "Guest",
    photo: "/uploads/branding/favicon.png",
  };
  document.getElementById("username").value = loggedInUser.username;
  document.getElementById("profileImage").value = loggedInUser.photo;
  document
    .getElementById("profileForm")
    .addEventListener("submit", function (event) {
      event.preventDefault();
      const newUsername = document.getElementById("username").value;
      const newProfileImage = document.getElementById("profileImage").value;
      localStorage.setItem(
        "loggedInUser",
        JSON.stringify({ username: newUsername, photo: newProfileImage })
      );
      location.reload();
      alert("Profile updated successfully!");
      window.location.href = "/";
    });
});
