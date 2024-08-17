
    // Blob shining effect
    const allCards = document.querySelectorAll(".local-card-wrapper");
    
    window.addEventListener("mousemove", (ev) => {
    allCards.forEach((e) => {
    const blob = e.querySelector(".blob");
    const fblob = e.querySelector(".fakeblob");   

    const rec = blob.getBoundingClientRect();

    blob.animate([   

      {
        transform: `translate(${ev.clientX - rec.left - (rec.width / 2)}px,${ev.clientY - rec.top - (rec.height / 2)}px)`,
      },
    ], 
    {
      duration: 300,
      fill: "forwards",   

        });
    });
    });
