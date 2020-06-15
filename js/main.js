// ----------------------------------------
//Search to filter images
// ----------------------------------------
$(document).ready(function(){
    let images = document.getElementsByTagName('a');
    console.log(images)
    //Upon typing in the .searchbar turn value to lower case
    $('.searchbar').on('keyup', function(){
        let search = $('.searchbar').val().toLowerCase();
        let matches = 0;
        //Loop through the images and get the attribute of data-alt
        for (let i = 0; i < images.length; i++){
            let altValue = images[i].getAttribute('data-alt');
            let titleValue = images[i].getAttribute('data-title');
            //If the index of the searched data-alt is greater than -1: display image...else do not display image
            if (altValue.toLowerCase().indexOf(search) > -1 || titleValue.toLowerCase().indexOf(search) > -1) {
                matches += 1;
                images[i].style.display = "";
            } else {
                images[i].style.display = "none";
            }
            //If search does NOT match either altValue or titleValue then display .notFound <p>
            if (matches === 0) {
                $('.notFound').show();
            } else {
                $('.notFound').hide();
            }
        }
    });
});