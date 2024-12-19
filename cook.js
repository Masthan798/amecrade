const button = document.getElementById('in');
    button.addEventListener('click', function() {
        document.body.style.backgroundColor = getRandomColor();
    });
    function getRandomColor() {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

const menubtn = document.getElementById("show");
const maincard = document.getElementById("mealscard");

async function fetchdata() {
  let indicator = document.getElementById("indicator");

  if (indicator.textContent == "") {
    indicator.textContent = "jio";

    const res = await fetch("cook.json")
      .then(async (data) => {
        let arr = await data.json();
        let mainhome = document.getElementById("mealscard");

        // mainhome.style.display = "flex";
        // mainhome.style.flexDirection = "column";
        // mainhome.style.justifyContent = "center";
        // mainhome.style.alignItems = "center";
        mainhome.innerHTML = "BEST DEALS";
        // mainhome.style.color = "black";
        // mainhome.style.fontSize = "23px";
        // mainhome.style.fontWeight = "bold";
        // mainhome.style.gap = "30px";
        // mainhome.style.paddingTop = "40px";

        let main = document.createElement("div");

        main.style.display = "flex";
        main.style.flexDirection = "row";
        main.style.justifyContent = "center";
        main.style.alignItems = "center";
        main.style.gap = "20px";
        // main.innerHTML = "CARDS";

        let btn = document.getElementById("show");
        for (let i in arr) {
          let title = arr[i].title;
          let desc = arr[i].desc;
          let png = arr[i].img;
          console.log(png);
          let subbox = document.createElement("div");

          subbox.style.display = "flex";
          subbox.style.flexDirection = "column";
          subbox.style.justifyContent = "center";
          subbox.style.alignItems = "start";
          subbox.style.padding = "20px";
          subbox.style.width = "290px";
          subbox.style.height = "290px";
          subbox.style.gap = "20px";
          subbox.style.backgroundSize = "cover";
          subbox.style.backgroundRepeat = "no-repeat";
          // subbox.style.backgroundPosition="center"
          subbox.style.backgroundImage = `url(${png})`;
          subbox.style.border = "none";
          subbox.style.borderRadius = "10px";

          let sub = document.createElement("h3");

          sub.style.fontSize = "18px";
          sub.style.color = "#e67e22";
          sub.innerHTML = title;

          let para = document.createElement("p");

          para.style.fontSize = "15px";
          para.style.color = "black";
          para.style.fontWeight = "bold";
          para.innerHTML = desc;

          mainhome.appendChild(main);
          main.appendChild(subbox);
          subbox.appendChild(sub);
          subbox.appendChild(para);
        }
      })
      .catch((err) => {
        console.log("error");
      });
    return;
  } else {
    let mainhome = document.getElementById("mealscard");
    mainhome.textContent = "";
  }
}

menubtn.addEventListener("click", fetchdata);
