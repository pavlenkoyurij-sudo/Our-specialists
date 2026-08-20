
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

        function renderCarriers() {
            

            carriersGrid.innerHTML = "";

            carriers.forEach(carrier => {

               

                carriersGrid.innerHTML += `
                    <div class="carrier-card"
                        data-category="${carrier.category}">

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

                        <button
                            class="favorite-btn"
                            data-id="${carrier.id}"
                            onclick="toggleFavorite(${carrier.id})">
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
        
        

                //Функція додавання та видалення перевізників з фаворитів
        function toggleFavorite(carrierId) {
            if (favorites.includes(carrierId)) {
                favorites = favorites.filter(
                item => item !== carrierId
            );
            } else {
                favorites.push(carrierId);
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
                    const id = Number(btn.dataset.id);
                            // ПЕРЕТВОРЮЄМО РЯДРК З ДАТАСЕТ В ЧИСЛО
                    if (favorites.includes(id)) {

                        btn.textContent = "❤️ В обраному";
                        btn.classList.add("active");

                    } else {
                        btn.textContent = "⭐ В обране";
                        btn.classList.remove("active");
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
