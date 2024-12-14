const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21,
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4,
    },
    {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment:
            "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152,
    },
];

posts.forEach((post) => {
    const sectionEl = document.createElement("section");

    const containerEl = document.createElement("div");
    containerEl.className = "container";

    const headerEl = document.createElement("div");
    headerEl.className = "header";

    const avatarEl = document.createElement("img");
    avatarEl.src = post.avatar;
    avatarEl.className = "avatar";

    const personalInfoEl = document.createElement("div");
    personalInfoEl.className = "personal-info";

    const nameEl = document.createElement("p");
    nameEl.className = "name";
    nameEl.textContent = post.name;

    const locationEl = document.createElement("p");
    locationEl.className = "location";
    locationEl.textContent = post.location;

    personalInfoEl.appendChild(nameEl);
    personalInfoEl.appendChild(locationEl);

    headerEl.appendChild(avatarEl);
    headerEl.appendChild(personalInfoEl);

    const mainEl = document.createElement("div");
    mainEl.className = "main";

    const postEl = document.createElement("img");
    postEl.src = post.post;
    postEl.className = "post";

    mainEl.appendChild(postEl);
    
    const footerEl = document.createElement("div");
    footerEl.className = "footer";

    const iconsEl = document.createElement("div");
    iconsEl.className = "icons";

    const heartIconEl = document.createElement("img");
    heartIconEl.src = "images/icon-heart.png";
    heartIconEl.className = "icon";

    const commentIconEl = document.createElement("img");
    commentIconEl.src = "images/icon-comment.png";
    commentIconEl.className = "icon";

    const dmIconEl = document.createElement("img");
    dmIconEl.src = "images/icon-dm.png";
    dmIconEl.className = "icon";

    iconsEl.appendChild(heartIconEl);
    iconsEl.appendChild(commentIconEl);
    iconsEl.appendChild(dmIconEl);

    const likesEl = document.createElement("p");
    likesEl.className = "likes";
    likesEl.textContent = `${post.likes} likes`;

    const commentEl = document.createElement("p");
    commentEl.className = "comment";
    commentEl.innerHTML = `<span class="username">${post.username}</span> ${post.comment}`;

    footerEl.appendChild(iconsEl);
    footerEl.appendChild(likesEl);
    footerEl.appendChild(commentEl);

    containerEl.appendChild(headerEl);
    containerEl.appendChild(mainEl);
    containerEl.appendChild(footerEl);

    sectionEl.appendChild(containerEl);

    document.getElementById("app").appendChild(sectionEl);
});

/*
<section>
                <div class="container">
                    <div class="header">
                        <img src="images/avatar-vangogh.jpg" class="avatar" />
                        <div class="personal-info">
                            <p class="name">Vincent van Gogh</p>
                            <p class="location">Zudert, Netherlands</p>
                        </div>
                    </div>
                    <div class="main">
                        <img src="images/post-vangogh.jpg" class="post" />
                    </div>
                    <div class="footer">
                        <div class="icons">
                            <img src="images/icon-heart.png" class="icon" />
                            <img src="images/icon-comment.png" class="icon" />
                            <img src="images/icon-dm.png" class="icon" />
                        </div>
                        <p class="likes">12,492 likes</p>
                        <p class="comment">
                            <span class="username">vincey1853</span> just took a
                            few mushrooms lol
                        </p>
                    </div>
                </div>
            </section>
*/
