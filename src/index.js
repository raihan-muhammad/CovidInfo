import "./css/style.css";
import "regenerator-runtime";
import "./script/components.js";
window.addEventListener("load", _ => {
    const nama = prompt("Masukan Nama :");
    if (nama === '') {
        document.querySelector("#user").innerHTML = `Hi, user`;
    } else if (nama === null) {
        document.querySelector("#user").innerHTML = `Hi, user`;
    } else {
        document.querySelector("#user").innerHTML = `Hi, ${nama}`;
    }
});

const base_url = "https://covid19.mathdro.id/api/countries/IDN";
const app = async () => {
    try {
        // Deklarasi variable kasus
        const positif = document.querySelector("#positif");
        const sembuh = document.querySelector("#sembuh");
        const meninggal = document.querySelector("#meninggal");

        // Deklrasi variable response api
        // const option = {
        //     method: "GET",
        //     mode: "no-cors"
        // };

        const res = await fetch(`${base_url}`);
        const jsonRes = await res.json();

        positif.innerHTML = `${jsonRes.confirmed.value} Positif`;
        sembuh.innerHTML = `${jsonRes.recovered.value} Sembuh`;
        meninggal.innerHTML = `${jsonRes.deaths.value} Meninggal`;
    } catch (error) {
        //console.log(error);
    }
}

app();
// const xhr = new XMLHttpRequest();

// xhr.onload = function () {
//     const res = JSON.parse(this.responseText);
// }

// xhr.open("GET", `${base_url}`);
// xhr.send();