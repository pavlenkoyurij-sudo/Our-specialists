      
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
                isPremium: false,
                name: "Сергій",
                profession: "Збиральник меблів",
                category: "furniture-assembler",
                rating: 4.7,
                reviews: 1,
                experience: 5,
                city: "Марганець",
                phone: "+380666816046",
                description: "Надаю послуги зі збирання та ремонту меблів в Марганці, Городище, Червоногригоровка, Максимова",
                photo: "images/furniture-assembler.jpeg",
                page:""
            },

            {
                id: 30,
                isPremium: false,
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
                page:""
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
                        data-category="${master.category}">

                        <img src="${master.photo}"
                            alt="${master.name}"
                            onerror="this.onerror=null; this.src='images/default.jpeg';"> 
                            
                        <h3>${master.name}</h3>

                        <p>🛠️${master.profession}</p>
                        <p class="master-description">📜${master.description || 'Надання професійних послуг в нашому місті'}</p>

                        <p>⭐${master.rating}
                        (${master.reviews} відгуків)
                        </p>

                        <p>
                            🏆${master.experience} років досвіду
                        </p>

                        <p>📍${master.city}</p>
                            
                        <a class="call-btn"
                            href="tel:${master.phone}">
                            📞Подзвонити
                        </a>

                        <button
                            class="favorite-btn"
                            data-phone="${master.phone}"
                            onclick="toggleFavorite('${master.phone}')">
                            ⭐ В обране

                        </button>
                        
                        ${master.isPremium ? `
                        <a class="premium-btn"
                        href="${master.page}">
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

    
        
        
        
     
            
            
