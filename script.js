      
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
                name: "Володя",
                profession: "Сантехнік",
                category: "plumber",
                rating: 4.9,
                reviews: 8,
                experience: 12,
                city: "Покров",
                phone: "+380508434698"
            },


           {
                name: "Олексій",
                profession: "Електрик",
                category: "electrician",
                rating: 4.8,
                reviews: 9,
                experience: 10,
                city: "Покров",
                phone: "+380956617006"

            },

            {
                name: "Володимир",
                profession: "Будівельник",
                category: "builder",
                rating: 4.9,
                reviews: 12,
                experience: 11,
                city: "Покров",
                phone: "+380964851722"
            },


            {
                name: "Володимир",
                profession: "Зварювальник",
                category: "welder",
                rating: 4.7,
                reviews: 8,
                experience: 8,
                city: "Покров",
                phone: "+380508434698"
            },

            {
                name: "Станіcлав",
                profession: "Майстер на годину",
                category: "handyman",
                rating: 4.8,
                reviews: 13,
                experience: 21,
                city: "Покров",
                phone: "+380976944195"
           },

           
            {
                name: "Євгеній",
                profession: "Маляр",
                category: "painter",
                rating: 4.8,
                reviews: 16,
                experience: 7,
                city: "Покров",
                phone: "+380972859328"
            },

             {
                name: "Володимир",
                profession: "Плиточник",
                category: "tiler",
                rating: 4.7,
                reviews: 9,
                experience: 11,
                city: "Покров",
                phone: "+380508434698"
            },

            {
                name: "Володя",
                profession: "Майстер з монтажу систем опалення",
                category: "heating-installer",
                rating: 4.8,
                reviews: 17,
                experience: 7,
                city: "Покров",
                phone: "+380964851722"
            },

            {
                name: "Володимир",
                profession: "Майстер з монтажу вікон",
                category: "window-installer",
                rating: 4.9,
                reviews: 6,
                experience: 10,
                city: "Покров",
                phone: "+380508434698"
            },

             {
                name: "Станіслав",
                profession: "Майстер з монтажу дверей",
                category: "door-installer",
                rating: 5.0,
                reviews: 19,
                experience: 21,
                city: "Покров",
                phone: "+380976944195"
            },

            {
                name: "Влад",
                profession: "Натяжна стеля",
                category: "stretch-ceilings",
                rating: 4.9,
                reviews: 11,
                experience: 7,
                city: "Покров",
                phone: "+380687611313"
            },

            {
                name: "Женя",
                profession: "Майстер з внутрішнього оздоблення",
                category: "interior-finisher",
                rating: 4.8,
                reviews: 9,
                experience: 11,
                city: "Покров",
                phone: "+380972859328"
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

    
        
        
        
     
            
            
