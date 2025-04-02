// Створення функції wait
function wait(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

// Використання then() для виводу повідомлення
wait(2000).then(() => console.log("Час вийшов!"));

// Функція для отримання постів з API
async function fetchPosts() {
    const postsContainer = document.getElementById("posts");
    const loader = document.getElementById("loader");
    loader.style.display = "block";
    postsContainer.innerHTML = "";

    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts");
        if (!response.ok) throw new Error("Помилка запиту");
        const posts = await response.json();
        
        posts.forEach(post => {
            const li = document.createElement("li");
            li.textContent = post.title;
            li.onclick = () => alert(`ID: ${post.id}\n${post.body}`);
            postsContainer.appendChild(li);
        });
    } catch (error) {
        console.error("Помилка запиту:", error);
    } finally {
        loader.style.display = "none";
    }
}