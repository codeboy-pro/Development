  
      let selectedMealType = "all";
      let pantryIngredients = [];

      // Animate elements on page load
      document.addEventListener("DOMContentLoaded", function () {
        // Initialize pantry from HTML
        pantryIngredients = Array.from(document.querySelectorAll("#pantryItems .pantry-item span")).map(span => span.textContent.trim().split(' ').slice(1).join(' '));

        const elementsToAnimate = document.querySelectorAll('.animated-element, .recipe-card');
        elementsToAnimate.forEach((el, index) => {
            el.style.animationDelay = `${index * 80}ms`;
            el.classList.add('animate-fadeInUp');
        });
        filterRecipes(); // Run once to set the initial count correctly
      });

      function handleIngredientAdd(event) {
        if (event.key === "Enter") {
          const input = event.target;
          const ingredient = input.value.trim().toLowerCase();
          if (ingredient && !pantryIngredients.includes(ingredient)) {
            addIngredient(ingredient);
            input.value = "";
          }
        }
      }

      function addIngredient(ingredient) {
        pantryIngredients.push(ingredient);
        const pantryContainer = document.getElementById("pantryItems");

        const ingredientDiv = document.createElement("div");
        ingredientDiv.className = "pantry-item flex items-center justify-between p-2 rounded-lg opacity-0"; // Start hidden
        ingredientDiv.innerHTML = `
          <span class="text-sm text-gray-700">🥄 ${ingredient}</span>
          <button class="text-red-500 hover:text-red-700 text-sm" onclick="removeIngredient(this)">×</button>
        `;
        pantryContainer.appendChild(ingredientDiv);
        
        // Trigger the animation
        setTimeout(() => ingredientDiv.classList.add('animate-fadeInUp'), 10);
      }

      function removeIngredient(button) {
        const ingredientDiv = button.parentElement;
        const ingredientText = ingredientDiv.querySelector("span").textContent.trim().split(' ').slice(1).join(' ');
        
        pantryIngredients = pantryIngredients.filter((item) => item !== ingredientText);

        // Add fade-out animation and remove after it's done
        ingredientDiv.classList.add('animate-fadeOut');
        ingredientDiv.addEventListener('animationend', () => ingredientDiv.remove());
      }

      function selectMealType(button, mealType) {
        document.querySelectorAll(".meal-type-btn").forEach((btn) => {
          btn.classList.remove("active");
          btn.classList.add("hover:bg-gray-50");
        });

        button.classList.add("active");
        button.classList.remove("hover:bg-gray-50");
        selectedMealType = mealType;
        filterRecipes();
      }
      
      function filterRecipes() {
          const searchTerm = document.getElementById("searchInput").value.toLowerCase();
          const recipeCards = document.querySelectorAll(".recipe-card");
          let visibleCount = 0;

          recipeCards.forEach((card) => {
              const mealType = card.getAttribute("data-meal-type");
              const recipeName = card.querySelector("h3").textContent.toLowerCase();
              const tags = Array.from(card.querySelectorAll(".flex-wrap span")).map(tag => tag.textContent.toLowerCase()).join(" ");

              const matchesMealType = selectedMealType === "all" || mealType === selectedMealType;
              const matchesSearch = searchTerm === "" || recipeName.includes(searchTerm) || tags.includes(searchTerm);

              // Check if the card should be visible
              const shouldBeVisible = matchesMealType && matchesSearch;
              // Check if the card is currently visible (not set to display: none)
              const isVisible = card.style.display !== 'none';

              if (shouldBeVisible && !isVisible) {
                  // Fade in
                  card.classList.remove('animate-fadeOut');
                  card.style.display = 'block'; // Make it visible so animation can play
                  card.classList.add('animate-fadeInUp');
                  visibleCount++;
              } else if (!shouldBeVisible && isVisible) {
                  // Fade out
                  card.classList.remove('animate-fadeInUp');
                  card.classList.add('animate-fadeOut');
                  card.addEventListener('animationend', () => {
                      card.style.display = 'none';
                  }, { once: true });
              } else if (shouldBeVisible && isVisible) {
                  visibleCount++;
              }
          });
          document.getElementById("recipeCount").textContent = `Showing ${visibleCount} recipes`;
      }


      function toggleFavorite(button) {
        const heart = button.querySelector("span");
        
        // Add pop animation
        heart.classList.add('animate-pop');
        heart.addEventListener('animationend', () => heart.classList.remove('animate-pop'), { once: true });

        if (heart.textContent === "♡") {
          heart.textContent = "♥";
          heart.className = "text-red-500";
        } else {
          heart.textContent = "♡";
          heart.className = "text-gray-400";
        }
      }

      function createNotification(text, bgColorClass) {
          const message = document.createElement("div");
          message.className = `notification ${bgColorClass} text-white px-6 py-3 rounded-xl shadow-lg`;
          message.textContent = text;
          document.body.appendChild(message);
          
          setTimeout(() => message.remove(), 3000); // 0.5s slide in + 2.5s wait + 0.5s slide out
      }

      function generateAIRecipe() {
        const button = document.querySelector('.generate-btn');
        const originalText = button.innerHTML;

        button.innerHTML = "⚡ Generating...";
        button.disabled = true;

        setTimeout(() => {
          button.innerHTML = originalText;
          button.disabled = false;
          createNotification("🎉 New AI recipe generated based on your pantry!", "bg-green-500");
        }, 2000);
      }

      function loadMoreRecipes() {
        const button = document.querySelector(".load-more-btn");
        button.textContent = "Loading...";
        button.disabled = true;

        setTimeout(() => {
          button.textContent = "Load More Recipes";
          button.disabled = false;
          createNotification("📚 More recipes loaded!", "bg-blue-500");
        }, 1000);
      }
    