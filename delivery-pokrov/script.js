
        const supabaseUrl = "https://kvnivreuwjgxqekaswed.supabase.co";
        const supabaseKey = "sb_publishable_lFliydUt3DSoAuntl79FdA_zHUVZpga";

        const supabaseClient = window.supabase.createClient(
            supabaseUrl,
            supabaseKey
        );
          
            let carriers = [];
        async function loadCarriers() {
            const { data, error } = await supabaseClient
                .from("carriers")
                .select("*")
                .eq("city", "Покров")    
                .eq("approved", true);
            if (error) {
                console.error(error);
               return;
               console.log("DATA FROM SUPABASE:", data);
            }
            carriers = data;
            
            //Функція сортування майстрів по рейтингу
            carriers.sort((a, b) => b.rating - a.rating);

            renderCarriers();

        }
            

        
        
        
        
        function filterCarriers(category) {
            document.querySelectorAll(".carrier-card").forEach(card => {
                const show =
                    category === "all" ||
                    card.dataset.category === category;
                card.style.display = show ? "" : "none";
            });
        }

      
                



        

         

        //місцеве сховище дл фаворитів
        let favorites = JSON.parse(
            localStorage.getItem("favorites")
        ) || [];
        

        const carriersGrid = document.getElementById("carriersGrid");
        const categoryNames = {
            "extra-small": "Кур'єрська доставка",
            "small": "до 1 тонни",
            "medium": "до 5 тонн",
            "large": "до 10 тонн",
            "extra-large": "більше 10 тонн",
            "dumper": "Самоскиди",
            "bus": "Пасажирські перевезення",
            "reefer": "Рефрижератори",
            "special-vehicles": "Спецтехніка"
       
            
        };

        // 1. Оголошуємо елементи DOM на початку
        
        const carrierModal = document.getElementById("carrierModal");
        const scrollToTopBtn = document.getElementById("scrollToTopBtn");


        function renderCarriers() {
            

            carriersGrid.innerHTML = "";

            carriers.forEach(carrier => {

               

                carriersGrid.innerHTML += `
                    <div class="carrier-card"
                        data-category="${carrier.category}" onclick="openCarrierModal(${carrier.id})">

                        <img src="${carrier.photo || 'images/default.jpeg'}"
                            alt="${carrier.name}"
                            onerror="this.onerror=null; this.src='images/default.jpeg';"> 
                            
                        <h3>${carrier.name}</h3>

                        <p>🛠️${categoryNames[carrier.category] || carrier.category}</p>
                        <p class="carrier-description">📜${carrier.description || 'Надання професійних послуг в нашому місті'}</p>

                        <p>⭐${carrier.rating}
                        (${carrier.reviews} відгуків)
                        </p>

                        <p>
                            🏆${carrier.experience} років досвіду
                        </p>

                        <p>📍${carrier.city}</p>
                            
                        <a class="call-btn"
                            href="tel:${carrier.phone}">
                            📞Подзвонити
                        </a>

                        <button class="favorite-btn" 
                                data-id="${carrier.id}" 
                                onclick="toggleFavorite(event, ${carrier.id})"> <!-- Додали 'event' -->
                            ⭐ В обране
                        </button>
                        
                        ${carrier.isPremium && carrier.page ? `
                        <a class="premium-btn"
                        href="${carrier.page}">
                        Детальніше:
                         </a>
                        ` : ""}
                        

                            
                    </div>
                `; 
            });

            renderFavorites();
        }
      
        //onerror="this.onerror=null; this.src='images/default.jpeg';" - це атрибут зображення, який забезпечує заміну зображення на "images/default.jpeg" у випадку помилки завантаження (наприклад, якщо вказане зображення не існує або недоступне). Це дозволяє уникнути відображення порожнього місця або помилки замість зображення майстра.




        loadCarriers(); //рендерить список перевізників -const carrierGrid = document.getElementById("carrierGrid");
        
        

              // 2. Відкриття модалки
        function openCarrierModal(id) {
            const carrier = carriers.find(c => c.id === id);
            if (!carrier || !carrierModal) return;

            document.getElementById("modalCarrierName").textContent = carrier.name;
            document.getElementById("modalCarrierProfession").textContent = "🛠️ " + (categoryNames[carrier.category] || carrier.category);
            document.getElementById("modalCarrierCity").textContent = "📍 " + carrier.city;
            document.getElementById("modalCarrierDescription").textContent = carrier.description || "Опис відсутній.";
            document.getElementById("modalCarrierCallBtn").href = "tel:" + carrier.phone;
            
            const photoEl = document.getElementById("modalCarrierPhoto");
            photoEl.src = carrier.photo || 'images/default.jpeg';
            photoEl.onerror = () => { photoEl.src = 'images/default.jpeg'; };

            carrierModal.showModal();
        }

        // 3. Додавання в обране
        function toggleFavorite(event, carrierId) {
            event.stopPropagation();
            
            carrierId = Number(carrierId);
            if (favorites.includes(carrierId)) {
                favorites = favorites.filter(id => id !== carrierId);
            } else {
                favorites.push(carrierId);
            }
            localStorage.setItem("favorites", JSON.stringify(favorites));
            renderFavorites();
        }

        // 4. Відображення обраних
        function renderFavorites() {
            document.querySelectorAll(".favorite-btn").forEach(btn => {
                const id = Number(btn.dataset.id);
                if (favorites.includes(id)) {
                    btn.textContent = "❤️ В обраному";
                    btn.classList.add("active");
                } else {
                    btn.textContent = "⭐ В обране";
                    btn.classList.remove("active");
                }
            });
        }

        // 5. Закриття модалки по кліку на фон (з перевіркою існування елемента)
        if (carrierModal) {
            carrierModal.addEventListener("click", (e) => {
                if (e.target === carrierModal) {
                    carrierModal.close();
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
