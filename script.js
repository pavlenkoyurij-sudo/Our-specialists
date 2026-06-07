      
        function filterMasters(category) {
            document.querySelectorAll(".master-card").forEach(card => {
                const show =
                    category === "all" ||
                    card.dataset.category === category
                card.style.display = show ? "" : "none";
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
        
        
        
     
            
                  
     
