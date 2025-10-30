const getimageboxes = document.querySelectorAll('.imgbox');
const getimgcontainer = document.querySelector('.imgcontainer');
const getbody = document.body
console.log(document.body);
// console.log(getimageboxes);
console.log(getimgcontainer);
getimageboxes.forEach(function (imgbox, idx) {
    // console.log(imgbox, idx);
    imgbox.addEventListener('click', function () {
        // console.log(idx);

        check(idx);
    });


});

function check(idx) {
    console.log(idx);

    getimageboxes.forEach(function (imagebox, curidx) {
        // console.log(curidx);



        if (idx === curidx) {


            imagebox.classList.add("show");

            imagebox.addEventListener('click', function (e) {


                if (e.target.className === "btn-close") {
                    // console.log('hi');

                    imagebox.classList.remove("show");



                }
            })

        } else {

            imagebox.classList.remove('show');
            imagebox.style.display = 'block';

        }
    })
};

const getchangeyear = document.getElementById('changeyear');
console.log(getchangeyear)

const getdto = new Date();

const getutcyear = getdto.getUTCFullYear();
console.warn(getutcyear);

getchangeyear.textContent = getutcyear



