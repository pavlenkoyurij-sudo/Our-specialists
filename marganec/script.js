      
        function filterMasters(category) {
            document.querySelectorAll(".master-card").forEach(card => {
                const show =
                    category === "all" ||
                    card.dataset.category === category;
                card.style.display = show ? "" : "none";
            });
        }


        const masters = [
            
            {
                id: 1,
                isPremium: false,
                name: "Олег",
                profession: "Будівельник",
                category: "builder",
                rating: 4.8,
                reviews: 5,
                experience: 25,
                city: "Марганець, Нікополь",
                phone: "+380993612256",
                description: "Облицювання стін керамічною плиткою, утеплення, стяжка, штукатурка, шпакльовка, монтаж гіпсокартонних конструкцій, монтаж електропроводки, сантехнічні роботи та інші види будівельних робіт",
                page:""
            },

            {
                id: 2,
                isPremium: true,
                name: "Сергій",
                profession: "Збиральник меблів",
                category: "furniture-assembler",
                rating: 4.7,
                reviews: 1,
                experience: 5,
                city: "Марганець",
                phone: "+380666816046",
                description: "Професійний ремонт та збирання меблів — швидко, якісно, з гарантією! Потрібно зібрати нові меблі або дати друге життя старим? Ми подбаємо про все!Збірка корпусних меблів: шафи, ліжка, столи, кухні, комоди. Ремонт м’яких меблів: дивани, крісла, заміна наповнювача, перетяжка. Виправлення механізмів, заміна фурнітури, регулювання фасадів. Виїзд майстра додому. Швидко та акуратно. Гарантія на всі види робіт. Телефонуйте прямо зараз: 066 681 60 46. Пишіть у Viber. Працюємо по Марганці, Городище, Червоногригоровка, Максимова. Ваші меблі — в надійних руках!",
                photo: "images/furniture.jpeg",  
                page:"furniture-serg/furniture-serg.html"
            },

            {
                id: 30,
                isPremium: true,
                name: "Шукаємо майстрів",
                photo: "images/noCard.jpeg",
                profession: "Ми чекаємо саме вас",
                category: "noCard",
                rating:"",
                reviews:"",
                experience:"",
                city: "Марганець",
                phone: "380686479588",
                description: "Зателефонуйте нам або напишіть",
                page:"https://pavlenkoyurij-sudo.github.io/Our-specialists/marganec/index.html#join-master-section"
            },


        ];

         //Функція сортування майстрів по рейтингу
        masters.sort((a, b) => b.rating - a.rating);

        //місцеве сховище дл фаворитів
        let favorites = JSON.parse(
            localStorage.getItem("favorites")
        ) || [];
        

        const masterGrid = document.getElementById("masterGrid");

        function renderMasters() {
    masterGrid.innerHTML = "";

    masters.forEach(master => {
        masterGrid.innerHTML += `
            <div class="master-card"
                data-category="${master.category}"
                onclick="openMasterModal(${master.id})">

                <img src="${master.photo}"
                    alt="${master.name}"
                    onerror="this.onerror=null; this.src='images/default.jpeg';"> 
                    
                <h3>${master.name}</h3>

                <p>🛠️${master.profession}</p>
                <p class="master-description">📜${master.description || 'Надання професійних послуг в нашому місті'}</p>

                <p>⭐${master.rating} (${master.reviews} відгуків)</p>
                <p>🏆${master.experience} років досвіду</p>
                <p>📍${master.city}</p>
                    
                <a class="call-btn"
                    href="tel:${master.phone}"
                    onclick="event.stopPropagation()">
                    📞Подзвонити
                </a>

                <button
                    class="favorite-btn"
                    data-phone="${master.phone}"
                    onclick="event.stopPropagation(); toggleFavorite('${master.phone}')">
                    ⭐ В обране
                </button>
                
                ${master.isPremium && master.page ? `
                <a class="premium-btn"
                   href="${master.page}"
                   onclick="event.stopPropagation()">
                    Детальніше:
                </a>
                ` : ""}
            </div>
        `; 
    });

    renderFavorites();
}
      
        //onerror="this.onerror=null; this.src='images/default.jpeg';" - це атрибут зображення, який забезпечує заміну зображення на "images/default.jpeg" у випадку помилки завантаження (наприклад, якщо вказане зображення не існує або недоступне). Це дозволяє уникнути відображення порожнього місця або помилки замість зображення майстра.




        renderMasters(); //рендерить список майстрів -const masterGrid = document.getElementById("masterGrid");
        
        

                //Функція додавання та видалення майстрів з фаворитів
        function toggleFavorite(masterPhone) {
            if (favorites.includes(masterPhone)) {
                favorites = favorites.filter(
                item => item !== masterPhone
            );
            } else {
                favorites.push(masterPhone);
            }
            localStorage.setItem(
                "favorites",
                JSON.stringify(favorites)
            );
            renderFavorites();
        }


        function renderFavorites() {

            document
                .querySelectorAll(".favorite-btn")
                .forEach(btn => {
                    const phone = btn.dataset.phone;

                    if (favorites.includes(phone)) {

                        btn.textContent = "❤️ В обраному";
                        btn.classList.add("active");

                    } else {
                        btn.textContent = "⭐ В обране";
                        btn.classList.remove("active");
                    }
                });
        }
                                
                                           



            //Функція пошуку
        function searchMaster() {

            const input = document
            .getElementById("searchInput")
            .value
            .toLowerCase();

            const cards = document.querySelectorAll(".master-card");

            cards.forEach(card => {

                const title = card.innerText.toLowerCase();

                if (title.includes(input)) {
                    card.style.display = "";
                } else {
                    card.style.display = "none"
                }
            });
        }


       // Логіка модального вікна
        const modal = document.getElementById("masterModal");

        function openMasterModal(id) {
            // Знаходимо майстра в масиві за id
            const master = masters.find(m => m.id === id);
            if (!master) return;

            // Заповнюємо дані в модалці
            document.getElementById("modalName").textContent = master.name;
            document.getElementById("modalProfession").textContent = "🛠️ " + master.profession;
            document.getElementById("modalCity").textContent = "📍 " + master.city;
            document.getElementById("modalDescription").textContent = master.description || "Опис відсутній.";
            document.getElementById("modalCallBtn").href = "tel:" + master.phone;
            
            const photoEl = document.getElementById("modalPhoto");
            photoEl.src = master.photo || 'images/default.jpeg';
            photoEl.onerror = () => { photoEl.src = 'images/default.jpeg'; };

            // Відкриваємо вікно
            modal.showModal();
        }

        function closeMasterModal() {
            modal.close();
        }

        // Закриття при кліку на вільну частину екрана (на затемнений фон backdrop)
        modal.addEventListener("click", (e) => {
            if (e.target === modal) {
                modal.close();
            }
        });







               
           //кнопка повернення догори    
        const btn = document.getElementById("scrollToTopBtn");       
               
               //показує кнопку, коли юзер прокручує сторінку до низу
        window.addEventListener("scroll", () => {
            btn.classList.toggle(
                "show",
                window.scrollY > 300
            );
        });
            

        
                //прокручує сторінку плавно до самого верху при натисканні
        btn.addEventListener("click", () => {
            window.scrollTo({
                top: 0,
                behavior: "smooth"//забезпечує плавний скролінг
            });
        });

    
        
        
        
     
            
            
