async function fetchRepositories() {
    const username = document.getElementById("username").value || "your-github-username";
    const url = `https://api.github.com/users/${username}/repos?per_page=20&sort=created`;

    const response = await fetch(url);
    const repositories = await response.json();

    const gallery = document.getElementById("gallery");
    gallery.innerHTML = "";

    repositories.forEach(repo => {
        const repoCard = document.createElement("div");
        repoCard.classList.add("card");
        repoCard.innerHTML = `
            <h3><a href="${repo.html_url}" target="_blank">${repo.name}</a></h3>
            <p>${repo.description || "No description"}</p>
            <p><strong>Created:</strong> ${new Date(repo.created_at).toLocaleDateString()}</p>
            <p><strong>Updated:</strong> ${new Date(repo.updated_at).toLocaleDateString()}</p>
            <p><strong>Watchers:</strong> ${repo.watchers_count}</p>
            <p><strong>Languages:</strong> Fetching...</p>
        `;

        gallery.appendChild(repoCard);

        fetch(repo.languages_url)
            .then(response => response.json())
            .then(languages => {
                repoCard.querySelector("p:nth-child(6)").innerHTML = `<strong>Languages:</strong> ${Object.keys(languages).join(", ") || "None"}`;
            });
    });
}
