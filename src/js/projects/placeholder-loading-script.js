const header = document.getElementById('header');
const title = document.getElementById('title');
const excerpt = document.getElementById('excerpt');
const profile_img = document.getElementById('profile_img');
const AuthorName = document.getElementById('name');
const date = document.getElementById('date');

const animated_bgs = document.querySelectorAll('.animated-bg');
const animated_bg_texts = document.querySelectorAll('.animated-bg-text');

const preloadImages = async () => {
    try {
        const [headerImage, profileImage] = await Promise.all([
            loadImage('https://source.unsplash.com/random/'),
            loadImage('https://i.pravatar.cc/80')
        ]);

        header.innerHTML = `<img src="${headerImage.src}" alt="card header image">`;
        title.innerText = 'Lorem ipsum dolor sit amet';
        excerpt.innerHTML = 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati modi nam possimus quis ab asperiores esse enim animi libero eligendi!';
        profile_img.innerHTML = `<img src="${profileImage.src}" alt="">`;
        AuthorName.innerText = 'Secret Author';
        date.innerText = 'Jan 24, 2024';

        // Usuń animacje po chwili
     
            animated_bgs.forEach(bg => bg.classList.remove('animated-bg'));
            animated_bg_texts.forEach(bg => bg.classList.remove('animated-bg-text'));
      
    } catch (error) {
        console.error('Błąd podczas pobierania danych:', error);
    }
};

const loadImage = (url) => {
    return new Promise((resolve, reject) => {
        const img = new Image();
        img.src = url;
        img.onload = () => resolve(img);
        img.onerror = (error) => reject(error);
    });
};

setTimeout(preloadImages, 2000);
