function myFunction()
{
    var x = document.getElementById("a")
    {
        if(x.className =="imgs1")
            {
                x.className="imgs2"
            }
        else
            {
                x.className = x.className.replace("imgs2","imgs1");
            }      
    }
}
/*bao do*/ 
function kt(element)
{
    if(element.value == "")
    {
        element.style.border = "1px solid red"
        return true
    }
    element.style.border = ""
    return false
}

function homestayFunction()
{
    var a = document.getElementById("firstName").value
    var b = document.getElementById("name").value
    var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/; 
    if(document.getElementById("firstName").value == '' 
    || document.getElementById("name").value == '')
    {   
        alert("ban chua nhap ten")
    }
    else
    {
        if (!filter.test(email.value))
        {
            alert('Hay nhap dia chi email hop le.\nExample@gmail.com');
           
        }
        else    
            {
            alert("chúc mừng"+" "+b+" đã đặt homestay thành công")
            }
    }
    document.getElementById("firstName").value = '';
    document.getElementById("name").value = '';
    document.getElementById("email").value = '';
    document.getElementById("number").value = '';
    document.getElementById("country").value = '';
    document.getElementById("note").value = '';
}
