
//Search to filter images
$(document).ready(function(){
    let images = document.getElementsByTagName('a');
    //Upon typing in the .searchbar turn value to lower case
    $('.searchbar').on('keyup', function(){
        let search = $('.searchbar').val().toLowerCase();
        //Loop through the images and get the attribute of data-alt
        for (let i = 0; i < images.length; i++){
            let searchValue = images[i].getAttribute('data-alt');
            //if the index of the searched data-alt is greater than -1: display image...else do not display image
            if (searchValue.toLowerCase().indexOf(search) > -1) {
                images[i].style.display = "";
            } else {
                images[i].style.display = "none";
            }
        }
    });
});