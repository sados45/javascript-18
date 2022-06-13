//KONU : JS COLLECTION______________________________


const obj = {
    name:'hasan',
    surname: 'toker',
    age:25
}

// console.log(obj.name)
// console.log(obj['surname'])

const lastName = 'surname'
console.log(obj[lastName])//brekaed notation icinde direk olarak birseyi verebilirim. dot natation da ise durum böyle degil.

//mesela;
//obj.lastName calismaz. 
obj.occupation= 'developer'//dot notation bu sekilde kendimiz özellik ekleyebiliriz. 
obj['course'] ='react'//burada da breaked notation ile react course eklemesini bu sekilde yaptik. 
//obj.age=35 //aslinda yasimiz 25ti update edip 35 dedik. bu durum saglikli degil diyor. bu sekilde update sikintili olur diyor. 
console.log(obj)

const object ={
    a:1,
    b:2
}

const object2 ={
    a:1,
    b:2
}
console.log(object == object2)//false olarak cevabimizi aldik. 


//bir objectin lengthi yani uzunlugunu nasil buluruz?

const arr=[1,2,3,4,5]
console.log(arr.length) //cevap 5

console.log(Object.keys(obj))//Object in O su büyük yazilir. cevap (5) ["name", "surname", "age", "occupation", "course"]
const objectKeys =Object.keys(obj)
// for (let i = 0; i < objectKeys.length; i++){
//     console.log(objectKeys[i])//bu sekilde yazarak keys olarak adlandirilan  ["name", "surname", "age", "occupation", "course"] bu bilgiye ulasiyoruz. 
// }


objectKeys.map((element, index) => console.log(element, index))//yukarida yazdirdigimiz gibi ayni sekilde map ile de name, surname, age... vs console a yazdirdik. yanina index de koyunca elementin index numarasini 0dan baslayarak sira sayisini veriyor. 



//keys lere nasil ulasacagimizi görduk. simdi karsisindaki value lere nasil ulasacagiz. buna bakacagiz. 

const objectValues = Object.values(obj)
console.log(objectValues); //cevap: (5) ["hasan", "toker", 35, "developer", "react"]

//map ile ise su sekilde:

objectValues.map((el) => console.log(el))//ayni cevabi map ile yazdirdik. values leri

console.log(objectValues.length)//cavip :5

//mesela valueslerde bir icerik aramasi yapacak olursak;

console.log(objectValues.includes(25)) //age:25ti. cevap true olarak bize döndü.
console.log(objectKeys.includes('name')) //true olarak cevap aldik.


//yeni birsey ekleyeceksem;

if(!obj.name){
    obj.name ='hasan'//name diye birsey yoksa bunu yani hasani yerine koy. diyoruz. 
}


//COLLECTION type  icinde map hem array hem de object olarak kullanilabilir.cok fonksiyonlu bir yapisi var simdi burada kullanacagiz.:

    const myMap = new Map([
        [1,2], ['a', 'b'], [() => console.log('a'), 'a'] //burada 1 key, 2 value. ve biz bu sekilde bir mao olusturabiliriz. map dedigimiz sey bir collection typedir. 
    ])
    console.log(myMap.size)//eger size yazarsak mapimizin uzunlugunu görüyoruz. 3 elemaninin oldugunu göruyoruz burada. yani  bu cod, tam array gibi degil tam object gibi de degil, ayri bir sey. ama islerlik acisindan arraya yada object e yapmak istediklerimizi uygulayabiliyoruz.
    

    //Clear Metodu_______________:
    // myMap.clear()
    // console.log(myMap) // bu özellikle clear yaparak icindeki elemanlari bosaltmis olduk. 
/*
    //Get Metodu:_________________________

    console.log(myMap.get(1)) //burada 1 key idi, 2 ise value. 
    console.log(myMap.get('a')) //burada 'a' key idi bize value sini yazdirdi. yani b. 


    //Delete Metodu__________:

        myMap.delete(1) //burada keyi 1 olan elemani sildik. artik myMap 2 elemanli.console cevabi Map(2) {"a" => "b", ƒ => "a"}
        console.log(myMap)

        // has ___________:
        console.log(myMap.has('a'))//a diye birsey var mi diye soruyoruz. true cevabimiz. sadece key leri bulduruyor bize value degil. ÖNEMLI...
        console.log(myMap)

        //set ile ekleme:_________________

        console.log(myMap.set(3,5)) //key 3, value si 5 olan bir element eklemeis olduk. 


        console.log(myMap.keys())// burada sadece myMap icindeki keyslerin neler oldugunu console den ögreniyoruz. 
        console.log(myMap.values())//sadece values geliyor. 
        console.log(myMap.entries())//hem keys hem de values lari getirtiyoruz. 
*/
        // for(let key of myMap.keys()) console.log(key)
        // for(let value of myMap.values()) console.log(value)
        // for(let [key, value] of myMap.entries()) console.log(key, value)
        //ayri ayri ne varsa console da gösaterme sekli. 

        //ForEach:___________________

        myMap.forEach((value, key) => console.log(key, value))

        //map neden var, conkü hem array de hem de object te yapamadiklarimizi bununla yapabiliyoruz. 




        //SET________________________: 

        //map den biraz farklidir. biraz arraya benziyor diyor. 

        const mySet = new Set()

        // const arr = [1,2,2,3,4,1,2,5,5] //burada sadece 1 tanesini yazdiriyor console icine. [1,2,3,4,5] olarak. tekrar edenleri almiyor. 
        // const newSet= new Set(arr)

        // console.log(newSet)

       mySet.add(1) //mySet icine 1 ekledik.
        mySet.add(2) //mySet icine 2 yi  ekledik.

        console.log(mySet.delete(5))//burada true döndürüyor. 1 var oldugu icin. 1 kaldirdik kisaca. ama 5 yazdigimizda 5 olmadigi icin false yazdirdi. 
        mySet.add({a:3, b:4})

        console.log(mySet.has(1)) //mySet icinde 1 var mi diye sorduk. true dedi. 
        
        console.log(mySet.size)//suslu parantezli yapisinin olmasindan dolayi, index islevini burada kullanamiyoruz. 
        console.log(mySet)

        
        // key , value yok burada 1 den fazla ayni sayiya izin vermiyor. 


        // for(let key of mySet) console.log(key)
        // for(let value of mySet) console.log(value)

        //burada key ve value olmadigi icin ayni sayilari sanki key value mis gibi yazarak veriyor. aslinda key ve value yok. 

        mySet.forEach((el) => console.log(el)) //for each i de set icinde kullanbiliyoruz. sikinti yok. 