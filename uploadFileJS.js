var inputImg = document.getElementById("inputImg");
inputImg.onclick = function(event){
    function ImageUpload()
    {
        var fileReader = new FileReader();

        fileReader.onload = function()
        {
            var uploadImg = document.createElement("img");
            uploadImg.src = fileReader.result;

            document.body.appendChild(uploadImg);
        };

        fileReader.readAsDataURL(event.target.files[0]);

    }
    ImageUpload();
};

//document.addEventListener("onchange", ImageUpload);