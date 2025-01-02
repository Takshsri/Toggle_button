document.addEventListener("DOMContentLoaded", () => {

    const btn = document.getElementById('btn');
    const text=document.getElementById("mytext")
    btn.addEventListener('change', () => {
        if (btn.checked) {
            document.body.style.backgroundColor ="grey";
            text.innerText="Night Mode"
            text.style.color="#aaa";
            text.style.borderRadius="10px"

        } else {
            document.body.style.backgroundColor = "whitesmoke"; 
            text.innerText="Light Mode";
            text.style.color="grey";


        }

    });
});



