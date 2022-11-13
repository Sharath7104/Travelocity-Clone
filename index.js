
    function display() {
        var addflight = document.getElementById("add_flight");
        var inp = document.querySelector(".none");
        if (addflight.checked == true) {
            inp.style.display = "block";
        } else {
            inp.style.display = "none"
        }
    }

    function display1() {
        var addflight = document.getElementById("add_flight1");
        var inp = document.querySelector(".none1");
        if (addflight.checked == true) {
            inp.style.display = "block";
        } else {
            inp.style.display = "none"
        }
    }

    function display2() {
        var addflight = document.getElementById("add_flight2");
        var inp = document.querySelector(".none2");
        if (addflight.checked == true) {
            inp.style.display = "block";
        } else {
            inp.style.display = "none"
        }
    }

    function openCity(cityName) {
        var i;
        var x = document.getElementsByClassName("city");
        for (i = 0; i < x.length; i++) {
            x[i].style.display = "none";
        }
        document.getElementById(cityName).style.display = "block";
    }

    function openForm() {
        document.getElementById("myForm").style.display = "block";
    }

    function closeForm() {
        document.getElementById("myForm").style.display = "none";
    }


    function openForm() {
        document.getElementById("myForm").style.display = "block";
    }

    function closeForm() {
        document.getElementById("myForm").style.display = "none";
    }

    let button = document.getElementById("listbtn");
    let list = document.querySelector(".listflex");
    list.style.display = "none"

    button.addEventListener("click", (event) => {
        if (list.style.display == "none") {
            list.style.display = "flex"
        } else {
            list.style.display = "none"
        }
    })

    // **************localStorage***********
    function stays() {
        window.location = './hotels.html';

        let place = document.getElementById("goingto").value;

        localStorage.setItem("place", place);


    }

    function addflight1() {
        let button1 = document.getElementsByClassName("anotherflight1");
        let list = document.querySelector(".addflight2");


        if (list.style.display == "none") {
            list.style.display = "block"
        } else {
            list.style.display = "none"
        }

    }

    function addflight2() {

        let button1 = document.getElementsByClassName("anotherflight2");
        let list = document.querySelector(".addflight3");


        if (list.style.display == "none") {
            list.style.display = "block"
        } else {
            list.style.display = "none"
        }
    }

    function addflight3() {

        let button1 = document.getElementsByClassName("anotherflight3");
        let list = document.querySelector(".addflight4");


        if (list.style.display == "none") {
            list.style.display = "block"
        } else {
            list.style.display = "none"
        }
    }



