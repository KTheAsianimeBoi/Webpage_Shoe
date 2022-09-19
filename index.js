// let pet = {
//     name: 'Gâu Đần',
//     age: 3,
//     breed:'Golden Retriever',
//     size:{
//     weight:'30kg',
//     height:'56cm'
//     }
//     }
//     // ES5
//     // var name = pet.name;
//     // var age = pet.age;
//     // var size = pet.size;
    
//     //ES6 - destructuring
//     let {name,age} = pet;
//     let {weight, height} = pet.size;
//     console.log(name, age); //Gâu Đần, 3
//     console.log(weight, height); //30kg, 56cm
    
//     let {weight: w, height: h} = pet.size;
//     console.log(w, h); //30kg, 56cm

    // const tenLop = 'React Native';
    // const soLop = 04;
    // const thongTinLopHoc = {
    //     tenLop,
    //     soLop
    // }
    // console.log(ThongTinLopHoc[tenLop]);

    const array = ["React Native","Android", "iOS"];

    for (let i in array){
        console.log(i,array[i]);
    }

    const student = { 
        hoTen: "React Native",
        lop : '04',
        diaChi: {
            tenDuong: 'LeVanSy',
            soNha: '292',
            quan: 'BinhThanh'
        }
    }

    for (let i in student){
        console.log(i, student[i]);
    }

    const listofStudents=[
        {... student, hoTen: 'NguyenVanA', lop: 'ReactNative'},
        {... student, hoTen: 'NguyenVanB', lop: 'ReactNative'},
        {... student, hoTen: 'NguyenVanC', lop: 'ReactNative'}
    ]
    for (let i of listofStudents){
        console.log(i);
    }
    //for of chỉ dùng được cho array mà thôi, nhưng mà nó không có index như là for in


    class Student{
        constructor(name, age){
            this.name = name;
            this.age = age;
        }
    }

    const student1 = new Student('Khoa',19);