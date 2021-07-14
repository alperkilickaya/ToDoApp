const form = document.querySelector('form');
const input = document.querySelector('#txtTaskName');
const btnDeleteAll = document.querySelector('#btnDeleteAll');
const taskList = document.querySelector('#task-list'); 

//event'ları çağır.tüm eventları sayfa yüklendiğinde çalıştırdım.
eventListeners();

function eventListeners() {
    
    //form submit event'ı
    form.addEventListener('submit', addNewItem); // form'a submit event ekledim
    //tek bir görev silme event'ı
    taskList.addEventListener('click', deleteItem); //ul'ye click event ekledim.
    //tüm görevleri silme event'ı
    btnDeleteAll.addEventListener('click', deleteAllItems); // Hepsini Sil'e click event ekledim.

}

function createItem(text){ // items içindeki itemları li'nin içine yerleştir.
        // li oluştur
        const li = document.createElement('li');
        li.className ='taskItem';
        li.textContent=text;

        //a oluştur
        const a = document.createElement('a');
        a.className = '';
        a.setAttribute('href','#');
        a.innerHTML='<i class="fas fa-trash"></i>';
        a.style.float = "right";

        //button oluştur
        const button = document.createElement('button');
        button.className = 'complete';
        button.textContent="+";
        button.style.float = "right";

        button.addEventListener('click', function() {
            li.classList.toggle('checked');
            if(button.textContent == "+"){
                button.textContent = "X";
                button.style.backgroundColor = "indianred";
            }else{
                button.textContent = "+";
                button.style.backgroundColor = "blueviolet"
            }
            
          });

        //a'yı li'ye ekle
        li.appendChild(a);

        li.appendChild(button);

        //li'yi ul'ye ekle
        taskList.appendChild(li); 
}

// yeni görev ekle
function addNewItem(e){

    if(input.value !== ''){ // input alanı boş değilse devam et.

        createItem(input.value); // input'a giriş yapıldığında li'ye bu değeri bas

        //input'u temizle
        input.value='';
    
        e.preventDefault(); // forma tıklandığında submit olmasını engelledim. Sayfa yenilenmez.
    }else{
        alert('Lütfen Görev Giriniz!')
        e.preventDefault() //alert'e tıklandığında form tekrar submit olmasın diye.
    }
}
 
//tek görevi sil. Bubblingden yararlandım
function deleteItem(e){
    if(e.target.className === 'fas fa-trash'){
        if(confirm('Görev Silinsin mi?')){ // tüm class'ı bu isimli ise
            e.target.parentElement.parentElement.remove(); //i'nin iki parent üstü li elemanı       
        } 
    }
    e.preventDefault()
}

//tüm görevleri sil. Bubblingden yararlandım
function deleteAllItems(e){
    if(confirm('Tüm Görevler Silinsin mi?')){
        while(taskList.firstChild){ // ul'nin ilk child'ı olduğu sürece
            taskList.removeChild(taskList.firstChild); // ul'nin ilk child'ını kaldır
            
        }
    e.preventDefault(); // a tag'inin refresh olmasını engelledim. 
    }
}


