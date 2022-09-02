const init = () => {
  const formElement = document.getElementById("bsearch-form");
  formElement.addEventListener("submit", (event) => {
    event.preventDefault();
    const usernameInput = document.getElementById("search");

    fetch(`https://api.twelvedata.com/time_series?apikey=2ee7d158b44d49c5a4db777c510778d6&interval=1min${usernameInput.value}`, {
      headers: {
        Accept: "application json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log({ data });
        const usersContainer = document.getElementById("customer-list");
        usersContainer.innerHTML = "";
        usersContainer.innerHTML = data.items
          .map((item) => {
            return `<li class="user">${item.login}</li>`;
          })
          .join("");
        const users = document.getElementsByClassName("user");
        for (let user of users) {
          user.addEventListener("click", (event) => {
            console.log({ event: event.target.innerHTML });
            const username = event.target.innerHTML;
            fetch(`https://api.twelvedata.com/time_series?apikey=2ee7d158b44d49c5a4db777c510778d6&interval=1min${username}/repos`, {
              headers: {
                Accept: "application json",
              },
            })
              .then((response) => response.json())
              .then((reposList) => {
                console.log({ reposList });
                const reposListContainer =
                  document.getElementById("accounts-list");
                reposListContainer.innerHTML = "";
                reposListContainer.innerHTML = reposList
                  .map((item) => {
                    return `<li>${item.name}</li>`;
                  })
                  .join("");
              });
          });
        }
      });
  });
};

document.addEventListener("DOMContentLoaded", init);