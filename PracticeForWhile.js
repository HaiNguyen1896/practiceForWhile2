let bai = parseInt(prompt("Nhập bài tập"));
switch (bai){
    //Bài 1: Sử dụng vòng lặp để đếm từ 1 đến 100. Khi số là 99, hiển thị hộp thoại thông báo là đã hoàn thành.
    case 1:
        for (let i = 1; i<100;i++){
            if(i==99){
                alert("Số hiện tại là "+i+", chương trình hoàn thành");
            }
        }
    break;
    case 2:
        let degree = parseFloat(prompt("Nhập hiện độ thời điểm hiện tại"));
        if (degree > 100){
            alert("Thời tiết quá nóng, bạn hãy giảm nhiệt độ");
        }else if(degree < 20){
            alert("Thời tiết quá lạnh, bạn hãy tăng nhiệt độ");
        }
    break;
    //Bài 3: Hiển thị ra 20 số trong dãy fibonacci đầu tiên.
    case 3:
        let number = 20;
        let f1=1;
        let f2=1;
        let f3;
        document.write("20 số đầu tiên trong dãy Fibonacci là: ");
        document.write(f1 + " ");
        document.write(f2 + " ");
        for (let i =3;i<=number;i++) {
            f3 = f1 + f2;
            f1 = f2;
            f2 = f3;
            document.write(f3 + " ");
        }
    break;
    //Bài 4: Tìm số đầu tiên trong dãy fibonacci chia hết cho 5.
    case 4:
        let f1_4=1;
        let f2_4=1;
        let f3_4;
        do {
            f3_4 = f1_4 + f2_4;
            f1_4 = f2_4;
            f2_4 = f3_4;
        }while(f3_4 % 5 != 0);
        document.write("Số bạn cần tìm là "+f3_4);
    break;
    //Bài 5: Tính tổng của 20 số đầu tiên trong dãy fibonacci.
    case 5:
        let number_5 = 20;
        let f1_5=1;
        let f2_5=1;
        let f3_5, tong = 2;
        document.write("Tổng 20 số đầu tiên trong dãy Fibonacci là: ");
        for (let j =3;j<=number_5;j++) {
            f3_5 = f1_5 + f2_5;
            tong +=f3_5;
            f1_5 = f2_5;
            f2_5 = f3_5;
        }
        document.write(tong);
    break;
    // Bài 6: Tính tổng của 30 số chia hết cho 7 đầu tiên trong các số tự nhiên.
    case 6:
        let tong_6=0;
        count_6 = 0;
        for (let i_6 =0;count_6<=30;i_6++){
            if (i_6 % 7 == 0){
                count_6++;
                tong_6=tong_6+i_6;
            }
        }
        document.write("Tổng của 30 số đầu tiên chia hết cho 7 trong các số tự nhiên là: "+tong_6);
    break;
    // Bài 7: Hãy viết một chương trình in ra các số từ 1 đến 100. Nhưng nếu số chia hết cho 3 thì in ra "Fizz", 5 thì in ra "Buzz"
    // thay vì in ra số đó. Và nếu số đó chia hết cho cả 3 và 5 thì in ra chữ "FizzBuzz".
    case 7:
        for (let i_7 =0;i_7<=100;i_7++){
            if(i_7%15==0){
                document.write("FizzBuzz"+"<br>");
            }else if(i_7%5==0){
                document.write("Buzz"+"<br>")
            }else if (i_7%3==0){
                document.write("Fizz"+"<br>");
            }else{
                document.write(i_7+"<br>");
            }
        }
    break;
    //Game đoán số
    case 8:
        let number_8 = parseInt(prompt("Nhập khoảng số mà bạn muốn đoán"))
        let nRandom = Math.floor(Math.random()*number_8);
        for (let i_8=3;i_8>=0;i_8--){
            if (i_8==0){
                alert("Bạn đã hết số lần chọn, chúc bạn may mắn lần sau!!");
                break;
            }
            let nGuess = parseInt(prompt("Bạn còn "+i_8+" lần đoán, bạn hãy nhập số bạn muốn đoán"))
            if (nGuess<nRandom){
                alert("Số bạn chọn bé hơn số cần đoán");
            } else if (nGuess>nRandom){
                alert("Số bạn chọn lớn hơn số cần đoán");
            }else{
                alert("Bạn đã đoán đúng số");
                break;
            }
        }
}